import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Les variables d\'environnement VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY ne sont pas définies. La fonctionnalité Supabase sera désactivée.');
    return null;
  }
  
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
};

// Lazy initialization - ne crée le client que si les variables sont définies
export const supabase = (() => {
  try {
    return getSupabaseClient();
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation de Supabase:', error);
    return null;
  }
})();

export interface Vendor {
  id: string;
  name: string;
  avatar_url: string | null;
  location: string | null;
  verified: boolean;
  whatsapp: string | null;
  created_at: string;
}

export interface Review {
  id: string;
  vendor_id: string;
  author_name: string;
  category: string;
  rating_global: number;
  rating_response_time: string;
  rating_courtesy: number;
  content_text: string | null;
  content_audio_url: string | null;
  content_video_url: string | null;
  content_image_urls: string[] | null;
  helpful_yes: number;
  helpful_no: number;
  verified_purchase: boolean;
  created_at: string;
  vendors?: Vendor;
}

export const CATEGORIES = [
  { value: 'Électronique', label: '📱 Électronique', icon: '📱' },
  { value: 'Mode', label: '👗 Mode', icon: '👗' },
  { value: 'Chaussures', label: '👟 Chaussures', icon: '👟' },
  { value: 'Maison', label: '🏠 Maison', icon: '🏠' },
  { value: 'Auto', label: '🚗 Auto', icon: '🚗' },
  { value: 'Alimentation', label: '🍔 Alimentation', icon: '🍔' },
  { value: 'Services', label: '🔧 Services', icon: '🔧' },
  { value: 'Formations', label: '📚 Formations', icon: '📚' },
  { value: 'Livres', label: '📖 Livres', icon: '📖' },
  { value: 'Autre', label: '🔹 Autre', icon: '🔹' },
];

export const RESPONSE_TIMES = [
  { value: '⚡ Moins d\'1h', label: '⚡ Moins d\'1h' },
  { value: '🚀 1-2h', label: '🚀 1-2h' },
  { value: '⏰ 2-6h', label: '⏰ 2-6h' },
  { value: '⌛ 6-24h', label: '⌛ 6-24h' },
  { value: '😴 Plus de 24h', label: '😴 Plus de 24h' },
];

export const COURTESY_RATINGS = [
  { value: 5, label: '😍 Excellent', description: 'Très courtois et professionnel' },
  { value: 4, label: '😊 Bon', description: 'Courtois et rapide' },
  { value: 3, label: '😐 Moyen', description: 'Correct mais impersonnel' },
  { value: 2, label: '😕 Mauvais', description: 'Peu courtois ou lent' },
  { value: 1, label: '😞 Très mauvais', description: 'Impoli ou non-réactif' },
];

