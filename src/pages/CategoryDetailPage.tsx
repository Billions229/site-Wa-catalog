import { useParams, Link } from "react-router-dom"
import {
  MessageCircle,
  AlertCircle,
  CheckCircle,
  Smartphone,
  Shirt,
  Home,
  Car,
  UtensilsCrossed,
  GraduationCap,
  BookOpen,
  Wrench,
  ArrowRight,
  ShoppingBag,
  BadgeCheck,
} from "lucide-react"
import SEO from "@/components/SEO"

const categoryData: Record<string, any> = {
  electronique: {
    name: "Électronique",
    icon: Smartphone,
    description: "Téléphones, ordinateurs, accessoires tech, consoles de jeux et bien plus",
    longDescription: "Trouve les meilleurs prix sur les smartphones, ordinateurs portables, tablettes, consoles de jeux et tous les accessoires tech dont tu as besoin. Des vendeurs vérifiés partout au Bénin.",
    color: "from-blue-600 to-blue-700",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-600",
    bgLight: "bg-blue-50",
    image: "/samsung-galaxy-s23-ultra.png",
    images: ["/iphone-13-pro-blue.jpg", "/macbook-air-m2.png", "/airpods-pro-2.png", "/playstation-5-console.png"],
    subcategories: [
      "Téléphones & Smartphones",
      "Ordinateurs & Laptops",
      "Tablettes",
      "Accessoires (écouteurs, chargeurs, coques)",
      "Jeux vidéo & Consoles",
      "Appareils photo & Caméras",
      "Montres connectées",
      "TV & Home Cinéma",
    ],
    tips: [
      "Vérifier l'état (neuf/occasion) et demander des photos détaillées",
      "Demander la garantie restante et les documents d'achat",
      "Vérifier les numéros IMEI pour les téléphones",
      "Tester l'appareil avant l'achat si possible",
      "Comparer les prix entre plusieurs vendeurs",
    ],
    forbidden: [
      "Produits contrefaits ou répliques",
      "Appareils volés ou d'origine douteuse",
      "Produits sans facture d'origine (pour le neuf)",
    ],
    seoKeywords: "téléphone bénin, ordinateur cotonou, smartphone occasion, laptop neuf, console ps5, iphone bénin",
  },
  "mode-beaute": {
    name: "Mode & Beauté",
    icon: Shirt,
    description: "Vêtements tendance, chaussures, sacs, bijoux et produits de beauté",
    longDescription: "Découvre les dernières tendances mode, les marques internationales et locales, les accessoires fashion et les produits de beauté authentiques. Exprime ton style unique.",
    color: "from-pink-600 to-pink-700",
    borderColor: "border-pink-500",
    textColor: "text-pink-600",
    bgColor: "bg-pink-600",
    bgLight: "bg-pink-50",
    image: "/leather-handbag-brown.jpg",
    images: ["/nike-air-max-270.png", "/african-wax-dress.jpg", "/dior-sauvage-perfume.jpg"],
    subcategories: [
      "Vêtements homme",
      "Vêtements femme",
      "Chaussures & Sneakers",
      "Sacs & Accessoires",
      "Bijoux & Montres",
      "Cosmétiques & Parfums",
      "Produits de beauté",
      "Vêtements africains",
    ],
    tips: [
      "Prendre des photos de qualité sous plusieurs angles",
      "Indiquer les tailles précises (guide des tailles)",
      "Mentionner la marque et l'authenticité",
      "Préciser l'état et signaler les défauts éventuels",
      "Offrir la possibilité d'essayage pour les vêtements",
    ],
    forbidden: ["Produits contrefaits", "Cosmétiques périmés", "Produits sans autorisation sanitaire"],
    seoKeywords: "mode bénin, vêtements cotonou, chaussures nike, sac à main, parfum, cosmétique bénin",
  },
  "maison-deco": {
    name: "Maison & Déco",
    icon: Home,
    description: "Meubles modernes, décoration, électroménager et ustensiles de cuisine",
    longDescription: "Équipe ta maison avec des meubles de qualité, de la décoration unique et les meilleurs électroménagers. Transforme ton intérieur à petit prix.",
    color: "from-amber-600 to-amber-700",
    borderColor: "border-amber-500",
    textColor: "text-amber-600",
    bgColor: "bg-amber-600",
    bgLight: "bg-amber-50",
    image: "/grey-fabric-sofa.jpg",
    images: ["/dining-table-6-chairs.jpg", "/samsung-refrigerator.png"],
    subcategories: [
      "Meubles (salon, chambre, bureau)",
      "Décoration intérieure",
      "Électroménager",
      "Ustensiles de cuisine",
      "Literie",
      "Luminaires",
      "Rangement",
      "Jardin & Extérieur",
    ],
    tips: [
      "Indiquer les dimensions exactes (L x l x H)",
      "Préciser les matériaux utilisés",
      "Mentionner l'état et le fonctionnement",
      "Fournir photos dans un environnement réel",
      "Informer sur la livraison et le montage",
    ],
    forbidden: ["Appareils électriques dangereux", "Produits non conformes aux normes"],
    seoKeywords: "meuble bénin, canapé cotonou, réfrigérateur, décoration, électroménager bénin",
  },
  "auto-moto": {
    name: "Auto & Moto",
    icon: Car,
    description: "Véhicules d'occasion et neufs, pièces détachées, pneus et accessoires",
    longDescription: "Achète ou vends des véhicules en toute sécurité. Trouve des pièces détachées authentiques et des accessoires pour ton auto ou ta moto.",
    color: "from-red-600 to-red-700",
    borderColor: "border-red-500",
    textColor: "text-red-600",
    bgColor: "bg-red-600",
    bgLight: "bg-red-50",
    image: "/toyota-corolla-2018.jpg",
    images: ["/yamaha-r15-motorcycle.jpg", "/michelin-car-tires.jpg"],
    subcategories: [
      "Voitures",
      "Motos & Scooters",
      "Pièces détachées",
      "Pneus",
      "Batteries",
      "Accessoires auto",
      "Équipements moto",
      "GPS & Électronique embarquée",
    ],
    tips: [
      "Indiquer l'année, le kilométrage et l'historique",
      "Fournir le carnet d'entretien si disponible",
      "Photos de tous les angles et de l'intérieur",
      "Mentionner les réparations et pièces changées",
      "Proposer un essai routier pour les véhicules",
    ],
    forbidden: ["Véhicules volés", "Véhicules sans papiers valides", "Pièces de provenance douteuse"],
    seoKeywords: "voiture bénin, auto occasion cotonou, moto yamaha, pièce auto, pneu michelin bénin",
  },
  alimentation: {
    name: "Alimentation",
    icon: UtensilsCrossed,
    description: "Plats cuisinés, services traiteur, produits frais et épicerie locale",
    longDescription: "Commande des plats délicieux préparés par des chefs locaux, trouve des traiteurs pour tes événements et achète des produits frais de qualité.",
    color: "from-green-600 to-green-700",
    borderColor: "border-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-600",
    bgLight: "bg-green-50",
    image: "/attieke-grilled-fish.jpg",
    images: ["/birthday-cake-custom.jpg", "/pineapple-ginger-juice.jpg"],
    subcategories: [
      "Plats cuisinés",
      "Services traiteur",
      "Produits frais",
      "Épicerie",
      "Boissons & Jus naturels",
      "Pâtisserie & Gâteaux",
      "Produits bio",
      "Spécialités africaines",
    ],
    tips: [
      "Respecter les normes d'hygiène strictes",
      "Lister tous les ingrédients",
      "Indiquer les allergènes potentiels",
      "Préciser la date de préparation/péremption",
      "Prendre des photos appétissantes",
    ],
    forbidden: ["Produits périmés", "Produits impropres", "Alcool (selon réglementation)"],
    seoKeywords: "plat cuisiné bénin, traiteur cotonou, gâteau, restaurant, nourriture africaine",
  },
  "formations-cours": {
    name: "Formations & Cours",
    icon: GraduationCap,
    description: "Cours de soutien, formations professionnelles et coaching business",
    longDescription: "Développe tes compétences avec des formations de qualité, du soutien scolaire personnalisé et du coaching professionnel par des experts.",
    color: "from-purple-600 to-purple-700",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-600",
    bgLight: "bg-purple-50",
    image: "/excel-training-course.jpg",
    images: ["/math-tutoring.png", "/digital-marketing-ebooks.jpg"],
    subcategories: [
      "Cours de soutien scolaire",
      "Formations professionnelles",
      "Coaching business",
      "Cours de langues",
      "Formations informatiques",
      "Développement personnel",
      "Préparation aux examens",
      "Formation en ligne",
    ],
    tips: [
      "Détailler le programme et les objectifs",
      "Préciser la durée et les horaires",
      "Indiquer les tarifs clairement",
      "Mentionner tes qualifications",
      "Partager des témoignages si disponibles",
    ],
    forbidden: ["Formations sans certification", "Promesses irréalistes"],
    seoKeywords: "formation bénin, cours particuliers cotonou, soutien scolaire, coaching, apprentissage",
  },
  "livres-ebooks": {
    name: "Livres & E-books",
    icon: BookOpen,
    description: "Romans, manuels scolaires, bandes dessinées et livres numériques",
    longDescription: "Découvre une large sélection de livres physiques et numériques : romans, manuels, BD et bien plus pour tous les âges.",
    color: "from-indigo-600 to-indigo-700",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-600",
    bgLight: "bg-indigo-50",
    image: "/alchemist-book-paulo-coelho.jpg",
    images: [],
    subcategories: [
      "Romans & Littérature",
      "Manuels scolaires",
      "Bandes dessinées",
      "E-books & PDF",
      "Livres professionnels",
      "Magazines",
      "Livres enfants",
      "Livres religieux",
    ],
    tips: [
      "Mentionner l'auteur et l'édition",
      "Indiquer l'état précis du livre",
      "Photos de la couverture et de pages intérieures",
      "Préciser si c'est une édition rare",
      "Pour les e-books, indiquer le format (PDF, EPUB)",
    ],
    forbidden: ["Contenus piratés", "E-books sans droits de distribution"],
    seoKeywords: "livre bénin, manuel scolaire cotonou, roman, ebook, bd, littérature",
  },
  "services-divers": {
    name: "Services Divers",
    icon: Wrench,
    description: "Plomberie, graphisme, consulting, réparations et services à domicile",
    longDescription: "Trouve des professionnels qualifiés pour tous tes besoins : réparations, design, consulting et bien plus. Services de qualité garantis.",
    color: "from-gray-600 to-gray-700",
    borderColor: "border-gray-500",
    textColor: "text-gray-600",
    bgColor: "bg-gray-600",
    bgLight: "bg-gray-50",
    image: "/plumber-repair-service.jpg",
    images: [],
    subcategories: [
      "Plomberie",
      "Électricité",
      "Graphisme & Design",
      "Consulting",
      "Réparation",
      "Nettoyage",
      "Déménagement",
      "Jardinage",
    ],
    tips: [
      "Décrire clairement le service proposé",
      "Indiquer le tarif (horaire/forfait)",
      "Préciser la zone d'intervention",
      "Montrer un portfolio ou des exemples",
      "Mentionner tes disponibilités",
    ],
    forbidden: ["Services illégaux", "Services sans qualification requise"],
    seoKeywords: "service bénin, plombier cotonou, électricien, graphiste, réparation, nettoyage",
  },
}

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? categoryData[slug] : null

  const handleWhatsAppClick = (specificItem?: string) => {
    const message = specificItem
      ? `Je cherche ${specificItem} dans la catégorie ${category?.name} à Cotonou`
      : `Je cherche dans la catégorie ${category?.name} à Cotonou`
    window.open(`https://wa.me/22999323073?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <Link to="/categories" className="text-primary hover:text-primary/80 font-semibold">
            ← Retour aux catégories
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = category.icon

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Catégorie ${category.name} - wa-catalog`,
    description: category.longDescription,
    url: `https://wa-catalog.com/categories/${slug}`,
    image: category.image,
    provider: {
      "@type": "Organization",
      name: "wa-catalog",
      url: "https://wa-catalog.com",
    },
  }

  return (
    <>
      <SEO
        title={`${category.name} - Trouve les meilleurs produits`}
        description={category.longDescription}
        keywords={`${category.name} bénin, ${category.seoKeywords}`}
        canonical={`https://wa-catalog.com/categories/${slug}`}
        image={category.image}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Header avec images */}
        <div className={`relative bg-gradient-to-br ${category.color} overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }} />
          </div>

          {/* Images Gallery Background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end gap-4 p-8 opacity-20">
            {category.images.slice(0, 3).map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Exemple ${category.name} ${idx + 1}`}
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
                loading="lazy"
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-white/80 mb-6 text-sm">
                <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>›</span>
                <Link to="/categories" className="hover:text-white transition-colors">Catégories</Link>
                <span>›</span>
                <span className="text-white font-semibold">{category.name}</span>
              </nav>

              {/* Icon + Title */}
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl border-2 border-white/30 shadow-2xl">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-black text-white mb-2 leading-tight">
                    {category.name}
                  </h1>
                  <p className="text-2xl text-white/90 font-medium">{category.description}</p>
                </div>
              </div>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {category.longDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center max-w-4xl">
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 group w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Discuter avec le bot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link
                  to={`/categories/${slug}/produits`}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl w-full sm:w-auto justify-center"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Voir les produits disponibles
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5" />
                  <span className="text-sm font-medium">Vendeurs vérifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Réponse en 30s</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Gratuit pour acheteurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Subcategories */}
              <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 ${category.borderColor}">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className={`w-2 h-8 ${category.bgColor} rounded-full`} />
                  Sous-catégories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.subcategories.map((sub: string) => (
                    <button
                      key={sub}
                      onClick={() => handleWhatsAppClick(sub)}
                      className={`flex items-center gap-3 p-4 ${category.bgLight} rounded-xl hover:shadow-md transition-all cursor-pointer group border-2 border-transparent hover:${category.borderColor}`}
                    >
                      <CheckCircle className={`w-6 h-6 ${category.textColor} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-800 font-medium text-left group-hover:${category.textColor} transition-colors">{sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-md p-8 border border-green-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  Conseils pour bien acheter
                </h2>
                <ul className="space-y-4">
                  {category.tips.map((tip: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed pt-1">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Forbidden */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-600 p-3 rounded-full">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-red-900">Produits strictement interdits</h2>
                </div>
                <ul className="space-y-3">
                  {category.forbidden.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                      <span className="text-red-600 font-bold text-2xl leading-none">×</span>
                      <span className="text-red-900 font-medium pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-300">
                  <p className="text-sm text-red-900 font-semibold">
                    ⚠️ La publication d'un produit interdit entraîne la suspension immédiate et définitive du compte vendeur.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar sticky */}
            <div className="space-y-6">
              {/* CTA Card sticky */}
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-2xl p-8 text-white sticky top-24 border-4 border-white/20`}>
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">Recherche sur WhatsApp</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Toute la recherche se fait dans WhatsApp. Clique ci-dessous et décris ce que tu veux à notre bot intelligent.
                </p>
                
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="w-full bg-white text-gray-900 px-6 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-2xl mb-4 group"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Discuter maintenant
                  </div>
                </button>

                <p className="text-xs text-white/80 text-center">
                  ⚡ Gratuit • 💯 Rapide • ✅ Sécurisé
                </p>
              </div>

              {/* How it works */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Comment ça marche ?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Clique sur le bouton</p>
                      <p className="text-sm text-gray-600">Ouvre WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Décris ce que tu cherches</p>
                      <p className="text-sm text-gray-600">Sois précis sur tes besoins</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Reçois les vendeurs</p>
                      <p className="text-sm text-gray-600">En moins de 30 secondes</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
