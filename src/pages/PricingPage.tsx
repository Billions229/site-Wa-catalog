import { useMemo } from "react"
import SEO from "@/components/SEO"
import { Button } from "@/components/ui/button"
import * as PricingCard from "@/components/ui/pricing-card"
import { PricingTable, type PricingFeature, type PricingPlan } from "@/components/ui/pricing-table"
import {
  CheckCircle2,
  Users,
  Briefcase,
  Building,
  TrendingUp,
  Globe,
  Shield,
  Megaphone,
  Zap,
  Wrench,
  ArrowRight,
  Target,
  Award,
} from "lucide-react"

export default function PricingPage() {
  const heroStats = [
    { label: "Leads qualifiés livrés en 2024", value: "12 500+" },
    { label: "Taux de réponse moyen", value: "92 %" },
    { label: "Vendeurs actifs", value: "780" },
  ]

  const pillars = [
    {
      icon: TrendingUp,
      title: "Génération de leads mutualisée",
      description:
        "Nous finançons les campagnes Facebook/Google pour capter la demande et te livrer des prospects prêts à acheter.",
    },
    {
      icon: Globe,
      title: "Visibilité organique durable",
      description:
        "Chaque fiche produit dispose d’une page SEO et est indexée par les IA conversationnelles pour rester visible en permanence.",
    },
    {
      icon: Shield,
      title: "Capital confiance numérique",
      description:
        "Avis certifiés, badges Vérifié et suivi de satisfaction transforment ta réputation en véritable actif digital.",
    },
    {
      icon: Megaphone,
      title: "Partenariats marketing premium",
      description:
        "Articles sponsorisés, sélections thématiques et placements éditoriaux boostent tes références stratégiques.",
    },
    {
      icon: Zap,
      title: "Expérience WhatsApp sans friction",
      description:
        "Le bot répond en langage naturel en moins de 30 secondes et élimine le fouillage interminable des statuts.",
    },
    {
      icon: Wrench,
      title: "Indexation des services locaux",
      description:
        "Artisans, services d’urgence, prestations nocturnes : tu restes trouvable au moment critique où la demande explose.",
    },
  ]

  const pricingPlans: PricingPlan[] = useMemo(
    () => [
      {
        name: "Starter",
        level: "starter",
        price: { monthly: 0, yearly: 0 },
      },
      {
        name: "Business",
        level: "pro",
        price: { monthly: 15000, yearly: 150000 },
        popular: true,
      },
      {
        name: "Pay-by-Lead",
        level: "all",
        price: { monthly: 0, yearly: 0 },
      },
    ],
    [],
  )

  const pricingFeatures: PricingFeature[] = [
    { name: "Référencement catalogue WhatsApp", included: "starter" },
    { name: "Leads offerts chaque mois", included: "starter" },
    { name: "Pages SEO dédiées par produit", included: "all" },
    { name: "Visibilité IA (ChatGPT, Gemini, etc.)", included: "all" },
    { name: "Badge Vendeur Vérifié", included: "pro" },
    { name: "Rapport hebdomadaire WhatsApp", included: "starter" },
    { name: "Analytics avancées + alertes", included: "pro" },
    { name: "Articles sponsorisés Premium", included: "pro" },
    { name: "Commission uniquement par lead", included: "all" },
    { name: "Support prioritaire 24/7", included: "pro" },
    { name: "Campagnes marketing mutualisées", included: "all" },
    { name: "Add-ons à la demande", included: "all" },
  ]

  const addOns = [
    {
      title: "Setup Pro",
      price: "10 000 FCFA",
      description: "On crée ton catalogue, tes fiches SEO et tes scripts d’accueil WhatsApp.",
    },
    {
      title: "Badge Confiance Express",
      price: "25 000 FCFA / an",
      description: "Audit, vérification documentaire et script de collecte d’avis audio/vidéo.",
    },
    {
      title: "Pack Contenu Premium",
      price: "Sur devis",
      description: "Article sponsorisé + visuels + distribution multicanale sur 4 semaines.",
    },
  ]

  const cards = [
    {
      icon: <Users />,
      name: "Starter",
      description: "Idéal pour se lancer sur WhatsApp avec une mise en avant immédiate.",
      price: "Gratuit",
      period: "",
      variant: "outline" as const,
      badge: undefined,
      original: "",
      features: [
        "Référencement catalogue (jusqu’à 25 produits)",
        "Page vendeur SEO + indexation IA",
        "3 leads offerts / mois",
        "Rapport de performance hebdomadaire",
        "Accès aux catégories grand public",
      ],
    },
    {
      icon: <Briefcase />,
      name: "Business",
      description: "Pour accélérer les ventes et sécuriser ta réputation digitale.",
      price: "15 000 FCFA",
      period: "/mois",
      variant: "default" as const,
      badge: "Le plus choisi",
      original: "20 000 FCFA",
      features: [
        "12 leads qualifiés / mois (puis pay-per-lead)",
        "Badge Vendeur Vérifié + script de collecte d’avis",
        "Articles sponsorisés trimestriels",
        "Priorisation dans les campagnes marketing",
        "Support prioritaire 24/7 + alertes data",
      ],
    },
    {
      icon: <Building />,
      name: "Pay-by-Lead",
      description: "Pour les vendeurs premium ou services locaux à forte urgence.",
      price: "0 FCFA",
      period: "à l’inscription",
      variant: "outline" as const,
      badge: "Lead à la demande",
      original: "",
      features: [
        "Activation express (48h)",
        "Documentation complète IA + SEO",
        "Facturation au lead livré",
        "Ciblage hyper localisé 24/7",
        "Gestion intégrale des campagnes media",
      ],
    },
  ]

  const handlePlanClick = (plan: string) => {
    if (plan === "Starter") {
      window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
      return
    }

    window.open("https://wa.me/22999323073", "_blank", "noopener,noreferrer")
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tarifs wa-catalog",
    description:
      "Découvrez les plans wa-catalog : Starter, Business et Pay-by-Lead. Campagnes mutualisées, SEO, badges de confiance et analytics pour vendre sur WhatsApp.",
    url: "https://wa-catalog.com/pricing",
  }

  return (
    <>
      <SEO
        title="Tarifs wa-catalog | Plans et commission par lead"
        description="Comparez les plans wa-catalog : Starter, Business, Pay-by-Lead. Profitez de la génération de leads mutualisée, du SEO local et des badges confiance pour booster vos ventes WhatsApp."
        keywords="tarifs wa-catalog, pricing wa-catalog, commission par lead, plans vendeurs WhatsApp, wa-catalog business"
        canonical="https://wa-catalog.com/pricing"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/75 to-primary-800/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-widest text-white/90">
                Tarifs & commissions
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
                Investis dans un écosystème qui te génère des ventes, pas dans des clics au hasard
              </h1>
              <p className="mb-10 text-lg text-primary-100 md:text-xl">
                Chaque plan s’appuie sur nos 6 piliers : génération de leads mutualisée, visibilité organique, capital
                confiance, partenariats marketing, expérience WhatsApp sans friction et indexation des services locaux.
              </p>
              <div className="grid gap-6 sm:flex sm:flex-wrap">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md transition hover:bg-white/20"
                  >
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-primary-100">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Ce qui fait la différence wa-catalog</h2>
              <p className="mt-4 text-lg text-gray-600">
                Une stratégie pensée pour structurer le commerce informel africain et sécuriser la croissance des
                vendeurs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="group rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-600 transition group-hover:bg-primary-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 py-20">
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Plans recommandés
              </span>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Choisis la formule adaptée à ton volume et à ton ambition
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cards.map((plan) => (
                <PricingCard.Card key={plan.name} className="md:min-w-[280px]">
                  <PricingCard.Header>
                    <PricingCard.Plan>
                      <PricingCard.PlanName>
                        {plan.icon}
                        <span className="text-muted-foreground">{plan.name}</span>
                      </PricingCard.PlanName>
                      {plan.badge && <PricingCard.Badge>{plan.badge}</PricingCard.Badge>}
                    </PricingCard.Plan>
                    <PricingCard.Price>
                      <PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
                      {plan.period && <PricingCard.Period>{plan.period}</PricingCard.Period>}
                      {plan.original && (
                        <PricingCard.OriginalPrice className="ml-auto">{plan.original}</PricingCard.OriginalPrice>
                      )}
                    </PricingCard.Price>
                    <Button
                      variant={plan.variant}
                      className="w-full font-semibold"
                      onClick={() => handlePlanClick(plan.name)}
                    >
                      Demander ce plan
                    </Button>
                  </PricingCard.Header>
                  <PricingCard.Body>
                    <PricingCard.Description>{plan.description}</PricingCard.Description>
                    <PricingCard.List>
                      {plan.features.map((feature) => (
                        <PricingCard.ListItem key={feature}>
                          <CheckCircle2 className="h-4 w-4 text-foreground" aria-hidden="true" />
                          <span>{feature}</span>
                        </PricingCard.ListItem>
                      ))}
                    </PricingCard.List>
                  </PricingCard.Body>
                </PricingCard.Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Comparer toutes les fonctionnalités</h2>
              <p className="mt-4 text-lg text-gray-600">
                Tu ne payes que lorsque tu reçois des prospects. Le reste est inclus pour que tu puisses scaler
                sereinement.
              </p>
            </div>
            <PricingTable
              features={pricingFeatures}
              plans={pricingPlans}
              defaultPlan="pro"
              defaultInterval="monthly"
              containerClassName="max-w-5xl"
              buttonClassName="bg-primary-500 hover:bg-primary-600"
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-50 via-white to-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Add-ons premium</h2>
              <p className="mt-4 text-lg text-gray-600">
                Des services optionnels pour accélérer ta mise en marché et renforcer ta crédibilité.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {addOns.map((addon) => (
                <div
                  key={addon.title}
                  className="rounded-2xl border border-primary-100 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <h3 className="text-xl font-bold text-gray-900">{addon.title}</h3>
                  <p className="mt-2 text-primary-600 font-semibold">{addon.price}</p>
                  <p className="mt-4 text-sm text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Award className="mx-auto h-12 w-12 text-white/90" />
            <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">Prêt à rejoindre les vendeurs performants ?</h2>
            <p className="mt-4 text-lg text-primary-100">
              Active ton plan Business aujourd’hui, profite de la génération de leads mutualisée et sécurise ta présence
              dans la prochaine vague du commerce conversationnel.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => handlePlanClick("Business")}
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Je veux le plan Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handlePlanClick("Pay-by-Lead")}
                className="border-white text-white hover:bg-white/10"
              >
                Discuter avec l’équipe
              </Button>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-primary-100 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Activation en 48h</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Badge Vendeur Vérifié offert pour la première campagne</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

