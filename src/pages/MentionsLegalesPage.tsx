import { FileText, Building2, Mail, MapPin, Phone, Globe } from "lucide-react"
import SEO from "@/components/SEO"

export default function MentionsLegalesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mentions légales - wa-catalog",
    "description": "Mentions légales de wa-catalog. Informations sur l'éditeur, l'hébergeur et les contacts légaux.",
    "url": "https://wa-catalog.com/mentions-legales",
  }

  return (
    <>
      <SEO
        title="Mentions légales - wa-catalog"
        description="Mentions légales de wa-catalog. Informations sur l'éditeur, l'hébergeur et les contacts légaux."
        keywords="mentions légales, wa-catalog, éditeur, hébergeur, contact légal"
        canonical="https://wa-catalog.com/mentions-legales"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/70 to-primary-800/75" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Mentions légales
              </h1>
              <p className="text-xl text-primary-50 leading-relaxed">
                Informations légales concernant wa-catalog
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
              {/* Éditeur */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Éditeur</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Dénomination :</strong> wa-catalog
                  </p>
                  <p>
                    <strong className="text-gray-900">Description :</strong> Plateforme de recherche de produits via WhatsApp au Bénin
                  </p>
                  <div className="flex items-start gap-3 mt-4">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Adresse :</p>
                      <p>Cotonou, Bénin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Téléphone :</p>
                      <a href="https://wa.me/22999323073" className="text-primary-600 hover:text-primary-700">
                        +229 99 32 30 73
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email :</p>
                      <a href="mailto:support@wa-catalog.com" className="text-primary-600 hover:text-primary-700">
                        support@wa-catalog.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Site web :</p>
                      <a href="https://wa-catalog.com" className="text-primary-600 hover:text-primary-700">
                        https://wa-catalog.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directeur de publication */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Directeur de publication
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Le directeur de publication est responsable du contenu éditorial du site. 
                  Pour toute question concernant le contenu, vous pouvez nous contacter via les coordonnées mentionnées ci-dessus.
                </p>
              </div>

              {/* Hébergeur */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Hébergement
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site wa-catalog.com est hébergé par :
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-700">
                    Les informations détaillées concernant l'hébergeur sont disponibles sur demande 
                    via{" "}
                    <a href="mailto:support@wa-catalog.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                      support@wa-catalog.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Propriété intellectuelle
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  La reproduction de tout ou partie de ce site sur un support électronique quelconque est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
              </div>

              {/* Protection des données */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Protection des données personnelles
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément à la loi n°2018-09 du 4 mai 2018 portant protection des données à caractère personnel en République du Bénin, 
                  vous disposez d'un droit d'accès, de rectification et de suppression des données qui vous concernent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pour exercer ce droit, vous pouvez nous contacter à{" "}
                  <a href="mailto:support@wa-catalog.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                    support@wa-catalog.com
                  </a>
                  . Pour plus d'informations, consultez notre{" "}
                  <a href="/confidentialite" className="text-primary-600 hover:text-primary-700 font-semibold">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </div>

              {/* Responsabilité */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Limitation de responsabilité
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  wa-catalog s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, 
                  dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cependant, wa-catalog ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
                  mises à disposition sur ce site. En conséquence, wa-catalog décline toute responsabilité :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>pour toute interruption du site</li>
                  <li>pour toute survenance de bugs</li>
                  <li>pour toute inexactitude ou omission portant sur des informations disponibles sur le site</li>
                  <li>pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification 
                      des informations mises à disposition sur le site</li>
                </ul>
              </div>

              {/* Liens externes */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Liens hypertextes
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                  Les liens vers ces autres ressources vous font quitter le site wa-catalog.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de wa-catalog. 
                  Aucune autorisation ni demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site 
                  qui souhaite établir un lien vers le site de l'éditeur. Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Contact
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <a href="mailto:support@wa-catalog.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                        support@wa-catalog.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <a href="https://wa.me/22999323073" className="text-primary-600 hover:text-primary-700 font-semibold">
                        +229 99 32 30 73
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">Cotonou, Bénin</span>
                    </div>
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
    </>
  )
}

