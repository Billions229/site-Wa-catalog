import { MoveUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Stats() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold">Plateforme</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-left text-gray-900">
                wa-catalog en chiffres
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-gray-600 text-left">
                Rejoignez des milliers de vendeurs et d'acheteurs qui utilisent déjà wa-catalog pour simplifier leurs
                transactions au Bénin.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              <div className="flex gap-0 flex-col justify-between p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tight max-w-xl text-left font-bold flex flex-row gap-4 items-end text-gray-900">
                  15.000+
                  <span className="text-gray-500 text-sm tracking-normal font-normal">+45%</span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-600 max-w-xl text-left">
                  Recherches mensuelles
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tight max-w-xl text-left font-bold flex flex-row gap-4 items-end text-gray-900">
                  500+
                  <span className="text-gray-500 text-sm tracking-normal font-normal">+28%</span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-600 max-w-xl text-left">
                  Vendeurs actifs
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tight max-w-xl text-left font-bold flex flex-row gap-4 items-end text-gray-900">
                  8.500+
                  <span className="text-gray-500 text-sm tracking-normal font-normal">+62%</span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-600 max-w-xl text-left">
                  Produits référencés
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tight max-w-xl text-left font-bold flex flex-row gap-4 items-end text-gray-900">
                  95%
                  <span className="text-gray-500 text-sm tracking-normal font-normal">+5%</span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-gray-600 max-w-xl text-left">
                  Taux de satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
