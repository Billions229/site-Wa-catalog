import SEO from "@/components/SEO"
import { ShieldCheck, Lock, Eye, AlertTriangle, PhoneCall, FileWarning, GlobeLock } from "lucide-react"

const securityPrinciples = [
  {
    title: "Vérifie l’identité des vendeurs",
    description:
      "Privilégie les vendeurs avec badge « Vendeur Vérifié ». Demande une photo ou une vidéo du produit incluant un signe distinctif (numéro de commande, date du jour).",
    icon: ShieldCheck,
  },
  {
    title: "Sécurise les paiements",
    description:
      "Utilise des moyens traçables (Mobile Money, virement). Évite les transferts sur des comptes personnels non déclarés. Conserve chaque preuve de paiement.",
    icon: Lock,
  },
  {
    title: "Protége tes informations",
    description:
      "Ne partage jamais ton code WhatsApp ou tes mots de passe. Limite l’accès à ton téléphone professionnel et active la double authentification.",
    icon: GlobeLock,
  },
]

const redFlags = [
  "Le vendeur refuse un paiement sécurisé ou exige un acompte immédiat inhabituel.",
  "Le prix est très inférieur à la concurrence sans justification claire.",
  "Le vendeur change de numéro en plein échange.",
  "Il refuse tout échange audio ou vidéo pour prouver l’existence du produit.",
]

export default function HelpSecurityPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sécurité wa-catalog",
    description:
      "Conseils de sécurité wa-catalog pour acheter et vendre en toute confiance sur WhatsApp : vérification des vendeurs, paiements sécurisés, signaux d’alerte.",
    url: "https://wa-catalog.com/aide/securite",
  }

  return (
    <>
      <SEO
        title="Sécurité wa-catalog | Acheter et vendre en confiance"
        description="Apprends les bonnes pratiques de sécurité sur wa-catalog : vérification des vendeurs, paiements sécurisés, protection des informations et signalement des fraudes."
        keywords="sécurité wa-catalog, conseil sécurité whatsapp commerce, éviter arnaque whatsapp"
        canonical="https://wa-catalog.com/aide/securite"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-900/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
                <ShieldCheck className="h-10 w-10 text-white/90" />
              </div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Sécurité & confiance</h1>
              <p className="max-w-2xl text-lg text-primary-100 md:text-xl">
                Notre mission : sécuriser chaque échange sur WhatsApp. Suis ces recommandations pour protéger tes clients
                et ton activité.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
                Principes fondamentaux
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Les réflexes à adopter sur wa-catalog
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {securityPrinciples.map((principle) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900">{principle.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{principle.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold md:text-4xl">Signaux d’alerte à repérer</h2>
                <p className="mt-4 text-lg text-white/70">
                  Ces situations indiquent un risque. Évite la transaction et signale immédiatement l’utilisateur.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm text-white/80">
                Nous suspendons les comptes signalés le temps de l’enquête • Vérifications en moins de 24 h
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {redFlags.map((flag) => (
                <div key={flag} className="flex items-start gap-3 rounded-2xl bg-white/5 p-5">
                  <AlertTriangle className="mt-1 h-5 w-5 text-primary-200" />
                  <p className="text-sm leading-relaxed text-white/80">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 shadow-inner">
                <h3 className="text-xl font-bold text-gray-900">En cas de doute</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Contacte immédiatement notre support. Nous retraçons la conversation et te guidons pour sécuriser la
                  transaction.
                </p>
                <div className="mt-6 space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="h-5 w-5 text-primary-600" />
                    <span>WhatsApp : +229 99 32 30 73</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-primary-600" />
                    <span>Nous analysons les captures d’écran et preuves de paiement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileWarning className="h-5 w-5 text-primary-600" />
                    <span>Suspension préventive du vendeur en cas de tentative de fraude</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">Nos engagements</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li>• Audits réguliers des vendeurs Business et Pay-by-Lead.</li>
                  <li>• Hébergement sécurisé en Europe avec sauvegardes chiffrées.</li>
                  <li>• Sensibilisation continue sur la collecte d’avis audio/vidéo authentiques.</li>
                  <li>• Droit à l’oubli : suppression des données sur demande en moins de 48 h.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

