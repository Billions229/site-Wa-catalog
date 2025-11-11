import axios from 'axios';

const SHLINK_API_URL = 'https://vendeur.dpdns.org';
const SHLINK_API_KEY = import.meta.env.VITE_SHLINK_API_KEY;

export interface ShortUrlResponse {
  shortUrl: string;
  longUrl: string;
  shortCode: string;
  dateCreated: string;
}

export interface CreateShortUrlOptions {
  longUrl: string;
  customSlug?: string;
  title?: string;
  tags?: string[];
}

/**
 * Crée un lien court avec l'API Shlink
 */
export async function createShortUrl(options: CreateShortUrlOptions): Promise<ShortUrlResponse> {
  if (!SHLINK_API_KEY) {
    throw new Error('VITE_SHLINK_API_KEY non configurée dans les variables d\'environnement');
  }

  try {
    const response = await axios.post(
      `${SHLINK_API_URL}/rest/v3/short-urls`,
      {
        longUrl: options.longUrl,
        customSlug: options.customSlug,
        title: options.title,
        tags: options.tags || [],
      },
      {
        headers: {
          'X-API-Key': SHLINK_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Erreur lors de la création du lien court:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Erreur API Shlink: ${error.response?.data?.detail || error.message}`
      );
    }
    throw error;
  }
}

/**
 * Génère un slug personnalisé pour un vendeur
 */
export function generateVendorSlug(vendorName: string): string {
  return `avis-${vendorName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]/g, '-') // Remplace les caractères spéciaux par des tirets
    .replace(/-+/g, '-') // Supprime les tirets multiples
    .replace(/^-|-$/g, '')}`; // Supprime les tirets en début/fin
}

/**
 * Crée un lien court pour les avis d'un vendeur
 */
export async function createVendorReviewUrl(
  vendorId: string,
  vendorName: string
): Promise<ShortUrlResponse> {
  const longUrl = `${window.location.origin}/soumissions-avis?vendeur=${vendorId}&nom=${encodeURIComponent(vendorName)}`;
  const customSlug = generateVendorSlug(vendorName);
  
  return createShortUrl({
    longUrl,
    customSlug,
    title: `Donner un avis - ${vendorName}`,
    tags: ['avis', 'vendeur', vendorName.toLowerCase()],
  });
}

/**
 * Vérifie si un lien court existe déjà
 */
export async function checkShortUrlExists(shortCode: string): Promise<boolean> {
  if (!SHLINK_API_KEY) {
    return false;
  }

  try {
    const response = await axios.get(
      `${SHLINK_API_URL}/rest/v3/short-urls/${shortCode}`,
      {
        headers: {
          'X-API-Key': SHLINK_API_KEY,
        },
      }
    );
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
