import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import {
  HelpCircle,
  ShieldCheck,
  Settings,
  MessageCircle,
  Compass,
  Headphones,
  CircleArrowRight,
  BookOpen,
  Lightbulb,
} from "lucide-react"

export default function HelpPage() {
  const resources = [
    {
      title: "FAQ complète",
      description: "Retrouve les réponses aux questions les plus fréquentes avant de contacter l’équipe.",
      icon: HelpCircle,
      href: "/aide/faq",
      cta: "Consulter la FAQ",
    },
    {
      title: "Dépannage",
      description: "Vérifie les étapes pour résoudre les problèmes courants : catalogue, leads, paiement.",
      icon: Settings,
      href: "/aide/depannage",
      cta: "Résoudre un problème",
    },
    {
      title: "Sécurité",
      description: "Les bons réflexes pour acheter et vendre en confiance sur WhatsApp et wa-catalog.",
      icon: ShieldCheck,
      href: "/aide/securite",
      cta: "Lire les conseils",
    },
  ]

  const guides = [
    {
      title: "Guide acheteur",
      items: ["Comment démarrer une conversation", "Filtrer les produits", "Contacter le bon vendeur"],
    },
    {
      title: "Guide vendeur",
      items: ["Optimiser son catalogue", "Activer les badges confiance", "Suivre ses statistiques hebdomadaires"],
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Centre d'aide wa-catalog",
    description:
      "Centre d'aide wa-catalog : FAQ, dépannage et conseils de sécurité pour acheter ou vendre via WhatsApp.",
    url: "https://wa-catalog.com/aide",
  }

  return (
    <>
      <SEO
        title="Aide wa-catalog | Guides, FAQ et support"
        description="Accède au centre d'aide wa-catalog : FAQ, dépannage, sécurité. Découvre comment utiliser le bot WhatsApp pour acheter et vendre efficacement."
        keywords="support wa-catalog, aide wa-catalog, FAQ wa-catalog, dépannage wa-catalog"
        canonical="https://wa-catalog.com/aide"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-900/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
                <Headphones className="h-10 w-10 text-white/90" />
              </div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Besoin d’aide ? On t’accompagne étape par étape.
              </h1>
              <p className="max-w-3xl text-lg text-primary-100 md:text-xl">
                Comprendre le fonctionnement du bot, sécuriser tes ventes, résoudre un blocage technique : retrouve les
                ressources essentielles du commerce WhatsApp structuré.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/aide/faq"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
                >
                  Consulter la FAQ
                  <CircleArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/22999323073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contacter le support
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Choisis ton besoin</h2>
              <p className="mt-4 text-lg text-gray-600">
                Trois parcours pour clarifier ton problème et accéder aux ressources adaptées.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <div
                    key={resource.title}
                    className="group flex h-full flex-col rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-600 transition group-hover:bg-primary-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900">{resource.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-gray-600">{resource.description}</p>
                    <Link
                      to={resource.href}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-600 transition hover:text-primary-700"
                    >
                      {resource.cta}
                      <CircleArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  Guides WA-CATALOG
                </span>
                <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Optimise ton parcours en 3 minutes</h2>
                <p className="mt-4 text-lg text-white/70">
                  Chaque guide reprend nos piliers : la génération de leads mutualisée, la visibilité organique, la
                  confiance numérique et l’expérience WhatsApp fluide.
                </p>
                <div className="mt-8 space-y-6">
                  {guides.map((guide) => (
                    <div key={guide.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary-200" />
                        <h3 className="text-lg font-semibold text-white">{guide.title}</h3>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {guide.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Lightbulb className="mt-0.5 h-4 w-4 text-primary-200" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <h3 className="text-xl font-bold text-white">Contact rapide</h3>
                <p className="mt-3 text-sm text-white/70">
                  Besoin d’une assistance prioritaire ? Notre équipe répond sur WhatsApp en moins de 15 minutes aux
                  vendeurs Business.
                </p>
                <div className="mt-6 space-y-4 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-primary-200" />
                    <span>WhatsApp : +229 99 32 30 73</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary-200" />
                    <span>Support email : support@wa-catalog.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Compass className="h-5 w-5 text-primary-200" />
                    <span>Horaires : Lundi – Samedi, 8h à 21h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

