import SEO from "@/components/SEO"
import { Accessibility, Eye, Keyboard, Languages, MessageCircle, Volume2 } from "lucide-react"

const commitments = [
  {
    title: "Structure claire",
    description:
      "Titres hiérarchisés, navigation cohérente et contenu lisible. Chaque section respecte les ratios de contraste WCAG 2.1 AA.",
    icon: Accessibility,
  },
  {
    title: "Compatibilité lecteurs d’écran",
    description:
      "Les composants clés disposent d’alternatives textuelles. Les boutons et formulaires sont décrits par ARIA.",
    icon: Volume2,
  },
  {
    title: "Navigation au clavier",
    description:
      "Ordre de tabulation optimisé, focus visible, raccourcis présents sur les sections critiques (CTA, formulaires).",
    icon: Keyboard,
  },
]

const roadmap = [
  {
    label: "Audit bimensuel",
    details: "Tests manuels sur NVDA, VoiceOver et TalkBack. Vérification des contrastes à chaque mise en production.",
  },
  {
    label: "Traductions locales",
    details: "Priorité aux langues les plus demandées (FR, EN, Fon, Yoruba). Les guides sont rédigés en français simplifié.",
  },
  {
    label: "Accessibilité conversationnelle",
    details:
      "Script du bot adapté aux personnes malvoyantes : phrases courtes, réponse audio sur demande, liens raccourcis.",
  },
]

export default function AccessibilitePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Politique d’accessibilité wa-catalog",
    description:
      "Politique d’accessibilité de wa-catalog : conformité WCAG 2.1 AA, compatibilité lecteurs d’écran, navigation clavier et feuille de route inclusive.",
    url: "https://wa-catalog.com/accessibilite",
  }

  return (
    <>
      <SEO
        title="Accessibilité wa-catalog | Notre politique inclusive"
        description="Découvre la politique d’accessibilité de wa-catalog : conformité WCAG 2.1 AA, compatibilité lecteurs d’écran, navigation clavier et feuille de route pour un commerce inclusif."
        keywords="accessibilité wa-catalog, WCAG 2.1, inclusion numérique Bénin, marketplace inclusive"
        canonical="https://wa-catalog.com/accessibilite"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-900/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
                <Accessibility className="h-10 w-10 text-white/90" />
              </div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Accessibilité & inclusion</h1>
              <p className="max-w-2xl text-lg text-primary-100 md:text-xl">
                wa-catalog se construit pour tous : vendeurs et acheteurs quel que soit leur contexte d’usage, leurs
                capacités physiques ou leur langue.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
                Engagements
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Nos standards d’accessibilité actifs
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {commitments.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 text-white sm:py-20" style={{background: 'linear-gradient(to bottom right, rgb(31, 41, 55), rgb(55, 65, 81), rgb(75, 85, 99))'}}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold md:text-4xl text-white">Feuille de route inclusive</h2>
              <p className="mt-3 text-lg text-white" style={{opacity: 0.95}}>
                Les fonctionnalités ci-dessous sont priorisées pour garantir un accès équitable au commerce informel
                digital.
              </p>
            </div>
            <div className="space-y-4">
              {roadmap.map((item) => (
                <div key={item.label} className="rounded-2xl border p-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.12)', borderColor: 'rgba(255, 255, 255, 0.15)'}}>
                  <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 text-sm text-white">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Eye className="mx-auto h-10 w-10 text-primary-500" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-4xl">Besoin d’un aménagement ?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Écris-nous pour signaler un obstacle d’accessibilité ou demander un format particulier (audio, lecture
              facile, braille). Chaque demande est traitée en moins de 10 jours ouvrés.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary-600" />
                <span>support@wa-catalog.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4 text-primary-600" />
                <span>Traductions priorisées : Fon, Yoruba, Goun</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

