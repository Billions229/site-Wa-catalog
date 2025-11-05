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
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl shadow-lg p-8 mb-8 border border-primary-200">
      <div className="flex items-start gap-6 mb-6">
        <img
          src={vendor.avatar_url || 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
          alt={vendor.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-bold text-gray-900">{vendor.name}</h2>
            {vendor.verified && (
              <CheckCircle className="w-6 h-6 text-primary-600" />
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            {vendor.location && (
              <span className="flex items-center gap-1">
                📍 {vendor.location}
              </span>
            )}
            {vendor.whatsapp && (
              <span className="flex items-center gap-1">
                📱 WhatsApp disponible
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {renderStars(Math.round(stats.averageRating))}
            <span className="text-2xl font-bold text-gray-900">
              {stats.averageRating.toFixed(1)}/5
            </span>
            <span className="text-gray-600">({stats.totalReviews} avis)</span>
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

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Répartition des notes</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution];
            const percentage = getRatingPercentage(count);
            return (
              <div key={rating} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-24">
                  <span className="text-yellow-400">{'⭐'.repeat(rating)}</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 w-20 text-right">
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

