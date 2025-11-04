"use client"
import { PricingTable } from "@/components/ui/pricing-table"
import type { PricingFeature, PricingPlan } from "@/components/ui/pricing-table"

const features: PricingFeature[] = [
  { name: "Produits référencés", included: "starter" },
  { name: "Leads offerts", included: "starter" },
  { name: "Visibilité recherche", included: "all" },
  { name: "Position prioritaire", included: "pro" },
  { name: "Badge vendeur vérifié", included: "pro" },
  { name: "Statistiques basiques", included: "all" },
  { name: "Analytics avancées", included: "pro" },
  { name: "Notifications temps réel", included: "pro" },
  { name: "Support prioritaire 24/7", included: "pro" },
  { name: "Catalogue WhatsApp Business", included: "all" },
  { name: "Accès bot wa-catalog", included: "all" },
  { name: "Sans engagement", included: "all" },
]

const plans: PricingPlan[] = [
  {
    name: "Gratuit",
    price: { monthly: 0, yearly: 0 },
    level: "starter",
  },
  {
    name: "Business",
    price: { monthly: 10000, yearly: 100000 },
    level: "pro",
    popular: true,
  },
  {
    name: "Pay-by-Lead",
    price: { monthly: 0, yearly: 0 },
    level: "all",
  },
]

export default function Pricing() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20">
      <div
        className="absolute inset-0 z-[-10] size-full max-h-102 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        style={{
          backgroundImage: "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center mb-12">
        <h1 className="text-3xl leading-tight font-bold text-balance sm:text-5xl">
          {"Des tarifs "}
          <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text font-bold text-transparent">
            {"transparents"}
          </span>
          {" pour tous les "}
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text font-bold text-transparent">
            {"vendeurs"}
          </span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-pretty">
          Choisissez le plan qui correspond à vos besoins. Gratuit pour les acheteurs, toujours.
        </p>
      </div>

      <PricingTable
        features={features}
        plans={plans}
        defaultPlan="pro"
        defaultInterval="monthly"
        onPlanSelect={(plan) => console.log("Selected plan:", plan)}
        containerClassName="py-0"
        buttonClassName="bg-primary hover:bg-primary/90"
      />

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Des questions sur nos tarifs ? Contactez-nous sur WhatsApp</p>
        <a
          href="https://wa.me/22999323073"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-emerald-600 hover:from-primary-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Parler à l'équipe
        </a>
      </div>
    </div>
  )
}
