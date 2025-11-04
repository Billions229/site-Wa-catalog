import { useEffect } from "react"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  image?: string
  type?: "website" | "article" | "product"
  structuredData?: object
}

export default function SEO({
  title,
  description,
  keywords = "wa-catalog, whatsapp, shopping, bénin, cotonou, produits, vendeurs, marketplace",
  canonical,
  image = "/placeholder-logo.png",
  type = "website",
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | wa-catalog`

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name"
      let meta = document.querySelector(`meta[${attr}="${name}"]`)
      
      if (!meta) {
        meta = document.createElement("meta")
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute("content", content)
    }

    // Basic meta tags
    updateMeta("description", description)
    updateMeta("keywords", keywords)
    
    // Open Graph
    updateMeta("og:title", `${title} | wa-catalog`, true)
    updateMeta("og:description", description, true)
    updateMeta("og:type", type, true)
    updateMeta("og:image", image, true)
    updateMeta("og:locale", "fr_FR", true)
    
    // Twitter Card
    updateMeta("twitter:card", "summary_large_image")
    updateMeta("twitter:title", `${title} | wa-catalog`)
    updateMeta("twitter:description", description)
    updateMeta("twitter:image", image)
    
    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement("link")
        link.setAttribute("rel", "canonical")
        document.head.appendChild(link)
      }
      link.setAttribute("href", canonical)
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      const scriptId = "structured-data"
      let script = document.getElementById(scriptId)
      
      if (!script) {
        script = document.createElement("script")
        script.id = scriptId
        script.type = "application/ld+json"
        document.head.appendChild(script)
      }
      
      script.textContent = JSON.stringify(structuredData)
    }
  }, [title, description, keywords, canonical, image, type, structuredData])

  return null
}

