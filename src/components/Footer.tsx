import { ShoppingBag, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    plateforme: [
      { name: "Comment ça marche", href: "/comment-ca-marche" },
      { name: "Catégories", href: "/categories" },
      { name: "Statistiques", href: "/statistiques" },
      { name: "Tarifs", href: "/tarifs" },
    ],
    vendeurs: [
      { name: "Devenir vendeur", href: "/devenir-vendeur" },
      { name: "Inscription", href: "https://kloo.me/vendeur-wa-catalogue" },
    ],
    aide: [
      { name: "FAQ", href: "/aide/faq" },
      { name: "Dépannage", href: "/aide/depannage" },
      { name: "Sécurité", href: "/aide/securite" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "CGU", href: "/cgu" },
      { name: "Confidentialité", href: "/confidentialite" },
      { name: "Cookies", href: "/cookies" },
    ],
  }

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 text-center border-b border-gray-200">
        <a
          href="https://kloo.me/bot-wa-catalogue"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          Discuter avec le bot
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://res.cloudinary.com/dysfocdyw/image/upload/v1760459930/WaMarket_Store_3_scfjzv.png" 
                alt="wa-catalog logo" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-600">
              Le premier assistant shopping WhatsApp qui indexe tous les catalogues au Bénin.
            </p>
            <div className="space-y-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="https://wa.me/22999323073" className="hover:text-primary transition-colors font-medium">
                  +229 99 32 30 73
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:support@wa-catalog.com" className="hover:text-primary transition-colors font-medium">
                  support@wa-catalog.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Plateforme</h3>
            <ul className="space-y-2">
              {footerLinks.plateforme.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Vendeurs</h3>
            <ul className="space-y-2">
              {footerLinks.vendeurs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Aide</h3>
            <ul className="space-y-2">
              {footerLinks.aide.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2025 wa-catalog. Tous droits réservés.</p>
            <div className="bg-primary/20 border border-primary/50 rounded-lg px-4 py-2">
              <p className="text-sm text-primary font-medium">Recherche sur WhatsApp uniquement</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
