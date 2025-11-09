import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import sitemap from 'vite-plugin-sitemap'
import { visualizer } from 'rollup-plugin-visualizer'

// URLs statiques du site
const staticRoutes = [
  '/',
  '/blog',
  '/categories',
  '/comment-ca-marche',
  '/avis-client',
  '/aide',
  '/aide/faq',
  '/aide/securite',
  '/contact',
  '/devenir-vendeur'
];

// URLs dynamiques des articles de blog
const blogRoutes = [
  '/blog/meilleurs-smartphones-benin-2025',
  '/blog/conseils-vendeur-success',
  '/blog/guide-acheteur-securite',
  '/blog/top-produits-electronique',
  '/blog/astuces-marketing-vendeurs'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Inclure les polyfills nécessaires
      include: ['util', 'stream', 'buffer'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
    // Génération automatique du sitemap
    sitemap({
      hostname: 'https://wa-catalogue.com',
      dynamicRoutes: [...staticRoutes, ...blogRoutes],
      generateRobotsTxt: true
    }),
    // Analyseur de bundle (seulement en build)
    ...(process.env.ANALYZE ? [visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    // Servir les fichiers du dossier content comme des fichiers statiques
    fs: {
      allow: ['..'],
    },
  },
  publicDir: 'public',
  // Configurer pour servir les fichiers MDX
  assetsInclude: ['**/*.mdx'],
  // Optimisations de build pour SEO et performance
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Code splitting pour optimiser le chargement
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react', '@radix-ui/react-slot'],
          blog: ['@mdx-js/react', 'gray-matter', 'github-slugger'],
          supabase: ['@supabase/supabase-js']
        }
      }
    },
    // Performance budgets
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    sourcemap: false // Pas de sourcemaps en production pour réduire la taille
  }
})
