# 🚀 Guide de Démarrage Rapide - Blog

## 📋 Prérequis
- Node.js installé
- Toutes les dépendances installées (`npm install`)

## 🎯 Démarrage Rapide

### 1. Lancer le Serveur de Développement
```bash
npm run dev
```
Le script copie automatiquement les fichiers MDX dans `public/content/blogs/` avant de lancer le serveur.

### 2. Accéder aux Pages
- **Page Blog** : http://localhost:5173/blog
- **Page d'Accueil** : http://localhost:5173/ (avec section "Nos articles récents")

## 📝 Ajouter un Nouveau Blog

### Étape 1 : Créer le Fichier MDX
1. Créer un nouveau dossier dans `content/blogs/[slug]/`
2. Créer un fichier `index.mdx` avec le contenu :

```mdx
---
title: "Titre de l'article"
description: "Description de l'article"
image: nom-image.jpg
publishedAt: 2024-01-01 12:00:00
updatedAt: 2024-01-01 12:00:00
author: "Auteur"
isPublished: true
tags:
- tag1
- tag2
slug: slug-de-l-article
---

Contenu de l'article en Markdown...
```

### Étape 2 : Ajouter l'Image
1. Placer l'image dans `public/blogs/nom-image.jpg`
2. Vérifier que le nom correspond au champ `image` dans le frontmatter

### Étape 3 : Ajouter le Slug
1. Ouvrir `src/utils/blogUtils.ts`
2. Ajouter le slug dans la liste `BLOG_SLUGS` :

```typescript
const BLOG_SLUGS = [
  // ... autres slugs
  'votre-nouveau-slug',
];
```

### Étape 4 : Copier les Fichiers
```bash
npm run copy-blogs
```
Ou relancer le serveur de développement (`npm run dev`) qui copie automatiquement.

### Étape 5 : Vérifier
1. Aller sur http://localhost:5173/blog
2. Vérifier que le nouveau blog apparaît

## 🔧 Personnalisation

### Changer les Métadonnées du Site
Modifier `src/utils/siteMetadata.ts` :
```typescript
export const siteMetadata = {
  title: 'Votre Titre',
  author: 'Votre Nom',
  // ... autres métadonnées
};
```

### Changer les Couleurs
Modifier `tailwind.config.js` :
```javascript
colors: {
  accent: "#votre-couleur",
  accentDark: "#votre-couleur-dark",
  // ...
}
```

### Changer les Styles
Modifier `src/index.css` pour les styles personnalisés.

## 📚 Structure des Fichiers

```
content/blogs/              # Fichiers source MDX
  └── [slug]/
      └── index.mdx

public/
  ├── blogs/                # Images des blogs
  └── content/blogs/        # Fichiers MDX copiés (pour le chargement)

src/
  ├── components/Blog/      # Composants du blog
  ├── pages/                # Pages (BlogPage, BlogDetailPage)
  └── utils/                # Utilitaires (blogUtils, siteMetadata)
```

## 🐛 Dépannage

### Les blogs ne s'affichent pas
1. Vérifier que les fichiers sont dans `public/content/blogs/`
2. Exécuter `npm run copy-blogs`
3. Vérifier que le slug est dans `BLOG_SLUGS` dans `blogUtils.ts`

### Les images ne s'affichent pas
1. Vérifier que les images sont dans `public/blogs/`
2. Vérifier que le nom de l'image correspond au frontmatter
3. Vérifier le chemin dans le frontmatter

### Erreurs de chargement
1. Vérifier la console du navigateur
2. Vérifier que le serveur de développement tourne
3. Vérifier que les fichiers MDX sont valides

## 📖 Documentation Complète

- **Plan d'intégration** : `PLAN_INTEGRATION_BLOG.md`
- **Résumé complet** : `BLOG_INTEGRATION_COMPLETE.md`

## ✅ Checklist

Avant de commencer :
- [ ] Dépendances installées (`npm install`)
- [ ] Fichiers MDX dans `content/blogs/`
- [ ] Images dans `public/blogs/`
- [ ] Script de copie exécuté (`npm run copy-blogs`)

Pour ajouter un blog :
- [ ] Fichier MDX créé dans `content/blogs/[slug]/index.mdx`
- [ ] Image ajoutée dans `public/blogs/`
- [ ] Slug ajouté dans `BLOG_SLUGS`
- [ ] Fichiers copiés (`npm run copy-blogs`)
- [ ] Blog vérifié sur `/blog`

---

**Bon développement ! 🎉**

