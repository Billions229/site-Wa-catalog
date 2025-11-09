# Guide de Styles - wa-catalog

Ce document définit le système de design pour le site officiel wa-catalog, basé sur le [README-Site-Officiel.md](README-Site-Officiel.md).

## 1. Palette de couleurs

### Couleur principale : Vert (Primary Green)
Le vert est la couleur principale de la marque, évoquant la croissance, la confiance et l'action. Il s'inspire également de WhatsApp pour une reconnaissance immédiate.

**Valeurs Tailwind CSS personnalisées:**
\`\`\`javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#f0fdf4',   // Vert très clair (backgrounds subtils)
    100: '#dcfce7',  // Vert clair (backgrounds légers)
    200: '#bbf7d0',  // Vert pale (borders subtils)
    300: '#86efac',  // Vert moyen-clair (hover states)
    400: '#4ade80',  // Vert moyen (secondary actions)
    500: '#22c55e',  // Vert principal (#25D366 proche WhatsApp)
    600: '#16a34a',  // Vert foncé (hover primary)
    700: '#15803d',  // Vert très foncé (active states)
    800: '#166534',  // Vert profond (textes sur fond clair)
    900: '#14532d',  // Vert très profond (textes importants)
    950: '#052e16',  // Vert extrême (rarement utilisé)
  }
}
\`\`\`

### Couleur secondaire : Orange (Accent Orange)
L'orange apporte énergie, chaleur et action. Il est utilisé pour les CTA secondaires, les alertes importantes et les éléments nécessitant l'attention.

**Valeurs Tailwind CSS personnalisées:**
\`\`\`javascript
accent: {
  50: '#fff7ed',   // Orange très clair
  100: '#ffedd5',  // Orange clair
  200: '#fed7aa',  // Orange pale
  300: '#fdba74',  // Orange moyen-clair
  400: '#fb923c',  // Orange moyen
  500: '#f97316',  // Orange principal
  600: '#ea580c',  // Orange foncé
  700: '#c2410c',  // Orange très foncé
  800: '#9a3412',  // Orange profond
  900: '#7c2d12',  // Orange très profond
  950: '#431407',  // Orange extrême
}
\`\`\`

### Couleurs neutres (Gris)
Pour les textes, backgrounds et séparations.

**Valeurs Tailwind CSS standard:**
\`\`\`javascript
gray: {
  50: '#f9fafb',   // Backgrounds très clairs
  100: '#f3f4f6',  // Backgrounds clairs
  200: '#e5e7eb',  // Borders légers
  300: '#d1d5db',  // Borders moyens
  400: '#9ca3af',  // Textes désactivés
  500: '#6b7280',  // Textes secondaires
  600: '#4b5563',  // Textes tertiaires
  700: '#374151',  // Textes principaux
  800: '#1f2937',  // Textes très foncés
  900: '#111827',  // Textes extrêmes
  950: '#030712',  // Noir presque pur
}
\`\`\`

### Couleurs sémantiques

#### Succès
\`\`\`javascript
success: '#22c55e' // green-500
\`\`\`

#### Erreur
\`\`\`javascript
error: '#ef4444' // red-500 (Tailwind standard)
\`\`\`

#### Avertissement
\`\`\`javascript
warning: '#f97316' // accent-500 (orange)
\`\`\`

#### Information
\`\`\`javascript
info: '#3b82f6' // blue-500 (Tailwind standard)
\`\`\`

## 2. Typographie

### Familles de polices

**Police principale :** Inter (ou system font stack)
\`\`\`css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
\`\`\`

**Police monospace (pour code, numéros):** 'JetBrains Mono', 'Courier New', monospace

### Échelle typographique

**H1 - Titre principal (Hero)**
- Taille : `text-5xl` (3rem / 48px)
- Poids : `font-bold` (700)
- Line-height : `leading-tight` (1.25)
- Utilisation : Hero section, landing page titles
- Classe Tailwind : `text-5xl font-bold leading-tight text-gray-900`

**H2 - Titre de section**
- Taille : `text-4xl` (2.25rem / 36px)
- Poids : `font-bold` (700)
- Line-height : `leading-tight` (1.25)
- Utilisation : Sections principales
- Classe Tailwind : `text-4xl font-bold leading-tight text-gray-900`

**H3 - Sous-titre de section**
- Taille : `text-3xl` (1.875rem / 30px)
- Poids : `font-semibold` (600)
- Line-height : `leading-tight` (1.25)
- Utilisation : Sous-sections
- Classe Tailwind : `text-3xl font-semibold leading-tight text-gray-800`

**H4 - Titre de carte/bloc**
- Taille : `text-2xl` (1.5rem / 24px)
- Poids : `font-semibold` (600)
- Line-height : `leading-snug` (1.375)
- Utilisation : Cartes produits, blocs d'information
- Classe Tailwind : `text-2xl font-semibold leading-snug text-gray-800`

**H5 - Titre de liste**
- Taille : `text-xl` (1.25rem / 20px)
- Poids : `font-semibold` (600)
- Line-height : `leading-snug` (1.375)
- Utilisation : Items de navigation, listes
- Classe Tailwind : `text-xl font-semibold leading-snug text-gray-700`

**H6 - Titre mineur**
- Taille : `text-lg` (1.125rem / 18px)
- Poids : `font-medium` (500)
- Line-height : `leading-normal` (1.5)
- Utilisation : Labels, micro-titres
- Classe Tailwind : `text-lg font-medium leading-normal text-gray-700`

**Body Large - Texte important**
- Taille : `text-lg` (1.125rem / 18px)
- Poids : `font-normal` (400)
- Line-height : `leading-relaxed` (1.625)
- Utilisation : Intro, descriptions importantes
- Classe Tailwind : `text-lg leading-relaxed text-gray-700`

**Body - Texte standard**
- Taille : `text-base` (1rem / 16px)
- Poids : `font-normal` (400)
- Line-height : `leading-relaxed` (1.625)
- Utilisation : Paragraphes, contenu principal
- Classe Tailwind : `text-base leading-relaxed text-gray-700`

**Body Small - Texte secondaire**
- Taille : `text-sm` (0.875rem / 14px)
- Poids : `font-normal` (400)
- Line-height : `leading-relaxed` (1.625)
- Utilisation : Métadonnées, notes
- Classe Tailwind : `text-sm leading-relaxed text-gray-600`

**Caption - Légendes**
- Taille : `text-xs` (0.75rem / 12px)
- Poids : `font-normal` (400)
- Line-height : `leading-relaxed` (1.625)
- Utilisation : Légendes images, timestamps
- Classe Tailwind : `text-xs leading-relaxed text-gray-500`

### Hiérarchie visuelle

**Texte sur fond vert (primary-500+)**
- Couleur : `text-white`
- Poids : selon hiérarchie H1-H6, body, etc.

**Texte sur fond orange (accent-500+)**
- Couleur : `text-white`
- Poids : selon hiérarchie

**Liens**
- Couleur par défaut : `text-primary-600`
- Hover : `text-primary-700` + `underline`
- Active : `text-primary-800`
- Classe Tailwind : `text-primary-600 hover:text-primary-700 hover:underline transition-colors`

## 3. Espacements (Spacing)

Système d'espacement cohérent basé sur Tailwind (multiples de 4px).

**Échelle:**
- `0` : 0px
- `1` : 4px
- `2` : 8px
- `3` : 12px
- `4` : 16px
- `5` : 20px
- `6` : 24px
- `8` : 32px
- `10` : 40px
- `12` : 48px
- `16` : 64px
- `20` : 80px
- `24` : 96px

**Utilisation recommandée:**
- Padding sections : `py-12` à `py-24` (48px à 96px)
- Padding cartes : `p-6` (24px)
- Gap grilles : `gap-6` à `gap-8` (24px à 32px)
- Margin entre sections : `mb-12` à `mb-16` (48px à 64px)

## 4. Composants UI

### Boutons

#### Bouton Principal (CTA "Discuter avec le bot")
**Style:**
- Background : `bg-primary-500`
- Texte : `text-white`
- Padding : `px-8 py-4`
- Border radius : `rounded-lg`
- Font : `font-semibold text-lg`
- Hover : `hover:bg-primary-600`
- Active : `active:bg-primary-700`
- Shadow : `shadow-lg hover:shadow-xl`
- Transition : `transition-all duration-200`
- Focus : `focus:outline-none focus:ring-4 focus:ring-primary-300`

**Classe Tailwind complète:**
\`\`\`
bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg 
hover:bg-primary-600 active:bg-primary-700 shadow-lg hover:shadow-xl 
transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300
\`\`\`

#### Bouton Secondaire
**Style:**
- Background : `bg-accent-500`
- Texte : `text-white`
- Autres propriétés similaires au bouton principal avec couleurs accent

**Classe Tailwind:**
\`\`\`
bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg 
hover:bg-accent-600 active:bg-accent-700 shadow-lg hover:shadow-xl 
transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-accent-300
\`\`\`

#### Bouton Outline
**Style:**
- Background : `bg-transparent`
- Border : `border-2 border-primary-500`
- Texte : `text-primary-600`
- Hover : `hover:bg-primary-50`

**Classe Tailwind:**
\`\`\`
bg-transparent border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg 
font-semibold text-lg hover:bg-primary-50 hover:text-primary-700 
transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300
\`\`\`

#### Bouton Ghost (tertiaire)
**Style:**
- Background : `bg-transparent`
- Texte : `text-gray-700`
- Hover : `hover:bg-gray-100`

**Classe Tailwind:**
\`\`\`
bg-transparent text-gray-700 px-6 py-3 rounded-lg font-medium 
hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300
\`\`\`

### Cartes

#### Carte produit
**Style:**
- Background : `bg-white`
- Border : `border border-gray-200`
- Border radius : `rounded-xl`
- Padding : `p-6`
- Shadow : `shadow-md hover:shadow-lg`
- Transition : `transition-shadow duration-200`

**Classe Tailwind:**
\`\`\`
bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg 
transition-shadow duration-200
\`\`\`

#### Carte catégorie
**Style:**
- Background : `bg-gradient-to-br from-primary-50 to-primary-100`
- Border : `border border-primary-200`
- Border radius : `rounded-xl`
- Padding : `p-8`
- Hover : `hover:shadow-lg hover:scale-105`
- Transition : `transition-all duration-300`

**Classe Tailwind:**
\`\`\`
bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 
rounded-xl p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300
\`\`\`

### Badges

#### Badge Vendeur Vérifié
**Style:**
- Background : `bg-primary-100`
- Texte : `text-primary-800`
- Padding : `px-3 py-1`
- Border radius : `rounded-full`
- Font : `font-medium text-sm`
- Icon : Icône check/verified

**Classe Tailwind:**
\`\`\`
bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium text-sm
\`\`\`

#### Badge État produit
**Style Nouveau :**
\`\`\`
bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium text-xs
\`\`\`

**Style Occasion :**
\`\`\`
bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-xs
\`\`\`

### Sections

#### Hero Section
**Style:**
- Background : `bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700`
- Ou alternatif : `bg-primary-500`
- Texte : `text-white`
- Padding : `py-20 px-6`
- Centré verticalement et horizontalement

**Classe Tailwind:**
\`\`\`
bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 px-6
\`\`\`

#### Section standard
**Style:**
- Background : `bg-white` ou `bg-gray-50` (alternance)
- Padding : `py-16 px-6`
- Max width container : `max-w-7xl mx-auto`

**Classe Tailwind:**
\`\`\`
bg-white py-16 px-6 max-w-7xl mx-auto
\`\`\`

#### Section avec background coloré
**Style:**
- Background : `bg-primary-50`
- Border top : `border-t border-primary-200`
- Padding : `py-16 px-6`

**Classe Tailwind:**
\`\`\`
bg-primary-50 border-t border-primary-200 py-16 px-6 max-w-7xl mx-auto
\`\`\`

## 5. Animations et transitions

### Transitions standards
- Durée courte : `transition-all duration-150` (hover rapide)
- Durée moyenne : `transition-all duration-200` (boutons, cartes)
- Durée longue : `transition-all duration-300` (transformations complexes)

### Animations personnalisées

#### Fade In
\`\`\`css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
\`\`\`
Utilisation : `animate-fade-in` (à définir dans Tailwind config)

#### Slide Up
\`\`\`css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

#### Pulse doux (pour CTA)
\`\`\`css
@keyframes pulseSoft {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
\`\`\`

### Classes Tailwind personnalisées à ajouter
\`\`\`javascript
// tailwind.config.js
extend: {
  animation: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-out',
    'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
  }
}
\`\`\`

## 6. États et feedback

### Hover
- Opacité légère : `hover:opacity-90`
- Scale léger : `hover:scale-105`
- Shadow augmentée : `hover:shadow-lg`

### Focus
- Ring primary : `focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2`
- Accessibilité : toujours visible, contraste suffisant

### Active
- Scale down : `active:scale-95`
- Background plus foncé : `active:bg-primary-700`

### Disabled
- Opacité : `opacity-50`
- Cursor : `cursor-not-allowed`
- Pointer events : `pointer-events-none`

## 7. Grilles et layouts

### Container
- Max width : `max-w-7xl` (1280px)
- Centré : `mx-auto`
- Padding horizontal : `px-6` (mobile) → `px-8` (desktop)

### Grille catégories (responsive)
- Mobile : `grid-cols-1`
- Tablet : `grid-cols-2`
- Desktop : `grid-cols-3`
- Large : `grid-cols-4`
- Gap : `gap-6`

**Classe Tailwind:**
\`\`\`
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
\`\`\`

### Grille produits
- Mobile : `grid-cols-1`
- Tablet : `grid-cols-2`
- Desktop : `grid-cols-3`
- Large : `grid-cols-4`
- Gap : `gap-6`

## 8. Responsive breakpoints

Basé sur Tailwind standard:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 9. Accessibilité (WCAG 2.1 AA)

### Contrastes
- Texte normal sur fond clair : minimum 4.5:1
- Texte large sur fond clair : minimum 3:1
- Texte sur fond vert/orange : blanc (`text-white`) pour contraste suffisant

### Focus visible
- Tous les éléments interactifs doivent avoir un état focus visible
- Ring : `focus:ring-4 focus:ring-primary-300`

### Navigation clavier
- Ordre tab logique
- Skip links pour navigation principale

## 10. Configuration Tailwind CSS

### Fichier tailwind.config.js complet

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
\`\`\`

## 11. Exemples d'utilisation par composant

### Hero Section
\`\`\`jsx
<section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-5xl font-bold leading-tight mb-6">
      Trouve n'importe quel produit sur WhatsApp
    </h1>
    <p className="text-lg mb-8 text-primary-100">
      Dis ce que tu cherches, on te montre les vendeurs vérifiés
    </p>
    <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 shadow-lg transition-all duration-200">
      Discuter avec le bot
    </button>
  </div>
</section>
\`\`\`

### Carte catégorie
\`\`\`jsx
<div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-xl p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Électronique</h3>
  <p className="text-gray-700 mb-6">Téléphones, ordinateurs, accessoires...</p>
  <button className="bg-primary-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
    Voir les produits
  </button>
</div>
\`\`\`

### Carte produit
\`\`\`jsx
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
  <img src="..." alt="Produit" className="w-full h-48 object-cover rounded-lg mb-4" />
  <h4 className="text-xl font-semibold mb-2 text-gray-800">iPhone 13 128GB</h4>
  <p className="text-primary-600 font-bold text-lg mb-4">450 000 FCFA</p>
  <div className="flex items-center gap-2 mb-4">
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-xs">Occasion</span>
    <span className="text-sm text-gray-600">Cotonou</span>
  </div>
  <button className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
    Discuter avec le bot
  </button>
</div>
\`\`\`

---

## Notes importantes

- **Cohérence** : Respecter ce guide pour maintenir une identité visuelle cohérente
- **Accessibilité** : Toujours vérifier les contrastes et la navigation clavier
- **Performance** : Utiliser les classes Tailwind purgées en production
- **Responsive** : Tester sur mobile, tablette et desktop
- **Variations** : Si besoin de variantes, les documenter ici avant utilisation

---

**Version** : 1.0  
**Date** : 2025
**Auteur** : Équipe wa-catalog
