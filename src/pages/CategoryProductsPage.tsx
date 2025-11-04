"use client"

import { useParams, Link } from "react-router-dom"
import { MessageCircle, AlertCircle, Filter } from "lucide-react"
import { ProductCarousel, type Product } from "@/components/ui/product-carousel"
import { mockProductsByCategory } from "@/data/mockProducts"

const categoryNames: Record<string, string> = {
  electronique: "Électronique",
  "mode-beaute": "Mode & Beauté",
  "maison-deco": "Maison & Déco",
  "auto-moto": "Auto & Moto",
  alimentation: "Alimentation",
  "formations-cours": "Formations & Cours",
  "livres-ebooks": "Livres & E-books",
  "services-divers": "Services Divers",
}

export default function CategoryProductsPage() {
  const { slug } = useParams<{ slug: string }>()
  const categoryName = slug ? categoryNames[slug] : null
  const products = slug ? mockProductsByCategory[slug] || [] : []

  const handleProductClick = (product: Product) => {
    const message = `Je cherche ${product.name} à ${product.city || "Cotonou"} - Budget: ${product.price} FCFA`
    window.open(`https://wa.me/22999323073?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  const handleWhatsAppClick = () => {
    const message = categoryName ? `Je cherche dans la catégorie ${categoryName}` : "Bonjour, je cherche un produit"
    window.open(`https://wa.me/22999323073?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  if (!categoryName || products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <Link to="/categories" className="text-primary hover:text-primary/80">
            Retour aux catégories
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <nav className="text-sm text-gray-500 mb-2">
                <Link to="/" className="hover:text-primary">
                  Accueil
                </Link>
                {" / "}
                <Link to="/categories" className="hover:text-primary">
                  Catégories
                </Link>
                {" / "}
                <Link to={`/categories/${slug}`} className="hover:text-primary">
                  {categoryName}
                </Link>
                {" / "}
                <span className="text-gray-900 font-medium">Produits</span>
              </nav>
              <h1 className="text-3xl font-bold text-gray-900">{categoryName} - Produits</h1>
              <p className="text-gray-600 mt-2">
                Exemples de produits disponibles. Pour voir tous les produits en temps réel, discutez avec le bot.
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-primary/90 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter avec le bot
            </button>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-orange-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-orange-800">
              <strong>Important:</strong> Ces produits sont des exemples éditoriaux. La recherche en temps réel et la
              mise en relation avec les vendeurs se font exclusivement dans WhatsApp via notre bot.
            </div>
          </div>
        </div>
      </div>

      {/* Filters (UI only - visual guide) */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filtres visuels:</span>
            </div>
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 whitespace-nowrap">
              Prix
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 whitespace-nowrap">
              Ville
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 whitespace-nowrap">
              Livraison
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 whitespace-nowrap">
              État
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductCarousel title={`Produits ${categoryName}`} products={products} onProductClick={handleProductClick} />

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center text-white">
          <MessageCircle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Vous cherchez un produit spécifique ?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Ces exemples ne représentent qu'une petite partie de notre catalogue. Pour accéder à tous les produits
            disponibles en temps réel et contacter directement les vendeurs, discutez avec notre bot sur WhatsApp.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Discuter avec le bot maintenant
          </button>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <button
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold"
        >
          <MessageCircle className="w-5 h-5" />
          Discuter avec le bot
        </button>
      </div>
    </div>
  )
}
