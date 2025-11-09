import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowLeft, CheckCircle } from 'lucide-react';
import { supabase, Vendor, CATEGORIES, RESPONSE_TIMES, COURTESY_RATINGS } from '../lib/supabase';
import { getVendorIdFromUrl } from '../utils/reviewLinks';
import ReviewForm from '../components/ReviewForm';

export default function SubmitReviewPage() {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVendorId, setSelectedVendorId] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadVendors();

    // Récupérer l'ID du vendeur depuis l'URL
    const vendorId = getVendorIdFromUrl();
    if (vendorId) {
      setSelectedVendorId(vendorId);
    }

    // Scroll vers le formulaire une fois qu'il est rendu
    if (vendorId) {
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.scrollBy({ top: -100, behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  const loadVendors = async () => {
    setIsLoading(true);
    try {
      if (!supabase) {
        console.error('Supabase n\'est pas configuré');
        setVendors([]);
        return;
      }

      const { data, error } = await supabase
        .from('vendors')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setVendors(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des vendeurs:', error);
      setVendors([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuccess = async () => {
    setSubmitted(true);
    // Recharger les données si nécessaire
    // Rediriger vers la page des avis après 3 secondes
    setTimeout(() => {
      navigate('/avis-client');
    }, 3000);
  };

  const preselectedVendor = vendors.find(v => v.id === selectedVendorId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/avis-client')}
            className="flex items-center gap-2 text-primary-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux avis</span>
          </button>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">Donner votre avis</h1>
          </div>
          <p className="text-lg text-primary-50 text-center max-w-2xl mx-auto">
            Partagez votre expérience et aidez d'autres clients à faire leur choix
          </p>
        </div>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-900 mb-2">
              Merci pour votre avis !
            </h2>
            <p className="text-green-700 mb-4">
              Votre avis a été soumis avec succès et sera publié automatiquement.
            </p>
            <p className="text-sm text-green-600">
              Redirection vers la page des avis dans quelques secondes...
            </p>
          </div>
        </div>
      )}

      {/* Form Section */}
      {!submitted && (
        <div ref={formRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {isLoading ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Chargement du formulaire...</p>
            </div>
          ) : (
            <>
              {preselectedVendor && (
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500 p-5 mb-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-primary-900 mb-1">
                        Vendeur présélectionné
                      </h3>
                      <p className="text-sm text-primary-700">
                        Vous êtes invité à évaluer <span className="font-bold text-primary-900">{preselectedVendor.name}</span>
                        {preselectedVendor.location && (
                          <span className="text-primary-600"> • {preselectedVendor.location}</span>
                        )}
                      </p>
                      <p className="text-xs text-primary-600 mt-2">
                        Le nom du vendeur est déjà sélectionné. Vous pouvez maintenant remplir votre avis.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <ReviewForm
                vendors={vendors}
                preselectedVendorId={selectedVendorId}
                onClose={() => {
                  if (!submitted) {
                    navigate('/avis-client');
                  }
                }}
                onSuccess={handleSuccess}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

