import { supabase } from './supabase';

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string | null;
  price: number;
  price_min?: number | null;
  price_max?: number | null;
  description?: string | null;
  city?: string | null;
  condition?: string | null;
  availability?: string | null;
  apercu_produit?: string | null;
  keywords?: string[] | null;
  technical_specs?: Record<string, any> | null;
  vendor_id: string;
  created_at: string;
}

// Mapping des slugs de catégories du site vers les catégories de la base de données
const CATEGORY_MAPPING: Record<string, string[]> = {
  'electronique': ['Électronique & Accessoires', 'Électronique'],
  'mode-beaute': ['Mode & Beauté', 'Mode', 'Beauté'],
  'maison-deco': ['Maison & Déco', 'Maison', 'Déco', 'Décoration'],
  'auto-moto': ['Auto & Moto', 'Auto', 'Moto', 'Automobile'],
  'alimentation': ['Alimentation', 'Nourriture'],
  'formations-cours': ['Formations & Cours', 'Formation', 'Cours', 'Éducation'],
  'livres-ebooks': ['Livres & E-books', 'Livres', 'E-books'],
  'services-divers': ['Services', 'Services Divers'],
};

/**
 * Récupère les produits d'une catégorie depuis Supabase
 */
export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  if (!supabase) {
    console.warn('Supabase non configuré, retour d\'un tableau vide');
    return [];
  }

  try {
    const categoryNames = CATEGORY_MAPPING[categorySlug] || [];
    
    if (categoryNames.length === 0) {
      console.warn(`Catégorie inconnue: ${categorySlug}`);
      return [];
    }

    // Récupérer les produits qui correspondent à l'une des catégories mappées
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .in('category', categoryNames)
      .eq('availability', 'in_stock')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Erreur inattendue lors de la récupération des produits:', error);
    return [];
  }
}

/**
 * Récupère tous les produits disponibles
 */
export async function getAllProducts(): Promise<Product[]> {
  if (!supabase) {
    console.warn('Supabase non configuré, retour d\'un tableau vide');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('availability', 'in_stock')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('Erreur lors de la récupération de tous les produits:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Erreur inattendue lors de la récupération de tous les produits:', error);
    return [];
  }
}

/**
 * Formatte le prix d'un produit pour l'affichage
 */
export function formatPrice(product: Product): string {
  if (product.price_min && product.price_max && product.price_min !== product.price_max) {
    return `${product.price_min.toLocaleString()} - ${product.price_max.toLocaleString()} FCFA`;
  }
  return `${product.price.toLocaleString()} FCFA`;
}

/**
 * Vérifie si le produit a une vidéo/GIF d'aperçu
 */
export function hasPreviewMedia(product: Product): boolean {
  return !!product.apercu_produit;
}

/**
 * Détermine si l'aperçu est une vidéo ou un GIF
 */
export function getMediaType(url: string | null): 'video' | 'gif' | 'image' | null {
  if (!url) return null;
  
  if (url.endsWith('.mp4') || url.endsWith('.webm') || url.includes('video/upload')) {
    return 'video';
  }
  if (url.endsWith('.gif')) {
    return 'gif';
  }
  return 'image';
}
