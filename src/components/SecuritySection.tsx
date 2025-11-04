import { CheckCircle, AlertCircle, Shield, Lock, Eye, User } from 'lucide-react';

export default function SecuritySection() {
  const goodPractices = [
    {
      icon: Eye,
      title: 'Demande des photos',
      description: 'Demande toujours plusieurs photos du produit avec de bons angles',
    },
    {
      icon: User,
      title: 'Vérifie le profil',
      description: 'Regarde le profil WhatsApp Business du vendeur avant de décider',
    },
    {
      icon: Lock,
      title: 'Rencontre en public',
      description: 'Effectue la transaction dans un endroit sûr et passant',
    },
    {
      icon: Shield,
      title: 'Paye après livraison',
      description: 'Ne paie jamais avant d\'avoir vu et testé le produit',
    },
  ];

  const redFlags = [
    'Prix anormalement bas',
    'Vendeur pressé ou évasif',
    'Pas de photos détaillées',
    'Refuse que tu testes le produit',
    'Demande paiement avant rencontre',
    'Compte créé aujourd\'hui',
  ];

  return (
    <section className="bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
            Achète en toute sécurité
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des conseils simples pour éviter les arnaques et trouver des vendeurs sérieux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Bonnes pratiques</h3>
            </div>

            <div className="space-y-4">
              {goodPractices.map((practice) => {
                const Icon = practice.icon;
                return (
                  <div key={practice.title} className="flex gap-4">
                    <Icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{practice.title}</h4>
                      <p className="text-sm text-gray-600">{practice.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-8 border border-red-200">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-900">À éviter absolument</h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {redFlags.map((flag) => (
                <div key={flag} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{flag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 border border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Où faire la rencontre ?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Centres commerciaux populaires</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Devant les banques (caméras 24/24)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Cafés/restaurants populaires</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Lieux bien éclairés en journée</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conseils importants</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Rencontre toujours en journée</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Viens accompagné si possible</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Préviens quelqu'un de ta sortie</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>Aie la monnaie exacte si possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/aide/securite"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Voir tous les conseils de sécurité
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
