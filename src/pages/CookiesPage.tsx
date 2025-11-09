import { Cookie, Settings, BarChart3, Shield, X } from "lucide-react"
import { useState } from "react"
import SEO from "@/components/SEO"

export default function CookiesPage() {
  const [showBanner, setShowBanner] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const saved = localStorage.getItem('cookies-consent')
    return saved === 'accepted'
  })

  const handleAcceptAll = () => {
    localStorage.setItem('cookies-consent', 'accepted')
    setAnalyticsEnabled(true)
    setShowBanner(false)
    // Ici, vous pourriez initialiser vos outils d'analytics (Google Analytics, etc.)
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookies-consent', 'rejected')
    setAnalyticsEnabled(false)
    setShowBanner(false)
    // Ici, vous pourriez désactiver vos outils d'analytics
  }

  const handleCustomSettings = () => {
    // Ouvrir une modal pour les paramètres personnalisés si nécessaire
    setShowBanner(false)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politique de cookies - wa-catalog",
    "description": "Politique de cookies de wa-catalog. Informations sur l'utilisation des cookies et technologies similaires.",
    "url": "https://wa-catalog.com/cookies",
  }

  return (
    <>
      <SEO
        title="Politique de cookies - wa-catalog"
        description="Politique de cookies de wa-catalog. Informations sur l'utilisation des cookies et technologies similaires sur notre plateforme."
        keywords="cookies, politique cookies, traceurs, analytics, wa-catalog"
        canonical="https://wa-catalog.com/cookies"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/70 to-primary-800/75" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Politique de cookies
              </h1>
              <p className="text-xl text-primary-50 leading-relaxed">
                Informations sur l'utilisation des cookies et technologies similaires
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Cookie className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Qu'est-ce qu'un cookie ?</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. 
                  Les cookies permettent au site de reconnaître votre navigateur et de mémoriser certaines informations vous concernant.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  wa-catalog utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation, analyser 
                  l'utilisation de la Plateforme et personnaliser le contenu.
                </p>
              </div>

              {/* Types de cookies */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Settings className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Types de cookies utilisés</h2>
                </div>
                
                <div className="space-y-8">
                  {/* Cookies essentiels */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Cookies essentiels (obligatoires)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Ces cookies sont nécessaires au fonctionnement de la Plateforme et ne peuvent pas être désactivés. 
                      Ils sont généralement définis en réponse à des actions que vous effectuez et qui équivalent à une demande de services.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li><strong className="text-gray-900">Cookies de session :</strong> Pour maintenir votre session active</li>
                        <li><strong className="text-gray-900">Cookies de sécurité :</strong> Pour protéger contre les attaques</li>
                        <li><strong className="text-gray-900">Cookies de préférences :</strong> Pour mémoriser vos choix (langue, région)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Cookies analytics */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Cookies d'analyse et de performance (optionnels)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec la Plateforme en collectant 
                      des informations de manière anonyme. Ces données nous aident à améliorer le fonctionnement de la Plateforme.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                      <div className="flex items-start gap-3 mb-3">
                        <BarChart3 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Cookies d'analytics :</p>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                            <li>Nombre de visiteurs et pages vues</li>
                            <li>Durée de visite et parcours de navigation</li>
                            <li>Origine du trafic (moteurs de recherche, réseaux sociaux, etc.)</li>
                            <li>Équipements utilisés (mobile, desktop, tablette)</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        <strong>Note :</strong> Ces cookies nécessitent votre consentement préalable. Vous pouvez les accepter ou les refuser.
                      </p>
                    </div>
                  </div>

                  {/* Cookies de fonctionnalité */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Cookies de fonctionnalité (optionnels)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Ces cookies permettent à la Plateforme de se souvenir des choix que vous faites (comme votre nom d'utilisateur, 
                      votre langue ou la région dans laquelle vous vous trouvez) et de fournir des fonctionnalités améliorées et personnalisées.
                    </p>
                  </div>
                </div>
              </div>

              {/* Durée de conservation */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">3. Durée de conservation des cookies</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Les cookies peuvent être :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-gray-900">Cookies de session :</strong> Supprimés automatiquement à la fermeture de votre navigateur</li>
                    <li><strong className="text-gray-900">Cookies persistants :</strong> Conservés jusqu'à leur expiration (maximum 13 mois) ou jusqu'à leur suppression manuelle</li>
                  </ul>
                </div>
              </div>

              {/* Gestion des cookies */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Settings className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Gestion de vos préférences</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Vous pouvez gérer vos préférences de cookies de plusieurs manières :
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-4">
                    <h3 className="font-bold text-gray-900 mb-3">Via les paramètres de votre navigateur</h3>
                    <p className="text-gray-700 mb-3">
                      La plupart des navigateurs vous permettent de contrôler les cookies via leurs paramètres. Vous pouvez :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Voir quels cookies sont stockés et les supprimer individuellement</li>
                      <li>Bloquer les cookies de tiers</li>
                      <li>Bloquer tous les cookies</li>
                      <li>Supprimer tous les cookies lorsque vous fermez votre navigateur</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Note :</strong> Si vous bloquez tous les cookies, certaines fonctionnalités de la Plateforme peuvent ne pas fonctionner correctement.
                    </p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6 border border-primary-200 mt-4">
                    <h3 className="font-bold text-gray-900 mb-3">Via notre bandeau de consentement</h3>
                    <p className="text-gray-700 mb-4">
                      Lors de votre première visite, un bandeau de consentement vous permet de choisir quels cookies accepter. 
                      Vous pouvez modifier vos préférences à tout moment.
                    </p>
                    <button
                      onClick={() => setShowBanner(true)}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Gérer mes préférences de cookies
                    </button>
                  </div>
                </div>
              </div>

              {/* Cookies tiers */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Cookies tiers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Nous n'avons pas accès ni contrôle sur ces cookies. 
                  Ces services tiers peuvent inclure :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Services d'analytics (pour analyser l'utilisation de la Plateforme)</li>
                  <li>Services de réseaux sociaux (pour partager du contenu)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Nous vous encourageons à consulter les politiques de cookies de ces services tiers pour plus d'informations.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Contact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter :
                </p>
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
                  <div className="space-y-3">
                    <p>
                      <strong className="text-gray-900">Email :</strong>{" "}
                      <a href="mailto:support@wa-catalog.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                        support@wa-catalog.com
                      </a>
                    </p>
                    <p>
                      <strong className="text-gray-900">Téléphone :</strong>{" "}
                      <a href="https://wa.me/22999323073" className="text-primary-600 hover:text-primary-700 font-semibold">
                        +229 99 32 30 73
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Bandeau de consentement cookies */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Cookie className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-bold text-gray-900">Gestion des cookies</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l'utilisation de la Plateforme. 
                  Vous pouvez accepter tous les cookies, les refuser, ou personnaliser vos préférences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Accepter tout
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Refuser tout
                  </button>
                  <button
                    onClick={handleCustomSettings}
                    className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Personnaliser
                  </button>
                </div>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

