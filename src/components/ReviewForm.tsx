import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Trash2, Upload, X } from 'lucide-react';
import { Vendor, CATEGORIES, RESPONSE_TIMES, COURTESY_RATINGS, supabase } from '../lib/supabase';

interface ReviewFormProps {
  vendors: Vendor[];
  preselectedVendorId?: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ReviewForm({ vendors, preselectedVendorId, onClose, onSuccess }: ReviewFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    authorName: '',
    vendorId: preselectedVendorId || '',
    category: '',
    ratingGlobal: 0,
    ratingResponseTime: '',
    ratingCourtesy: 0,
    contentText: '',
    verifiedPurchase: false,
    publicationConsent: false,
  });

  const [contentTab, setContentTab] = useState<'text' | 'audio' | 'video'>('text');
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // Le scroll est géré par le parent (ReviewsPage)
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      setError('Impossible d\'accéder au microphone');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const deleteRecording = () => {
    setAudioBlob(null);
    audioChunksRef.current = [];
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        setError('La vidéo ne doit pas dépasser 50 MB');
        return;
      }
      setVideoFile(file);
    }
  };

  const validateForm = () => {
    if (!formData.vendorId) {
      setError('Veuillez sélectionner un vendeur');
      return false;
    }
    if (!formData.category) {
      setError('Veuillez sélectionner une catégorie');
      return false;
    }
    if (formData.ratingGlobal === 0) {
      setError('Veuillez donner une note globale');
      return false;
    }
    if (!formData.ratingResponseTime) {
      setError('Veuillez indiquer le temps de réponse');
      return false;
    }
    if (formData.ratingCourtesy === 0) {
      setError('Veuillez évaluer la courtoisie');
      return false;
    }
    if (!formData.contentText && !audioBlob && !videoFile) {
      setError('Veuillez fournir au moins une forme de contenu');
      return false;
    }
    if (!formData.verifiedPurchase) {
      setError('Veuillez certifier avoir acheté auprès de ce vendeur');
      return false;
    }
    if (!formData.publicationConsent) {
      setError('Veuillez accepter la publication publique de votre avis');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    if (!supabase) {
      setError('Supabase n\'est pas configuré. Veuillez définir VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from('reviews')
        .insert([
          {
            vendor_id: formData.vendorId,
            author_name: formData.authorName || 'Anonyme',
            category: formData.category,
            rating_global: formData.ratingGlobal,
            rating_response_time: formData.ratingResponseTime,
            rating_courtesy: formData.ratingCourtesy,
            content_text: formData.contentText || null,
            verified_purchase: formData.verifiedPurchase,
          },
        ]);

      if (insertError) throw insertError;

      // Appeler onSuccess avant onClose pour permettre à la page parente de gérer l'affichage
      onSuccess();
      // Ne pas appeler onClose ici, laisser la page parente décider
      // onClose() sera appelé seulement si l'utilisateur clique sur Annuler
    } catch (err) {
      setError('Erreur lors de la soumission de l\'avis');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const preselectedVendor = vendors.find(v => v.id === preselectedVendorId);

  return (
    <div ref={formRef} className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto mt-12 mb-8 border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Donner mon avis</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {preselectedVendor && (
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500 p-5 m-6 rounded-r-lg">
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

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom et prénom ou pseudonyme (optionnel)
          </label>
          <input
            type="text"
            value={formData.authorName}
            onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
            placeholder="ex: Jean D., @Cliente2024"
            maxLength={50}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quel vendeur souhaitez-vous évaluer? <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.vendorId}
            onChange={(e) => setFormData({ ...formData, vendorId: e.target.value })}
            disabled={!!preselectedVendorId}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
          >
            <option value="">Sélectionner un vendeur</option>
            {vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.id}>
                {vendor.name} {vendor.location ? `- ${vendor.location}` : ''}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie du produit acheté <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Sélectionner une catégorie</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Ma note générale <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setFormData({ ...formData, ratingGlobal: rating })}
                className="text-4xl transition-transform hover:scale-110"
              >
                {rating <= formData.ratingGlobal ? '⭐' : '☆'}
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {formData.ratingGlobal > 0 && ['😞', '😕', '😐', '😊', '😍'][formData.ratingGlobal - 1]}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Mon avis (au moins une forme de contenu) <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => setContentTab('text')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  contentTab === 'text'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Texte
            </button>
            <button
              type="button"
              onClick={() => setContentTab('audio')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                contentTab === 'audio'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Audio
            </button>
            <button
              type="button"
              onClick={() => setContentTab('video')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                contentTab === 'video'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vidéo
            </button>
          </div>

          {contentTab === 'text' && (
            <div>
              <textarea
                value={formData.contentText}
                onChange={(e) => setFormData({ ...formData, contentText: e.target.value })}
                placeholder="Décrivez votre expérience..."
                maxLength={500}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.contentText.length}/500
              </p>
            </div>
          )}

          {contentTab === 'audio' && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {!audioBlob ? (
                <div>
                  {!isRecording ? (
                    <button
                      type="button"
                      onClick={startRecording}
                      className="flex items-center gap-2 mx-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Mic className="w-5 h-5" />
                      Enregistrer
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={stopRecording}
                      className="flex items-center gap-2 mx-auto px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors animate-pulse"
                    >
                      <Square className="w-5 h-5" />
                      Arrêter
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  <audio controls className="w-full mb-4">
                    <source src={URL.createObjectURL(audioBlob)} type="audio/webm" />
                  </audio>
                  <button
                    type="button"
                    onClick={deleteRecording}
                    className="flex items-center gap-2 mx-auto px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          )}

          {contentTab === 'video' && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              {!videoFile ? (
                <label className="flex flex-col items-center gap-2 cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Cliquez pour télécharger une vidéo
                  </span>
                  <span className="text-xs text-gray-500">MP4, WebM (Max 50 MB)</span>
                  <input
                    type="file"
                    accept="video/mp4,video/webm"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div>
                  <video controls className="w-full max-h-60 mb-4">
                    <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
                  </video>
                  <button
                    type="button"
                    onClick={() => setVideoFile(null)}
                    className="flex items-center gap-2 mx-auto px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            En combien de temps le vendeur a-t-il répondu? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {RESPONSE_TIMES.map((time) => (
              <label key={time.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="responseTime"
                  value={time.value}
                  checked={formData.ratingResponseTime === time.value}
                  onChange={(e) => setFormData({ ...formData, ratingResponseTime: e.target.value })}
                  className="w-4 h-4 text-primary-600"
                />
                <span className="text-sm">{time.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Évaluation du service client <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {COURTESY_RATINGS.map((courtesy) => (
              <label key={courtesy.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="courtesy"
                  value={courtesy.value}
                  checked={formData.ratingCourtesy === courtesy.value}
                  onChange={(e) => setFormData({ ...formData, ratingCourtesy: Number(e.target.value) })}
                  className="w-4 h-4 text-primary-600"
                />
                <div>
                  <div className="text-sm font-medium">{courtesy.label}</div>
                  <div className="text-xs text-gray-500">{courtesy.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.verifiedPurchase}
              onChange={(e) => setFormData({ ...formData, verifiedPurchase: e.target.checked })}
              className="mt-1 w-5 h-5 text-primary-600 rounded"
            />
            <span className="text-sm text-gray-700">
              Je certifie avoir acheté auprès de ce vendeur ✓
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.publicationConsent}
              onChange={(e) => setFormData({ ...formData, publicationConsent: e.target.checked })}
              className="mt-1 w-5 h-5 text-primary-600 rounded"
            />
            <span className="text-sm text-gray-700">
              Je reconnais que cet avis sera publié automatiquement et de façon publique ✓
            </span>
          </label>
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Soumettre mon avis'}
          </button>
        </div>
      </form>
    </div>
  );
}

