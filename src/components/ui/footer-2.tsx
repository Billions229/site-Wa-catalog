"use client"

import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { PlayStoreButton } from "@/components/ui/play-store-button"
import { AppStoreButton } from "@/components/ui/app-store-button"

const footerLinks = [
  {
    title: "Produits",
    links: [
      { href: "/categories", label: "Toutes les catégories" },
      { href: "/categories/electronique", label: "Électronique" },
      { href: "/categories/mode-beaute", label: "Mode & Beauté" },
      { href: "/categories/maison-deco", label: "Maison & Déco" },
      { href: "/categories/auto-moto", label: "Auto & Moto" },
      { href: "/categories/alimentation", label: "Alimentation" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/comment-ca-marche", label: "Comment ça marche" },
      { href: "/aide", label: "Guide acheteur" },
      { href: "/aide/faq", label: "FAQ" },
      { href: "/aide/securite", label: "Sécurité" },
      { href: "/aide/depannage", label: "Dépannage" },
      { href: "/statistiques", label: "Statistiques" },
    ],
  },
  {
    title: "Vendeurs",
    links: [
      { href: "/devenir-vendeur", label: "Devenir vendeur" },
      { href: "/tarifs", label: "Tarifs & Plans" },
      { href: "https://kloo.me/vendeur-wa-catalogue", label: "S'inscrire", external: true },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgu", label: "CGU" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cookies", label: "Cookies" },
      { href: "/accessibilite", label: "Accessibilité" },
      { href: "/contact", label: "Contact" },
    ],
  },
]

const socialLinks = [
  { icon: FacebookIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: TwitterIcon, href: "#" },
]

export function Footer2() {
  const handleWhatsAppClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="bg-card/60 border-t">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="py-8 flex justify-center border-b">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Discuter avec le bot
          </button>
        </div>

        {/* Grid container with headings and links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {footerLinks.map((item, i) => (
            <div key={i}>
              <h3 className="mb-4 text-xs font-semibold text-foreground">{item.title}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-border" />
        {/* Social Buttons + App Links */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 items-center">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                href={href}
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                })}
                key={i}
              >
                <Icon className="size-5 text-muted-foreground" />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#">
              <AppStoreButton />
            </a>

            <a href="#">
              <PlayStoreButton />
            </a>
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="text-center text-xs text-muted-foreground py-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:text-foreground hover:underline">
              wa-catalog
            </a>
            . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
