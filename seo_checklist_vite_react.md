# 🎯 PLAN SEO COMPLET - React + Vite (Novembre 2025)

**Dernière mise à jour:** Novembre 2025 | Basé sur Google Algo & Core Web Vitals 2025

---

## 📊 TABLE DES MATIÈRES
1. Architecture & Configuration
2. Core Web Vitals Optimization
3. Meta Tags & Structured Data
4. Performance & Lighthouse
5. Outils de Monitoring
6. Déploiement & Monitoring
7. Checkliste Action-Rapide

---

## 🏗️ PHASE 1: ARCHITECTURE & CONFIGURATION VITE

### 1.1 Installation & Setup Fondamental

```bash
npm install react-helmet-async vite-plugin-sitemap vite-plugin-html
npm install web-vitals
npm install -D rollup-plugin-visualizer
```

### 1.2 Configuration vite.config.js

- [ ] Activer la **minification HTML/CSS/JS**
- [ ] Configurer **code splitting** pour chunks < 250KB
- [ ] Activer **compression gzip/brotli** au build
- [ ] Implémenter **dynamic imports** pour lazy loading
- [ ] Ajouter **Source Maps uniquement en dev**
- [ ] Configurer **terser** pour minification JS

```javascript
// vite.config.js exemple
export default {
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['axios', 'lodash'],
        }
      }
    },
    reportCompressedSize: true,
  }
}
```

---

## ⚡ PHASE 2: CORE WEB VITALS OPTIMIZATION (CRITIQUE!)

### 2.1 LCP - Largest Contentful Paint (< 2.5s)

**Objectif:** 75% des pages doivent charger le contenu principal en < 2.5s

#### Optimisations Images (Premier impact!)
- [ ] Convertir images en **WebP/AVIF** (sauvegarde 40-60%)
- [ ] Implémenter **lazy loading** (`loading="lazy"`)
- [ ] Ajouter `width` et `height` sur toutes les images
- [ ] Compresser avec **TinyPNG/ImageOptim**
- [ ] Utiliser **`<picture>`** avec fallbacks

```html
<!-- CORRECT -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero" width="1200" height="600" loading="eager">
</picture>
```

#### Réduire TTFB (Time to First Byte)
- [ ] Héberger sur **CDN global** (Vercel/Cloudflare)
- [ ] Configurer **cache headers** aggressifs
- [ ] Compresser réponses serveur (Gzip/Brotli)
- [ ] Objectif: TTFB < 200ms

#### Éliminer Render-Blocking Resources
- [ ] Inliner **Critical CSS** (au-dessus du pli)
- [ ] Defer/async sur scripts non-essentiels
- [ ] Précharger fonts: `<link rel="preload" as="font">`
- [ ] Utiliser `font-display: swap;`

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap; /* ✅ Affiche fallback pendant chargement */
}
```

#### SSR/SSG (Gros boost!)
- [ ] Implémenter **SSR avec Express.js** OU
- [ ] Utiliser **vite-ssg** pour static gen
- [ ] Pré-rendre pages critiques
- [ ] Gain: -500ms à -1s sur LCP

### 2.2 INP - Interaction to Next Paint (< 200ms)

**Objectif:** Page répond en < 200ms aux interactions utilisateur

#### JavaScript Optimization
- [ ] Identifier **long tasks** (> 50ms) avec DevTools
- [ ] Découper tasks longues en chunks
- [ ] Utiliser `requestIdleCallback()` pour travail non-critique
- [ ] Implémenter **Web Workers** pour CPU intensif

```javascript
// Découper task longue
async function processLongTask() {
  while (hasWork()) {
    if (navigator.scheduling.isInputPending()) {
      await new Promise(r => setTimeout(r, 0)); // Yield au browser
    }
    doSmallWork(); // Petit chunk
  }
}
```

#### React Performance
- [ ] Utiliser **React.memo()** pour composants purs
- [ ] Implémenter **Code splitting** avec `lazy()` + `Suspense`
- [ ] Éviter re-renders inutiles avec `useCallback`
- [ ] Optimiser state avec `useReducer` si complexe

```javascript
const HeavyComponent = lazy(() => import('./Heavy'));

export default function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

#### Third-party Scripts
- [ ] Charger analytics en `strategy="afterInteractive"`
- [ ] Charger non-essentiels en `strategy="lazyOnload"`
- [ ] Auditer et **supprimer scripts inutiles**
- [ ] Utiliser web workers si possible

### 2.3 CLS - Cumulative Layout Shift (< 0.1)

**Objectif:** Zéro layout shifts inattendus

#### Réserver l'Espace
- [ ] Toujours définir `width` + `height` sur images
- [ ] Pré-allouer space pour ads/widgets
- [ ] Utiliser aspect-ratio CSS

