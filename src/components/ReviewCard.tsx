import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Clock, Award, MapPin, Check } from 'lucide-react';
import { Review } from '../lib/supabase';
import { formatDistanceToNow } from '../utils/date';

interface ReviewCardProps {
  review: Review;
  onVote: (reviewId: string, voteType: 'yes' | 'no') => void;
}

export default function ReviewCard({ review, onVote }: ReviewCardProps) {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null);

  const handleVote = (type: 'yes' | 'no') => {
    setVoted(type);
    onVote(review.id, type);
    setTimeout(() => setVoted(null), 1500);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-500 mb-1">Avis de</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-1 break-words">{review.author_name}</h3>
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="whitespace-nowrap">{formatDistanceToNow(review.created_at)}</span>
            </p>
          </div>
          {review.verified_purchase && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <Check className="w-4 h-4" />
              <span className="text-xs font-semibold">Achat vérifié</span>
            </div>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {renderStars(review.rating_global)}
            <span className="text-2xl font-bold text-gray-900">{review.rating_global}/5</span>
          </div>
        </div>
      </div>

      {/* Vendor Info */}
      {review.vendors && (
        <div className="px-6 py-5 bg-gray-50 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Auprès de</p>
          <div className="flex items-center gap-4">
            <img
              src={review.vendors.avatar_url || 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'}
              alt={review.vendors.name}
              className="w-16 h-16 rounded-xl object-cover shadow-sm ring-2 ring-white flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                <span className="break-words">{review.vendors.name}</span>
                {review.vendors.verified && (
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {getCategoryIcon(review.category)} {review.category}
                </span>
                {review.vendors.location && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {review.vendors.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Content */}
      <div className="px-6 py-5 border-b border-gray-100">
        {review.content_text && (
          <p className="text-gray-700 leading-relaxed text-base mb-4">{review.content_text}</p>
        )}

        {/* Audio */}
        {review.content_audio_url && (
          <div className="mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Avis vocal</p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Écoutez l'enregistrement audio</p>
                </div>
              </div>
              <audio
                controls
                className="w-full h-10 sm:h-12 rounded-lg"
                style={{
                  filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))'
                }}
              >
                <source src={review.content_audio_url} />
                Votre navigateur ne supporte pas la lecture audio.
              </audio>
            </div>
          </div>
        )}

        {/* Video */}
        {review.content_video_url && (
          <div className="mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Avis vidéo</p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Regardez l'enregistrement vidéo</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md bg-black">
                <video
                  controls
                  className="w-full max-h-80 sm:max-h-96"
                  preload="metadata"
                >
                  <source src={review.content_video_url} />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Images */}
        {review.content_image_urls && review.content_image_urls.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
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

        {!review.content_text && !review.content_audio_url && !review.content_video_url && !review.content_image_urls && (
          <p className="text-gray-500 italic">Aucun contenu disponible</p>
        )}
      </div>

      {/* Metrics */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 font-medium">Réponse</p>
              <p className="text-sm font-bold text-gray-900 break-words">{review.rating_response_time}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
            <Award className="w-5 h-5 text-pink-600 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 font-medium">Courtoisie</p>
              <p className="text-sm font-bold text-gray-900">{review.rating_courtesy}/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Helpfulness Footer */}
      <div className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm font-medium text-gray-600">Cet avis vous a-t-il été utile?</p>
        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={() => handleVote('yes')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${voted === 'yes'
              ? 'bg-green-500 text-white scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
          >
            <ThumbsUp className="w-4 h-4" />
            {review.helpful_yes}
          </button>
          <button
            onClick={() => handleVote('no')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${voted === 'no'
              ? 'bg-red-500 text-white scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
          >
            <ThumbsDown className="w-4 h-4" />
            {review.helpful_no}
          </button>
        </div>
      </div>
    </div>
  );
}
