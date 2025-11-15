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
        "Commence par un message simple : \"Bonjour, comment ça marche ?\"",
        "Le bot t'explique chaque étape pour avancer",
        "Formule ta demande, par exemple : \"Je cherche un iPhone 13\"",
        "Le bot comprend et classe ta requête automatiquement",
        "Tu évites les centaines de statuts à parcourir sans résultat",
        "La recherche devient ciblée plutôt que du fouillage"
      ]
    },
    {
      number: 3,
      title: "Précise tes besoins",
      description: "Le bot te demande plus de détails pour trouver exactement ce qui te correspond",
      icon: Search,
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop",
      details: [
        "Le bot te demande dans quelle ville tu te trouves (exemple : Cotonou)",
        "Il vérifie si tu souhaites une livraison ou un retrait",
        "Tu précises ton budget, par exemple 450 000 FCFA",
        "Tu indiques si tu préfères du neuf ou de l'occasion"
      ]
    },
    {
      number: 4,
      title: "Reçois la liste de produits",
      description: "Le bot t'envoie les produits correspondants avec photos, prix et contacts vendeurs",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
      details: [
        "Tu reçois des photos réelles des produits",
        "Les prix sont affichés clairement en FCFA",
        "La localisation des vendeurs est indiquée",
        "Le bot fournit le lien WhatsApp direct de chaque vendeur",
        "La réponse globale arrive en moins de 30 secondes"
      ]
    },
    {
      number: 5,
      title: "Contacte le vendeur",
      description: "Clique sur le lien du vendeur qui t'intéresse et finalise ton achat directement avec lui",
      icon: Users,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      details: [
        "Les vendeurs proposés sont vérifiés par wa-catalog",
        "La discussion se poursuit directement sur WhatsApp",
        "Tu peux négocier les conditions avec le vendeur",
        "Vous décidez ensemble du mode de livraison ou de retrait",
        "Le paiement se finalise selon la méthode convenue"
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
        "Si tu possèdes déjà un catalogue WhatsApp Business, remplis directement le formulaire",
        "Indique ton numéro WhatsApp et le lien exact de ton catalogue",
        "Pas encore de catalogue ? Contacte l'équipe au +229 99 32 30 73",
        "Profite de l'offre de lancement gratuite pour les 50 premiers vendeurs",
        "Accède ensuite aux campagnes publicitaires mutualisées (Facebook et Google)"
      ]
    },
    {
      number: 2,
      title: "Validation du catalogue",
      description: "Notre équipe examine ton catalogue et l'indexe dans le bot",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      details: [
        "Nous vérifions la qualité des produits et la cohérence des informations",
        "Nous confirmons que tes articles respectent les catégories acceptées",
        "Ton catalogue est indexé dans le bot sous 24 à 48 heures",
        "Tu reçois un message de confirmation par WhatsApp",
        "Nous créons ta page SEO sur wa-catalog.com pour renforcer ta visibilité",
        "Tes fiches sont indexées par les moteurs IA (ChatGPT, Gemini, etc.)"
      ]
    },
    {
      number: 3,
      title: "Optimise tes fiches produits",
      description: "Améliore la visibilité de tes produits avec de bonnes pratiques",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      details: [
        "Ajoute des photos haute définition prises sous plusieurs angles",
        "Rédige des descriptions détaillées (état, accessoires, garantie)",
        "Maintiens des prix compétitifs et mis à jour",
        "Utilise des mots-clés pertinents dans chaque titre",
        "Actualise ton stock régulièrement",
        "Collecte des avis clients audio ou vidéo pour ton capital confiance",
        "Prépare les informations nécessaires pour les articles sponsorisés (Top 10, guides d'achat)"
      ]
    },
    {
      number: 4,
      title: "Reçois des clients qualifiés",
      description: "Les acheteurs intéressés par tes produits te contactent directement",
      icon: Users,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      details: [
        "Tu reçois une notification WhatsApp pour chaque lead transmis",
        "Les prospects sont déjà qualifiés par l'IA et intéressés par tes produits",
        "La discussion se tient directement avec l'acheteur",
        "Le taux de conversion augmente grâce à la précision des recommandations",
        "Tu payes uniquement pour les contacts reçus",
        "Les clients te trouvent instantanément sans passer par les statuts",
        "Les services d'urgence restent disponibles à toute heure"
      ]
    },
    {
      number: 5,
      title: "Analyse tes performances",
      description: "Reçois des statistiques hebdomadaires pour optimiser tes ventes",
      icon: BadgeCheck,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      details: [
        "Tu reçois un rapport WhatsApp chaque semaine",
        "Il présente le nombre de vues générées par tes produits",
        "Il récapitule les clics et les contacts obtenus",
        "Tu identifies les produits les plus recherchés",
        "Le badge \"Vendeur Vérifié\" s'obtient après de bonnes performances",
        "Les avis clients sont regroupés pour cultiver ton capital confiance digital",
        "Un lien personnalisé t'aide à collecter de nouveaux avis"
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

