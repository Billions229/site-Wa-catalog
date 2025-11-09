import { ShoppingBag, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    plateforme: [
      { name: "Comment ça marche", href: "/comment-ca-marche" },
      { name: "Blog", href: "/blog" },
      { name: "Avis client", href: "/avis-client" },
      { name: "Catégories", href: "/categories" },
      { name: "Statistiques", href: "/statistiques" },
      { name: "Tarifs", href: "/tarifs" },
    ],
    vendeurs: [
      { name: "Devenir vendeur", href: "/devenir-vendeur" },
      { name: "Inscription", href: "https://kloo.me/vendeur-wa-catalogue" },
      { name: "Lien personnalisé pour avis", href: "/vendeur/lien-avis" },
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
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and Contact Info - Takes 2 columns on large screens */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
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
                <a href="https://wa.me/22999323073" className="hover:text-primary transition-colors font-medium text-sm">
                  +229 99 32 30 73
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:support@wa-catalog.com" className="hover:text-primary transition-colors font-medium text-sm">
                  support@wa-catalog.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-sm">Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Plateforme Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-base">Plateforme</h3>
            <ul className="space-y-2.5">
              {footerLinks.plateforme.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vendeurs Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-base">Vendeurs</h3>
            <ul className="space-y-2.5">
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

          {/* Aide and Légal Sections - Stacked */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 font-semibold mb-4 text-base">Aide</h3>
              <ul className="space-y-2.5">
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
              <h3 className="text-gray-900 font-semibold mb-4 text-base">Légal</h3>
              <ul className="space-y-2.5">
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
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-gray-900 font-semibold mb-4 text-lg">Prêt à commencer ?</h3>
            <a
              href="https://kloo.me/bot-wa-catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-emerald-600 hover:from-primary-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter avec le bot
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
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
