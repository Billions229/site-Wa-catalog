import { useState, useEffect } from 'react';
import { Search, Filter, Star, MessageSquare, ChevronLeft, ChevronRight, Link2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase, Review, Vendor, CATEGORIES } from '../lib/supabase';
import ReviewCard from '../components/ReviewCard';
import VendorStats from '../components/VendorStats';

const ITEMS_PER_PAGE = 10;

export default function ReviewsPage() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    search: '',
    vendorId: '',
    category: '',
    rating: '',
    sortBy: 'recent',
  });

  useEffect(() => {
    // Si un vendeur est spécifié dans l'URL, rediriger vers la page de soumission
    const urlParams = new URLSearchParams(window.location.search);
    const vendorId = urlParams.get('vendeur') || urlParams.get('vendor');
    if (vendorId) {
      // Rediriger vers la page de soumission avec les paramètres
      navigate(`/soumissions-avis?${urlParams.toString()}`, { replace: true });
      return;
    }
    
    loadData();
  }, [navigate]);

  useEffect(() => {
    applyFilters();
    setCurrentPage(1);
  }, [reviews, filters]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (!supabase) {
        console.error('Supabase n\'est pas configuré. Veuillez définir VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY');
        setReviews([]);
        setVendors([]);
        return;
      }

      const [{ data: reviewsData }, { data: vendorsData }] = await Promise.all([
        supabase
          .from('reviews')
          .select('*, vendors(*)')
          .order('created_at', { ascending: false }),
        supabase.from('vendors').select('*'),
      ]);

      setReviews(reviewsData || []);
      setVendors(vendorsData || []);
    } catch (error) {
      console.error('Error loading data:', error);
      setReviews([]);
      setVendors([]);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...reviews];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (review) =>
          review.vendors?.name.toLowerCase().includes(searchLower) ||
          review.category.toLowerCase().includes(searchLower) ||
          review.content_text?.toLowerCase().includes(searchLower)
      );
    }

    if (filters.vendorId) {
      filtered = filtered.filter((review) => review.vendor_id === filters.vendorId);
    }

    if (filters.category) {
      filtered = filtered.filter((review) => review.category === filters.category);
    }

    if (filters.rating) {
      const rating = parseInt(filters.rating);
      filtered = filtered.filter((review) => review.rating_global === rating);
    }

    switch (filters.sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        break;
      case 'helpful':
        filtered.sort((a, b) => b.helpful_yes - a.helpful_yes);
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating_global - a.rating_global);
        break;
    }

    setFilteredReviews(filtered);
  };

  const handleVote = async (reviewId: string, voteType: 'yes' | 'no') => {
    if (!supabase) {
      console.error('Supabase n\'est pas configuré');
      return;
    }

    const review = reviews.find((r) => r.id === reviewId);
    if (!review) return;

    const updates =
      voteType === 'yes'
        ? { helpful_yes: review.helpful_yes + 1 }
        : { helpful_no: review.helpful_no + 1 };

    const { error } = await supabase.from('reviews').update(updates).eq('id', reviewId);

    if (!error) {
      setReviews(
        reviews.map((r) =>
          r.id === reviewId ? { ...r, ...updates } : r
        )
      );
    }
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      vendorId: '',
      category: '',
      rating: '',
      sortBy: 'recent',
    });
  };

  const getVendorStats = (vendorId: string) => {
    const vendorReviews = reviews.filter((r) => r.vendor_id === vendorId);
    if (vendorReviews.length === 0) {
      return null;
    }

    const totalReviews = vendorReviews.length;
    const averageRating =
      vendorReviews.reduce((sum, r) => sum + r.rating_global, 0) / totalReviews;
    const averageCourtesy =
      vendorReviews.reduce((sum, r) => sum + r.rating_courtesy, 0) / totalReviews;

    const responseTimeCounts: Record<string, number> = {};
    vendorReviews.forEach((r) => {
      responseTimeCounts[r.rating_response_time] = (responseTimeCounts[r.rating_response_time] || 0) + 1;
    });
    const mostCommonResponseTime = Object.entries(responseTimeCounts).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

    const ratingDistribution = {
      5: vendorReviews.filter((r) => r.rating_global === 5).length,
      4: vendorReviews.filter((r) => r.rating_global === 4).length,
      3: vendorReviews.filter((r) => r.rating_global === 3).length,
      2: vendorReviews.filter((r) => r.rating_global === 2).length,
      1: vendorReviews.filter((r) => r.rating_global === 1).length,
    };

    return {
      averageRating,
      totalReviews,
      averageResponseTime: mostCommonResponseTime,
      averageCourtesy,
      ratingDistribution,
    };
  };

  const handleShowForm = () => {
    navigate('/soumissions-avis');
  };

  const totalPages = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedReviews = filteredReviews.slice(startIndex, endIndex);

  const selectedVendor = vendors.find((v) => v.id === filters.vendorId);
  const vendorStats = selectedVendor ? getVendorStats(selectedVendor.id) : null;

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
        {/* Image background avec overlay - optimisé mobile/desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Overlay avec opacité réduite pour voir l'image - plus transparent pour mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/70 to-primary-800/75 md:from-primary-600/70 md:via-primary-700/75 md:to-primary-800/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Avis Clients wa-catalog</h1>
          </div>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Transparence et crédibilité - Tous les avis sont automatiquement publiés
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={handleShowForm}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              Donner mon avis
            </button>
            <Link
              to="/vendeur/lien-avis"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2 border-2 border-white/50 transform hover:scale-105"
            >
              <Link2 className="w-6 h-6" />
              <span className="hidden sm:inline">Vendeur ? </span>Créez votre lien personnalisé
            </Link>
          </div>
          <p className="text-sm text-primary-100/80 max-w-xl mx-auto">
            Les vendeurs peuvent générer un lien unique pour inviter leurs clients à laisser un avis
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-8 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un vendeur, produit, catégorie..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <select
              value={filters.vendorId}
              onChange={(e) => setFilters({ ...filters, vendorId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
            >
              <option value="">Tous les vendeurs</option>
              {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}
            </select>

            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
            >
              <option value="">Toutes les catégories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>

            <select
              value={filters.rating}
              onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
            >
              <option value="">Toutes les notes</option>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="flex-1 sm:flex-initial px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="recent">Plus récent</option>
                <option value="oldest">Plus ancien</option>
                <option value="helpful">Plus utile</option>
                <option value="highest">Mieux noté</option>
              </select>
            </div>

            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap"
            >
              Réinitialiser filtres
            </button>
          </div>
        </div>

        {selectedVendor && vendorStats && (
          <VendorStats vendor={selectedVendor} stats={vendorStats} />
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Chargement des avis...</p>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun avis trouvé
            </h3>
            <p className="text-gray-600">
              Essayez de modifier vos filtres ou soyez le premier à donner votre avis
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredReviews.length}</span>{' '}
                avis trouvé{filteredReviews.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid gap-6">
              {paginatedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} onVote={handleVote} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Précédent
                </button>

                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 2 && page <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-primary-600 text-white'
                              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 3 ||
                      page === currentPage + 3
                    ) {
                      return (
                        <span key={page} className="px-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

