import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
import { useEffect, useState } from 'react';

// Déclaration globale pour gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Interface pour les métriques
interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

// Fonction pour déterminer le rating basé sur les seuils Google
function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    TTFB: { good: 800, poor: 1800 }
  };

  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Fonction pour envoyer les métriques (peut être étendue pour analytics)
function sendMetricToAnalytics(metric: WebVitalMetric) {
  // Log en développement
  if (import.meta.env.DEV) {
    console.group(`🔍 Web Vital: ${metric.name}`);
    console.log(`Value: ${metric.value}${metric.name === 'CLS' ? '' : 'ms'}`);
    console.log(`Rating: ${metric.rating}`);
    console.log(`ID: ${metric.id}`);
    console.groupEnd();
  }

  // En production, envoyer vers votre service d'analytics
  if (import.meta.env.PROD) {
    // Exemple avec Google Analytics 4
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        custom_map: {
          metric_rating: metric.rating,
          metric_delta: metric.delta
        }
      });
    }

    // Ou envoyer vers votre propre API
    fetch('/api/web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      })
    }).catch(error => {
      console.warn('Failed to send web vitals:', error);
    });
  }
}

// Fonction pour traiter les métriques
function handleMetric(metric: Metric) {
  const webVitalMetric: WebVitalMetric = {
    name: metric.name,
    value: metric.value,
    rating: getMetricRating(metric.name, metric.value),
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType || 'unknown'
  };

  sendMetricToAnalytics(webVitalMetric);
}

// Fonction principale pour initialiser le monitoring
export function initWebVitals() {
  try {
    // Mesurer toutes les Core Web Vitals
    onCLS(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Log d'initialisation
    if (import.meta.env.DEV) {
      console.log('🚀 Web Vitals monitoring initialized');
    }
  } catch (error) {
    console.warn('Failed to initialize Web Vitals:', error);
  }
}

// Fonction pour obtenir un rapport des métriques actuelles
export function getWebVitalsReport(): Promise<WebVitalMetric[]> {
  return new Promise((resolve) => {
    const metrics: WebVitalMetric[] = [];
    let collected = 0;
    const total = 4; // CLS, FCP, LCP, TTFB

    const collectMetric = (metric: Metric) => {
      metrics.push({
        name: metric.name,
        value: metric.value,
        rating: getMetricRating(metric.name, metric.value),
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType || 'unknown'
      });
      
      collected++;
      if (collected === total) {
        resolve(metrics);
      }
    };

    // Timeout après 5 secondes
    setTimeout(() => {
      if (collected < total) {
        resolve(metrics);
      }
    }, 5000);

    onCLS(collectMetric);
    onFCP(collectMetric);
    onLCP(collectMetric);
    onTTFB(collectMetric);
  });
}

// Hook React pour utiliser Web Vitals dans les composants
export function useWebVitals() {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWebVitalsReport().then((reportMetrics) => {
      setMetrics(reportMetrics);
      setIsLoading(false);
    });
  }, []);

  return { metrics, isLoading };
}

// Fonction pour afficher un résumé des performances
export function logPerformanceSummary() {
  getWebVitalsReport().then((metrics) => {
    console.group('📊 Performance Summary');
    metrics.forEach(metric => {
      const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(`${emoji} ${metric.name}: ${metric.value}${metric.name === 'CLS' ? '' : 'ms'} (${metric.rating})`);
    });
    console.groupEnd();
  });
}
