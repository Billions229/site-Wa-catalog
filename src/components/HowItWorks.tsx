import type React from "react"
import { cn } from "@/lib/utils"
import { Layers, Search, Zap } from "lucide-react"

interface StepCardProps {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, benefits }) => (
  <div
    className={cn(
      "relative rounded-2xl border border-primary-200 bg-white p-6 transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-primary-400 hover:bg-primary-50",
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mb-6 text-gray-600">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary-200">
            <div className="h-2 w-2 rounded-full bg-primary-600"></div>
          </div>
          <span className="text-gray-600 text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default function HowItWorks() {
  const stepsData = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Envoie ta demande",
      description:
        "Dis simplement ce que tu cherches et on vérifie instantanément la disponibilité chez des milliers de vendeurs.",
      benefits: [
        "Recherche intelligente même avec des termes imprécis",
        "Détection automatique de ta ville",
        "Historique de recherche pour un accès rapide",
      ],
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Choisis la meilleure offre",
      description: "Compare les prix, la localisation et la disponibilité, choisis l'option optimale.",
      benefits: [
        "Tri par prix, distance et note",
        "Filtre par disponibilité et fabricant",
        "Informations détaillées sur chaque offre",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Contacte le vendeur",
      description: "Appelle directement le vendeur ou demande un rappel via notre service.",
      benefits: [
        "Contact direct sans intermédiaires",
        "Possibilité de réserver les produits",
        "Itinéraire vers le magasin",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="w-full bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Comment ça marche</h2>
          <p className="mt-4 text-lg text-gray-600">
            Notre service utilise des technologies avancées pour une recherche instantanée de produits chez des milliers
            de vendeurs dans ta ville
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-primary-300"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-primary-100 font-semibold text-primary-700 ring-4 ring-gray-50"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
