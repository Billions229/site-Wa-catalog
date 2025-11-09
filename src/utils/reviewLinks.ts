/**
 * Utilitaires pour la génération de liens personnalisés d'avis
 */

/**
 * Génère un lien personnalisé pour demander un avis à un client
 * @param vendorId - L'ID du vendeur
 * @param vendorName - Le nom du vendeur (optionnel, pour affichage)
 * @param baseUrl - URL de base (optionnel, utilise window.location.origin par défaut)
 * @returns Le lien personnalisé
 */
export function generateReviewLink(vendorId: string, vendorName?: string, baseUrl?: string): string {
  const origin = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  const reviewPageUrl = `${origin}/soumissions-avis`;
  const url = new URL(reviewPageUrl);
  url.searchParams.set('vendeur', vendorId);
  if (vendorName) {
    url.searchParams.set('nom', encodeURIComponent(vendorName));
  }
  return url.toString();
}

/**
 * Récupère l'ID du vendeur depuis les paramètres d'URL
 * @returns L'ID du vendeur ou null
 */
export function getVendorIdFromUrl(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('vendeur') || urlParams.get('vendor') || null;
}

/**
 * Récupère le nom du vendeur depuis les paramètres d'URL
 * @returns Le nom du vendeur ou null
 */
export function getVendorNameFromUrl(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('nom') || urlParams.get('name');
  return name ? decodeURIComponent(name) : null;
}

/**
 * Copie un texte dans le presse-papiers
 * @param text - Le texte à copier
 * @returns Promise qui se résout quand la copie est terminée
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback pour les navigateurs plus anciens
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (err) {
        textArea.remove();
        return false;
      }
    }
  } catch (err) {
    console.error('Erreur lors de la copie:', err);
    return false;
  }
}

