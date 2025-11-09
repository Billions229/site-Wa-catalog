import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react"
import SEO from "@/components/SEO"

export default function ConfidentialitePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politique de confidentialité - wa-catalog",
    "description": "Politique de confidentialité de wa-catalog. Informations sur la collecte, le traitement et la protection de vos données personnelles.",
    "url": "https://wa-catalog.com/confidentialite",
  }

  return (
    <>
      <SEO
        title="Politique de confidentialité - wa-catalog"
        description="Politique de confidentialité de wa-catalog. Informations sur la collecte, le traitement et la protection de vos données personnelles conformément à la loi béninoise."
        keywords="confidentialité, protection des données, RGPD, données personnelles, vie privée, wa-catalog"
        canonical="https://wa-catalog.com/confidentialite"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/70 to-primary-800/75" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Politique de confidentialité
              </h1>
              <p className="text-xl text-primary-50 leading-relaxed">
                Protection et traitement de vos données personnelles
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
                    <Lock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Introduction</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  wa-catalog (ci-après "nous", "notre" ou "la Plateforme") s'engage à protéger votre vie privée et vos données personnelles. 
                  La présente politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles 
                  conformément à la loi n°2018-09 du 4 mai 2018 portant protection des données à caractère personnel en République du Bénin.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En utilisant la Plateforme, vous acceptez les pratiques décrites dans cette politique. Si vous n'acceptez pas cette politique, 
                  veuillez ne pas utiliser la Plateforme.
                </p>
              </div>

              {/* Données collectées */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Database className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Données que nous collectons</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">2.1 Données collectées automatiquement</strong>
                  </p>
                  <p>
                    Lors de votre utilisation de la Plateforme, nous collectons automatiquement certaines informations techniques :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Date et heure d'accès</li>
                    <li>Référent (site web d'origine)</li>
                  </ul>
                  
                  <p className="mt-4">
                    <strong className="text-gray-900">2.2 Données que vous nous fournissez</strong>
                  </p>
                  <p>
                    Si vous êtes un Vendeur, nous collectons les informations que vous nous fournissez lors de votre inscription :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Numéro de téléphone WhatsApp</li>
                    <li>Adresse email</li>
                    <li>Informations sur vos produits (catalogue)</li>
                  </ul>
                  
                  <p className="mt-4">
                    <strong className="text-gray-900">2.3 Données collectées via WhatsApp</strong>
                  </p>
                  <p>
                    Lors de l'utilisation du bot WhatsApp wa-catalog, nous collectons les messages échangés et les recherches effectuées 
                    pour améliorer nos services. Ces données sont traitées de manière anonyme et agrégée.
                  </p>
                </div>
              </div>

              {/* Utilisation des données */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Utilisation de vos données</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Nous utilisons vos données personnelles aux fins suivantes :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-gray-900">Fournir et améliorer nos services :</strong> Pour permettre la recherche de produits 
                        et la mise en relation entre Acheteurs et Vendeurs</li>
                    <li><strong className="text-gray-900">Communication :</strong> Pour répondre à vos demandes et vous envoyer des informations 
                        importantes concernant la Plateforme</li>
                    <li><strong className="text-gray-900">Analyses et statistiques :</strong> Pour analyser l'utilisation de la Plateforme et 
                        améliorer nos services (données agrégées et anonymisées)</li>
                    <li><strong className="text-gray-900">Sécurité :</strong> Pour détecter et prévenir la fraude, les abus et les activités 
                        illégales</li>
                    <li><strong className="text-gray-900">Conformité légale :</strong> Pour respecter nos obligations légales et réglementaires</li>
                  </ul>
                </div>
              </div>

              {/* Partage des données */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. Partage de vos données</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos données uniquement dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-gray-900">Avec les Vendeurs :</strong> Lorsqu'un Acheteur contacte un Vendeur via WhatsApp, 
                        le numéro du Vendeur est communiqué à l'Acheteur (et vice versa pour le contact)</li>
                    <li><strong className="text-gray-900">Prestataires de services :</strong> Nous pouvons partager vos données avec des prestataires 
                        de services qui nous aident à exploiter la Plateforme (hébergement, analytics), sous réserve qu'ils respectent 
                        cette politique de confidentialité</li>
                    <li><strong className="text-gray-900">Obligations légales :</strong> Si la loi l'exige ou si nous estimons de bonne foi 
                        que la divulgation est nécessaire pour protéger nos droits ou ceux de tiers</li>
                  </ul>
                </div>
              </div>

              {/* Conservation des données */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Conservation de vos données</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités décrites dans cette politique, 
                    sauf si une période de conservation plus longue est requise ou autorisée par la loi.
                  </p>
                  <p>
                    Les données des Vendeurs sont conservées pendant toute la durée de leur inscription sur la Plateforme, puis pendant une 
                    période maximale de 3 ans après la fin de leur inscription, sauf obligation légale de conservation plus longue.
                  </p>
                  <p>
                    Les données de navigation et d'utilisation sont conservées pour une durée maximale de 2 ans.
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Sécurité de vos données</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre 
                    l'accès non autorisé, la perte, la destruction ou l'altération.
                  </p>
                  <p>
                    Cependant, aucun système de transmission ou de stockage électronique n'est totalement sécurisé. Bien que nous nous efforcions 
                    de protéger vos données, nous ne pouvons garantir une sécurité absolue.
                  </p>
                </div>
              </div>

              {/* Vos droits */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <UserCheck className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Vos droits</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Conformément à la loi n°2018-09 du 4 mai 2018, vous disposez des droits suivants concernant vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-gray-900">Droit d'accès :</strong> Vous avez le droit d'obtenir une copie de vos données personnelles</li>
                    <li><strong className="text-gray-900">Droit de rectification :</strong> Vous avez le droit de corriger vos données inexactes ou incomplètes</li>
                    <li><strong className="text-gray-900">Droit à l'effacement :</strong> Vous avez le droit de demander la suppression de vos données 
                        dans certains cas</li>
                    <li><strong className="text-gray-900">Droit d'opposition :</strong> Vous avez le droit de vous opposer au traitement de vos données 
                        pour des motifs légitimes</li>
                    <li><strong className="text-gray-900">Droit à la portabilité :</strong> Vous avez le droit de recevoir vos données dans un format 
                        structuré et couramment utilisé</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, vous pouvez nous contacter à{" "}
                    <a href="mailto:support@wa-catalog.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                      support@wa-catalog.com
                    </a>
                    . Nous répondrons à votre demande dans un délai raisonnable.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">8. Cookies et technologies similaires</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur la Plateforme. 
                    Pour plus d'informations, consultez notre{" "}
                    <a href="/cookies" className="text-primary-600 hover:text-primary-700 font-semibold">
                      politique de cookies
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Modifications */}
              <div className="mb-12 border-t border-gray-200 pt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">9. Modifications de cette politique</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur 
                  publication sur la Plateforme. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance 
                  des éventuelles modifications.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">10. Contact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :
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

