"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, MessageCircle } from "lucide-react"
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

interface ProductCarouselProps {
  title: string
  products: Product[]
  viewAllHref?: string
  className?: string
  onProductClick?: (product: Product) => void
}

// --- SUB-COMPONENTS ---

// Reusable Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product, onCTAClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative w-64 flex-shrink-0"
    >
      <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-lg">
        {/* Image/Video and Discount Badge */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {product.apercu_produit ? (
            product.apercu_produit.endsWith('.mp4') || product.apercu_produit.includes('video/upload') ? (
              <video
                src={product.apercu_produit}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
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
          
          {/* Description complète */}
          {product.description && (
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {product.description}
            </p>
          )}

          {/* Condition */}
          {product.condition && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 w-fit">
              {product.condition}
            </span>
          )}


          {/* Prix et bouton - maintenant en bas */}
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
  )
}

// --- MAIN COMPONENT ---
export const ProductCarousel = React.forwardRef<HTMLDivElement, ProductCarouselProps>(
  ({ title, products, viewAllHref = "#", className, onProductClick }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)
    const [isScrollable, setIsScrollable] = React.useState(false)
    const [isAtStart, setIsAtStart] = React.useState(true)
    const [isAtEnd, setIsAtEnd] = React.useState(false)

    // Function to handle scrolling
    const handleScroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        })
      }
    }

    // Check scroll state on mount and resize
    const checkScrollState = React.useCallback(() => {
      const el = scrollContainerRef.current
      if (!el) return

      const scrollable = el.scrollWidth > el.clientWidth
      setIsScrollable(scrollable)
      setIsAtStart(el.scrollLeft === 0)
      setIsAtEnd(Math.abs(el.scrollWidth - el.scrollLeft - el.clientWidth) < 1)
    }, [])

    React.useEffect(() => {
      checkScrollState()
      const el = scrollContainerRef.current
      el?.addEventListener("scroll", checkScrollState)
      window.addEventListener("resize", checkScrollState)

      return () => {
        el?.removeEventListener("scroll", checkScrollState)
        window.removeEventListener("resize", checkScrollState)
      }
    }, [checkScrollState])

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }

    const handleCTAClick = (product: Product) => {
      if (onProductClick) {
        onProductClick(product)
      }
    }

    return (
      <section className={cn("relative w-full space-y-4 py-8", className)} ref={ref}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {viewAllHref !== "#" && (
            <a href={viewAllHref} className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              voir tout
            </a>
          )}
        </div>

        <div className="relative">
          {/* Product List */}
          <motion.div
            ref={scrollContainerRef}
            className="scrollbar-hide flex space-x-4 overflow-x-auto px-4 sm:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onCTAClick={handleCTAClick} />
            ))}
          </motion.div>

          {/* Navigation Controls */}
          {isScrollable && (
            <>
              {/* Left Button */}
              <button
                onClick={() => handleScroll("left")}
                disabled={isAtStart}
                aria-label="Scroll left"
                className={cn(
                  "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary-500 text-white p-3 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                  "hover:bg-primary-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                )}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              {/* Right Button */}
              <button
                onClick={() => handleScroll("right")}
                disabled={isAtEnd}
                aria-label="Scroll right"
                className={cn(
                  "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary-500 text-white p-3 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                  "hover:bg-primary-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </section>
    )
  },
)

ProductCarousel.displayName = "ProductCarousel"
