import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  MessageCircle,
  Smartphone,
  Shirt,
  Home,
  Car,
  UtensilsCrossed,
  GraduationCap,
  BookOpen,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Plane,
  Wifi,
  Hammer,
  Leaf,
  FileDigit,
  Dumbbell,
  PawPrint,
  Heart,
  Palette,
  Briefcase,
  Gift,
  Baby,
  Gem,
  ArrowRight,
} from "lucide-react"
import SEO from "@/components/SEO"

const categories = [
  {
    slug: "electronique",
    name: "ÉLECTRONIQUE & ACCESSOIRES",
    icon: Smartphone,
    description: "Téléphones, ordinateurs, accessoires tech, consoles...",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    image: "/samsung-galaxy-s23-ultra.png",
    examples: ["iPhone 13", "MacBook Pro", "AirPods Pro", "PS5"],
    keywords: "téléphone, ordinateur, laptop, smartphone, console",
  },
  {
    slug: "mode-accessoires",
    name: "MODE & ACCESSOIRES",
    icon: Shirt,
    description: "Sacs, vêtements, chaussures, bijoux et beauté",
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
    textColor: "text-pink-600",
    bgLight: "bg-pink-50",
    image: "/leather-handbag-brown.jpg",
    examples: ["Sacs en Wax", "Robes", "Sneakers", "Tote Bags"],
    keywords: "sac, vêtement, mode, chaussure, bijou",
  },
  {
    slug: "sports-fitness",
    name: "SPORTS & FITNESS",
    icon: Dumbbell,
    description: "Équipement sport, fitness, musculation et outdoor",
    color: "bg-gradient-to-br from-lime-500 to-lime-600",
    textColor: "text-lime-600",
    bgLight: "bg-lime-50",
    image: "/nike-air-max-270.png",
    examples: ["Tapis Yoga", "Haltères", "Maillots", "Chaussures Sport"],
    keywords: "sport, fitness, musculation, yoga, ballon",
  },
  {
    slug: "maison-decoration",
    name: "MAISON & DÉCORATION",
    icon: Home,
    description: "Meubles, décoration, électroménager et cuisine",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
    textColor: "text-amber-600",
    bgLight: "bg-amber-50",
    image: "/grey-fabric-sofa.jpg",
    examples: ["Canapés", "Tables", "Rideaux", "Coussins"],
    keywords: "meuble, canapé, décoration, électroménager",
  },
  {
    slug: "animaux",
    name: "ANIMAUX DE COMPAGNIE",
    icon: PawPrint,
    description: "Alimentation, accessoires et soins pour animaux",
    color: "bg-gradient-to-br from-orange-400 to-orange-500",
    textColor: "text-orange-600",
    bgLight: "bg-orange-50",
    image: "/placeholder.jpg",
    examples: ["Croquettes", "Jouets Chat", "Laisse", "Cages"],
    keywords: "chien, chat, animal, croquette, accessoire",
  },
  {
    slug: "alimentation",
    name: "ALIMENTATION & BOISSONS",
    icon: UtensilsCrossed,
    description: "Plats, produits frais, épicerie et boissons",
    color: "bg-gradient-to-br from-green-500 to-green-600",
    textColor: "text-green-600",
    bgLight: "bg-green-50",
    image: "/attieke-grilled-fish.jpg",
    examples: ["Plats Cuisinés", "Fruits", "Épices", "Jus Naturels"],
    keywords: "alimentation, nourriture, plat, boisson, fruit",
  },
  {
    slug: "sante-bien-etre",
    name: "SANTÉ & BIEN-ÊTRE",
    icon: Heart,
    description: "Santé, hygiène, produits naturels et soins",
    color: "bg-gradient-to-br from-teal-400 to-teal-500",
    textColor: "text-teal-600",
    bgLight: "bg-teal-50",
    image: "/dior-sauvage-perfume.jpg",
    examples: ["Gel Aloe Vera", "Vitamines", "Savons", "Huiles"],
    keywords: "santé, bien-être, hygiène, naturel, soin",
  },
  {
    slug: "culture-medias",
    name: "CULTURE & MÉDIAS",
    icon: BookOpen,
    description: "Livres, musique, films, jeux de société",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    textColor: "text-indigo-600",
    bgLight: "bg-indigo-50",
    image: "/alchemist-book-paulo-coelho.jpg",
    examples: ["Romans", "Mangas", "Vinyles", "Jeux Société"],
    keywords: "livre, culture, média, musique, film",
  },
  {
    slug: "jeux-loisirs",
    name: "JEUX & LOISIRS",
    icon: Gamepad2,
    description: "Jeux vidéo, consoles, figurines et loisirs",
    color: "bg-gradient-to-br from-violet-500 to-violet-600",
    textColor: "text-violet-600",
    bgLight: "bg-violet-50",
    image: "/placeholder.jpg",
    examples: ["Jeux Vidéo", "Consoles", "Figurines", "Puzzles"],
    keywords: "jeu, loisir, console, figurine, gaming",
  },
  {
    slug: "formations",
    name: "FORMATIONS & APPRENTISSAGE",
    icon: GraduationCap,
    description: "Cours en ligne, certifications et tutoriels",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    bgLight: "bg-purple-50",
    image: "/excel-training-course.jpg",
    examples: ["Cours de Code", "Langues", "Certifications", "Tutoriels"],
    keywords: "formation, cours, apprentissage, éducation",
  },
  {
    slug: "tourisme",
    name: "TOURISME & SERVICES",
    icon: Plane,
    description: "Voyages, billets, séjours et événements",
    color: "bg-gradient-to-br from-sky-400 to-sky-500",
    textColor: "text-sky-600",
    bgLight: "bg-sky-50",
    image: "/placeholder.jpg",
    examples: ["Billets Avion", "Séjours", "Excursions", "Concerts"],
    keywords: "tourisme, voyage, service, billet, hôtel",
  },
  {
    slug: "auto-moto",
    name: "AUTO & MOTO",
    icon: Car,
    description: "Pièces, accessoires auto/moto et entretien",
    color: "bg-gradient-to-br from-red-500 to-red-600",
    textColor: "text-red-600",
    bgLight: "bg-red-50",
    image: "/toyota-corolla-2018.jpg",
    examples: ["Pièces Auto", "Pneus", "Casques Moto", "Huiles"],
    keywords: "auto, moto, pièce, accessoire, véhicule",
  },
  {
    slug: "maison-intelligente",
    name: "MAISON INTELLIGENTE & DOMOTIQUE",
    icon: Wifi,
    description: "Sécurité, éclairage connecté et domotique",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    textColor: "text-cyan-600",
    bgLight: "bg-cyan-50",
    image: "/placeholder.jpg",
    examples: ["Caméras", "Ampoules Smart", "Alarmes", "Capteurs"],
    keywords: "domotique, smart home, sécurité, connecté",
  },
  {
    slug: "bricolage",
    name: "BRICOLAGE & OUTILLAGE",
    icon: Hammer,
    description: "Outils, matériaux et équipements de travaux",
    color: "bg-gradient-to-br from-stone-500 to-stone-600",
    textColor: "text-stone-600",
    bgLight: "bg-stone-50",
    image: "/placeholder.jpg",
    examples: ["Perceuses", "Peinture", "Outils Jardin", "Vis"],
    keywords: "bricolage, outil, travaux, jardinage",
  },
  {
    slug: "art-artisanat",
    name: "ART & ARTISANAT",
    icon: Palette,
    description: "Fournitures d'art, loisirs créatifs et DIY",
    color: "bg-gradient-to-br from-rose-400 to-rose-500",
    textColor: "text-rose-600",
    bgLight: "bg-rose-50",
    image: "/placeholder.jpg",
    examples: ["Peinture", "Perles", "Toiles", "Kits DIY"],
    keywords: "art, artisanat, créatif, diy, peinture",
  },
  {
    slug: "pro",
    name: "VÊTEMENTS & ACCESSOIRES PRO",
    icon: Briefcase,
    description: "Tenues de travail, sécurité et accessoires pro",
    color: "bg-gradient-to-br from-slate-600 to-slate-700",
    textColor: "text-slate-600",
    bgLight: "bg-slate-50",
    image: "/placeholder.jpg",
    examples: ["Uniformes", "Chaussures Sécurité", "EPI", "Tenues"],
    keywords: "pro, travail, sécurité, uniforme, vêtement",
  },
  {
    slug: "eco-responsable",
    name: "PRODUITS ÉCO-RESPONSABLES",
    icon: Leaf,
    description: "Produits recyclés, occasion et écologiques",
    color: "bg-gradient-to-br from-emerald-400 to-emerald-500",
    textColor: "text-emerald-600",
    bgLight: "bg-emerald-50",
    image: "/placeholder.jpg",
    examples: ["Friperie", "Recyclé", "Zéro Déchet", "Bio"],
    keywords: "écologique, occasion, recyclé, vert, durable",
  },
  {
    slug: "cadeaux",
    name: "CADEAUX & PERSONNALISÉS",
    icon: Gift,
    description: "Cadeaux uniques, gravures et personnalisation",
    color: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-500",
    textColor: "text-fuchsia-600",
    bgLight: "bg-fuchsia-50",
    image: "/birthday-cake-custom.jpg",
    examples: ["Mugs Perso", "T-shirts", "Coffrets", "Gravures"],
    keywords: "cadeau, personnalisé, souvenir, fête, offrir",
  },
  {
    slug: "bebe-maternite",
    name: "PRODUITS BÉBÉ & MATERNITÉ",
    icon: Baby,
    description: "Tout pour bébé, maman et la maternité",
    color: "bg-gradient-to-br from-pink-300 to-pink-400",
    textColor: "text-pink-500",
    bgLight: "bg-pink-50",
    image: "/placeholder.jpg",
    examples: ["Couches", "Vêtements Bébé", "Poussettes", "Soins"],
    keywords: "bébé, maternité, maman, naissance, enfant",
  },
  {
    slug: "luxe",
    name: "LUXE & PRESTIGE",
    icon: Gem,
    description: "Articles de luxe, haute gamme et exclusifs",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    textColor: "text-yellow-700",
    bgLight: "bg-yellow-50",
    image: "/leather-handbag-brown.jpg",
    examples: ["Montres Luxe", "Sacs Marque", "Joaillerie", "Parfums"],
    keywords: "luxe, prestige, marque, premium, cher",
  },
  {
    slug: "services",
    name: "SERVICES & RÉPARATIONS",
    icon: Wrench,
    description: "Réparations, consulting et services divers",
    color: "bg-gradient-to-br from-gray-500 to-gray-600",
    textColor: "text-gray-600",
    bgLight: "bg-gray-50",
    image: "/plumber-repair-service.jpg",
    examples: ["Réparation", "Design", "Consulting", "Nettoyage"],
    keywords: "service, réparation, prestation, aide, pro",
  },
  {
    slug: "numerique",
    name: "PRODUITS NUMÉRIQUES",
    icon: FileDigit,
    description: "Logiciels, fichiers, e-books et abonnements",
    color: "bg-gradient-to-br from-blue-400 to-blue-500",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    image: "/placeholder.jpg",
    examples: ["Logiciels", "E-books", "Templates", "Licences"],
    keywords: "numérique, digital, logiciel, fichier, téléchargement",
  },
]

