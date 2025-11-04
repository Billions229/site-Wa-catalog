"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight, Smartphone, Shirt, Home, Car, Utensils, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductFeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  linkText: string
  linkHref: string
  className?: string
}

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const ProductFeatureCard: React.FC<ProductFeatureCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "group relative w-full overflow-hidden rounded-xl border border-primary-200 bg-white p-6 shadow-sm",
        "transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-primary-400",
        className,
      )}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
    >
      {/* Icon Section */}
      <div className="mb-6 flex justify-center">
        <div className="h-20 w-20 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
          {icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col text-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={linkHref}
          className="group/link mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-600"
        >
          {linkText}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}

export default function PopularCategories() {
  const categories = [
    {
      name: "Électronique",
      description: "Téléphones, ordinateurs, accessoires",
      icon: <Smartphone className="w-10 h-10" />,
      url: "/categories/electronique",
    },
    {
      name: "Mode & Beauté",
      description: "Vêtements, chaussures, cosmétiques",
      icon: <Shirt className="w-10 h-10" />,
      url: "/categories/mode-beaute",
    },
    {
      name: "Maison & Déco",
      description: "Meubles, décoration, électroménager",
      icon: <Home className="w-10 h-10" />,
      url: "/categories/maison-deco",
    },
    {
      name: "Auto & Moto",
      description: "Véhicules, pièces détachées, accessoires",
      icon: <Car className="w-10 h-10" />,
      url: "/categories/auto-moto",
    },
    {
      name: "Alimentation",
      description: "Restaurants, traiteurs, produits frais",
      icon: <Utensils className="w-10 h-10" />,
      url: "/categories/alimentation",
    },
    {
      name: "Toutes les catégories",
      description: "Découvrez tous les produits disponibles",
      icon: <ShoppingBag className="w-10 h-10" />,
      url: "/categories",
    },
  ]

  return (
    <section className="bg-white py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-4">Catégories populaires</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trouve des produits dans nos catégories principales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <ProductFeatureCard
              key={category.name}
              icon={category.icon}
              title={category.name}
              description={category.description}
              linkText="Voir plus"
              linkHref={category.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
