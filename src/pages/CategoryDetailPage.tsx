"use client"

import { useParams } from "react-router-dom"
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
} from "lucide-react"

const categoryData: Record<string, any> = {
  electronique: {
    name: "Électronique",
    icon: Smartphone,
    description: "Téléphones, ordinateurs, accessoires, jeux vidéo et bien plus",
    color: "bg-blue-500",
    subcategories: [
      "Téléphones & Smartphones",
      "Ordinateurs & Laptops",
      "Tablettes",
      "Accessoires (écouteurs, chargeurs, coques)",
      "Jeux vidéo & Consoles",
      "Appareils photo & Caméras",
      "Montres connectées",
    ],
    tips: [
      "Indiquer l'état (neuf/occasion)",
      "Mentionner la garantie restante",
      "Fournir les numéros de série",
      "Préciser les accessoires inclus",
    ],
    forbidden: [
      "Produits contrefaits ou répliques",
      "Appareils volés",
      "Produits sans facture d'origine (pour le neuf)",
    ],
  },
  "mode-beaute": {
    name: "Mode & Beauté",
    icon: Shirt,
    description: "Vêtements, chaussures, sacs, bijoux, cosmétiques",
    color: "bg-pink-500",
    subcategories: [
      "Vêtements homme",
      "Vêtements femme",
      "Chaussures",
      "Sacs & Accessoires",
      "Bijoux & Montres",
      "Cosmétiques & Parfums",
      "Produits de beauté",
    ],
    tips: [
      "Photos de qualité avec plusieurs angles",
      "Indiquer les tailles précises",
      "Mentionner la marque",
      "Préciser l'état et les défauts éventuels",
    ],
    forbidden: ["Produits contrefaits", "Cosmétiques périmés", "Produits sans autorisation de mise sur le marché"],
  },
  "maison-deco": {
    name: "Maison & Déco",
    icon: Home,
    description: "Meubles, décoration, électroménager, ustensiles",
    color: "bg-amber-500",
    subcategories: [
      "Meubles (salon, chambre, bureau)",
      "Décoration intérieure",
      "Électroménager",
      "Ustensiles de cuisine",
      "Literie",
      "Luminaires",
      "Rangement",
    ],
    tips: [
      "Indiquer les dimensions exactes",
      "Préciser les matériaux",
      "Mentionner l'état de fonctionnement",
      "Photos dans un environnement réel",
    ],
    forbidden: ["Appareils électriques dangereux", "Produits non conformes aux normes de sécurité"],
  },
  "auto-moto": {
    name: "Auto & Moto",
    icon: Car,
    description: "Véhicules, pièces détachées, accessoires",
    color: "bg-red-500",
    subcategories: [
      "Voitures",
      "Motos & Scooters",
      "Pièces détachées",
      "Pneus",
      "Batteries",
      "Accessoires auto",
      "Équipements moto",
    ],
    tips: [
      "Indiquer l'année et le kilométrage",
      "Fournir le carnet d'entretien",
      "Préciser l'état des pièces",
      "Photos de tous les angles",
    ],
    forbidden: ["Véhicules volés", "Véhicules sans papiers", "Pièces de provenance douteuse"],
  },
  alimentation: {
    name: "Alimentation",
    icon: UtensilsCrossed,
    description: "Plats cuisinés, traiteurs, produits frais, épicerie",
    color: "bg-green-500",
    subcategories: [
      "Plats cuisinés",
      "Services traiteur",
      "Produits frais",
      "Épicerie",
      "Boissons",
      "Pâtisserie",
      "Produits bio",
    ],
    tips: [
      "Respecter les normes d'hygiène",
      "Indiquer les ingrédients",
      "Mentionner les allergènes",
      "Préciser la date de péremption",
      "Photos appétissantes",
    ],
    forbidden: ["Produits périmés", "Produits impropres à la consommation", "Alcool (selon réglementation locale)"],
  },
  "formations-cours": {
    name: "Formations & Cours",
    icon: GraduationCap,
    description: "Cours de soutien, formations professionnelles, coaching",
    color: "bg-purple-500",
    subcategories: [
      "Cours de soutien scolaire",
      "Formations professionnelles",
      "Coaching business",
      "Cours de langues",
      "Formations informatiques",
      "Développement personnel",
    ],
    tips: [
      "Programme détaillé",
      "Durée et horaires",
      "Tarifs clairs",
      "Qualifications du formateur",
      "Témoignages si disponibles",
    ],
    forbidden: ["Formations sans certification valide", "Promesses de résultats irréalistes"],
  },
  "livres-ebooks": {
    name: "Livres & E-books",
    icon: BookOpen,
    description: "Romans, manuels scolaires, BD, PDF",
    color: "bg-indigo-500",
    subcategories: [
      "Romans & Littérature",
      "Manuels scolaires",
      "Bandes dessinées",
      "E-books & PDF",
      "Livres professionnels",
      "Magazines",
    ],
    tips: [
      "Mentionner l'auteur",
      "Indiquer l'édition",
      "Préciser l'état (neuf, corné, etc.)",
      "Photos de la couverture et de l'intérieur",
    ],
    forbidden: ["Contenus piratés", "E-books sans droits de distribution"],
  },
  "services-divers": {
    name: "Services Divers",
    icon: Wrench,
    description: "Plomberie, graphisme, consulting, réparation",
    color: "bg-gray-500",
    subcategories: [
      "Plomberie",
      "Électricité",
      "Graphisme & Design",
      "Consulting",
      "Réparation",
      "Nettoyage",
      "Déménagement",
    ],
    tips: [
      "Description claire du service",
      "Tarif (horaire/forfait)",
      "Zone d'intervention",
      "Portfolio ou exemples de travaux",
      "Disponibilités",
    ],
    forbidden: ["Services illégaux", "Services sans qualification requise"],
  },
}

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? categoryData[slug] : null

  const handleWhatsAppClick = () => {
    const message = category ? `Je cherche dans la catégorie ${category.name}` : "Bonjour, je cherche un produit"
    window.open(`https://wa.me/22999323073?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <a href="/categories" className="text-primary hover:text-primary/80">
            Retour aux catégories
          </a>
        </div>
      </div>
    )
  }

  const IconComponent = category.icon

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`${category.color} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <IconComponent className="w-16 h-16 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{category.name}</h1>
              <p className="text-xl text-white/90">{category.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter avec le bot
            </button>
            <a
              href={`/categories/${slug}/produits`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-white/20"
            >
              Voir des exemples de produits
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Subcategories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sous-catégories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.subcategories.map((sub: string) => (
                  <div
                    key={sub}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
                    onClick={handleWhatsAppClick}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils pour bien vendre</h2>
              <ul className="space-y-3">
                {category.tips.map((tip: string) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Forbidden */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-red-900">Produits interdits</h2>
              </div>
              <ul className="space-y-2">
                {category.forbidden.map((item: string) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-red-700">
                La publication d'un produit interdit entraîne la suspension immédiate du compte vendeur.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg p-6 text-white sticky top-24">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Recherche sur WhatsApp</h3>
              <p className="text-white/90 mb-6 text-sm">
                Toute la recherche se fait dans WhatsApp. Clique sur le bouton ci-dessous pour discuter avec notre bot.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-primary-600 px-4 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Discuter avec le bot
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-3">Comment ça marche ?</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">1.</span>
                  <span>Clique sur "Discuter avec le bot"</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">2.</span>
                  <span>Décris ce que tu cherches</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">3.</span>
                  <span>Reçois les meilleurs vendeurs</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