export default function CategoriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.min(4, categories.length))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = (categoryName?: string) => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % Math.min(4, categories.length))
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + Math.min(4, categories.length)) % Math.min(4, categories.length))

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catégories de produits wa-catalog",
    description: "Liste des catégories de produits disponibles sur wa-catalog Bénin",
    numberOfItems: categories.length,
    itemListElement: categories.map((cat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Category",
        name: cat.name,
        description: cat.description,
        url: `https://wa-catalog.com/categories/${cat.slug}`,
      },
    })),
  }

  return (
    <>
      <SEO
        title="Toutes les catégories"
        description="Explore toutes les catégories de produits sur wa-catalog : Électronique, Mode, Maison, Auto, Alimentation et plus. Trouve ce que tu cherches sur WhatsApp au Bénin."
        keywords="catégories, produits bénin, électronique, mode, maison, auto, alimentation, services, cotonou"
        canonical="https://wa-catalog.com/categories"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Slider Section */}
        <div className="relative bg-gradient-to-br from-primary to-emerald-700 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          {/* Slider Background */}
          <div className="absolute inset-0">
            {categories.slice(0, 4).map((category, index) => (
              <div
                key={category.slug}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Recherche sur WhatsApp uniquement</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Explore toutes les
                <span className="block text-primary-200">catégories</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Des milliers de produits disponibles dans 22 catégories. Clique sur une catégorie ou discute avec le bot pour trouver exactement ce que tu cherches au Bénin.
              </p>

              <button
                onClick={() => handleWhatsAppClick()}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-primary/30 hover:scale-105 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Discuter avec le bot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-8 right-8 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all border border-white/20"
                aria-label="Catégorie précédente"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex gap-2">
                {categories.slice(0, 4).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
                      }`}
                    aria-label={`Aller à la slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all border border-white/20"
                aria-label="Catégorie suivante"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              22 catégories, des milliers de produits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque catégorie regroupe des centaines de vendeurs vérifiés. Clique pour en savoir plus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.slug}
                  to={`/categories/${category.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={`Catégorie ${category.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 ${category.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-20 h-20 text-white drop-shadow-2xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 group-hover:${category.textColor} transition-colors`}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.examples.slice(0, 2).map((example) => (
                        <span key={example} className={`text-xs ${category.bgLight} ${category.textColor} px-3 py-1 rounded-full font-medium`}>
                          {example}
                        </span>
                      ))}
                    </div>

                    <div className={`flex items-center gap-2 ${category.textColor} font-semibold group-hover:gap-3 transition-all`}>
                      Voir la catégorie
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary-50 via-white to-emerald-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-primary-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tu ne trouves pas ce que tu cherches ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Décris simplement ce que tu veux à notre bot WhatsApp. Il scannera tous les catalogues et te trouvera les meilleurs vendeurs en quelques secondes.
              </p>

              <button
                onClick={() => handleWhatsAppClick()}
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-primary/20 hover:scale-105 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Discuter avec le bot maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500 mt-6">
                ⚡ Réponse en moins de 30 secondes • 💯 Gratuit pour les acheteurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
