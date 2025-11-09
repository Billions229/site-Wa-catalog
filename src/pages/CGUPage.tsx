import { Scale, FileText, Users, Shield, AlertCircle } from "lucide-react"
import SEO from "@/components/SEO"

export default function CGUPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Conditions Générales d'Utilisation - wa-catalog",
    "description": "Conditions Générales d'Utilisation de wa-catalog pour les acheteurs et les vendeurs.",
    "url": "https://wa-catalog.com/cgu",
  }

  return (
    <>
      <SEO
        title="Conditions Générales d'Utilisation - wa-catalog"
        description="Conditions Générales d'Utilisation de wa-catalog pour les acheteurs et les vendeurs. Règles et conditions d'utilisation de la plateforme."
        keywords="CGU, conditions générales, utilisation, wa-catalog, règles, conditions"
        canonical="https://wa-catalog.com/cgu"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/70 to-primary-800/75" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Conditions Générales d'Utilisation
              </h1>
              <p className="text-xl text-primary-50 leading-relaxed">
                Règles et conditions d'utilisation de la plateforme wa-catalog
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
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Objet</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les conditions 
                  et modalités d'utilisation de la plateforme wa-catalog (ci-après "la Plateforme") accessible à l'adresse 
                  <a href="https://wa-catalog.com" className="text-primary-600 hover:text-primary-700 font-semibold"> wa-catalog.com</a>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En accédant et en utilisant la Plateforme, vous acceptez sans réserve les présentes CGU. 
                  Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser la Plateforme.
                </p>
              </div>

              {/* Définitions */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">2. Définitions</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong className="text-gray-900">Plateforme :</strong> Désigne le site web wa-catalog.com et le service 
                    de recherche de produits via WhatsApp.
                  </p>
                  <p>
                    <strong className="text-gray-900">Acheteur :</strong> Toute personne utilisant la Plateforme pour rechercher 
                    et contacter des vendeurs de produits ou services.
                  </p>
                  <p>
                    <strong className="text-gray-900">Vendeur :</strong> Toute personne ou entreprise ayant inscrit ses produits 
                    ou services sur la Plateforme.
                  </p>
                  <p>
                    <strong className="text-gray-900">Utilisateur :</strong> Désigne indifféremment un Acheteur ou un Vendeur.
                  </p>
                  <p>
                    <strong className="text-gray-900">Lead :</strong> Contact établi entre un Acheteur et un Vendeur via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Accès à la plateforme */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Accès à la Plateforme</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    L'accès à la Plateforme est gratuit pour les Acheteurs. La Plateforme est accessible via le site web 
                    wa-catalog.com et le bot WhatsApp wa-catalog.
                  </p>
                  <p>
                    wa-catalog se réserve le droit de modifier, suspendre ou interrompre l'accès à la Plateforme à tout moment 
                    sans préavis, notamment pour des raisons de maintenance, de sécurité ou de mise à jour.
                  </p>
                  <p>
                    L'Utilisateur est responsable de l'utilisation qu'il fait de la Plateforme et s'engage à utiliser celle-ci 
                    conformément aux présentes CGU et à la législation en vigueur.
                  </p>
                </div>
              </div>

              {/* Utilisation par les acheteurs */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. Utilisation par les Acheteurs</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">4.1 Recherche de produits</strong>
                  </p>
                  <p>
                    L'Acheteur peut utiliser la Plateforme pour rechercher des produits ou services. La Plateforme fournit 
                    des informations sur les vendeurs et leurs catalogues, mais n'intervient pas dans la transaction entre 
                    l'Acheteur et le Vendeur.
                  </p>
                  <p>
                    <strong className="text-gray-900">4.2 Contact avec les vendeurs</strong>
                  </p>
                  <p>
                    L'Acheteur peut contacter directement les Vendeurs via WhatsApp. wa-catalog ne garantit pas la disponibilité, 
                    la qualité ou le prix des produits proposés par les Vendeurs.
                  </p>
                  <p>
                    <strong className="text-gray-900">4.3 Responsabilité</strong>
                  </p>
                  <p>
                    L'Acheteur est seul responsable de ses transactions avec les Vendeurs. wa-catalog ne peut être tenu responsable 
                    des litiges survenus entre un Acheteur et un Vendeur.
                  </p>
                </div>
              </div>

              {/* Utilisation par les vendeurs */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Utilisation par les Vendeurs</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">5.1 Inscription</strong>
                  </p>
                  <p>
                    Pour devenir Vendeur, vous devez vous inscrire sur la Plateforme en remplissant le formulaire disponible 
                    ou en contactant l'équipe wa-catalog. L'inscription implique l'acceptation des présentes CGU et des 
                    Conditions Générales de Vente (CGV) spécifiques aux vendeurs.
                  </p>
                  <p>
                    <strong className="text-gray-900">5.2 Obligations du Vendeur</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir des informations exactes et à jour concernant ses produits ou services</li>
                    <li>Respecter les prix annoncés</li>
                    <li>Répondre aux demandes des Acheteurs dans des délais raisonnables</li>
                    <li>Respecter la réglementation en vigueur concernant la vente de ses produits</li>
                    <li>Ne pas proposer de produits interdits ou illégaux</li>
                  </ul>
                  <p>
                    <strong className="text-gray-900">5.3 Commission</strong>
                  </p>
                  <p>
                    Les Vendeurs s'engagent à payer une commission par lead généré via la Plateforme, conformément aux tarifs 
                    en vigueur. Les conditions de paiement sont détaillées dans les CGV vendeurs.
                  </p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">6. Propriété Intellectuelle</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    La Plateforme et l'ensemble de son contenu (textes, images, logos, graphismes, etc.) sont la propriété 
                    exclusive de wa-catalog et sont protégés par les lois relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments 
                    de la Plateforme, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de wa-catalog.
                  </p>
                </div>
              </div>

              {/* Protection des données */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Protection des Données Personnelles</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Les données personnelles collectées sur la Plateforme sont traitées conformément à notre{" "}
                    <a href="/confidentialite" className="text-primary-600 hover:text-primary-700 font-semibold">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                  <p>
                    Conformément à la loi n°2018-09 du 4 mai 2018 portant protection des données à caractère personnel en République du Bénin, 
                    vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
                  </p>
                </div>
              </div>

              {/* Responsabilité */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">8. Limitation de Responsabilité</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    wa-catalog agit en tant qu'intermédiaire technique entre les Acheteurs et les Vendeurs. 
                    wa-catalog ne peut être tenu responsable :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>De la qualité, de la disponibilité ou du prix des produits proposés par les Vendeurs</li>
                    <li>Des transactions réalisées entre les Acheteurs et les Vendeurs</li>
                    <li>Des litiges entre les Acheteurs et les Vendeurs</li>
                    <li>Des dommages directs ou indirects résultant de l'utilisation de la Plateforme</li>
                    <li>Des interruptions ou dysfonctionnements de la Plateforme</li>
                  </ul>
                  <p>
                    L'Utilisateur reconnaît que l'utilisation de la Plateforme se fait à ses propres risques.
                  </p>
                </div>
              </div>

              {/* Modification des CGU */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">9. Modification des CGU</h2>
                <p className="text-gray-700 leading-relaxed">
                  wa-catalog se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur 
                  dès leur publication sur la Plateforme. Il appartient à l'Utilisateur de consulter régulièrement les CGU. 
                  L'utilisation continue de la Plateforme après modification des CGU vaut acceptation des nouvelles conditions.
                </p>
              </div>

              {/* Droit applicable */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">10. Droit Applicable et Juridiction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes CGU sont régies par le droit béninois. Tout litige relatif à l'interprétation ou à l'exécution 
                  des présentes CGU sera soumis aux tribunaux compétents de Cotonou, Bénin.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">11. Contact</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pour toute question concernant les présentes CGU, vous pouvez nous contacter :
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
                    <p>
                      <strong className="text-gray-900">Adresse :</strong> Cotonou, Bénin
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
    </>
  )
}

