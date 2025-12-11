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
// Mapping des slugs de catégories du site vers les catégories de la base de données
// Les valeurs doivent correspondre EXACTEMENT au texte dans la colonne 'category' de la BDD
const CATEGORY_MAPPING: Record<string, string[]> = {
  'electronique': ['ÉLECTRONIQUE & ACCESSOIRES', 'Électronique & Accessoires', 'Electronique'],
  'mode-accessoires': ['MODE & ACCESSOIRES', 'Mode & Accessoires', 'Mode'],
  'sports-fitness': ['SPORTS & FITNESS', 'Sports & Fitness', 'Sport'],
  'maison-decoration': ['MAISON & DÉCORATION', 'Maison & Décoration', 'Maison', 'Décoration'],
  'animaux': ['ANIMAUX DE COMPAGNIE', 'Animaux de Compagnie', 'Animaux'],
  'alimentation': ['ALIMENTATION & BOISSONS', 'Alimentation & Boissons', 'Alimentation'],
  'sante-bien-etre': ['SANTÉ & BIEN-ÊTRE', 'Santé & Bien-être', 'Santé', 'Bien-être'],
  'culture-medias': ['CULTURE & MÉDIAS', 'Culture & Médias', 'Culture'],
  'jeux-loisirs': ['JEUX & LOISIRS', 'Jeux & Loisirs', 'Jeux'],
  'formations': ['FORMATIONS & APPRENTISSAGE', 'Formations & Apprentissage', 'Formation'],
  'tourisme': ['TOURISME & SERVICES', 'Tourisme & Services', 'Tourisme'],
  'auto-moto': ['AUTO & MOTO', 'Auto & Moto', 'Auto', 'Moto'],
  'maison-intelligente': ['MAISON INTELLIGENTE & DOMOTIQUE', 'Maison Intelligente', 'Domotique'],
  'bricolage': ['BRICOLAGE & OUTILLAGE', 'Bricolage & Outillage', 'Bricolage'],
  'art-artisanat': ['ART & ARTISANAT', 'Art & Artisanat', 'Art', 'Artisanat'],
  'pro': ['VÊTEMENTS & ACCESSOIRES PROFESSIONNELS', 'Vêtements Professionnels', 'Pro'],
  'eco-responsable': ['PRODUITS ÉCO-RESPONSABLES & OCCASION', 'Éco-responsable', 'Occasion'],
  'cadeaux': ['CADEAUX & ARTICLES PERSONNALISÉS', 'Cadeaux & Articles Personnalisés', 'Cadeaux'],
  'bebe-maternite': ['PRODUITS BÉBÉ & MATERNITÉ', 'Produits Bébé & Maternité', 'Bébé'],
  'luxe': ['LUXE & ARTICLES DE PRESTIGE', 'Luxe & Articles de Prestige', 'Luxe'],
  'services': ['SERVICES & RÉPARATIONS', 'Services & Réparations', 'Services'],
  'numerique': ['PRODUITS NUMÉRIQUES & DÉMATÉRIALISÉS', 'Produits Numériques', 'Numérique'],
};

/**
 * Récupère les produits d'une catégorie depuis Supabase avec informations vendeur
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

    // Récupérer les produits (sans informations vendeur pour l'instant)
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
 * Récupère tous les produits disponibles avec informations vendeur
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
