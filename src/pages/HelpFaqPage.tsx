import { useState } from "react"
import SEO from "@/components/SEO"
import { ChevronDown, HelpCircle, MessageCircle, Shield, ShoppingCart, Users } from "lucide-react"

type FAQCategory = {
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  items: {
    question: string
    answer: string
  }[]
}

export default function HelpFaqPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const categories: FAQCategory[] = [
    {
      title: "Acheteurs",
      icon: ShoppingCart,
      items: [
        {
          question: "Comment démarrer une conversation avec le bot wa-catalog ?",
          answer:
            "Clique sur « Discuter avec le bot » depuis la page d’accueil ou ajoute le numéro du bot à tes contacts. Une conversation WhatsApp s’ouvre automatiquement ; tu peux poser ta question directement en langage naturel.",
        },
        {
          question: "Puis-je filtrer les produits selon ma ville ou mon budget ?",
          answer:
            "Oui. Le bot te pose des questions supplémentaires (ville, budget, état du produit, livraison). Plus tu es précis, plus les recommandations seront pertinentes. Tu peux aussi taper « Filtrer » pour relancer un critère.",
        },
        {
          question: "Que faire si un vendeur ne répond pas ?",
          answer:
            "Utilise la commande « Relancer » dans la conversation ou contacte un autre vendeur proposé. Tu peux aussi signaler le vendeur via le formulaire de feedback afin que nous vérifiions sa réactivité.",
        },
      ],
    },
    {
      title: "Vendeurs",
      icon: Users,
      items: [
        {
          question: "Combien de temps prend l’activation de mon catalogue ?",
          answer:
            "Après réception du formulaire, notre équipe valide ton catalogue sous 24 à 48 heures. Si des informations manquent, nous te contactons par WhatsApp pour compléter ton dossier.",
        },
        {
          question: "Comment fonctionne la commission par lead ?",
          answer:
            "La commission est facturée uniquement lorsqu’un prospect clique sur ton lien WhatsApp. Le tarif dépend de ta catégorie et de ton panier moyen. Tu reçois un récapitulatif hebdomadaire pour suivre tes leads et ton budget.",
        },
        {
          question: "Comment obtenir le badge « Vendeur Vérifié » ?",
          answer:
            "En fournissant les pièces justificatives (RCCM ou preuve d’activité), des photos produits haute qualité et en maintenant un taux de réponse supérieur à 90 %. L’audit complet peut être accéléré via l’add-on « Badge Confiance Express ».",
        },
      ],
    },
    {
      title: "Sécurité & conformité",
      icon: Shield,
      items: [
        {
          question: "Quels produits sont interdits sur wa-catalog ?",
          answer:
            "Sont interdits : médicaments sans autorisation, armes, contrefaçons, substances illégales, produits périmés. Toute fiche concernée est supprimée et le vendeur peut être suspendu.",
        },
        {
          question: "Mes données personnelles sont-elles protégées ?",
          answer:
            "Nous collectons le minimum de données nécessaires et appliquons des contrôles d’accès stricts. Les conversations WhatsApp restent chiffrées de bout en bout et nous ne revendons aucune donnée.",
        },
        {
          question: "Comment signaler un comportement suspect ?",
          answer:
            "Envoie immédiatement une alerte via support@wa-catalog.com ou sur WhatsApp au +229 99 32 30 73. Nous analysons chaque signalement et suspendons préventivement les comptes concernés.",
        },
      ],
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  }

  return (
    <>
      <SEO
        title="FAQ wa-catalog | Questions fréquentes"
        description="Toutes les réponses pour utiliser wa-catalog : inscription vendeur, fonctionnement du bot WhatsApp, paiement par lead, sécurité et conformité."
        keywords="FAQ wa-catalog, questions vendeurs wa-catalog, questions acheteurs wa-catalog"
        canonical="https://wa-catalog.com/aide/faq"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-20 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-900/80 backdrop-blur-sm" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
                <HelpCircle className="h-10 w-10 text-white/90" />
              </div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">FAQ wa-catalog</h1>
              <p className="max-w-3xl text-lg text-primary-100 md:text-xl">
                Comprends rapidement le fonctionnement du bot, des leads, du SEO et des garanties de confiance.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.title}>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    </div>
                    <div className="space-y-4">
                      {category.items.map((item) => {
                        const isOpen = openQuestion === item.question
                        return (
                          <div key={item.question} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <button
                              onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-gray-50"
                            >
                              <span className="font-semibold text-gray-900">{item.question}</span>
                              <ChevronDown
                                className={`h-5 w-5 text-primary-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                            {isOpen && (
                              <div className="border-t border-gray-100 px-6 py-5 text-sm leading-relaxed text-gray-700">
                                {item.answer}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-50 via-white to-white py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
            <Shield className="h-10 w-10 text-primary-500" />
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">Une autre question ?</h2>
            <p className="text-lg text-gray-600">
              Notre équipe répond sur WhatsApp en moins de 15 minutes pour les vendeurs Business. Tu peux aussi écrire à
              support@wa-catalog.com.
            </p>
            <a
              href="https://wa.me/22999323073"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-600"
            >
              <MessageCircle className="h-4 w-4" />
              Ouvrir WhatsApp Support
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

