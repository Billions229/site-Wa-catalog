import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, Send, Globe } from "lucide-react"
import SEO from "@/components/SEO"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulation d'envoi - ici on pourrait intégrer un service d'email
    // Pour l'instant, on redirige vers WhatsApp avec les infos
    try {
      const message = `Bonjour, je suis ${formData.firstName} ${formData.lastName}.\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
      const whatsappUrl = `https://wa.me/22999323073?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
      
      setSubmitStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
      
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Notre équipe peut répondre en temps réel.",
      value: "support@wa-catalog.com",
      link: "mailto:support@wa-catalog.com",
      color: "primary",
    },
    {
      icon: Phone,
      title: "Appelez-nous directement",
      description: "Disponible pendant les heures de bureau.",
      value: "+229 99 32 30 73",
      link: "https://wa.me/22999323073",
      color: "accent",
    },
    {
      icon: MapPin,
      title: "Visitez notre bureau",
      description: "Venez nous rencontrer en personne.",
      value: "Cotonou, Bénin",
      link: "#",
      color: "primary",
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - wa-catalog",
    "description": "Contactez l'équipe wa-catalog pour toute question ou assistance. Support disponible par email, WhatsApp et téléphone.",
    "url": "https://wa-catalog.com/contact",
  }

  return (
    <>
      <SEO
        title="Contact - wa-catalog | Nous contacter"
        description="Contactez l'équipe wa-catalog pour toute question ou assistance. Support disponible par email (support@wa-catalog.com), WhatsApp (+229 99 32 30 73) et téléphone."
        keywords="contact wa-catalog, support wa-catalog, assistance, aide, contact Bénin, Cotonou"
        canonical="https://wa-catalog.com/contact"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/70 to-primary-800/75" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <span className="px-3 py-1 text-xs border border-white/30 rounded-full bg-white/10 backdrop-blur-sm mb-4 inline-block">
                Contactez-nous
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Nous aimerions avoir de vos nouvelles
              </h1>
              <p className="text-xl text-primary-50 mb-2 leading-relaxed">
                Ou contactez-nous directement à{" "}
                <a href="mailto:support@wa-catalog.com" className="text-white hover:text-primary-100 underline font-semibold">
                  support@wa-catalog.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, idx) => {
                  const IconComponent = method.icon
                  const bgColor = method.color === "primary" ? "bg-primary-500/20" : "bg-accent-500/20"
                  const iconColor = method.color === "primary" ? "text-primary-500" : "text-accent-500"
                  
                  return (
                    <div key={idx} className="text-center">
                      <div className={`${bgColor} inline-flex items-center justify-center p-3 rounded-full mb-4`}>
                        <IconComponent className={`w-6 h-6 ${iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-500 text-sm mb-4">{method.description}</p>
                      {method.link === "#" ? (
                        <span className="text-primary-600 font-semibold">{method.value}</span>
                      ) : (
                        <a
                          href={method.link}
                          target={method.link.startsWith("http") ? "_blank" : undefined}
                          rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                        >
                          {method.value}
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-14 bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom <span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-primary-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center border-r border-gray-300 pr-3">
                      <select className="text-sm bg-transparent outline-none text-gray-600 border-none">
                        <option>BJ</option>
                        <option>FR</option>
                        <option>CI</option>
                        <option>SN</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-primary-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                    <p className="text-primary-700 font-medium">
                      ✓ Message envoyé ! Vous allez être redirigé vers WhatsApp pour continuer la conversation.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-red-700 font-medium">
                      ✗ Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'aide immédiate ?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Discutez directement avec notre bot WhatsApp
            </p>
            <a
              href="https://kloo.me/bot-wa-catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-primary-50 text-primary-700 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-white/30 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Discuter avec le bot
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

