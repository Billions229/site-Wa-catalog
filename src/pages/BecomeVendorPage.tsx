import { useState } from "react"
import {
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  MessageCircle,
  ClipboardList,
  FileText,
  CheckCircle2,
  Star,
  Zap,
  Target,
  DollarSign,
  Clock,
  Award,
  HelpCircle,
  Globe,
  Handshake
} from "lucide-react"
import SEO from "@/components/SEO"
import { PricingTable } from "@/components/ui/pricing-table"
import type { PricingFeature, PricingPlan } from "@/components/ui/pricing-table"

export default function BecomeVendorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "pro" | "all" | string>("pro")

  const handleWhatsAppClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  const handleTeamContact = () => {
    window.open("https://wa.me/22999323073", "_blank", "noopener,noreferrer")
  }

  const handleFormClick = () => {
    window.open("https://kloo.me/vendeur-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  const handleStartPlan = () => {
    if (selectedPlan === "all") {
      // Pay-by-Lead - rediriger vers le formulaire
      handleFormClick()
    } else {
      // Autres plans - rediriger vers WhatsApp pour discuter avec l'équipe
      handleTeamContact()
    }
  }

  const pillars = [
    {
      icon: TrendingUp,
      title: "Génération de leads mutualisée",
      description: "Nous finançons des campagnes digitales ciblées, le bot qualifie la demande et t'envoie seulement des acheteurs sérieux.",
      impact: "Leads chauds livrés"
    },
    {
      icon: Globe,
      title: "Visibilité organique durable",
      description: "Chaque produit obtient une page SEO dédiée indexée sur Google et par les IA conversationnelles pour capter les recherches locales.",
      impact: "Visites 24/7"
    },
    {
      icon: Shield,
      title: "Capital confiance numérique",
      description: "Collecte d'avis texte, audio ou vidéo, badges Vérifié et suivi de performance renforcent ta crédibilité instantanément.",
      impact: "Confiance prouvée"
    },
    {
      icon: Handshake,
      title: "Partenariats marketing premium",
      description: "Articles sponsorisés, placements éditoriaux et campagnes co-brandées pour pousser tes meilleures offres au-dessus de la concurrence.",
      impact: "Boost de notoriété"
    },
    {
      icon: Zap,
      title: "Expérience WhatsApp sans friction",
      description: "Fini la pollution des statuts : le bot répond en langage naturel en moins de 30 secondes avec la bonne recommandation produit.",
      impact: "Réponse ultra-rapide"
    },
    {
      icon: Users,
      title: "Indexation des services locaux",
      description: "Des artisans au dépannage d'urgence, tu restes visible quand la demande est critique, même la nuit ou le week-end.",
      impact: "Demande continue"
    }
  ]

  const pricingFeatures: PricingFeature[] = [
    { name: "Produits référencés", included: "starter" },
    { name: "Leads offerts", included: "starter" },
    { name: "Visibilité recherche", included: "all" },
    { name: "Position prioritaire", included: "pro" },
    { name: "Badge vendeur vérifié", included: "pro" },
    { name: "Statistiques basiques", included: "all" },
    { name: "Analytics avancées", included: "pro" },
    { name: "Notifications temps réel", included: "pro" },
    { name: "Support prioritaire 24/7", included: "pro" },
    { name: "Catalogue WhatsApp Business", included: "all" },
    { name: "Accès bot wa-catalog", included: "all" },
    { name: "Sans engagement", included: "all" },
  ]

  const pricingPlans: PricingPlan[] = [
    {
      name: "Gratuit",
      price: { monthly: 0, yearly: 0 },
      level: "starter",
    },
    {
      name: "Business",
      price: { monthly: 10000, yearly: 100000 },
      level: "pro",
      popular: true,
    },
    {
      name: "Pay-by-Lead",
      price: { monthly: 0, yearly: 0 },
      level: "all",
    },
  ]

  const addons = [
    {
      name: "Setup Pro",
      price: "10 000 FCFA",
      description: "L'équipe wa-catalog crée et optimise ton catalogue"
    },
    {
      name: "Badge Vendeur Vérifié",
      price: "25 000 FCFA / an",
      description: "Audit + certification pour plus de confiance"
    }
  ]

  const categories = [
    "Électronique",
    "Mode & Beauté",
    "Maison & Déco",
    "Auto & Moto",
    "Alimentation",
    "Formations & Cours",
    "Livres & E-books",
    "Services Divers"
  ]

  const faqs = [
    {
      question: "Comment fixer mes prix ?",
      answer: "Compare les prix moyens sur WhatsApp et wa-catalog, puis reste compétitif (environ ±10%)."
    },
    {
      question: "Puis-je masquer mon numéro ?",
      answer: "Non, le contact direct est essentiel pour l'acheteur. Utilise ton numéro Business."
    },
    {
      question: "Comment obtenir le badge 'Vendeur Vérifié' ?",
      answer: "Envoie un justificatif d'activité + photos HD, et réponds sous 2h aux acheteurs."
    },
    {
      question: "Puis-je vendre de la nourriture ?",
      answer: "Oui, si tu respectes les normes d'hygiène et indiques ingrédients et allergènes."
    },
    {
      question: "Comment est calculé mon pourcentage de commission ?",
      answer: "Basé sur ta catégorie, ton panier moyen, et le volume de leads mensuel. Tu peux négocier avec notre équipe."
    },
    {
      question: "Puis-je changer de plan ?",
      answer: "Oui. Contacte simplement notre équipe via WhatsApp +229 99 32 30 73 pour passer à un plan supérieur ou inférieur (prorata appliqué)."
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non. Hors commission par lead et abonnements optionnels, aucun frais supplémentaire."
    },
    {
      question: "Comment suivre mes leads ?",
      answer: "Chaque lead = clic unique sur ton lien WhatsApp. Chaque lundi, nous t'envoyons un rapport détaillé (date, produit recherché, ville client)."
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Devenir Vendeur - wa-catalog",
    "description": "Rejoignez la communauté des vendeurs wa-catalog. Inscription simple, tarifs transparents, clients qualifiés. Commission par lead uniquement.",
    "url": "https://wa-catalog.com/devenir-vendeur",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  return (
    <>
      <SEO
        title="Devenir Vendeur - wa-catalog | Rejoignez la première marketplace WhatsApp au Bénin"
        description="Rejoignez la communauté des vendeurs wa-catalog. Inscription simple en 2 étapes, tarifs transparents (commission par lead), clients qualifiés, statistiques hebdomadaires. Gratuit pour les 50 premiers vendeurs."
        keywords="devenir vendeur, inscription vendeur wa-catalog, vendre sur WhatsApp, commission par lead, marketplace Bénin, vendeur vérifié, kloo.me/vendeur-wa-catalogue"
        canonical="https://wa-catalog.com/devenir-vendeur"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 overflow-hidden">
          {/* Images en arrière-plan */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop&auto=format"
                  alt="Boutique mode avec vêtements et textiles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=600&fit=crop&auto=format"
                  alt="Personne utilisant un ordinateur portable avec carte"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=600&fit=crop&auto=format"
                  alt="Shopping et e-commerce"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=600&fit=crop&auto=format"
                  alt="Personne tenant un smartphone"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30 shadow-2xl">
                <Award className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                Rejoins l'écosystème vendeur wa-catalog
              </h1>
              <p className="text-xl md:text-2xl text-primary-50 mb-8 leading-relaxed">
                La première marketplace WhatsApp au Bénin qui mutualise le marketing, te donne une présence SEO et digitalise ta réputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleFormClick}
                  className="inline-flex items-center gap-3 bg-white hover:bg-primary-50 text-primary-700 px-8 py-4 rounded-xl font-extrabold text-lg transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 group"
                >
                  <ClipboardList className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  S'inscrire maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleTeamContact}
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-xl font-extrabold text-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Parler à l'équipe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Avantages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Les 6 piliers qui boostent ton activité
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un écosystème complet imaginé pour structurer le commerce informel africain et sécuriser ta croissance, du lead à la rétention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-xl mb-6 text-white">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {pillar.impact}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Processus d'inscription */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Comment s'inscrire ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deux parcours simples selon ta situation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Cas 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-primary-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Tu as déjà un catalogue WhatsApp Business
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  C'est le moyen le plus rapide pour commencer à recevoir des clients.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rends-toi sur le formulaire d'inscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Remplis les champs (nom, numéro WhatsApp, lien catalogue)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Notre équipe valide et t'envoie une confirmation sous 24-48h</span>
                  </li>
                </ul>
                <button
                  onClick={handleFormClick}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Remplir le formulaire
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Cas 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-accent-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent-500 text-white rounded-full font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Tu n'as pas encore de catalogue
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pas de problème, nous t'aidons à créer ton catalogue et à démarrer.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contacte notre équipe directement par WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Explique-nous ce que tu vends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Nous t'accompagnons pour créer ton catalogue</span>
                  </li>
                </ul>
                <button
                  onClick={handleTeamContact}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contacter l'équipe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Offre lancement */}
            <div className="mt-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Star className="w-8 h-8" />
                <h3 className="text-3xl font-extrabold">Offre de lancement</h3>
              </div>
              <p className="text-xl mb-2 font-semibold">
                Inscription gratuite pour les 50 premiers vendeurs
              </p>
              <p className="text-accent-100">
                Aucune commission les 30 premiers leads + Accès Business à -50% pendant 3 mois
              </p>
            </div>
          </div>
        </section>

        {/* Tarification */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Tarifs transparents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Commission par lead uniquement. Tu gardes 100% de tes profits sur les ventes.
              </p>
            </div>

            <PricingTable
              features={pricingFeatures}
              plans={pricingPlans}
              defaultPlan="pro"
              defaultInterval="monthly"
              onPlanSelect={(plan) => {
                setSelectedPlan(plan)
              }}
              containerClassName="py-0"
              buttonClassName="bg-primary-500 hover:bg-primary-600"
              showButton={false}
            />

            {/* Bouton personnalisé pour commencer */}
            <div className="mt-8 text-center">
              <button
                onClick={handleStartPlan}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Commencer avec {pricingPlans.find((p) => p.level === selectedPlan)?.name}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Add-ons */}
            <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 max-w-4xl mx-auto mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add-ons Premium</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addons.map((addon, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h4>
                    <p className="text-primary-600 font-bold mb-2">{addon.price}</p>
                    <p className="text-gray-600 text-sm">{addon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Catégories acceptées */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Catégories acceptées
              </h2>
              <p className="text-xl text-gray-600">
                Nous acceptons une large gamme de produits et services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-primary-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <p className="font-semibold text-gray-900">{category}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 max-w-4xl mx-auto">
              <h4 className="font-bold text-red-900 mb-2">Produits interdits</h4>
              <p className="text-red-700 text-sm">
                Médicaments sans autorisation, armes, contrefaçons, substances illégales, produits périmés.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <HelpCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600">
                Tout ce que tu dois savoir avant de t'inscrire
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <div className={`flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}>
                      <ArrowRight className="w-5 h-5 text-primary-600" />
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
              Prêt à booster tes ventes ?
            </h2>
            <p className="text-xl text-primary-50 mb-10 leading-relaxed">
              Rejoins des centaines de vendeurs qui ont déjà multiplié leurs ventes grâce à wa-catalog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleFormClick}
                className="inline-flex items-center gap-3 bg-white hover:bg-primary-50 text-primary-700 px-10 py-5 rounded-xl font-extrabold text-xl transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 group"
              >
                <ClipboardList className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                S'inscrire maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleTeamContact}
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-10 py-5 rounded-xl font-extrabold text-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-7 h-7" />
                Parler à l'équipe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

