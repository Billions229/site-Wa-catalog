"use client"

import { useState, useEffect } from "react"
import { Zap } from "lucide-react"

export default function Hero() {
  const [currentCard, setCurrentCard] = useState(0)

  const cardConfigs = [
    {
      bgColor: "bg-primary-400",
      content: {
        greeting: "Salut! Comment puis-je t'aider?",
        subtitle: "Que cherches-tu aujourd'hui?",
      },
    },
    {
      bgColor: "bg-blue-400",
      content: {
        type: "search",
        greeting: "Recherche en cours...",
        subtitle: "Je trouve les meilleurs vendeurs",
      },
    },
    {
      bgColor: "bg-accent-400",
      content: {
        type: "results",
        title: "Résultats trouvés",
        subtitle: "12 vendeurs disponibles",
      },
    },
    {
      bgColor: "bg-yellow-300",
      content: {
        type: "chat-history",
      },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardConfigs.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentConfig = cardConfigs[currentCard]

  const handleChatClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-50 w-full overflow-hidden max-w-screen to-primary-100 relative">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-6 pt-8 pb-16 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-thin text-gray-900 leading-[1.3] mb-8 tracking-tight">
            <span className="block mb-3">La recherche de produits et services,</span>
            <span className="block">réinventée</span>
          </h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed mt-8">
            Discutes avec notre bot et trouve tout ce dont tu as besoin avec une précision chirurgicale
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleChatClick}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-xl mb-16 flex items-center space-x-2 text-base font-medium group"
        >
          <span>Discuter avec le bot</span>
          <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Animated Layered Cards Interface - WhatsApp Mockup */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Background Cards with staggered animations */}
          <div className="absolute inset-0 transform rotate-3 scale-95 transition-all duration-1000 ease-in-out">
            <div
              className={`w-full h-72 bg-accent-300 rounded-3xl shadow-2xl opacity-50 transition-all duration-1000 ${currentCard === 1 ? "scale-105 opacity-70" : ""}`}
            ></div>
          </div>
          <div className="absolute inset-0 transform -rotate-2 scale-96 transition-all duration-1000 ease-in-out delay-300">
            <div
              className={`w-full h-76 bg-primary-400 rounded-3xl shadow-2xl opacity-60 transition-all duration-1000 ${currentCard === 2 ? "scale-105 opacity-80" : ""}`}
            ></div>
          </div>
          <div className="absolute inset-0 transform rotate-1 scale-97 transition-all duration-1000 ease-in-out delay-500">
            <div
              className={`w-full h-72 bg-pink-400 rounded-3xl shadow-2xl opacity-50 transition-all duration-1000 ${currentCard === 3 ? "scale-105 opacity-70" : ""}`}
            ></div>
          </div>
          <div className="absolute inset-0 transform -rotate-1 scale-98 transition-all duration-1000 ease-in-out delay-700">
            <div
              className={`w-full h-72 bg-yellow-300 rounded-3xl shadow-2xl opacity-40 transition-all duration-1000 ${currentCard === 0 ? "scale-105 opacity-60" : ""}`}
            ></div>
          </div>

          {/* Main Animated Card - WhatsApp Interface */}
          <div
            className={`relative z-10 w-full h-76 ${currentConfig.bgColor} rounded-3xl shadow-2xl p-6 flex flex-col transition-all duration-1000 ease-in-out transform hover:scale-[1.02]`}
          >
            {/* WhatsApp Chat Interface */}
            <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-5 flex-1 transition-all duration-500">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full transition-all duration-300 hover:scale-110"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full transition-all duration-300 hover:scale-110"></div>
                  <div className="w-3 h-3 bg-primary-500 rounded-full transition-all duration-300 hover:scale-110"></div>
                </div>
                <span className="text-xs text-black/70 font-medium bg-white/30 px-2 py-1 rounded-full">
                  Bot WhatsApp
                </span>
              </div>

              {/* Chat Content with Animation */}
              <div className="space-y-4">
                {currentConfig.content.type === "chat-history" ? (
                  // Chat History Interface
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-black/90">Historique</h3>
                      <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                    </div>

                    <div className="space-y-3">
                      {/* Chat Item 1 */}
                      <div className="flex items-center space-x-3 p-3 bg-white/30 rounded-xl hover:bg-white/40 transition-all duration-200 cursor-pointer">
                        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-black/90">Recherche iPhone</div>
                          <div className="text-xs text-black/60">Il y a 12 min</div>
                        </div>
                        <div className="text-xs text-black/60 bg-white/40 px-2 py-1 rounded-full">5 vendeurs</div>
                      </div>

                      {/* Chat Item 2 */}
                      <div className="flex items-center space-x-3 p-3 bg-white/30 rounded-xl hover:bg-white/40 transition-all duration-200 cursor-pointer">
                        <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-black/90">Chaussures Nike</div>
                          <div className="text-xs text-black/60">Il y a 1 heure</div>
                        </div>
                        <div className="text-xs text-black/60 bg-white/40 px-2 py-1 rounded-full">8 vendeurs</div>
                      </div>
                    </div>
                  </>
                ) : currentConfig.content.type === "results" ? (
                  // Results Interface
                  <>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-black/90">Vendeurs trouvés</h3>
                      <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                    </div>

                    <div className="bg-white/20 rounded-xl p-3 mb-2">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-black/60 bg-white/40 px-2 py-1 rounded-full">12 résultats</div>
                        <div className="text-xs text-primary-700 font-semibold">Cotonou</div>
                      </div>

                      <div className="space-y-2">
                        {/* Vendor 1 */}
                        <div className="bg-white/30 rounded-lg p-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
                              <div>
                                <div className="text-sm font-medium text-black/90">TechStore BJ</div>
                                <div className="text-xs text-black/60">⭐ 4.8 • 120 ventes</div>
                              </div>
                            </div>
                            <div className="text-sm font-bold text-primary-700">45,000 F</div>
                          </div>
                        </div>

                        {/* Vendor 2 */}
                        <div className="bg-white/30 rounded-lg p-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-accent-500 rounded-full"></div>
                              <div>
                                <div className="text-sm font-medium text-black/90">ElectroShop</div>
                                <div className="text-xs text-black/60">⭐ 4.6 • 89 ventes</div>
                              </div>
                            </div>
                            <div className="text-sm font-bold text-primary-700">48,000 F</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : currentConfig.content.type === "search" ? (
                  // Search Interface
                  <>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-black/90">Recherche</h3>
                      <div className="w-12 h-1 bg-white/60 rounded-full"></div>
                    </div>

                    <div className="bg-white/20 rounded-xl p-3 mb-2">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center animate-pulse">
                          <svg className="w-5 h-5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-black/90">Recherche en cours...</div>
                          <div className="text-xs text-black/60">Analyse des vendeurs</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                          <div className="text-xs text-black/70">Vérification des stocks</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-100"></div>
                          <div className="text-xs text-black/70">Comparaison des prix</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-200"></div>
                          <div className="text-xs text-black/70">Tri par pertinence</div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Regular Chat Interface
                  <>
                    <div className="text-black/80 transition-all duration-500 transform">
                      <span className="text-sm font-light">{currentConfig.content.greeting}</span>
                    </div>
                    <div className="text-xs text-black/60 font-light transition-all duration-500">
                      {currentConfig.content.subtitle}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card Indicators */}
        <div className="flex space-x-2 mt-8">
          {cardConfigs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentCard === index ? "bg-gray-800 scale-125" : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
