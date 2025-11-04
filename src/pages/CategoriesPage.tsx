"use client"

import {
  MessageCircle,
  ShoppingBag,
  Smartphone,
  Shirt,
  Home,
  Car,
  UtensilsCrossed,
  GraduationCap,
  BookOpen,
  Wrench,
} from "lucide-react"

const categories = [
  {
    slug: "electronique",
    name: "Électronique",
    icon: Smartphone,
    description: "Téléphones, ordinateurs, accessoires, jeux vidéo",
    color: "bg-blue-500",
    examples: ["iPhone 13", "MacBook Pro", "AirPods", "PlayStation 5"],
  },
  {
    slug: "mode-beaute",
    name: "Mode & Beauté",
    icon: Shirt,
    description: "Vêtements, chaussures, sacs, bijoux, cosmétiques",
    color: "bg-pink-500",
    examples: ["Robes", "Sneakers Nike", "Sacs à main", "Parfums"],
  },
  {
    slug: "maison-deco",
    name: "Maison & Déco",
    icon: Home,
    description: "Meubles, décoration, électroménager, ustensiles",
    color: "bg-amber-500",
    examples: ["Canapés", "Tables", "Réfrigérateurs", "Lampes"],
  },
  {
    slug: "auto-moto",
    name: "Auto & Moto",
    icon: Car,
    description: "Véhicules, pièces détachées, accessoires",
    color: "bg-red-500",
    examples: ["Voitures", "Motos", "Pneus", "Batteries"],
  },
  {
    slug: "alimentation",
    name: "Alimentation",
    icon: UtensilsCrossed,
    description: "Plats cuisinés, traiteurs, produits frais, épicerie",
    color: "bg-green-500",
    examples: ["Plats du jour", "Gâteaux", "Fruits", "Épices"],
  },
  {
    slug: "formations-cours",
    name: "Formations & Cours",
    icon: GraduationCap,
    description: "Cours de soutien, formations pro, coaching",
    color: "bg-purple-500",
    examples: ["Cours de maths", "Formation Excel", "Coaching business"],
  },
  {
    slug: "livres-ebooks",
    name: "Livres & E-books",
    icon: BookOpen,
    description: "Romans, manuels scolaires, BD, PDF",
    color: "bg-indigo-500",
    examples: ["Romans", "Manuels", "BD", "E-books"],
  },
  {
    slug: "services-divers",
    name: "Services Divers",
    icon: Wrench,
    description: "Plomberie, graphisme, consulting, réparation",
    color: "bg-gray-500",
    examples: ["Plomberie", "Design graphique", "Réparation"],
  },
]

export default function CategoriesPage() {
  const handleWhatsAppClick = (categoryName?: string) => {
    const message = categoryName ? `Je cherche dans la catégorie ${categoryName}` : "Bonjour, je cherche un produit"
    window.open(`https://wa.me/22999323073?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-100 via-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Toutes les catégories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore toutes les catégories de produits disponibles sur wa-catalog. Clique sur une catégorie pour
              discuter avec le bot et trouver ce que tu cherches.
            </p>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Recherche sur WhatsApp uniquement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.slug}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => handleWhatsAppClick(category.name)}
              >
                <div className={`${category.color} p-6 group-hover:scale-105 transition-transform duration-300`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.examples.slice(0, 3).map((example) => (
                      <span key={example} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleWhatsAppClick(category.name)
                    }}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group-hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Discuter avec le bot
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tu ne trouves pas ce que tu cherches ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discute directement avec notre bot sur WhatsApp et décris ce que tu veux. Il trouvera les meilleurs vendeurs
            pour toi en quelques secondes.
          </p>
          <button
            onClick={() => handleWhatsAppClick()}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Discuter avec le bot
          </button>
        </div>
      </div>
    </div>
  )
}
