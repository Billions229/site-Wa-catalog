"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollThrottleTimeout = useRef<number | null>(null)

  useEffect(() => {
    // Fonction throttle pour éviter trop d'appels pendant le scroll
    const toggleVisibility = () => {
      // Si un timeout est déjà programmé, ne rien faire
      if (scrollThrottleTimeout.current !== null) return;

      // Programmer un nouveau check dans 200ms
      scrollThrottleTimeout.current = window.setTimeout(() => {
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
        scrollThrottleTimeout.current = null;
      }, 200);
    }

    // Utiliser passive: true pour améliorer les performances
    window.addEventListener("scroll", toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      // Nettoyer le timeout si le composant est démonté
      if (scrollThrottleTimeout.current) {
        clearTimeout(scrollThrottleTimeout.current)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Ne rendre le bouton que s'il est visible
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Retour en haut"
    >
      <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  )
}