```css
/* Réserver space pour image -->
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

#### Éviter DOM Manipulation
- [ ] Ne PAS injecter contenu au-dessus du pli
- [ ] Utiliser placeholders pour contenu dynamique
- [ ] Batch DOM updates

#### Fonts & Media
- [ ] `font-display: swap` (évite FOIT)
- [ ] Précharger web fonts critiques
- [ ] Fixer dimensions vidéos/iframes

---

## 🏷️ PHASE 3: META TAGS & STRUCTURED DATA

### 3.1 Meta Tags Dynamiques (React Helmet)

- [ ] Configurer **`<title>`** unique par page (50-60 chars)
- [ ] Ajouter **`<meta name="description">`** (150-160 chars)
- [ ] Implémenter **Open Graph** pour social sharing

```javascript
import { Helmet } from 'react-helmet-async';

export default function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{product.name} | Votre Site</title>
        <meta name="description" content={product.summary} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.summary} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://yoursite.com/products/${product.id}`} />
        <link rel="canonical" href={`https://yoursite.com/products/${product.id}`} />
      </Helmet>
      {/* Contenu */}
    </>
  );
}
```

### 3.2 Schema Markup (JSON-LD)

- [ ] Ajouter **Product Schema** si e-commerce
- [ ] Ajouter **Article Schema** pour blog
- [ ] Valider avec https://validator.schema.org

```javascript
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "price": product.price,
  "priceCurrency": "USD",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount
  }
};

<Helmet>
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>
```

### 3.3 Favicons & Branding

- [ ] Créer favicon multi-formats (.ico, .png, .svg)
- [ ] Ajouter Apple touch icon
- [ ] Configurer manifest.json (PWA)

---

## 📈 PHASE 4: PERFORMANCE & LIGHTHOUSE

### 4.1 Lighthouse Targets

| Métrique | Cible | Réalité 2025 |
|----------|-------|-------------|
| LCP | < 2.5s | 45% sites le passent |
| INP | < 200ms | 28% sites le passent |
| CLS | < 0.1 | 77% sites le passent |
| Accessibility | 90+ | Critique |
| SEO Score | 95+ | Attendu |

### 4.2 Audits à Faire

- [ ] Exécuter **Lighthouse** en mode "Throttled"
- [ ] Vérifier tous les **Opportunities** rapportées
- [ ] Auditer **bundle size** (< 200KB JS idéalement)
- [ ] Tester sur **mobile 4G throttled**

```bash
# Terminal - Lighthouse CLI
npm install -g @lighthouse/cli
lhci autorun
```

### 4.3 Performance Budget

- [ ] JS bundle: < 170KB (gzipped)
- [ ] CSS: < 40KB
- [ ] Images: < 2MB total par page
- [ ] Fonts: < 1 font max (2 si absolument nécessaire)

---

## 🔍 PHASE 5: OUTILS DE MONITORING (Google + GitHub)

### 5.1 Google Search Console

- [ ] Créer compte & vérifier propriété du site
- [ ] Soumettre sitemap XML
- [ ] Monitorer **Core Web Vitals report**
- [ ] Vérifier **mobile usability issues**
- [ ] Monitorer **Indexing status**

**URL:** https://search.google.com/search-console

### 5.2 Google PageSpeed Insights

- [ ] Tester page d'accueil (mobile + desktop)
- [ ] Tester pages critiques
- [ ] Générer rapport mensuel
- [ ] Tracker LCP/INP/CLS evolution

**URL:** https://pagespeed.web.dev

### 5.3 Google Lighthouse & DevTools

```javascript
// Mesurer Core Web Vitals en production
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
getFCP(console.log);
getTTFB(console.log);

// Envoyer vers analytics
function sendMetrics(metric) {
  fetch('/api/metrics', {
    method: 'POST',
    body: JSON.stringify(metric)
  });
}

getCLS(sendMetrics);
getLCP(sendMetrics);
```

### 5.4 GitHub Actions & CI/CD

- [ ] Setup **Lighthouse CI** sur GitHub
- [ ] Configurer **performance budgets**
- [ ] Bloquer PR si régression > 10%

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: treosh/lighthouse-ci-action@v8
        with:
          configPath: './lighthouserc.json'
```

### 5.5 Analytics Setup

- [ ] Implémenter **Google Analytics 4**
- [ ] Tracker les Core Web Vitals
- [ ] Monitorer bounce rate
- [ ] Tracker conversions

---

## 🚀 PHASE 6: DÉPLOIEMENT & MONITORING

### 6.1 Hébergement Recommandé (2025)

| Plateforme | LCP Avg | Avantages |
|-----------|---------|-----------|
| Vercel | 1.2s | Edge, optimisé React, gratuit |
| Netlify | 1.4s | Excellent support, gratuit |
| Cloudflare | 1.1s | Ultra rapide, cheap |
| AWS Amplify | 1.5s | Scalable mais complexe |

### 6.2 Configuration Serveur

- [ ] Activer **HTTP/2** ou **HTTP/3**
- [ ] Configurer **GZIP + Brotli** compression
- [ ] Ajouter **cache headers** aggressifs
- [ ] Utiliser **CDN global**
- [ ] Configurer **CORS headers** correctement

### 6.3 Sitemap & Robots.txt

- [ ] Générer **sitemap.xml** automatiquement
- [ ] Soumettre à Google Search Console

