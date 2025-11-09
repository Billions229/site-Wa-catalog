import { useEffect } from 'react';
import { siteMetadata } from '@/utils/siteMetadata';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  schema?: object;
}

// Version optimisée qui ne bloque pas le thread principal
export default function SEOHead({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags,
  schema
}: SEOHeadProps) {
  const seoTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const seoDescription = description || siteMetadata.description;
  const seoImage = image ? `${siteMetadata.siteUrl}${image}` : `${siteMetadata.siteUrl}/og-image.jpg`;
  const seoUrl = url ? `${siteMetadata.siteUrl}${url}` : siteMetadata.siteUrl;

  // Mettre à jour le titre de la page de manière non-bloquante
  useEffect(() => {
    document.title = seoTitle;
  }, [seoTitle]);

  // Mettre à jour les meta tags de base de manière non-bloquante
  useEffect(() => {
    // Utiliser requestIdleCallback pour exécuter le code pendant les périodes d'inactivité
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    
    idleCallback(() => {
      // Fonction pour mettre à jour ou créer une meta tag
      const updateMetaTag = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);
        
        if (!meta) {
          meta = document.createElement('meta');
          if (name.startsWith('og:') || name.startsWith('article:')) {
            meta.setAttribute('property', name);
          } else {
            meta.setAttribute('name', name);
          }
          document.head.appendChild(meta);
        }
        
        meta.setAttribute('content', content);
      };

      // Meta tags de base
      updateMetaTag('description', seoDescription);
      updateMetaTag('og:title', seoTitle);
      updateMetaTag('og:description', seoDescription);
      updateMetaTag('og:image', seoImage);
      updateMetaTag('og:url', seoUrl);
      updateMetaTag('og:type', type);
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:title', seoTitle);
      updateMetaTag('twitter:description', seoDescription);
      updateMetaTag('twitter:image', seoImage);

      // Meta tags pour les mots-clés
      if (tags && tags.length > 0) {
        updateMetaTag('keywords', tags.join(', '));
      }

      // Meta tags spécifiques aux articles
      if (type === 'article') {
        if (publishedTime) updateMetaTag('article:published_time', publishedTime);
        if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime);
        if (author) updateMetaTag('article:author', author);
      }
    });

    // Canonical URL
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', seoUrl);

    // Schema.org JSON-LD - exécuté avec un délai pour ne pas bloquer le rendu
    if (schema) {
      // Utiliser setTimeout pour décaler l'exécution après le rendu initial
      setTimeout(() => {
        // Supprimer l'ancien script s'il existe
        const oldScript = document.querySelector('script[type="application/ld+json"]');
        if (oldScript) {
          oldScript.remove();
        }

        // Ajouter le nouveau script
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }, 100); // Délai de 100ms pour éviter de bloquer le thread principal
    }

    // Nettoyage lors du démontage
    return () => {
      // Optionnel: supprimer les meta tags spécifiques à cette page
      // Mais généralement pas nécessaire car ils seront écrasés par la prochaine page
    };
  }, [seoTitle, seoDescription, seoImage, seoUrl, type, publishedTime, modifiedTime, author, schema]);

  // Ne rien rendre dans le DOM - tout est géré via les effets
  return null;
}
