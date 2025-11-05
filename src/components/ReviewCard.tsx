import { ThumbsUp, ThumbsDown, Clock, Heart } from 'lucide-react';
import { Review } from '../lib/supabase';
import { formatDistanceToNow } from '../utils/date';

interface ReviewCardProps {
  review: Review;
  onVote: (reviewId: string, voteType: 'yes' | 'no') => void;
}

export default function ReviewCard({ review, onVote }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Électronique': '📱',
      'Mode': '👗',
      'Chaussures': '👟',
      'Maison': '🏠',
      'Auto': '🚗',
      'Alimentation': '🍔',
      'Services': '🔧',
      'Formations': '📚',
      'Livres': '📖',
      'Autre': '🔹',
    };
    return icons[category] || '🔹';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            {renderStars(review.rating_global)}
            <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
              {review.rating_global}/5
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <span className="font-medium break-words">{review.author_name}</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">{formatDistanceToNow(review.created_at)}</span>
          </div>
        </div>

        {review.verified_purchase && (
          <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0">
            ✓ Achat vérifié
          </span>
        )}
      </div>

      {review.vendors && (
        <div className="flex items-center gap-2 sm:gap-3 mb-4 pb-4 border-b border-gray-100 min-w-0">
          <img
            src={review.vendors.avatar_url || 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'}
            alt={review.vendors.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="font-semibold text-gray-900 text-sm sm:text-base break-words">{review.vendors.name}</span>
              {review.vendors.verified && (
                <span className="text-primary-600 text-sm flex-shrink-0">✓</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs text-gray-500">
              <span className="whitespace-nowrap">{getCategoryIcon(review.category)} {review.category}</span>
              {review.vendors.location && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="whitespace-nowrap">📍 {review.vendors.location}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {review.content_text && (
        <p className="text-gray-700 mb-4 leading-relaxed">
          {review.content_text}
        </p>
      )}

      {review.content_audio_url && (
        <div className="mb-4">
          <audio controls className="w-full">
            <source src={review.content_audio_url} type="audio/mpeg" />
          </audio>
        </div>
      )}

      {review.content_video_url && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <video controls className="w-full max-h-80">
            <source src={review.content_video_url} type="video/mp4" />
          </video>
        </div>
      )}

      {review.content_image_urls && review.content_image_urls.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4 overflow-x-hidden">
          {review.content_image_urls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Image ${idx + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600 whitespace-nowrap">{review.rating_response_time}</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Heart className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600 whitespace-nowrap">
            Courtoisie: {review.rating_courtesy}/5
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Cet avis vous a-t-il été utile?</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onVote(review.id, 'yes')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-primary-50 transition-colors group"
          >
            <ThumbsUp className="w-4 h-4 text-gray-400 group-hover:text-primary-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-primary-600">
              {review.helpful_yes}
            </span>
          </button>
          <button
            onClick={() => onVote(review.id, 'no')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors group"
          >
            <ThumbsDown className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-red-600">
              {review.helpful_no}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

