import { TrendingUp, Clock, Heart, CheckCircle } from 'lucide-react';
import { Vendor } from '../lib/supabase';

interface VendorStatsProps {
  vendor: Vendor;
  stats: {
    averageRating: number;
    totalReviews: number;
    averageResponseTime: string;
    averageCourtesy: number;
    ratingDistribution: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  };
}

export default function VendorStats({ vendor, stats }: VendorStatsProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  const getRatingPercentage = (count: number) => {
    return ((count / stats.totalReviews) * 100).toFixed(0);
  };

  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 border border-primary-200 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
        <img
          src={vendor.avatar_url || 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
          alt={vendor.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">{vendor.name}</h2>
            {vendor.verified && (
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0" />
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
            {vendor.location && (
              <span className="flex items-center gap-1 whitespace-nowrap">
                📍 {vendor.location}
              </span>
            )}
            {vendor.whatsapp && (
              <span className="flex items-center gap-1 whitespace-nowrap">
                📱 WhatsApp disponible
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0">{renderStars(Math.round(stats.averageRating))}</div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
              {stats.averageRating.toFixed(1)}/5
            </span>
            <span className="text-gray-600 whitespace-nowrap">({stats.totalReviews} avis)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-gray-700">Temps de réponse</span>
          </div>
          <p className="text-xl font-bold text-gray-900">{stats.averageResponseTime}</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-accent-500" />
            <span className="text-sm font-semibold text-gray-700">Courtoisie moyenne</span>
          </div>
          <p className="text-xl font-bold text-gray-900">{stats.averageCourtesy.toFixed(1)}/5</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-gray-700">Tendance</span>
          </div>
          <p className="text-xl font-bold text-primary-600">↗️ Excellente</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm overflow-x-hidden">
        <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Répartition des notes</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution];
            const percentage = getRatingPercentage(count);
            return (
              <div key={rating} className="flex items-center gap-2 sm:gap-4 min-w-0">
                <div className="flex items-center gap-1 w-16 sm:w-24 flex-shrink-0">
                  <span className="text-yellow-400 text-sm sm:text-base">{'⭐'.repeat(rating)}</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden min-w-0">
                  <div
                    className="bg-yellow-400 h-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 w-16 sm:w-20 text-right flex-shrink-0 whitespace-nowrap">
                  {count} ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

