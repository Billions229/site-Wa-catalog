import { compareDesc, parseISO } from "date-fns";
import matter from "gray-matter";
import { slug as slugify } from "github-slugger";
import { siteMetadata } from './siteMetadata';

// Fonction pour normaliser une date en chaîne ISO
function normalizeDate(date: any): string {
  if (!date) {
    return new Date().toISOString();
  }
  
  // Si c'est un objet Date
  if (date instanceof Date) {
    return date.toISOString();
  }
  
  // Si c'est une chaîne
  if (typeof date === 'string') {
    // Nettoyer la chaîne (enlever les espaces en début/fin)
    const cleanDate = date.trim();
    
    // Si c'est au format "2025-01-15 10:00:00" (avec espace), le convertir en ISO
    const dateTimeMatch = cleanDate.match(/^(\d{4}-\d{2}-\d{2})\s+(\d{1,2}:\d{2}:\d{2})$/);
    if (dateTimeMatch) {
      const datePart = dateTimeMatch[1];
      const timePart = dateTimeMatch[2];
      // S'assurer que l'heure est au format HH:MM:SS (avec padding)
      const timeParts = timePart.split(':');
      const formattedTime = timeParts.map(part => part.padStart(2, '0')).join(':');
      return `${datePart}T${formattedTime}Z`;
    }
    
    // Si c'est au format ISO avec 'T'
    if (cleanDate.includes('T')) {
      // Si c'est déjà ISO mais sans timezone, ajouter 'Z'
      if (!cleanDate.includes('Z') && !cleanDate.includes('+') && !cleanDate.match(/-\d{2}:\d{2}$/)) {
        return cleanDate + 'Z';
      }
      return cleanDate;
    }
    
    // Si c'est au format "2025-01-15" seulement (sans heure)
    const dateOnlyMatch = cleanDate.match(/^\d{4}-\d{2}-\d{2}$/);
    if (dateOnlyMatch) {
      return `${cleanDate}T00:00:00Z`;
    }
    
    // Essayer de parser avec le constructeur Date (gère beaucoup de formats)
    try {
      const parsedDate = new Date(cleanDate);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toISOString();
      }
    } catch (e) {
      // Ignorer l'erreur et continuer
    }
  }
  
  // Si c'est un nombre (timestamp)
  if (typeof date === 'number') {
    return new Date(date).toISOString();
  }
  
  // Par défaut, retourner la date actuelle
  console.warn('Date invalide, utilisation de la date actuelle:', date);
  return new Date().toISOString();
}

// Fonction pour calculer le temps de lecture (compatible navigateur)
function calculateReadingTime(text: string): { text: string; minutes: number; time: number; words: number } {
  // Nettoyer le texte : enlever le markdown, les balises HTML, etc.
  let cleanText = text
    // Enlever les blocs de code
    .replace(/```[\s\S]*?```/g, '')
    // Enlever le code inline
    .replace(/`[^`]*`/g, '')
    // Enlever les liens markdown
    .replace(/\[([^\]]*)\]\([^\)]*\)/g, '$1')
    // Enlever les images
    .replace(/!\[([^\]]*)\]\([^\)]*\)/g, '')
    // Enlever les balises HTML
    .replace(/<[^>]*>/g, '')
    // Enlever les caractères de formatage markdown
    .replace(/[#*_~`\[\]()]/g, '')
    // Enlever les lignes vides multiples
    .replace(/\n\s*\n/g, '\n')
    .trim();
  
  // Compter les mots (séparés par des espaces)
  const words = cleanText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Vitesse de lecture moyenne : 200 mots par minute
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  const time = minutes * 60 * 1000; // en millisecondes
  
  // Formater le texte
  let textResult = '';
  if (minutes < 1) {
    textResult = 'Moins de 1 min de lecture';
  } else if (minutes === 1) {
    textResult = '1 min de lecture';
  } else {
    textResult = `${minutes} min de lecture`;
  }
  
  return {
    text: textResult,
    minutes,
    time,
    words,
  };
}

// Types pour les blogs
export interface BlogFrontmatter {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  isPublished?: boolean;
  tags: string[];
  slug: string;
}

