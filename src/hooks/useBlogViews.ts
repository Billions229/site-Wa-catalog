import { useState, useEffect, useRef } from 'react';
import { getSupabaseClient } from '@/lib/supabase';

interface UseBlogViewsResult {
  viewCount: number;
  isLoading: boolean;
  error: Error | null;
  incrementView: () => Promise<void>;
}

// Cache global pour éviter de refaire des requêtes inutiles
const viewCountCache: Record<string, number> = {};

export function useBlogViews(blogSlug: string): UseBlogViewsResult {
  const [viewCount, setViewCount] = useState<number>(viewCountCache[blogSlug] || 0);
  const [isLoading, setIsLoading] = useState<boolean>(!viewCountCache[blogSlug]);
  const [error, setError] = useState<Error | null>(null);
  const isInitialMount = useRef(true);
  const requestInProgress = useRef(false);

  // Charger le nombre de vues initial - avec optimisations
  useEffect(() => {
    // Si on a déjà le compte en cache, on évite la requête
    if (viewCountCache[blogSlug] !== undefined) {
      setViewCount(viewCountCache[blogSlug]);
      setIsLoading(false);
      return;
    }

    // Si on est déjà en train de charger, on évite les requêtes multiples
    if (requestInProgress.current) return;
    
    const loadViewCount = async () => {
      const supabase = getSupabaseClient();
      
      if (!supabase) {
        setIsLoading(false);
        return;
      }

      try {
        requestInProgress.current = true;
        setError(null);

        // Utiliser la fonction RPC pour obtenir les vues
        const { data, error: rpcError } = await supabase.rpc('get_blog_views', {
          blog_slug_param: blogSlug,
        });

        if (rpcError) {
          console.error('Erreur lors du chargement des vues:', rpcError);
          setViewCount(0);
        } else {
          const count = data || 0;
          viewCountCache[blogSlug] = count; // Mettre en cache
          setViewCount(count);
        }
      } catch (err) {
        console.error('Erreur lors du chargement des vues:', err);
        setError(err instanceof Error ? err : new Error('Erreur inconnue'));
        setViewCount(0);
      } finally {
        setIsLoading(false);
        requestInProgress.current = false;
      }
    };

    if (blogSlug && isInitialMount.current) {
      loadViewCount();
      isInitialMount.current = false;
    }
  }, [blogSlug]);

  // Fonction pour incrémenter les vues - avec optimisations
  const incrementView = async () => {
    // Si on est déjà en train de charger, on évite les requêtes multiples
    if (requestInProgress.current) return;
    
    const supabase = getSupabaseClient();
    if (!supabase) return;

    // Vérifier si la vue a déjà été comptée dans cette session
    const viewKey = `blog_view_${blogSlug}`;
    const hasViewed = sessionStorage.getItem(viewKey);
    if (hasViewed) return;

    try {
      requestInProgress.current = true;
      sessionStorage.setItem(viewKey, 'true');

      // Optimistic update - mettre à jour l'UI immédiatement
      const newCount = viewCount + 1;
      setViewCount(newCount);
      viewCountCache[blogSlug] = newCount;

      // Requête en arrière-plan
      setTimeout(async () => {
        try {
          const { data, error: rpcError } = await supabase.rpc('increment_blog_view', {
            blog_slug_param: blogSlug,
          });
  
          if (rpcError) {
            console.error('Erreur lors de l\'incrémentation des vues:', rpcError);
          } else if (data) {
            // Mettre à jour avec la valeur réelle du serveur
            viewCountCache[blogSlug] = data;
            setViewCount(data);
          }
        } catch (err) {
          console.error('Erreur lors de l\'incrémentation des vues:', err);
        } finally {
          requestInProgress.current = false;
        }
      }, 1000); // Délai pour éviter de bloquer le thread principal
    } catch (err) {
      console.error('Erreur lors de l\'incrémentation des vues:', err);
      requestInProgress.current = false;
    }
  };

  return {
    viewCount,
    isLoading,
    error,
    incrementView,
  };
}

