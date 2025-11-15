import SEO from "@/components/SEO"
import { AlertTriangle, CheckCircle2, RefreshCw, Server, Smartphone, UploadCloud, Wrench } from "lucide-react"

const troubleshootingGuides = [
  {
    title: "Je ne reçois plus de leads",
    icon: Server,
    steps: [
      "Vérifie que ton catalogue WhatsApp Business est public et accessible sans invitation.",
      "Confirme que le lien renseigné dans ton formulaire wa-catalog est toujours valide.",
      "Réponds au moins à 90 % des leads en moins de 2 heures pour rester prioritaire dans la distribution.",
      "Contacte le support pour vérifier si ta catégorie n’est pas en maintenance temporaire.",
    ],
    verification: "Si tout est correct, notre équipe relance manuellement la diffusion de tes fiches sous 2 heures.",
  },
  {
    title: "Le bot n’affiche pas mes nouveaux produits",
    icon: UploadCloud,
    steps: [
      "Actualise ton catalogue WhatsApp (photos, prix, descriptions).",
      "Utilise le formulaire « Mise à jour catalogue » reçu dans l’email de bienvenue.",
      "Indique un maximum de mots-clés dans tes titres pour faciliter l’indexation SEO/IA.",
      "Attends 15 minutes puis teste la commande « Rechercher mes produits » depuis le bot.",
    ],
    verification:
      "Si l’indexation dépasse 2 heures, envoie le code produit au support : nous accélérons la synchronisation.",
  },
  {
    title: "Le bot répond lentement ou plante",
    icon: Smartphone,
    steps: [
      "Vérifie ta connexion et relance la conversation en tapant « restart ».",
      "Efface la discussion et démarre une nouvelle conversation pour purger l’historique.",
      "Assure-toi d’utiliser la dernière version de WhatsApp (mobile ou desktop).",
      "Vérifie sur notre page Statistiques si un pic d’activité est en cours.",
    ],
    verification:
      "En cas de lenteur généralisée, nous basculons automatiquement sur notre serveur de secours et t’envoyons une notification.",
  },
]

export default function HelpDepannagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Guide de dépannage wa-catalog",
    description:
      "Résolution des problèmes courants : leads manquants, produits non indexés, lenteur du bot WhatsApp wa-catalog.",
    url: "https://wa-catalog.com/aide/depannage",
  }

  return (
    <>
      <SEO
        title="Dépannage wa-catalog | Résoudre les problèmes"
        description="Guide de dépannage wa-catalog : leads manquants, catalogue non synchronisé, lenteur du bot. Suivez les étapes pour rétablir vos performances."
        keywords="dépannage wa-catalog, problème leads wa-catalog, bot wa-catalog lent, catalogue whatsapp non synchronisé"
        canonical="https://wa-catalog.com/aide/depannage"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-900/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
                <Wrench className="h-10 w-10 text-white/90" />
              </div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Dépannage express</h1>
              <p className="max-w-2xl text-lg text-primary-100 md:text-xl">
                Identifie le problème, suis les étapes de vérification et active notre équipe support si besoin. Chaque
                guide est aligné sur nos piliers : leads, visibilité, confiance.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {troubleshootingGuides.map((guide) => {
                const Icon = guide.icon
                return (
                  <div
                    key={guide.title}
                    className="rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                      <div className="inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-600">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{guide.title}</h2>
                        <p className="mt-2 text-sm text-gray-600">
                          Priorise les vérifications dans l’ordre. Chaque étape renforce ton capital confiance numérique.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {guide.steps.map((step) => (
                        <div
                          key={step}
                          className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/10">
                            <CheckCircle2 className="h-5 w-5 text-primary-600" />
                          </div>
                          <p className="text-sm leading-relaxed text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary-200 bg-primary-50/50 p-4">
                      <AlertTriangle className="h-5 w-5 text-primary-600" />
                      <p className="text-sm text-gray-700">{guide.verification}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-50 via-white to-white py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
            <RefreshCw className="h-8 w-8 text-primary-500" />
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Besoin d’une intervention manuelle ?</h2>
            <p className="text-lg text-gray-600">
              Notre équipe technique peut relancer une synchronisation, vérifier ton budget media ou reconfigurer ton
              catalogue en moins de 24 heures.
            </p>
            <a
              href="https://wa.me/22999323073?text=Assistance%20technique%20wa-catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-600"
            >
              Contacter le support technique
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

