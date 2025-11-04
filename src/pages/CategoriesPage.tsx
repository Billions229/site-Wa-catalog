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
  ArrowRight,
} from "lucide-react"
import SEO from "@/components/SEO"

const categories = [
  {
    slug: "electronique",
    name: "Électronique",
    icon: Smartphone,
    description: "Téléphones, ordinateurs, accessoires tech, consoles de jeux et bien plus",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    image: "/samsung-galaxy-s23-ultra.png",
    examples: ["iPhone 13", "MacBook Pro", "AirPods Pro", "PlayStation 5", "Samsung Galaxy"],
    keywords: "téléphone, ordinateur, laptop, smartphone, tablette, console, accessoires tech",
  },
  {
    slug: "mode-beaute",
    name: "Mode & Beauté",
    icon: Shirt,
    description: "Vêtements tendance, chaussures, sacs, bijoux et produits de beauté",
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
    textColor: "text-pink-600",
    bgLight: "bg-pink-50",
    image: "/leather-handbag-brown.jpg",
    examples: ["Robes africaines", "Sneakers Nike", "Sacs à main", "Parfums Dior", "Bijoux"],
    keywords: "vêtement, mode, chaussure, sac, bijou, cosmétique, parfum, beauté",
  },
  {
    slug: "maison-deco",
    name: "Maison & Déco",
    icon: Home,
    description: "Meubles modernes, décoration, électroménager et ustensiles de cuisine",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
    textColor: "text-amber-600",
    bgLight: "bg-amber-50",
    image: "/grey-fabric-sofa.jpg",
    examples: ["Canapés", "Tables", "Réfrigérateurs Samsung", "Lampes design", "Ustensiles"],
    keywords: "meuble, canapé, table, réfrigérateur, décoration, électroménager, cuisine",
  },
  {
    slug: "auto-moto",
    name: "Auto & Moto",
    icon: Car,
    description: "Véhicules d'occasion et neufs, pièces détachées, pneus et accessoires",
    color: "bg-gradient-to-br from-red-500 to-red-600",
    textColor: "text-red-600",
    bgLight: "bg-red-50",
    image: "/toyota-corolla-2018.jpg",
    examples: ["Toyota Corolla", "Motos Yamaha", "Pneus Michelin", "Batteries", "GPS auto"],
    keywords: "voiture, moto, véhicule, pièce détachée, pneu, batterie, accessoire auto",
  },
  {
    slug: "alimentation",
    name: "Alimentation",
    icon: UtensilsCrossed,
    description: "Plats cuisinés, services traiteur, produits frais et épicerie locale",
    color: "bg-gradient-to-br from-green-500 to-green-600",
    textColor: "text-green-600",
    bgLight: "bg-green-50",
    image: "/attieke-grilled-fish.jpg",
    examples: ["Plats du jour", "Gâteaux", "Attiéké poisson", "Jus naturels", "Épices"],
    keywords: "plat cuisiné, traiteur, alimentation, nourriture, gâteau, jus, épice, restaurant",
  },
  {
    slug: "formations-cours",
    name: "Formations & Cours",
    icon: GraduationCap,
    description: "Cours de soutien, formations professionnelles et coaching business",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    bgLight: "bg-purple-50",
    image: "/excel-training-course.jpg",
    examples: ["Cours de maths", "Formation Excel", "Coaching business", "Anglais", "Code"],
    keywords: "formation, cours, soutien scolaire, coaching, apprentissage, éducation",
  },
  {
    slug: "livres-ebooks",
    name: "Livres & E-books",
    icon: BookOpen,
    description: "Romans, manuels scolaires, bandes dessinées et livres numériques",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    textColor: "text-indigo-600",
    bgLight: "bg-indigo-50",
    image: "/alchemist-book-paulo-coelho.jpg",
    examples: ["Romans", "Manuels scolaires", "BD", "E-books PDF", "Livres pro"],
    keywords: "livre, ebook, roman, manuel scolaire, bd, bande dessinée, pdf, lecture",
  },
  {
    slug: "services-divers",
    name: "Services Divers",
    icon: Wrench,
    description: "Plomberie, graphisme, consulting, réparations et services à domicile",
    color: "bg-gradient-to-br from-gray-500 to-gray-600",
    textColor: "text-gray-600",
    bgLight: "bg-gray-50",
    image: "/plumber-repair-service.jpg",
    examples: ["Plomberie", "Design graphique", "Réparation", "Nettoyage", "Déménagement"],
    keywords: "service, plomberie, électricité, graphisme, réparation, nettoyage, déménagement",
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
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
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
                Des milliers de produits disponibles dans 8 catégories. Clique sur une catégorie ou discute avec le bot pour trouver exactement ce que tu cherches au Bénin.
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
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50"
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
              8 catégories, des milliers de produits
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
