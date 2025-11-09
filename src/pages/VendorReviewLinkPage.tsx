import { useState, useEffect } from 'react';
import { Copy, Check, Link2, MessageSquare, Share2, Star } from 'lucide-react';
import { supabase, Vendor } from '../lib/supabase';
import { generateReviewLink, copyToClipboard } from '../utils/reviewLinks';

export default function VendorReviewLinkPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [reviewLink, setReviewLink] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadVendors();
  }, []);

  useEffect(() => {
    if (selectedVendor) {
      const link = generateReviewLink(selectedVendor.id, selectedVendor.name);
      setReviewLink(link);
    } else {
      setReviewLink('');
    }
  }, [selectedVendor]);

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

  const handleCopyLink = async () => {
    if (!reviewLink) return;
    
    const success = await copyToClipboard(reviewLink);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyMessage = async () => {
    if (!selectedVendor) return;
    
    const message = `Bonjour ! J'espère que vous êtes satisfait de votre achat. Pourriez-vous prendre un moment pour laisser un avis sur votre expérience ? Cela m'aiderait énormément ! 

👉 ${reviewLink}

Merci beaucoup ! 🙏`;
    
    const success = await copyToClipboard(message);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappMessage = selectedVendor
    ? `https://wa.me/?text=${encodeURIComponent(
        `Bonjour ! J'espère que vous êtes satisfait de votre achat. Pourriez-vous prendre un moment pour laisser un avis sur votre expérience ? Cela m'aiderait énormément ! 

👉 ${reviewLink}

Merci beaucoup ! 🙏`
      )}`
    : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Link2 className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Lien personnalisé pour demander des avis
            </h1>
          </div>
          <p className="text-xl text-primary-50 max-w-2xl mx-auto">
            Générez un lien unique pour inviter vos clients à laisser un avis. Le formulaire sera automatiquement pré-rempli avec votre nom.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Selection du vendeur */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary-600" />
            Sélectionner votre profil
          </h2>
          
          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-block w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Chargement des vendeurs...</p>
            </div>
          ) : (
            <div>
              <select
                value={selectedVendor?.id || ''}
                onChange={(e) => {
                  const vendor = vendors.find(v => v.id === e.target.value);
                  setSelectedVendor(vendor || null);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              >
                <option value="">-- Sélectionner un vendeur --</option>
                {vendors.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name} {vendor.location ? `- ${vendor.location}` : ''}
                    {vendor.verified && ' ✓'}
                  </option>
                ))}
              </select>

              {vendors.length === 0 && !isLoading && (
                <p className="mt-4 text-gray-600 text-center">
                  Aucun vendeur trouvé. Contactez l'administrateur pour vous inscrire.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Lien généré */}
        {selectedVendor && reviewLink && (
          <>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Link2 className="w-6 h-6 text-primary-600" />
                Votre lien personnalisé
              </h2>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-4 mb-6 rounded">
                <p className="text-sm text-primary-700 mb-2">
                  <strong>Vendeur sélectionné :</strong> {selectedVendor.name}
                  {selectedVendor.verified && (
                    <span className="ml-2 text-green-600">✓ Vérifié</span>
                  )}
                </p>
                <p className="text-sm text-primary-600">
                  Quand un client clique sur ce lien, le formulaire d'avis sera automatiquement pré-rempli avec votre nom.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg p-4 break-all">
                  <p className="text-sm text-gray-600 mb-1">Votre lien :</p>
                  <p className="text-primary-600 font-mono text-sm">{reviewLink}</p>
                </div>
                <button
                  onClick={handleCopyLink}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copier le lien
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Message pré-rempli */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary-600" />
                Message à envoyer à vos clients
              </h2>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
                <p className="text-gray-700 whitespace-pre-line text-sm">
                  Bonjour ! J'espère que vous êtes satisfait de votre achat. Pourriez-vous prendre un moment pour laisser un avis sur votre expérience ? Cela m'aiderait énormément ! 

👉 {reviewLink}

Merci beaucoup ! 🙏
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopyMessage}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message copié !
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copier le message
                    </>
                  )}
                </button>
                {whatsappMessage && (
                  <a
                    href={whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Ouvrir dans WhatsApp
                  </a>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                📋 Comment utiliser votre lien personnalisé
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-800">
                <li>Copiez votre lien personnalisé ou le message pré-rempli</li>
                <li>Envoyez-le à vos clients après une vente réussie</li>
                <li>Quand le client clique sur le lien, le formulaire d'avis s'ouvre avec votre nom déjà sélectionné</li>
                <li>Le client n'a plus qu'à remplir son avis et le soumettre</li>
                <li>L'avis sera automatiquement publié et visible sur votre profil</li>
              </ol>
            </div>
          </>
        )}

        {!selectedVendor && !isLoading && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sélectionnez votre profil
            </h3>
            <p className="text-gray-600">
              Choisissez votre nom dans la liste ci-dessus pour générer votre lien personnalisé.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

