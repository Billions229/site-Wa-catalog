import { Menu, X, ShoppingBag, HelpCircle, Users, BookOpen, Shield, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();



  const menuItems = [
    {
      title: 'Catégories',
      items: [
        {
          title: 'Électronique',
          description: 'Téléphones, ordinateurs, accessoires',
          icon: ShoppingBag,
          url: '/categories/electronique',
        },
        {
          title: 'Mode & Beauté',
          description: 'Vêtements, chaussures, cosmétiques',
          icon: ShoppingBag,
          url: '/categories/mode-beaute',
        },
        {
          title: 'Maison & Déco',
          description: 'Meubles, décoration, électroménager',
          icon: ShoppingBag,
          url: '/categories/maison-deco',
        },
        {
          title: 'Voir toutes les catégories',
          description: 'Découvrez tous nos produits',
          icon: ShoppingBag,
          url: '/categories',
        },
      ],
    },
    {
      title: 'Comment ça marche',
      url: '/comment-ca-marche',
    },
    {
      title: 'Avis client',
      url: '/avis-client',
    },
    {
      title: 'Aide',
      items: [
        {
          title: 'FAQ',
          description: 'Questions fréquemment posées',
          icon: HelpCircle,
          url: '/aide/faq',
        },
        {
          title: 'Sécurité',
          description: 'Conseils pour acheter en toute sécurité',
          icon: Shield,
          url: '/aide/securite',
        },
        {
          title: 'Guide acheteur',
          description: 'Comment utiliser wa-catalog',
          icon: BookOpen,
          url: '/aide',
        },
        {
          title: 'Contact',
          description: 'Besoin d\'aide ? Contactez-nous',
          icon: Phone,
          url: '/contact',
        },
      ],
    },
  ];


  const handleWhatsAppClick = () => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer");
  };

  const handleVendorClick = () => {
    navigate('/devenir-vendeur');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between lg:flex h-16 items-center">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dysfocdyw/image/upload/v1760459930/WaMarket_Store_3_scfjzv.png" 
                alt="wa-catalog logo" 
                className="h-12 sm:h-14 w-auto"
              />
            </a>

            <div className="flex items-center gap-1">
              {menuItems.map((item) =>
                item.items ? (
                  <div key={item.title} className="relative group">
                    <button className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700 gap-1">
                      {item.title}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-80">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-3 space-y-1">
                        {item.items.map((subItem) => {
                          const IconComponent = subItem.icon;
                          return (
                            <a
                              key={subItem.title}
                              className="flex select-none gap-4 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-700"
                              href={subItem.url}
                            >
                              <div className="text-primary-600">
                                <IconComponent className="w-5 h-5 shrink-0" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{subItem.title}</div>
                                <p className="text-sm leading-snug text-gray-600">{subItem.description}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.title}
                    className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    href={item.url}
                  >
                    {item.title}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleVendorClick}
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-500 text-primary-600 hover:bg-primary-50 bg-transparent px-4 py-2 text-sm font-semibold transition-all"
            >
              <Users className="mr-2 h-4 w-4" />
              Devenir vendeur
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center rounded-md bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-sm font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Trouver un produit
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dysfocdyw/image/upload/v1760459930/WaMarket_Store_3_scfjzv.png" 
              alt="wa-catalog logo" 
              className="h-12 w-auto"
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4 animate-fade-in border-t">
            {menuItems.map((item) =>
              item.items ? (
                <div key={item.title}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                    className="w-full flex items-center justify-between py-3 px-0 font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === item.title && (
                    <div className="space-y-2 pl-4 py-2">
                      {item.items.map((subItem) => {
                        const IconComponent = subItem.icon;
                        return (
                          <a
                            key={subItem.title}
                            className="flex gap-3 rounded-lg p-3 leading-none transition-colors hover:bg-primary-50"
                            href={subItem.url}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="text-primary-600">
                              <IconComponent className="w-5 h-5 shrink-0" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">{subItem.title}</div>
                              <p className="text-sm leading-snug text-gray-600">{subItem.description}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.title}
                  href={item.url}
                  className="block py-3 font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ),
            )}

            <div className="flex flex-col gap-3 pt-4 border-t">
              <button
                onClick={() => {
                  handleVendorClick();
                  setIsMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center rounded-md border-2 border-primary-500 text-primary-600 hover:bg-primary-50 bg-transparent px-4 py-2 text-sm font-semibold transition-all"
              >
                <Users className="mr-2 h-4 w-4" />
                Devenir vendeur
              </button>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center rounded-md bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-sm font-semibold transition-all shadow-lg"
              >
                Trouver un produit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
