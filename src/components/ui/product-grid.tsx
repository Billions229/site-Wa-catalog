"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, MessageCircle, X, Play } from "lucide-react"
import { cn } from "@/lib/utils"

// --- TYPE DEFINITIONS ---
export interface Product {
  id: string | number
  name: string
  quantity?: string
  price: number
  originalPrice?: number
  discount?: string
  deliveryTime?: string
  imageUrl?: string
  city?: string
  condition?: string
  description?: string | null
  apercu_produit?: string | null
  price_min?: number | null
  price_max?: number | null
}

interface ProductCardProps {
  product: Product
  onCTAClick: (product: Product) => void
}

interface ProductGridProps {
  title: string
  products: Product[]
  className?: string
  onProductClick?: (product: Product) => void
  itemsPerPage?: number
}

// --- SUB-COMPONENTS ---

// Modal pour afficher les vidéos
const VideoModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  productName: string
}> = ({ isOpen, onClose, videoSrc, productName }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative z-10 w-full max-w-4xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text font-semibold text-lg-gray-900">{productName}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video */}
          <div className="relative bg-black">
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh]"
            >
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

// Product Card Component avec description complète et vidéo cliquable
const ProductCard: React.FC<ProductCardProps> = ({ product, onCTAClick }) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false)
  const [videoModalOpen, setVideoModalOpen] = React.useState(false)
  const [isVideo, setIsVideo] = React.useState(false)

  React.useEffect(() => {
    if (product.apercu_produit) {
      const isVideoFile = product.apercu_produit.endsWith('.mp4') ||
                         product.apercu_produit.includes('video/upload')
      setIsVideo(isVideoFile)
    }
  }, [product.apercu_produit])

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="group relative w-full"
      >
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-lg h-full">
          {/* Image/Video */}
          <div className="relative h-48 overflow-hidden bg-muted">
            {product.apercu_produit ? (
              isVideo ? (
                <div
                  className="relative h-full w-full cursor-pointer"
                  onClick={() => setVideoModalOpen(true)}
                >
                  <video
                    src={product.apercu_produit}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <Play className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={product.apercu_produit}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )
            ) : (
              <img
                src={product.imageUrl || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            {product.discount && (
              <div className="absolute left-2 top-2 rounded-md bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                {product.discount}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-3 p-4 flex-1">
            {/* Header avec localisation */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{product.deliveryTime || "Selon vendeur"}</span>
              </div>
              {product.city && <span className="font-medium">{product.city}</span>}
            </div>

            {/* Titre produit */}
            <h3 className="text-sm font-semibold text-foreground leading-tight">{product.name}</h3>

            {/* Description - Complète avec possibilité de réduire */}
            {product.description && (
              <div className="text-xs text-muted-foreground leading-relaxed">
                <div className={cn(
                  "whitespace-pre-wrap",
                  !showFullDescription && "line-clamp-3"
                )}>
                  {product.description}
                </div>
                {product.description.length > 100 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-primary-600 hover:text-primary-700 text-xs font-medium mt-1"
                  >
                    {showFullDescription ? "Voir moins" : "Voir plus"}
                  </button>
                )}
              </div>
            )}

            {/* Condition */}
            {product.condition && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 w-fit">
                {product.condition}
              </span>
            )}

            {/* Prix et bouton */}
            <div className="mt-auto pt-3 space-y-3">
              <div className="text-center">
                <span className="text-lg font-bold text-foreground block">
                  {product.price_min && product.price_max && product.price_min !== product.price_max
                    ? `${product.price_min.toLocaleString()} - ${product.price_max.toLocaleString()} FCFA`
                    : `${product.price.toLocaleString()} FCFA`}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through block">
                    {product.originalPrice.toLocaleString()} FCFA
                  </span>
                )}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => onCTAClick(product)}
                className="w-full rounded-lg bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Discuter avec le bot
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoSrc={product.apercu_produit || ""}
        productName={product.name}
      />
    </>
  )
}

// --- MAIN COMPONENT ---
export const ProductGrid = React.forwardRef<HTMLDivElement, ProductGridProps>(
  ({ title, products, className, onProductClick, itemsPerPage = 8 }, ref) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const itemsPerPageGrid = itemsPerPage // 8 items = 4 cols x 2 rows

    const totalPages = Math.ceil(products.length / itemsPerPageGrid)
    const startIndex = (currentPage - 1) * itemsPerPageGrid
    const endIndex = startIndex + itemsPerPageGrid
    const currentProducts = products.slice(startIndex, endIndex)

    const handleCTAClick = (product: Product) => {
      if (onProductClick) {
        onProductClick(product)
      }
    }

    return (
      <section className={cn("relative w-full space-y-6", className)} ref={ref}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.1,
          }}
        >
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} onCTAClick={handleCTAClick} />
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-lg transition-colors",
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-10 h-10 rounded-lg font-medium transition-colors",
                    currentPage === page
                      ? "bg-primary-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  )}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-lg transition-colors",
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>
    )
  },
)

ProductGrid.displayName = "ProductGrid"
