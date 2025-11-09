# Guide Complet : Implémenter un Compteur de Vues avec Supabase

Ce guide vous explique comment implémenter un vrai compteur de vues pour les articles du blog en utilisant Supabase.

## 📋 Table des Matières

1. [Prérequis](#prérequis)
2. [Création de la Table dans Supabase](#création-de-la-table-dans-supabase)
3. [Configuration des Policies (RLS)](#configuration-des-policies-rls)
4. [Création des Fonctions Supabase](#création-des-fonctions-supabase)
5. [Installation des Dépendances](#installation-des-dépendances)
6. [Configuration du Client Supabase](#configuration-du-client-supabase)
7. [Création du Hook React](#création-du-hook-react)
8. [Intégration dans BlogDetailPage](#intégration-dans-blogdetailpage)
9. [Mise à Jour de BlogDetails](#mise-à-jour-de-blogdetails)
10. [Tests et Vérification](#tests-et-vérification)

---

## 1. Prérequis

- Un compte Supabase créé
- Un projet Supabase configuré
- Les clés API de votre projet Supabase (URL et anon key)
- Accès à la console Supabase

---

## 2. Création de la Table dans Supabase

### Étape 1 : Accéder à l'éditeur SQL

1. Connectez-vous à votre projet Supabase
2. Allez dans **SQL Editor** dans la barre latérale
3. Cliquez sur **New Query**

### Étape 2 : Créer la Table `blog_views`

Exécutez cette requête SQL :

```sql
-- Créer la table pour stocker les vues des articles
CREATE TABLE IF NOT EXISTS blog_views (
  id BIGSERIAL PRIMARY KEY,
  blog_slug TEXT NOT NULL,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(blog_slug)
);

-- Créer un index pour améliorer les performances de recherche
CREATE INDEX IF NOT EXISTS idx_blog_views_slug ON blog_views(blog_slug);

-- Créer une fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Créer un trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER update_blog_views_updated_at BEFORE UPDATE
    ON blog_views FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insérer les articles existants avec 0 vues
-- (Remplacer par vos slugs d'articles)
INSERT INTO blog_views (blog_slug, view_count)
VALUES 
  ('meilleurs-smartphones-benin-2025', 0),
  ('conseils-vendeur-success', 0),
  ('guide-acheteur-securite', 0),
  ('top-produits-electronique', 0),
  ('astuces-marketing-vendeurs', 0)
ON CONFLICT (blog_slug) DO NOTHING;
```

### Étape 3 : Vérifier la Table

1. Allez dans **Table Editor**
2. Vérifiez que la table `blog_views` est créée avec les colonnes :
   - `id` (bigserial, primary key)
   - `blog_slug` (text, unique)
   - `view_count` (integer, default 0)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

---

## 3. Configuration des Policies (RLS)

### Étape 1 : Activer Row Level Security (RLS)

```sql
-- Activer RLS sur la table
ALTER TABLE blog_views ENABLE ROW LEVEL SECURITY;
```

### Étape 2 : Créer les Policies

```sql
-- Policy pour permettre la lecture à tous (public)
CREATE POLICY "Allow public read access"
ON blog_views
FOR SELECT
TO public
USING (true);

-- Policy pour permettre l'insertion à tous (pour créer de nouveaux compteurs)
CREATE POLICY "Allow public insert"
ON blog_views
FOR INSERT
TO public
WITH CHECK (true);

-- Policy pour permettre la mise à jour à tous (pour incrémenter les vues)
CREATE POLICY "Allow public update"
ON blog_views
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);
```

**Alternative (plus sécurisée) :** Si vous voulez limiter les mises à jour, vous pouvez créer une fonction spécifique (voir section 4).

---

## 4. Création des Fonctions Supabase

### Option A : Fonction pour Incrémenter les Vues (Recommandée)

Cette approche est plus sécurisée et évite les problèmes de race condition :

```sql
-- Fonction pour incrémenter les vues d'un article
CREATE OR REPLACE FUNCTION increment_blog_view(blog_slug_param TEXT)
RETURNS INTEGER AS $$
DECLARE
  current_count INTEGER;
BEGIN
  -- Insérer ou mettre à jour le compteur
  INSERT INTO blog_views (blog_slug, view_count)
  VALUES (blog_slug_param, 1)
  ON CONFLICT (blog_slug)
  DO UPDATE SET view_count = blog_views.view_count + 1
  RETURNING view_count INTO current_count;
  
  RETURN current_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Donner les permissions d'exécution à tous
GRANT EXECUTE ON FUNCTION increment_blog_view(TEXT) TO public;
```

### Option B : Fonction pour Obtenir les Vues

```sql
-- Fonction pour obtenir le nombre de vues d'un article
CREATE OR REPLACE FUNCTION get_blog_views(blog_slug_param TEXT)
RETURNS INTEGER AS $$
DECLARE
  views INTEGER;
BEGIN
  SELECT COALESCE(view_count, 0) INTO views
  FROM blog_views
  WHERE blog_slug = blog_slug_param;
  
  RETURN COALESCE(views, 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Donner les permissions d'exécution à tous
GRANT EXECUTE ON FUNCTION get_blog_views(TEXT) TO public;
```

---

## 5. Installation des Dépendances

Votre projet utilise déjà `@supabase/supabase-js`. Vérifiez qu'il est installé :

```bash
npm install @supabase/supabase-js
```

---

## 6. Configuration du Client Supabase

### Étape 1 : Vérifier le fichier de configuration

Votre projet a déjà un fichier `src/lib/supabase.ts` avec la fonction `getSupabaseClient()`. 

**Note :** Le hook `useBlogViews` utilise déjà cette fonction, donc aucune modification n'est nécessaire ici.

### Étape 2 : Ajouter les Variables d'Environnement

Créez ou modifiez `.env.local` à la racine du projet :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre_anon_key
```

**Pour trouver vos clés :**
1. Allez dans votre projet Supabase
2. Cliquez sur **Settings** (⚙️)
3. Allez dans **API**
4. Copiez l'**URL** et l'**anon public** key

**Important :** Redémarrez votre serveur de développement après avoir ajouté les variables d'environnement :
```bash
npm run dev
```

### Étape 3 : Vérifier `.gitignore`

Assurez-vous que `.env.local` est dans votre `.gitignore` (normalement déjà présent) :

```
.env.local
.env*.local
```

---

## 7. Création du Hook React

Le hook `src/hooks/useBlogViews.ts` a déjà été créé et utilise votre configuration Supabase existante.

```typescript
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface UseBlogViewsResult {
  viewCount: number;
  isLoading: boolean;
  error: Error | null;
  incrementView: () => Promise<void>;
}

export function useBlogViews(blogSlug: string): UseBlogViewsResult {
  const [viewCount, setViewCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Charger le nombre de vues initial
  useEffect(() => {
    const loadViewCount = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Option 1 : Utiliser la fonction Supabase
        const { data, error: functionError } = await supabase.rpc('get_blog_views', {
          blog_slug_param: blogSlug,
        });

        if (functionError) {
          // Fallback : Requête directe
          const { data: directData, error: directError } = await supabase
            .from('blog_views')
            .select('view_count')
            .eq('blog_slug', blogSlug)
            .single();

          if (directError) {
            // Si l'article n'existe pas, initialiser à 0
            if (directError.code === 'PGRST116') {
              setViewCount(0);
              return;
            }
            throw directError;
          }

          setViewCount(directData?.view_count || 0);
          return;
        }

        setViewCount(data || 0);
      } catch (err) {
        console.error('Erreur lors du chargement des vues:', err);
        setError(err instanceof Error ? err : new Error('Erreur inconnue'));
        setViewCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    if (blogSlug) {
      loadViewCount();
    }
  }, [blogSlug]);

  // Fonction pour incrémenter les vues
  const incrementView = async () => {
    try {
      setError(null);

      // Option 1 : Utiliser la fonction Supabase (recommandée)
      const { data, error: functionError } = await supabase.rpc('increment_blog_view', {
        blog_slug_param: blogSlug,
      });

      if (functionError) {
        // Fallback : Requête directe avec upsert
        const { data: directData, error: directError } = await supabase
          .from('blog_views')
          .upsert(
            {
              blog_slug: blogSlug,
              view_count: 1,
            },
            {
              onConflict: 'blog_slug',
            }
          )
          .select()
          .single();

        if (directError) {
          // Si l'upsert échoue, essayer une mise à jour incrémentale
          const { data: updateData, error: updateError } = await supabase
            .from('blog_views')
            .update({ view_count: viewCount + 1 })
            .eq('blog_slug', blogSlug)
            .select()
            .single();

          if (updateError) {
            throw updateError;
          }

          setViewCount(updateData.view_count);
          return;
        }

        setViewCount(directData?.view_count || 1);
        return;
      }

      // Mettre à jour le compteur local
      setViewCount(data || viewCount + 1);
    } catch (err) {
      console.error('Erreur lors de l\'incrémentation des vues:', err);
      setError(err instanceof Error ? err : new Error('Erreur inconnue'));
      // Ne pas mettre à jour le compteur en cas d'erreur pour éviter les doublons
    }
  };

  return {
    viewCount,
    isLoading,
    error,
    incrementView,
  };
}
```

---

## 8. Intégration dans BlogDetailPage

Le fichier `src/pages/BlogDetailPage.tsx` a déjà été mis à jour pour utiliser le hook `useBlogViews`.

```typescript
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug } from "@/utils/blogUtils";
import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Blog/Tag";
import TableOfContents from "@/components/Blog/TableOfContents";
import { slug as slugify } from "github-slugger";
import { generateTOC } from "@/utils/tocUtils";
import { useBlogViews } from "@/hooks/useBlogViews";
import type { Blog } from "@/utils/blogUtils";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Utiliser le hook pour les vues
  const { viewCount, isLoading: viewsLoading, incrementView } = useBlogViews(slug || "");

  useEffect(() => {
    // Scroll vers le haut lors du chargement de la page
    window.scrollTo(0, 0);

    const loadBlog = async () => {
      if (!slug) {
        navigate("/blog");
        return;
      }

      try {
        const blogData = await getBlogBySlug(slug);
        if (!blogData) {
          navigate("/blog");
          return;
        }
        setBlog(blogData);
        
        // Incrémenter les vues quand l'article est chargé
        // Utiliser un petit délai pour s'assurer que la page est bien chargée
        setTimeout(() => {
          incrementView();
        }, 1000);
        
        // Scroll vers le haut après le chargement
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Erreur lors du chargement du blog:", error);
        navigate("/blog");
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug, navigate, incrementView]);

  // ... reste du code ...

  if (!blog) {
    return null;
  }

  return (
    <article className="min-h-screen">
      {/* ... Hero Section ... */}

      {/* Blog Details avec le vrai compteur de vues */}
      <BlogDetails blog={blog} slug={slug || ""} viewCount={viewCount} />

      {/* ... Content with TOC ... */}
    </article>
  );
}
```

---

## 9. Mise à Jour de BlogDetails

Modifiez `src/components/Blog/BlogDetails.tsx` :

```typescript
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { slug } from "github-slugger";
import { Eye, Clock } from "lucide-react";
import type { Blog } from "@/utils/blogUtils";

interface BlogDetailsProps {
  blog: Blog;
  slug: string;
  viewCount?: number; // Ajouter le viewCount en prop
}

const BlogDetails = ({ blog, slug: blogSlug, viewCount = 0 }: BlogDetailsProps) => {
  return (
    <div className="px-4 md:px-10 bg-accent dark:bg-accentDark text-dark dark:text-dark py-3 flex items-center justify-around flex-wrap text-base sm:text-lg font-medium mx-5 md:mx-10 rounded-lg shadow-md">
      <time className="m-2 flex items-center gap-2 text-dark dark:text-dark">
        <span>{format(parseISO(blog.publishedAt), "d MMMM yyyy", { locale: fr })}</span>
      </time>
      <div className="m-2 flex items-center gap-2 text-dark dark:text-dark">
        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{viewCount.toLocaleString()} vues</span>
      </div>
      <div className="m-2 flex items-center gap-2 text-dark dark:text-dark">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{blog.readingTime.text}</span>
      </div>
      <Link 
        to={`/blog?tag=${slug(blog.tags[0])}`} 
        className="m-2 hover:underline font-semibold text-dark dark:text-dark"
      >
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
```

---

## 10. Tests et Vérification

### Test 1 : Vérifier la Connexion

```typescript
// Dans votre console navigateur
import { supabase } from '@/lib/supabase';

// Tester la connexion
const { data, error } = await supabase.from('blog_views').select('*').limit(1);
console.log('Connexion:', data, error);
```

### Test 2 : Tester l'Incrémentation

1. Ouvrez un article du blog
2. Vérifiez dans la console Supabase que les vues sont incrémentées
3. Rafraîchissez la page et vérifiez que le compteur persiste

### Test 3 : Vérifier les Permissions

1. Testez en mode navigation privée (sans authentification)
2. Vérifiez que les vues sont toujours comptabilisées

---

## 🎯 Optimisations Supplémentaires

### 1. Prévenir les Doublons (Session Storage)

Pour éviter de compter plusieurs fois la même visite dans la même session :

```typescript
// Dans useBlogViews.ts
const incrementView = async () => {
  // Vérifier si la vue a déjà été comptée dans cette session
  const viewKey = `blog_view_${blogSlug}`;
  const hasViewed = sessionStorage.getItem(viewKey);
  
  if (hasViewed) {
    return; // Déjà compté dans cette session
  }

  // Marquer comme vu
  sessionStorage.setItem(viewKey, 'true');

  // Incrémenter les vues
  // ... reste du code ...
};
```

### 2. Debounce pour les Rapid Refresh

```typescript
// Ajouter un debounce pour éviter les appels trop fréquents
let incrementTimeout: NodeJS.Timeout;

const incrementView = async () => {
  clearTimeout(incrementTimeout);
  incrementTimeout = setTimeout(async () => {
    // ... code d'incrémentation ...
  }, 500);
};
```

### 3. Analytics Avancés

Pour des analytics plus avancées, vous pouvez ajouter :
- Date/heure de la vue
- Adresse IP (anonymisée)
- User Agent
- Referrer

---

## 📝 Résumé

1. ✅ Table `blog_views` créée dans Supabase
2. ✅ RLS policies configurées
3. ✅ Fonctions SQL créées pour incrémenter/obtenir les vues
4. ✅ Client Supabase configuré
5. ✅ Hook React `useBlogViews` créé
6. ✅ Intégration dans `BlogDetailPage`
7. ✅ `BlogDetails` mis à jour pour afficher les vraies vues

Votre compteur de vues est maintenant fonctionnel ! 🎉