```javascript
// vite.config.js
import sitemap from 'vite-plugin-sitemap'

export default {
  plugins: [
    sitemap({
      baseUrl: 'https://yoursite.com',
      dynamicRoutes: ['/blog/post-1', '/blog/post-2'],
      generateRobotsTxt: true
    })
  ]
}
```

### 6.4 Monitoring Continu

- [ ] Setup **uptime monitoring** (UptimeRobot)
- [ ] Alerts si LCP > 3s
- [ ] Alerts si downtime
- [ ] Dashboard temps réel

---

## ✅ CHECKLISTE ACTION-RAPIDE (À FAIRE EN NOVEMBRE 2025)

### SEMAINE 1: AUDIT & SETUP

- [ ] **Jour 1:** Audit Lighthouse actuel (desktop + mobile)
- [ ] **Jour 1:** Noter scores actuels LCP/INP/CLS
- [ ] **Jour 2:** Installer dependencies SEO (helmet, sitemap)
- [ ] **Jour 2:** Configurer Vite optimisations build
- [ ] **Jour 3:** Setup React Helmet pour meta tags
- [ ] **Jour 4:** Auditer images, convertir en WebP
- [ ] **Jour 5:** Mesurer bundle size actuel
- [ ] **Jour 5:** Créer performance budget

### SEMAINE 2: LCP OPTIMIZATION

- [ ] **Jour 6:** Compresser + optimiser images héros
- [ ] **Jour 7:** Implémenter lazy loading
- [ ] **Jour 8:** Précharger fonts critiques
- [ ] **Jour 9:** Inliner critical CSS
- [ ] **Jour 10:** Tester LCP improvement
- [ ] **Cible:** LCP < 2.5s

### SEMAINE 3: INP & PERFORMANCE

- [ ] **Jour 11:** Identifier long JavaScript tasks
- [ ] **Jour 12:** Code split composants lourds
- [ ] **Jour 13:** Optimiser React renderers
- [ ] **Jour 14:** Auditer third-party scripts
- [ ] **Jour 15:** Implémenter web workers si nécessaire
- [ ] **Cible:** INP < 200ms

### SEMAINE 4: CLS & POLISH

- [ ] **Jour 16:** Ajouter dimensions images
- [ ] **Jour 17:** Fixer layout shifts
- [ ] **Jour 18:** Configurer font-display
- [ ] **Jour 19:** Ajouter JSON-LD schemas
- [ ] **Jour 20:** Setup Google Search Console
- [ ] **Jour 21:** Final Lighthouse audit
- [ ] **Cible:** CLS < 0.1

### POST-NOVEMBRE: MAINTENANCE

- [ ] Monitorer Google Search Console **hebdomadairement**
- [ ] Checker PageSpeed Insights **bi-hebdodomadairement**
- [ ] Surveiller Core Web Vitals **quotidiennement** (si critique)
- [ ] Tester avant chaque release
- [ ] Mettre à jour performance budget trimestriellement

---

## 📚 RESSOURCES ESSENTIELLES 2025

| Resource | URL | Priorité |
|----------|-----|----------|
| Google Search Console | https://search.google.com/search-console | 🔴 CRITIQUE |
| PageSpeed Insights | https://pagespeed.web.dev | 🔴 CRITIQUE |
| Lighthouse | DevTools > Lighthouse | 🔴 CRITIQUE |
| Schema Validator | https://validator.schema.org | 🟡 Haut |
| Chrome UX Report | https://developer.chrome.com/docs/crux | 🟡 Haut |
| Web.dev Guide | https://web.dev/performance | 🟡 Haut |
| Vite Docs | https://vitejs.dev | 🟢 Moyen |

---

## 🎯 MÉTRIQUES À TRACKER (Dashboard)

```
Mensuel:
├─ LCP: Visé < 2.5s (75e percentile)
├─ INP: Visé < 200ms
├─ CLS: Visé < 0.1
├─ Lighthouse Score: Visé > 95
├─ Bounce Rate: Tracker évolution
└─ Organic Traffic: Tracker croissance

Hebdomadaire:
├─ PageSpeed Insights score
├─ Search Console indexing status
├─ Core Web Vitals errors
└─ Performance regressions
```

---

## ⚠️ PIÈGES À ÉVITER

❌ **Ne PAS faire:**
- Charger fonts sans `font-display: swap`
- Utiliser `loading="lazy"` sur LCP image
- Ignorer layout shifts (CLS)
- Trop de third-party scripts
- Oublier `width`/`height` sur images
- Minifier HTML/CSS excessivement
- Negliger mobile performance
- Ignorer Google Search Console

✅ **FAIRE ABSOLUMENT:**
- Tester mobile 4G throttled
- Monitorer Core Web Vitals réels (CrUX data)
- Code split agressivement
- Compresser images en WebP/AVIF
- Setup performance budgets
- Automated testing avant deploy
- Monitorer continu post-deploy

---

**Bonne chance! 🚀 Augmente ton SEO de 30-50% en respectant ce plan!**