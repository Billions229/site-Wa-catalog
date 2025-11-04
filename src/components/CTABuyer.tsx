"use client"

import { ChevronRight } from "lucide-react"

export default function CTABuyer() {
  const handleClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à trouver ce que tu cherches ?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Commence ta recherche maintenant et découvre les meilleurs vendeurs près de chez toi
          </p>

          <button
            onClick={handleClick}
            className="group relative overflow-hidden bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">Commencer</span>
            <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-600/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
              <ChevronRight size={16} strokeWidth={2} aria-hidden="true" className="text-primary-700" />
            </i>
          </button>
        </div>
      </div>
    </section>
  )
}
