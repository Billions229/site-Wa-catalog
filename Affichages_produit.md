You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
product-carousel.tsx
// components/ui/product-carousel.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn

// --- TYPE DEFINITIONS ---
export interface Product {
  id: string | number;
  name: string;
  quantity: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  deliveryTime: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  viewAllHref?: string;
  className?: string;
}

// --- SUB-COMPONENTS ---

// Reusable Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative w-48 flex-shrink-0"
    >
      <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-md">
        {/* Image and Discount Badge */}
        <div className="relative h-40 overflow-hidden bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
          {product.discount && (
            <div className="absolute left-2 top-2 rounded-md bg-green-200 px-2 py-0.5 text-xs font-semibold text-destructive-foreground">
              {product.discount}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-3 p-4">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{product.deliveryTime}</span>
          </div>
          <h3 className="h-10 truncate text-sm font-medium text-foreground">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.quantity}</p>

          {/* Pricing and Add Button */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-semibold text-foreground">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-primary bg-background px-6 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              ADD
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export const ProductCarousel = React.forwardRef<HTMLDivElement, ProductCarouselProps>(
  ({ title, products, viewAllHref = "#", className }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = React.useState(false);
    const [isAtStart, setIsAtStart] = React.useState(true);
    const [isAtEnd, setIsAtEnd] = React.useState(false);

    // Function to handle scrolling
    const handleScroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
    
    // Check scroll state on mount and resize
    const checkScrollState = React.useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        
        const scrollable = el.scrollWidth > el.clientWidth;
        setIsScrollable(scrollable);
        setIsAtStart(el.scrollLeft === 0);
        setIsAtEnd(Math.abs(el.scrollWidth - el.scrollLeft - el.clientWidth) < 1);
    }, []);

    React.useEffect(() => {
        checkScrollState();
        const el = scrollContainerRef.current;
        el?.addEventListener('scroll', checkScrollState);
        window.addEventListener('resize', checkScrollState);

        return () => {
            el?.removeEventListener('scroll', checkScrollState);
            window.removeEventListener('resize', checkScrollState);
        };
    }, [checkScrollState]);


    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    return (
      <section className={cn("relative w-full space-y-4 py-8", className)} ref={ref}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <a
            href={viewAllHref}
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            see all
          </a>
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
              <ProductCard key={product.id} product={product} />
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
                  "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-md transition-opacity duration-300 disabled:opacity-0",
                  "hover:bg-accent focus:outline-none"
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
                  "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow-md transition-opacity duration-300 disabled:opacity-0",
                  "hover:bg-accent focus:outline-none"
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </section>
    );
  }
);

ProductCarousel.displayName = "ProductCarousel";

demo.tsx
// demo.tsx
import React from "react";
import { ProductCarousel, Product } from "@/components/ui/product-carousel"; // Adjust the import path

// --- MOCK DATA ---
const dairyProducts: Product[] = [
  {
    id: 1,
    name: "Verka Standard Fresh Milk",
    quantity: "1 ltr",
    price: 63,
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0bf8ede5-de99-41a2-bdbc-274c1f87b728.png", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Verka Double Toned Milk",
    quantity: "500 ml",
    price: 26,
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f46c49b3-7cc4-4208-bc82-396301ee33f5.png", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Amul Salted Butter",
    quantity: "100 g",
    price: 58,
    originalPrice: 62,
    discount: "6% OFF",
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Amul Gold Full Cream Milk",
    quantity: "500 ml",
    price: 35,
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a501e65f-194b-4db2-abc9-6b7bb515349c.png", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Amul Moti Toned Milk (90 Days Shelf Life)",
    quantity: "450 ml",
    price: 31,
    originalPrice: 33,
    discount: "6% OFF",
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7e06a843-ff97-4c6a-9c94-a9da352dc8c2.png", // Replace with actual image URL
  },
  {
    id: 6,
    name: "Amul Masti Pouch Curd",
    quantity: "390 g",
    price: 35,
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png", // Replace with actual image URL
  },
  {
    id: 7,
    name: "Amul Sterilised Cream",
    quantity: "500 ml",
    price: 32,
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/eb2ba2ce-96fd-43cb-acc0-2a04ff6b810d.png", // Replace with actual image URL
  },
    {
    id: 8,
    name: "Nestle a+ Nourish Dahi",
    quantity: "400g",
    price: 70,
    deliveryTime: "20 MINS",
    imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3af56c86-9a93-4d0c-a8d5-cf38493e4120.png", // Replace with actual image URL
  },
];


const ProductCarouselDemo = () => {
  return (
    <div className="w-full bg-background">
      <ProductCarousel
        title="Dairy, Bread & Eggs"
        products={dairyProducts}
        viewAllHref="/products/dairy"
      />
    </div>
  );
};

export default ProductCarouselDemo;
```

Install NPM dependencies:
```bash
lucide-react, framer-motion
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