export interface Blog {
  title: string;
  description: string;
  image: {
    src: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  author: string;
  isPublished: boolean;
  tags: string[];
  slug: string;
  url: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  body: string; // Contenu MDX brut
  toc?: Array<{
    title: string;
    url: string;
    items?: Array<{
      title: string;
      url: string;
    }>;
  }>;
}

// Liste des slugs de blogs disponibles
// Cette liste peut être générée automatiquement ou maintenue manuellement
const BLOG_SLUGS = [
  'meilleurs-smartphones-benin-2025',
  'conseils-vendeur-success',
  'guide-acheteur-securite',
  'top-produits-electronique',
  'astuces-marketing-vendeurs',
  'sacs-wax-alternative-authentique-benin',
];

// Fonction pour charger le contenu d'un blog
async function loadBlogContent(slug: string): Promise<string | null> {
  try {
    // Charger depuis le dossier public
    const response = await fetch(`/content/blogs/${slug}/index.mdx`);
    if (response.ok) {
      return await response.text();
    }
    return null;
  } catch (error) {
    console.error(`Erreur lors du chargement du blog ${slug}:`, error);
    return null;
  }
}

// Cache pour les blogs
let blogsCache: Blog[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // 1 minute

// Fonction pour charger tous les blogs - version optimisée avec cache
export async function getAllBlogs(): Promise<Blog[]> {
  // Si le cache est valide, retourner les blogs du cache
  const now = Date.now();
  if (blogsCache && now - lastFetchTime < CACHE_DURATION) {
    return blogsCache;
  }
  
  try {
    const blogs: Blog[] = [];
    
    // Charger tous les blogs en séquentiel pour éviter de surcharger le navigateur
    for (const slug of BLOG_SLUGS) {
      try {
        const content = await loadBlogContent(slug);
        if (!content) continue;

        // Parser le frontmatter avec gray-matter (configuration par défaut)
        const { data, content: body } = matter(content);

        // Traiter l'image - simplifié
        const imagePath = data.image ? `/blogs/${data.image}` : '/placeholder.jpg';

        // Normaliser les dates - simplifié
        const publishedAt = normalizeDate(data.publishedAt);
        const updatedAt = normalizeDate(data.updatedAt || data.publishedAt);

        // Créer l'objet blog - simplifié
        const blog: Blog = {
          title: data.title || 'Sans titre',
          description: data.description || '',
          image: {
            src: imagePath,
            width: 1200,
            height: 630,
          },
          publishedAt,
          updatedAt,
          author: data.author || siteMetadata.author,
          isPublished: data.isPublished !== false,
          tags: Array.isArray(data.tags) ? data.tags : [],
          slug,
          url: `/blog/${slug}`,
          readingTime: calculateReadingTime(body),
          body,
        };

        if (blog.isPublished) {
          blogs.push(blog);
        }
      } catch (error) {
        console.error(`Erreur lors du traitement du blog ${slug}:`, error);
      }
    }

    // Mettre à jour le cache
    const sortedBlogs = sortBlogs(blogs);
    blogsCache = sortedBlogs;
    lastFetchTime = now;
    
    return sortedBlogs;
  } catch (error) {
    console.error("Erreur lors du chargement des blogs:", error);
    // En cas d'erreur, utiliser le cache si disponible
    return blogsCache || [];
  }
}

// Fonction pour charger un blog par son slug
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getAllBlogs();
  return blogs.find(blog => blog.slug === slug) || null;
}

// Fonction pour trier les blogs par date (plus récent en premier)
export function sortBlogs(blogs: Blog[]): Blog[] {
  return blogs
    .slice()
    .sort((a, b) => {
      try {
        // S'assurer que les dates sont valides avant de les parser
        const dateA = parseISO(a.publishedAt);
        const dateB = parseISO(b.publishedAt);
        
        // Vérifier que les dates sont valides
        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
          // Si une date est invalide, mettre les blogs invalides à la fin
          if (isNaN(dateA.getTime())) return 1;
          if (isNaN(dateB.getTime())) return -1;
        }
        
        return compareDesc(dateA, dateB);
      } catch (error) {
        console.error('Erreur lors du tri des blogs:', error);
        // En cas d'erreur, ne pas changer l'ordre
        return 0;
      }
    });
}

// Fonction pour obtenir toutes les catégories/tags
export function getBlogCategories(blogs: Blog[]): string[] {
  const categories = new Set<string>();
  blogs.forEach(blog => {
    blog.tags.forEach(tag => categories.add(tag));
  });
  return Array.from(categories).sort();
}

// Fonction pour obtenir les blogs par catégorie
export function getBlogsByCategory(blogs: Blog[], category: string): Blog[] {
  return blogs.filter(blog => 
    blog.tags.some(tag => slugify(tag) === category)
  );
}

// Fonction utilitaire pour les classes CSS
export function cx(...classNames: (string | undefined | null | false)[]): string {
  return classNames.filter(Boolean).join(" ");
}

