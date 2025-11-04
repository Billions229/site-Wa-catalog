"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, MessageCircle } from "lucide-react"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Produits",
    links: [
      { title: "Catégories", href: "/categories" },
      { title: "Électronique", href: "/categories/electronique" },
      { title: "Mode & Beauté", href: "/categories/mode-beaute" },
      { title: "Maison & Jardin", href: "/categories/maison-jardin" },
    ],
  },
  {
    label: "Ressources",
    links: [
      { title: "Guide du vendeur", href: "/guide-vendeur" },
      { title: "FAQ", href: "/faq" },
      { title: "Blog", href: "/blog" },
      { title: "Support", href: "/support" },
    ],
  },
  {
    label: "Vendeurs",
    links: [
      { title: "Devenir vendeur", href: "/devenir-vendeur" },
      { title: "Tarifs", href: "#pricing" },
      { title: "Tableau de bord", href: "/dashboard" },
      { title: "API", href: "/api" },
    ],
  },
  {
    label: "Légal",
    links: [
      { title: "Conditions d'utilisation", href: "/terms" },
      { title: "Politique de confidentialité", href: "/privacy" },
      { title: "Mentions légales", href: "/legal" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Réseaux sociaux",
    links: [
      { title: "Facebook", href: "https://facebook.com/wacatalogue", icon: FacebookIcon },
      { title: "Instagram", href: "https://instagram.com/wacatalogue", icon: InstagramIcon },
      { title: "Twitter", href: "https://twitter.com/wacatalogue", icon: TwitterIcon },
      { title: "LinkedIn", href: "https://linkedin.com/company/wacatalogue", icon: LinkedinIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      {/* CTA Button at top */}
      <div className="w-full flex justify-center mb-12">
        <a
          href="https://wa.me/22997000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Discuter avec le bot
        </a>
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-3 xl:gap-12">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageCircle className="size-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">wa-catalog</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Trouvez n'importe quel produit ou service au Bénin directement sur WhatsApp. Simple, rapide et efficace.
          </p>
          <p className="text-muted-foreground mt-8 text-sm md:mt-4">
            © {new Date().getFullYear()} wa-catalog. Tous droits réservés.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-2 lg:mt-0 xl:grid-cols-5">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm font-semibold text-foreground mb-4">{section.label}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-primary inline-flex items-center transition-all duration-300 hover:translate-x-1"
                      >
                        {link.icon && <link.icon className="me-2 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
