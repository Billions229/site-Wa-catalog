import SEO from "@/components/SEO"
import NumberFlow from "@number-flow/react"
import {
  Activity,
  BarChart,
  Users,
  ShoppingBag,
  Clock,
  MapPin,
  MessageSquare,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  Shield,
  Megaphone,
} from "lucide-react"

export default function StatsPage() {
  const kpis = [
    {
      label: "Requêtes traitées ce mois-ci",
      value: 18234,
      icon: Activity,
      suffix: "",
    },
    {
      label: "Temps de réponse moyen du bot",
      value: 27,
      icon: Clock,
      suffix: " s",
    },
    {
      label: "Leads qualifiés transmis",
      value: 4231,
      icon: MessageSquare,
      suffix: "",
    },
    {
      label: "Taux de satisfaction vendeur",
      value: 96,
      icon: Sparkles,
      suffix: " %",
    },
  ]

  const topCategories = [
    { name: "Électronique & Gadgets", growth: "+38 %", volume: "5 420 demandes", icon: ShoppingBag },
    { name: "Mode & Beauté", growth: "+24 %", volume: "3 980 demandes", icon: TrendingUp },
    { name: "Services urgents", growth: "+41 %", volume: "2 215 demandes", icon: MapPin },
  ]

  const timeline = [
    {
      title: "8h – 12h",
      description: "Pics de recherche pour l’électronique et les fournitures bureautiques.",
      delta: "+18 %",
    },
    {
      title: "12h – 18h",
      description: "Croissance de la demande mode & beauté, commandes de restauration.",
      delta: "+22 %",
    },
    {
      title: "18h – 23h",
      description: "Requêtes services d’urgence (livraison, plomberie, dépannage automobile).",
      delta: "+34 %",
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Statistiques publiques wa-catalog",
    description:
      "Statistiques agrégées sur l’utilisation de wa-catalog : requêtes traitées, catégories populaires, temps de réponse et satisfaction des vendeurs.",
    url: "https://wa-catalog.com/statistiques",
  }

  return (
    <>
      <SEO
        title="Statistiques publiques wa-catalog"
        description="Découvrez les métriques clés de wa-catalog : volume de requêtes, leads qualifiés, catégories tendances et performances du bot WhatsApp."
        keywords="statistiques wa-catalog, metrics commerce WhatsApp, leads qualifiés, temps de réponse bot"
        canonical="https://wa-catalog.com/statistiques"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-900/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-widest">
                Data publique
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
                Comprends la dynamique du commerce WhatsApp en un coup d'œil
              </h1>
              <p className="text-lg text-primary-100 md:text-xl">
                Ces données agrégées et anonymisées te montrent quand les acheteurs sont actifs, quels produits explosent
                et comment notre bot garde un temps de réponse chirurgical.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {kpis.map((kpi) => {
                const Icon = kpi.icon
                return (
                  <div
                    key={kpi.label}
                    className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-white/90" />
                      <ArrowUpRight className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="mt-6">
                      <NumberFlow
                        value={kpi.value}
                        className="text-4xl font-extrabold tracking-tight text-white"
                        format={{
                          style: "decimal",
                          maximumFractionDigits: 0,
                        }}
                      />
                      <span className="ml-1 text-2xl font-bold text-white">{kpi.suffix}</span>
                    </div>
                    <p className="mt-4 text-sm text-primary-100">{kpi.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Catégories qui cartonnent</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Nos campagnes mutualisées et notre référencement SEO/IA propulsent ces catégories sur le devant de la
                  scène.
                </p>
                <div className="mt-8 space-y-6">
                  {topCategories.map((category) => {
                    const Icon = category.icon
                    return (
                      <div
                        key={category.name}
                        className="flex flex-col gap-4 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-center"
                      >
                        <div className="flex items-center gap-4">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600">
                            <Icon className="h-6 w-6" />
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                            <p className="text-sm text-gray-600">{category.volume}</p>
                          </div>
                        </div>
                        <div className="ml-auto text-right font-semibold text-primary-600">{category.growth}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Carnet de bord quotidien</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Les pics d’activité guident nos campagnes, améliorent la redistribution des leads et optimisent ton
                  temps de réponse.
                </p>
                <div className="mt-8 space-y-6">
                  {timeline.map((slot) => (
                    <div key={slot.title} className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-600">{slot.title}</span>
                        <span className="text-xs font-bold text-primary-500">{slot.delta}</span>
                      </div>
                      <p className="mt-3 text-sm text-gray-700">{slot.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-white sm:py-20" style={{background: 'linear-gradient(to bottom right, rgb(31, 41, 55), rgb(55, 65, 81), rgb(75, 85, 99))'}}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold md:text-4xl text-white">Pourquoi ces chiffres comptent</h2>
                <p className="mt-4 text-lg text-white" style={{opacity: 0.95}}>
                  Ils valident nos piliers : sans lead qualifié, sans confiance, sans SEO, aucune marketplace sociale ne
                  tient sur la durée.
                </p>
              </div>
              <div className="rounded-2xl border px-6 py-4 text-sm text-white" style={{backgroundColor: 'rgba(255, 255, 255, 0.18)', borderColor: 'rgba(255, 255, 255, 0.3)'}}>
                Données mises à jour chaque semaine • Calculs anonymisés • Période de référence : 1er octobre – 31 octobre
                2025
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border p-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)', borderColor: 'rgba(255, 255, 255, 0.15)'}}>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6" style={{color: '#fbbf24'}} />
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    Confiance & réputation
                  </span>
                </div>
                <p className="mt-4 text-lg text-white" style={{opacity: 0.95}}>
                  4 320 avis collectés (texte, audio, vidéo). 61 % des vendeurs Business obtiennent le badge Vérifié en
                  moins de 30 jours grâce à notre programme d'accompagnement.
                </p>
              </div>
              <div className="rounded-2xl border p-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)', borderColor: 'rgba(255, 255, 255, 0.15)'}}>
                <div className="flex items-center gap-3">
                  <Megaphone className="h-6 w-6" style={{color: '#fbbf24'}} />
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    Visibilité organique
                  </span>
                </div>
                <p className="mt-4 text-lg text-white" style={{opacity: 0.95}}>
                  68 % du trafic entrant provient de Google et de Bing grâce aux pages SEO locales. Les IA (ChatGPT,
                  Copilot) commencent à référencer nos fiches produits long tail.
                </p>
              </div>
              <div className="rounded-2xl border p-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)', borderColor: 'rgba(255, 255, 255, 0.15)'}}>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" style={{color: '#fbbf24'}} />
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    Expérience WhatsApp
                  </span>
                </div>
                <p className="mt-4 text-lg text-white" style={{opacity: 0.95}}>
                  92 % des conversations se concluent en moins de 4 messages grâce aux recommandations ciblées et à nos
                  scripts de relance automatiques.
                </p>
              </div>
              <div className="rounded-2xl border p-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)', borderColor: 'rgba(255, 255, 255, 0.15)'}}>
                <div className="flex items-center gap-3">
                  <BarChart className="h-6 w-6" style={{color: '#fbbf24'}} />
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    Génération de leads
                  </span>
                </div>
                <p className="mt-4 text-lg text-white" style={{opacity: 0.95}}>
                  Pour 1 000 FCFA investis en média via wa-catalog, les vendeurs Business reçoivent en moyenne 4 leads
                  qualifiés. Un retour sur investissement tangible dès la première semaine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

