import type React from "react"
import { cn } from "@/lib/utils"
import { MessageCircle, Search, ShoppingBag } from "lucide-react"

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
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Ouvre WhatsApp",
      description:
        "Clique sur le lien pour démarrer une conversation avec notre bot intelligent. Discute naturellement avec lui en commençant par des salutations.",
      benefits: [
        "Le lien ouvre automatiquement WhatsApp",
        "Sur mobile : l'app WhatsApp se lance",
        "Sur PC : WhatsApp Web s'ouvre",
        "Aucune installation requise",
      ],
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Précise tes besoins",
      description: "Le bot te demande plus de détails pour trouver exactement ce qui te correspond : ville, livraison souhaitée, budget et état préféré.",
      benefits: [
        "Dans quelle ville ? (ex: Cotonou)",
        "Livraison souhaitée ? (Oui/Non)",
        "Quel est ton budget ? (ex: 450 000 FCFA)",
        "État préféré ? (Neuf/Occasion)",
      ],
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Reçois et contacte les vendeurs",
      description: "Le bot t'envoie les produits correspondants avec photos, prix et contacts vendeurs. Clique sur le lien du vendeur qui t'intéresse et finalise ton achat directement avec lui.",
      benefits: [
        "Photos réelles des produits",
        "Prix clairs en FCFA",
        "Localisation des vendeurs",
        "Numéros WhatsApp directs",
        "Réponse en moins de 30 secondes",
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
            3 étapes simples pour trouver n'importe quel produit sur WhatsApp. Toute la recherche et la mise en relation se font dans WhatsApp via notre bot intelligent.
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
