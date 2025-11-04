import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react"

export default function BecomeVendor() {
  const benefits = [
    {
      icon: Users,
      title: "Clients qualifiés",
      description: "Les gens viennent chercher activement tes produits",
    },
    {
      icon: TrendingUp,
      title: "Plus de visibilité",
      description: "Apparais dans les résultats de milliers de recherches",
    },
    {
      icon: DollarSign,
      title: "Tarifs compétitifs",
      description: "Pas de frais de publicité Facebook/Instagram",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-4">Deviens vendeur sur wa-catalog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Augmente ta visibilité et vends plus facilement auprès de milliers de clients
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Besoin d'aide pour t'inscrire ?</h3>
          <p className="text-gray-600 mb-6">Notre équipe est là pour t'accompagner tout le long du processus</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/22999323073"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg"
            >
              Discuter sur WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              En savoir plus sur les tarifs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
