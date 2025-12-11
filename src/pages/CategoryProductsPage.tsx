"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { MessageCircle, Filter, ArrowRight } from "lucide-react"
import { ProductGrid, type Product } from "@/components/ui/product-grid"
import { getProductsByCategory } from "@/lib/products"

const categoryNames: Record<string, string> = {
  electronique: "Électronique & Accessoires",
  "mode-accessoires": "Mode & Accessoires",
  "sports-fitness": "Sports & Fitness",
  "maison-decoration": "Maison & Décoration",
  animaux: "Animaux de Compagnie",
  alimentation: "Alimentation & Boissons",
  "sante-bien-etre": "Santé & Bien-être",
  "culture-medias": "Culture & Médias",
  "jeux-loisirs": "Jeux & Loisirs",
  formations: "Formations & Apprentissage",
  tourisme: "Tourisme & Services",
  "auto-moto": "Auto & Moto",
  "maison-intelligente": "Maison Intelligente & Domotique",
  bricolage: "Bricolage & Outillage",
  "art-artisanat": "Art & Artisanat",
  pro: "Vêtements & Accessoires Pro",
  "eco-responsable": "Produits Éco-responsables",
  cadeaux: "Cadeaux & Personnalisés",
  "bebe-maternite": "Produits Bébé & Maternité",
  luxe: "Luxe & Prestige",
  services: "Services & Réparations",
  numerique: "Produits Numériques",
}

export default function CategoryProductsPage() {
  const { slug } = useParams<{ slug: string }>()
  const categoryName = slug ? categoryNames[slug] : null
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      if (!slug) return

      setIsLoading(true)
      try {
        const dbProducts = await getProductsByCategory(slug)

        // Transform database products to match Product interface
        const transformedProducts: Product[] = dbProducts.map((p: any) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          city: p.city || undefined,
          condition: p.condition || "Neuf",
          deliveryTime: "Livraison selon vendeur",
          apercu_produit: p.apercu_produit || null,
          description: p.description,
          price_min: p.price_min,
          price_max: p.price_max,
        }))

        setProducts(transformedProducts)
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [slug])

  const handleProductClick = (product: Product) => {
    // Créer un message prérempli contextuel avec le produit selon les spécifications du README
    const messageParts = []
    messageParts.push(`Je cherche ${product.name}`)
    if (categoryName) {
      messageParts.push(`(catégorie ${categoryName})`)
    }
    if (product.city) {
      messageParts.push(`à ${product.city}`)
    }
    if (product.price) {
      messageParts.push(`Budget: ${product.price} FCFA`)
    }
    const message = encodeURIComponent(messageParts.join(" - "))
    window.open(`https://kloo.me/bot-wa-catalogue?text=${message}`, "_blank", "noopener,noreferrer")
  }

  const handleWhatsAppClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  if (!categoryName) {
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Chargement des produits...</p>
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
              <p className="text-gray-600 mt-2 font-medium">
                Découvrez une sélection de produits disponibles. Pour accéder à tous les produits en temps réel et contacter directement les vendeurs, discutez avec notre bot sur WhatsApp.
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
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aucun produit disponible pour le moment</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Cette catégorie ne contient pas encore de produits. Discute avec notre bot pour trouver ce que tu cherches dans d'autres catégories !
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter avec le bot
            </button>
          </div>
        ) : (
          <ProductGrid title={`Produits ${categoryName}`} products={products} onProductClick={handleProductClick} />
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-2xl p-10 md:p-12 text-center shadow-2xl border-4 border-green-300/30">
          <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
            <MessageCircle className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md">
            Vous cherchez un produit spécifique ?
          </h2>
          <p className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Cette sélection ne représente qu'une partie de notre catalogue. Pour accéder à tous les produits
            disponibles en temps réel et contacter directement les vendeurs vérifiés, discutez avec notre bot sur WhatsApp.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-700 px-10 py-5 rounded-xl font-extrabold text-xl transition-all hover:scale-105 shadow-2xl hover:shadow-white/50 inline-flex items-center gap-3 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Discuter avec le bot maintenant
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-white text-sm font-bold drop-shadow-sm">
            ⚡ Gratuit pour les acheteurs • 💯 Réponse en 30 secondes
          </p>
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
