import { useState, useRef } from "react"
import { 
  MessageCircle, 
  Smartphone, 
  Search, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ShoppingBag,
  ClipboardList,
  BarChart3,
  BadgeCheck,
  FileText,
  HeadphonesIcon
} from "lucide-react"
import SEO from "@/components/SEO"

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer")
  const stepsSectionRef = useRef<HTMLDivElement>(null)

  const handleWhatsAppClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  const handleTabChange = (tab: "buyer" | "seller") => {
    setActiveTab(tab)
    // Délai pour permettre au changement de contenu de se faire
    setTimeout(() => {
      if (stepsSectionRef.current) {
        const headerHeight = 80 // Hauteur approximative du header pour compenser
        const yOffset = stepsSectionRef.current.getBoundingClientRect().top + window.pageYOffset - headerHeight
        window.scrollTo({
          top: yOffset,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const buyerSteps = [
    {
      number: 1,
      title: "Ouvre WhatsApp",
      description: "Clique sur le lien pour démarrer une conversation avec notre bot intelligent",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      action: (
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Discuter avec le bot
        </button>
      ),
      details: [
        "Le lien ouvre automatiquement WhatsApp",
        "Sur mobile : l'app WhatsApp se lance",
        "Sur PC : WhatsApp Web s'ouvre",
        "Aucune installation requise"
      ]
    },
    {
      number: 2,
      title: "Discute naturellement",
      description: "Commence par des salutations, pose des questions sur le fonctionnement, puis demande ce que tu cherches",
      icon: MessageCircle,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      details: [
        "💬 \"Bonjour, comment ça marche ?\"",
        "🤖 Le bot t'explique son fonctionnement",
        "🔍 \"Je cherche un iPhone 13\"",
        "📱 Le bot comprend ta demande"
      ]
    },
    {
      number: 3,
      title: "Précise tes besoins",
      description: "Le bot te demande plus de détails pour trouver exactement ce qui te correspond",
      icon: Search,
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop",
      details: [
        "🏙️ Dans quelle ville ? (ex: Cotonou)",
        "🚚 Livraison souhaitée ? (Oui/Non)",
        "💰 Quel est ton budget ? (ex: 450 000 FCFA)",
        "📦 État préféré ? (Neuf/Occasion)"
      ]
    },
    {
      number: 4,
      title: "Reçois la liste de produits",
      description: "Le bot t'envoie les produits correspondants avec photos, prix et contacts vendeurs",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
      details: [
        "📸 Photos réelles des produits",
        "💵 Prix clairs en FCFA",
        "📍 Localisation des vendeurs",
        "📞 Numéros WhatsApp directs",
        "⏱️ Réponse en moins de 30 secondes"
      ]
    },
    {
      number: 5,
      title: "Contacte le vendeur",
      description: "Clique sur le lien du vendeur qui t'intéresse et finalise ton achat directement avec lui",
      icon: Users,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      details: [
        "✅ Vendeurs vérifiés par wa-catalog",
        "💬 Discussion directe sur WhatsApp",
        "🤝 Négociation possible avec le vendeur",
        "📦 Conviens du mode de livraison/retrait",
        "💳 Finalise le paiement avec le vendeur"
      ]
    }
  ]

  const sellerSteps = [
    {
      number: 1,
      title: "Inscription rapide",
      description: "Remplis le formulaire en ligne ou contacte notre équipe WhatsApp",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1554224311-beee416734ff?w=800&h=600&fit=crop",
      action: (
        <div className="flex flex-col gap-3">
          <a
            href="https://kloo.me/vendeur-wa-catalogue"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <ClipboardList className="w-5 h-5" />
            Remplir le formulaire
          </a>
          <a
            href="https://wa.me/22999323073"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:text-primary-700"
          >
            <MessageCircle className="w-5 h-5" />
            Contacter l'équipe
          </a>
        </div>
      ),
      details: [
        "✅ Si tu as déjà un catalogue WhatsApp Business : Remplis le formulaire",
        "📱 Fournis ton numéro WhatsApp et le lien de ton catalogue",
        "🆕 Pas de catalogue ? Contacte l'équipe au +229 99 32 30 73",
        "🎁 Offre lancement : Gratuit pour les 50 premiers vendeurs"
      ]
    },
    {
      number: 2,
      title: "Validation du catalogue",
      description: "Notre équipe examine ton catalogue et l'indexe dans le bot",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      details: [
        "🔍 Vérification de la qualité des produits",
        "✅ Validation des catégories acceptées",
        "⚡ Indexation dans le bot (24-48h)",
        "📧 Message de confirmation par WhatsApp"
      ]
    },
    {
      number: 3,
      title: "Optimise tes fiches produits",
      description: "Améliore la visibilité de tes produits avec de bonnes pratiques",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      details: [
        "📸 Photos HD avec plusieurs angles",
        "📝 Descriptions détaillées (état, accessoires, garantie)",
        "💰 Prix compétitifs et à jour",
        "🏷️ Mots-clés pertinents dans les titres",
        "🔄 Mises à jour régulières du stock"
      ]
    },
    {
      number: 4,
      title: "Reçois des clients qualifiés",
      description: "Les acheteurs intéressés par tes produits te contactent directement",
      icon: Users,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      details: [
        "📲 Notifications WhatsApp pour chaque lead",
        "👥 Clients déjà intéressés par tes produits",
        "💬 Discussion directe avec les acheteurs",
        "🎯 Taux de conversion élevé",
        "💰 Paie uniquement pour les contacts reçus"
      ]
    },
    {
      number: 5,
      title: "Analyse tes performances",
      description: "Reçois des statistiques hebdomadaires pour optimiser tes ventes",
      icon: BadgeCheck,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      details: [
        "📊 Rapport WhatsApp chaque semaine",
        "👀 Nombre de vues de tes produits",
        "📈 Clics et contacts générés",
        "🏆 Produits les plus recherchés",
        "⭐ Badge \"Vendeur Vérifié\" après bonnes performances"
      ]
    }
  ]

  const steps = activeTab === "buyer" ? buyerSteps : sellerSteps

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: activeTab === "buyer" ? "Comment acheter sur wa-catalog" : "Comment vendre sur wa-catalog",
    description: activeTab === "buyer" 
      ? "Guide complet pour acheter des produits via le bot WhatsApp wa-catalog"
      : "Guide complet pour devenir vendeur sur wa-catalog et vendre via WhatsApp",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  }

  return (
    <>
      <SEO
        title="Comment ça marche"
        description="Découvre comment acheter ou vendre sur wa-catalog. Guide complet en 5 étapes simples pour acheteurs et vendeurs au Bénin."
        keywords="comment ça marche, guide acheteur, guide vendeur, wa-catalog tutoriel, acheter whatsapp, vendre whatsapp"
        canonical="https://wa-catalog.com/comment-ca-marche"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div 
          className="relative text-white py-20 overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay avec gradient pour assurer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-primary-600/85 to-primary-700/90 backdrop-blur-[1px]"></div>
          
          {/* Contenu */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300">
                <HeadphonesIcon className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                Comment ça marche ?
              </h1>
              <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
                5 étapes simples pour acheter ou vendre sur wa-catalog, la première marketplace WhatsApp au Bénin
              </p>
            </div>

            {/* Tabs intégrés dans le header */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 pb-4">
              <button
                onClick={() => handleTabChange("buyer")}
                className={`w-full sm:w-auto min-w-[280px] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ease-in-out transform relative overflow-hidden group border-2 ${
                  activeTab === "buyer"
                    ? "bg-white text-primary-600 border-white shadow-2xl scale-105"
                    : "bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                }`}
              >
                {/* Effet de brillance au hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${activeTab === "buyer" ? "translate-x-full" : ""}`}></div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeTab === "buyer" 
                      ? "bg-primary-100 text-primary-600" 
                      : "bg-white/20 text-white"
                  }`}>
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="font-extrabold">Pour les Acheteurs</span>
                </div>
              </button>
              
              <button
                onClick={() => handleTabChange("seller")}
                className={`w-full sm:w-auto min-w-[280px] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ease-in-out transform relative overflow-hidden group border-2 ${
                  activeTab === "seller"
                    ? "bg-white text-primary-600 border-white shadow-2xl scale-105"
                    : "bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                }`}
              >
                {/* Effet de brillance au hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${activeTab === "seller" ? "translate-x-full" : ""}`}></div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeTab === "seller" 
                      ? "bg-primary-100 text-primary-600" 
                      : "bg-white/20 text-white"
                  }`}>
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <span className="font-extrabold">Pour les Vendeurs</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-white z-10">
                        {step.number}
                      </div>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-gray-200"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-primary-200 z-10">
                        <IconComponent className="w-12 h-12 text-primary-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary-500">
                      <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {step.action && (
                        <div className="mb-6">
                          {step.action}
                        </div>
                      )}

                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 leading-relaxed font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
              {activeTab === "buyer" ? "Prêt à trouver ton produit ?" : "Prêt à booster tes ventes ?"}
            </h2>
            <p className="text-xl text-primary-50 mb-10 leading-relaxed">
              {activeTab === "buyer" 
                ? "Démarre une conversation avec notre bot et trouve ce que tu cherches en moins de 30 secondes"
                : "Inscris-toi maintenant et commence à recevoir des clients qualifiés dès demain"}
            </p>
            {activeTab === "buyer" ? (
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 bg-white hover:bg-primary-50 text-primary-700 px-10 py-5 rounded-xl font-extrabold text-xl transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 group"
              >
                <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                Discuter avec le bot maintenant
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://kloo.me/vendeur-wa-catalogue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-primary-50 text-primary-700 px-10 py-5 rounded-xl font-extrabold text-xl transition-all shadow-2xl hover:shadow-white/30 hover:scale-105"
                >
                  <ClipboardList className="w-7 h-7" />
                  S'inscrire maintenant
                </a>
                <a
                  href="https://wa.me/22999323073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-10 py-5 rounded-xl font-extrabold text-xl transition-all hover:scale-105"
                >
                  <MessageCircle className="w-7 h-7" />
                  Parler à l'équipe
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

