import { useParams, Link } from "react-router-dom"
import {
  MessageCircle,
  AlertCircle,
  CheckCircle,
  Smartphone,
  Shirt,
  Home,
  Car,
  UtensilsCrossed,
  GraduationCap,
  BookOpen,
  Wrench,
  ArrowRight,
  ShoppingBag,
  BadgeCheck,
  Baby,
  Dumbbell,
  Palette,
  PawPrint,
  Heart,
  Gift,
  Briefcase,
  Gem,
  Gamepad2,
  Plane,
  Wifi,
  Hammer,
  Leaf,
  FileDigit,
} from "lucide-react"
import SEO from "@/components/SEO"

const categoryData: Record<string, any> = {
  electronique: {
    name: "ÉLECTRONIQUE & ACCESSOIRES",
    icon: Smartphone,
    description: "Téléphones, ordinateurs, accessoires tech, consoles...",
    longDescription: "Trouve les meilleurs prix sur les smartphones, ordinateurs portables, tablettes, consoles de jeux et tous les accessoires tech dont tu as besoin. Des vendeurs vérifiés partout au Bénin.",
    color: "from-blue-600 to-blue-700",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-600",
    bgLight: "bg-blue-50",
    image: "/samsung-galaxy-s23-ultra.png",
    images: ["/iphone-13-pro-blue.jpg", "/macbook-air-m2.png", "/airpods-pro-2.png", "/playstation-5-console.png"],
    subcategories: [
      "Téléphones & Smartphones",
      "Ordinateurs & Laptops",
      "Tablettes & iPad",
      "Accessoires (écouteurs, chargeurs, coques, câbles)",
      "Jeux vidéo & Consoles",
      "Appareils photo & Caméras",
      "Drones & Accessoires",
      "Montres connectées & Bracelets",
      "Casques & Audio",
      "TV & Home Cinéma",
      "Produits reconditionnés & Occasion",
      "Accessoires informatiques & Bureautique",
    ],
    tips: [
      "Vérifier l'état (neuf/occasion) et demander des photos détaillées",
      "Demander la garantie restante et les documents d'achat",
      "Vérifier les numéros IMEI pour les téléphones",
      "Tester l'appareil avant l'achat si possible",
      "Comparer les prix entre plusieurs vendeurs",
    ],
    forbidden: [
      "Produits contrefaits ou répliques",
      "Appareils volés ou d'origine douteuse",
      "Produits sans facture d'origine (pour le neuf)",
    ],
    seoKeywords: "téléphone bénin, ordinateur cotonou, smartphone occasion, laptop neuf, console ps5, iphone bénin",
  },
  "mode-accessoires": {
    name: "MODE & ACCESSOIRES",
    icon: Shirt,
    description: "Sacs, vêtements, chaussures, bijoux et beauté",
    longDescription: "Découvre les dernières tendances mode, les marques internationales et locales, les accessoires fashion et les produits de beauté authentiques. Exprime ton style unique.",
    color: "from-pink-600 to-pink-700",
    borderColor: "border-pink-500",
    textColor: "text-pink-600",
    bgColor: "bg-pink-600",
    bgLight: "bg-pink-50",
    image: "/leather-handbag-brown.jpg",
    images: ["/nike-air-max-270.png", "/african-wax-dress.jpg", "/dior-sauvage-perfume.jpg"],
    subcategories: [
      "Sacs & Accessoires",
      "Vêtements Homme",
      "Vêtements Femme",
      "Vêtements Enfants",
      "Chaussures & Sneakers",
      "Bijoux & Montres",
      "Accessoires Mode",
      "Cosmétiques & Parfums",
      "Produits de Beauté",
      "Vêtements africains & Traditionnels",
      "Mode d'occasion & Vintage",
      "Vêtements de Sport & Athleisure",
      "Lingerie & Sous-vêtements",
    ],
    tips: [
      "Prendre des photos de qualité sous plusieurs angles",
      "Indiquer les tailles précises (guide des tailles)",
      "Mentionner la marque et l'authenticité",
      "Préciser l'état et signaler les défauts éventuels",
      "Offrir la possibilité d'essayage pour les vêtements",
    ],
    forbidden: ["Produits contrefaits", "Cosmétiques périmés", "Produits sans autorisation sanitaire"],
    seoKeywords: "mode bénin, vêtements cotonou, chaussures nike, sac à main, parfum, cosmétique bénin",
  },
  "sports-fitness": {
    name: "SPORTS & FITNESS",
    icon: Dumbbell,
    description: "Équipement sport, fitness, musculation et outdoor",
    longDescription: "Équipez-vous pour toutes vos activités sportives : fitness, musculation, sports collectifs ou outdoor. Matériel de qualité pour tous les niveaux.",
    color: "from-lime-600 to-lime-700",
    borderColor: "border-lime-500",
    textColor: "text-lime-600",
    bgColor: "bg-lime-600",
    bgLight: "bg-lime-50",
    image: "/nike-air-max-270.png",
    images: [],
    subcategories: [
      "Vêtements de Sport",
      "Chaussures de Sport",
      "Équipements d'Entraînement",
      "Tapis de Yoga & Fitness",
      "Accessoires de Sport",
      "Équipements de Fitness à Domicile",
      "Sports d'Extérieur",
      "Équipements de Sport en Équipe",
      "Nutrition Sportive & Compléments",
    ],
    tips: [
      "Choisir la taille adaptée (vêtements/équipements)",
      "Vérifier la solidité du matériel",
      "Essayer les chaussures si possible",
      "Demander conseil pour l'utilisation",
    ],
    forbidden: ["Substances dopantes", "Armes (même pour le sport, sauf réglementation stricte)"],
    seoKeywords: "sport bénin, fitness cotonou, musculation, football, équipement sport",
  },
  "maison-decoration": {
    name: "MAISON & DÉCORATION",
    icon: Home,
    description: "Meubles, décoration, électroménager et cuisine",
    longDescription: "Équipe ta maison avec des meubles de qualité, de la décoration unique et les meilleurs électroménagers. Transforme ton intérieur à petit prix.",
    color: "from-amber-600 to-amber-700",
    borderColor: "border-amber-500",
    textColor: "text-amber-600",
    bgColor: "bg-amber-600",
    bgLight: "bg-amber-50",
    image: "/grey-fabric-sofa.jpg",
    images: ["/dining-table-6-chairs.jpg", "/samsung-refrigerator.png"],
    subcategories: [
      "Meubles Salon",
      "Meubles Chambre",
      "Meubles Bureau",
      "Décoration Intérieure",
      "Électroménager",
      "Petits Électroménagers",
      "Ustensiles de Cuisine",
      "Literie",
      "Luminaires & Lampes",
      "Système de Rangement",
      "Tapis & Moquettes",
      "Rideaux & Voilages",
      "Salle de Bain",
      "Jardin & Extérieur",
      "Nettoyage & Entretien",
      "Décoration Spéciale",
    ],
    tips: [
      "Indiquer les dimensions exactes (L x l x H)",
      "Préciser les matériaux utilisés",
      "Mentionner l'état et le fonctionnement",
      "Fournir photos dans un environnement réel",
      "Informer sur la livraison et le montage",
    ],
    forbidden: ["Appareils électriques dangereux", "Produits non conformes aux normes"],
    seoKeywords: "meuble bénin, canapé cotonou, réfrigérateur, décoration, électroménager bénin",
  },
  animaux: {
    name: "ANIMAUX DE COMPAGNIE",
    icon: PawPrint,
    description: "Alimentation, accessoires et soins pour animaux",
    longDescription: "Tout pour vos compagnons à quatre pattes (et les autres) : nourriture de qualité, accessoires confortables et équipements adaptés.",
    color: "from-orange-600 to-orange-700",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-600",
    bgLight: "bg-orange-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Nourriture Chien",
      "Nourriture Chat",
      "Accessoires Chien",
      "Accessoires Chat",
      "Accessoires Rongeurs",
      "Accessoires Oiseaux",
      "Articles de Transport",
      "Produits d'Hygiène & Nettoyage",
      "Équipements Médicaux Vétérinaires",
      "Nourriture Spécialisée & Régimes",
    ],
    tips: [
      "Vérifier la date de péremption de la nourriture",
      "Adapter la taille des accessoires à l'animal",
      "S'assurer de la sécurité des jouets",
    ],
    forbidden: ["Animaux vivants (espèces protégées)", "Produits vétérinaires sous ordonnance"],
    seoKeywords: "animalerie bénin, croquette chien, chat, aquarium, accessoires animaux",
  },
  alimentation: {
    name: "ALIMENTATION & BOISSONS",
    icon: UtensilsCrossed,
    description: "Plats, produits frais, épicerie et boissons",
    longDescription: "Commande des plats délicieux préparés par des chefs locaux, trouve des traiteurs pour tes événements et achète des produits frais de qualité.",
    color: "from-green-600 to-green-700",
    borderColor: "border-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-600",
    bgLight: "bg-green-50",
    image: "/attieke-grilled-fish.jpg",
    images: ["/birthday-cake-custom.jpg", "/pineapple-ginger-juice.jpg"],
    subcategories: [
      "Plats Cuisinés & Produits Prêts à Consommer",
      "Services Traiteur & Catering",
      "Produits Frais",
      "Épicerie & Produits Secs",
      "Boissons & Jus Naturels",
      "Pâtisserie & Gâteaux",
      "Produits Bio & Naturels",
      "Spécialités Africaines & Internationales",
      "Fromages & Produits Laitiers",
      "Chocolat & Confiseries",
      "Café & Thé",
      "Compléments Alimentaires & Protéines",
      "Alcools & Vins",
    ],
    tips: [
      "Respecter les normes d'hygiène strictes",
      "Lister tous les ingrédients",
      "Indiquer les allergènes potentiels",
      "Préciser la date de préparation/péremption",
      "Prendre des photos appétissantes",
    ],
    forbidden: ["Produits périmés", "Produits impropres", "Alcool (selon réglementation)"],
    seoKeywords: "plat cuisiné bénin, traiteur cotonou, gâteau, restaurant, nourriture africaine",
  },
  "sante-bien-etre": {
    name: "SANTÉ & BIEN-ÊTRE",
    icon: Heart,
    description: "Santé, hygiène, produits naturels et soins",
    longDescription: "Prenez soin de vous avec notre gamme de produits de santé, d'hygiène et de bien-être. Matériel médical et compléments alimentaires.",
    color: "from-teal-600 to-teal-700",
    borderColor: "border-teal-500",
    textColor: "text-teal-600",
    bgColor: "bg-teal-600",
    bgLight: "bg-teal-50",
    image: "/dior-sauvage-perfume.jpg",
    images: [],
    subcategories: [
      "Compléments Alimentaires",
      "Soins Personnels & Hygiène",
      "Produits Naturels & Biologiques",
      "Équipements Médicaux",
      "Articles d'Hygiène Féminine",
      "Produits pour Bébé & Enfants",
      "Wellness & Relaxation",
      "Produits de Phytothérapie",
      "Appareils de Santé Connectés",
      "Pansements & Premiers Secours",
    ],
    tips: [
      "Consulter un médecin pour les équipements médicaux",
      "Vérifier les dates de péremption",
      "Lire attentivement les notices d'utilisation",
    ],
    forbidden: ["Médicaments sous ordonnance", "Produits miracles sans fondement scientifique"],
    seoKeywords: "santé bénin, pharmacie, bien-être, vitamines, matériel médical",
  },
  "culture-medias": {
    name: "CULTURE & MÉDIAS",
    icon: BookOpen,
    description: "Livres, musique, films, jeux de société",
    longDescription: "Découvre une large sélection de livres physiques et numériques : romans, manuels, BD et bien plus pour tous les âges.",
    color: "from-indigo-600 to-indigo-700",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-600",
    bgLight: "bg-indigo-50",
    image: "/alchemist-book-paulo-coelho.jpg",
    images: [],
    subcategories: [
      "Livres Papier",
      "E-books & Livres Numériques",
      "Magazines & Journaux",
      "Films & Séries",
      "Musique",
      "Jeux de Société & Puzzles",
      "Jouets Éducatifs",
      "Bandes Dessinées & Mangas",
      "Posters & Affiches",
      "Produits Dérivés",
    ],
    tips: [
      "Mentionner l'auteur et l'édition",
      "Indiquer l'état précis du livre",
      "Photos de la couverture et de pages intérieures",
      "Préciser si c'est une édition rare",
      "Pour les e-books, indiquer le format (PDF, EPUB)",
    ],
    forbidden: ["Contenus piratés", "E-books sans droits de distribution"],
    seoKeywords: "livre bénin, manuel scolaire cotonou, roman, ebook, bd, littérature",
  },
  "jeux-loisirs": {
    name: "JEUX & LOISIRS",
    icon: Gamepad2,
    description: "Jeux vidéo, consoles, figurines et loisirs",
    longDescription: "Plongez dans l'univers du divertissement avec nos jeux vidéo, consoles et loisirs pour toute la famille.",
    color: "from-violet-600 to-violet-700",
    borderColor: "border-violet-500",
    textColor: "text-violet-600",
    bgColor: "bg-violet-600",
    bgLight: "bg-violet-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Jeux Vidéo",
      "Consoles de Jeu",
      "Accessoires Gaming",
      "Jeux de Plateau & Jeux de Société",
      "Jeux de Cartes",
      "Figurines & Collectibles",
      "Puzzles & Casse-têtes",
      "Jeux d'Extérieur & Activités",
      "Hobby & Collections",
      "Équipements de Loisir",
    ],
    tips: [
      "Vérifier la compatibilité des jeux et accessoires",
      "Indiquer l'état de la boîte et des composants",
      "Préciser si les codes de téléchargement sont utilisés",
    ],
    forbidden: ["Comptes de jeux piratés", "Logiciels de triche"],
    seoKeywords: "jeux vidéo bénin, ps5, nintendo, figurines, loisirs",
  },
  formations: {
    name: "FORMATIONS & APPRENTISSAGE",
    icon: GraduationCap,
    description: "Cours en ligne, certifications et tutoriels",
    longDescription: "Développe tes compétences avec des formations de qualité, du soutien scolaire personnalisé et du coaching professionnel par des experts.",
    color: "from-purple-600 to-purple-700",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-600",
    bgLight: "bg-purple-50",
    image: "/excel-training-course.jpg",
    images: ["/math-tutoring.png", "/digital-marketing-ebooks.jpg"],
    subcategories: [
      "Cours en Ligne",
      "Formations Professionnelles",
      "Tutoriels & Guides Numériques",
      "Webinaires & Vidéos Éducatives",
      "Logiciels Éducatifs",
      "Masterclasses & Expert Training",
      "Formations Spécialisées",
      "Ressources Pédagogiques",
    ],
    tips: [
      "Détailler le programme et les objectifs",
      "Préciser la durée et les horaires",
      "Indiquer les tarifs clairement",
      "Mentionner tes qualifications",
      "Partager des témoignages si disponibles",
    ],
    forbidden: ["Formations sans certification", "Promesses irréalistes"],
    seoKeywords: "formation bénin, cours particuliers cotonou, soutien scolaire, coaching, apprentissage",
  },
  tourisme: {
    name: "TOURISME & SERVICES",
    icon: Plane,
    description: "Voyages, billets, séjours et événements",
    longDescription: "Évadez-vous avec nos offres de voyages, séjours et découvertes touristiques. Tout pour préparer vos prochaines vacances.",
    color: "from-sky-600 to-sky-700",
    borderColor: "border-sky-500",
    textColor: "text-sky-600",
    bgColor: "bg-sky-600",
    bgLight: "bg-sky-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Séjours Hôtels & Accommodations",
      "Locations de Vacances",
      "Billets de Transport",
      "Packages Touristiques & Voyages Organisés",
      "Excursions & Activités Touristiques",
      "Assurances Voyage",
      "Guides de Voyage Numériques",
      "Réservations Restaurants",
      "Événements & Spectacles",
    ],
    tips: [
      "Vérifier les conditions d'annulation",
      "Lire les avis des précédents voyageurs",
      "S'informer sur les formalités administratives",
    ],
    forbidden: ["Billets revendus illégalement", "Offres de voyage frauduleuses"],
    seoKeywords: "voyage bénin, hôtel cotonou, billet avion, tourisme, excursion",
  },
  "auto-moto": {
    name: "AUTO & MOTO",
    icon: Car,
    description: "Pièces, accessoires auto/moto et entretien",
    longDescription: "Achète ou vends des véhicules en toute sécurité. Trouve des pièces détachées authentiques et des accessoires pour ton auto ou ta moto.",
    color: "from-red-600 to-red-700",
    borderColor: "border-red-500",
    textColor: "text-red-600",
    bgColor: "bg-red-600",
    bgLight: "bg-red-50",
    image: "/toyota-corolla-2018.jpg",
    images: ["/yamaha-r15-motorcycle.jpg", "/michelin-car-tires.jpg"],
    subcategories: [
      "Pièces Automobiles",
      "Accessoires Auto",
      "Équipements Moto",
      "Produits d'Entretien Auto",
      "Systèmes de Navigation & Tableau de Bord",
      "Accessoires Moto & Cyclomoteurs",
      "Équipements de Sécurité",
    ],
    tips: [
      "Indiquer l'année, le kilométrage et l'historique",
      "Fournir le carnet d'entretien si disponible",
      "Photos de tous les angles et de l'intérieur",
      "Mentionner les réparations et pièces changées",
      "Proposer un essai routier pour les véhicules",
    ],
    forbidden: ["Véhicules volés", "Véhicules sans papiers valides", "Pièces de provenance douteuse"],
    seoKeywords: "voiture bénin, auto occasion cotonou, moto yamaha, pièce auto, pneu michelin bénin",
  },
  "maison-intelligente": {
    name: "MAISON INTELLIGENTE & DOMOTIQUE",
    icon: Wifi,
    description: "Sécurité, éclairage connecté et domotique",
    longDescription: "Rendez votre maison plus intelligente et sécurisée avec nos solutions domotiques et objets connectés.",
    color: "from-cyan-600 to-cyan-700",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-600",
    bgLight: "bg-cyan-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Systèmes de Sécurité",
      "Éclairage Intelligent",
      "Thermostats & Contrôle Température",
      "Assistants Vocaux & Smart Speakers",
      "Serrures Intelligentes & Contrôle d'Accès",
      "Capteurs & Détecteurs Intelligents",
      "Équipements de Maison Connectée",
    ],
    tips: [
      "Vérifier la compatibilité avec votre système existant",
      "S'assurer de la sécurité des données",
      "Prévoir une installation professionnelle si nécessaire",
    ],
    forbidden: ["Dispositifs d'espionnage illégaux"],
    seoKeywords: "domotique bénin, maison connectée, caméra surveillance, alarme, smart home",
  },
  bricolage: {
    name: "BRICOLAGE & OUTILLAGE",
    icon: Hammer,
    description: "Outils, matériaux et équipements de travaux",
    longDescription: "Tout le matériel nécessaire pour vos travaux de rénovation, jardinage et bricolage à la maison.",
    color: "from-stone-600 to-stone-700",
    borderColor: "border-stone-500",
    textColor: "text-stone-600",
    bgColor: "bg-stone-600",
    bgLight: "bg-stone-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Outils à Main",
      "Outils Électriques",
      "Équipements de Protection",
      "Matériaux de Construction",
      "Peinture & Revêtements",
      "Équipements de Jardinage",
      "Étagères & Systèmes de Rangement",
      "Accessoires de Rénovation",
    ],
    tips: [
      "Porter les équipements de protection adéquats",
      "Vérifier la qualité et la marque des outils",
      "Suivre les instructions de sécurité",
    ],
    forbidden: ["Matériaux dangereux interdits", "Produits chimiques non réglementés"],
    seoKeywords: "bricolage bénin, outillage, peinture, jardinage, matériaux construction",
  },
  "art-artisanat": {
    name: "ART & ARTISANAT",
    icon: Palette,
    description: "Fournitures d'art, loisirs créatifs et DIY",
    longDescription: "Libérez votre créativité avec notre sélection de fournitures artistiques et matériel pour vos loisirs créatifs.",
    color: "from-rose-600 to-rose-700",
    borderColor: "border-rose-500",
    textColor: "text-rose-600",
    bgColor: "bg-rose-600",
    bgLight: "bg-rose-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Fournitures Artistiques",
      "Matériaux Artisanaux",
      "Outils Artistiques & de Craft",
      "Kits Créatifs & Loisirs Créatifs",
      "Toiles & Supports de Peinture",
      "Produits de Calligraphie & Dessin",
    ],
    tips: [
      "Vérifier la qualité des pigments/matériaux",
      "Protéger les œuvres lors du transport",
      "Choisir le bon support pour votre art",
    ],
    forbidden: ["Ivoire", "Produits protégés par la convention CITES"],
    seoKeywords: "art bénin, peinture, loisirs créatifs, dessin, artisanat",
  },
  pro: {
    name: "VÊTEMENTS & ACCESSOIRES PRO",
    icon: Briefcase,
    description: "Tenues de travail, sécurité et accessoires pro",
    longDescription: "Équipez votre entreprise avec des tenues professionnelles, des équipements de sécurité et des accessoires adaptés.",
    color: "from-slate-600 to-slate-700",
    borderColor: "border-slate-500",
    textColor: "text-slate-600",
    bgColor: "bg-slate-600",
    bgLight: "bg-slate-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Uniformes & Tenues de Travail",
      "Chaussures de Travail & Sécurité",
      "Vêtements de Haute Visibilité",
      "Accessoires Professionnels",
      "Équipements de Protection Professionnelle",
    ],
    tips: [
      "Vérifier la conformité aux normes de sécurité",
      "Choisir la bonne taille pour le confort",
      "Personnaliser avec votre logo si possible",
    ],
    forbidden: ["Équipements de sécurité non conformes"],
    seoKeywords: "vêtement pro bénin, tenue travail, chaussures sécurité, EPI, uniforme",
  },
  "eco-responsable": {
    name: "PRODUITS ÉCO-RESPONSABLES",
    icon: Leaf,
    description: "Produits recyclés, occasion et écologiques",
    longDescription: "Adoptez un mode de vie durable avec notre sélection de produits éco-responsables, recyclés et de seconde main.",
    color: "from-emerald-600 to-emerald-700",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-600",
    bgLight: "bg-emerald-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Produits Recyclés & Écologiques",
      "Vêtements d'Occasion",
      "Électronique Reconditionée & d'Occasion",
      "Meubles d'Occasion",
      "Articles en Bois Récupéré",
      "Produits Zéro Déchet",
      "Mode Durable & Éthique",
    ],
    tips: [
      "Vérifier l'état pour les produits d'occasion",
      "Privilégier les matériaux durables",
      "Soutenir les artisans locaux",
    ],
    forbidden: ["Greenwashing (fausses allégations écologiques)"],
    seoKeywords: "écologique bénin, occasion, recyclé, zéro déchet, durable",
  },
  cadeaux: {
    name: "CADEAUX & PERSONNALISÉS",
    icon: Gift,
    description: "Cadeaux uniques, gravures et personnalisation",
    longDescription: "Trouvez le cadeau parfait pour toutes les occasions : objets personnalisés, coffrets cadeaux et souvenirs uniques.",
    color: "from-fuchsia-600 to-fuchsia-700",
    borderColor: "border-fuchsia-500",
    textColor: "text-fuchsia-600",
    bgColor: "bg-fuchsia-600",
    bgLight: "bg-fuchsia-50",
    image: "/birthday-cake-custom.jpg",
    images: [],
    subcategories: [
      "Cadeaux Personnalisés",
      "Articles Gravés & Monogrammés",
      "Coffrets Cadeaux",
      "Articles de Décoration Personnalisés",
      "Vêtements Customisés",
      "Bijoux Personnalisés",
      "Livres Personnalisés",
    ],
    tips: [
      "Commander à l'avance pour le personnalisé",
      "Vérifier l'orthographe des gravures/impressions",
      "Demander un emballage cadeau",
    ],
    forbidden: ["Objets offensants ou discriminatoires"],
    seoKeywords: "cadeau bénin, personnalisé, souvenir, offrir, fête",
  },
  "bebe-maternite": {
    name: "PRODUITS BÉBÉ & MATERNITÉ",
    icon: Baby,
    description: "Tout pour bébé, maman et la maternité",
    longDescription: "Tout pour le confort et l'éveil de votre enfant : vêtements, jouets éducatifs, poussettes et produits de soin adaptés.",
    color: "from-pink-400 to-pink-500",
    borderColor: "border-pink-300",
    textColor: "text-pink-500",
    bgColor: "bg-pink-400",
    bgLight: "bg-pink-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Vêtements Bébé & Enfant",
      "Couches & Accessoires Hygiène Bébé",
      "Mobilier Bébé",
      "Jouets pour Bébé & Enfant",
      "Accessoires Poussette & Transport",
      "Produits d'Allaitement",
      "Équipements Bébé",
      "Produits de Soin Bébé",
    ],
    tips: [
      "Vérifier les normes de sécurité (CE, NF)",
      "Privilégier les matières naturelles",
      "Nettoyer/désinfecter les produits d'occasion",
    ],
    forbidden: ["Jouets cassés ou dangereux", "Produits d'hygiène ouverts"],
    seoKeywords: "bébé bénin, maternité, maman, naissance, poussette",
  },
  luxe: {
    name: "LUXE & PRESTIGE",
    icon: Gem,
    description: "Articles de luxe, haute gamme et exclusifs",
    longDescription: "L'excellence et le raffinement. Découvrez notre sélection d'articles de luxe, de haute joaillerie et de produits d'exception.",
    color: "from-yellow-600 to-yellow-700",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-700",
    bgColor: "bg-yellow-600",
    bgLight: "bg-yellow-50",
    image: "/leather-handbag-brown.jpg",
    images: [],
    subcategories: [
      "Montres de Luxe",
      "Bijoux de Luxe & Haute Joaillerie",
      "Vêtements de Designer",
      "Maroquinerie Haut de Gamme",
      "Accessoires Prestige",
      "Articles de Luxe & Exclusivité",
      "Parfums & Fragrances Luxe",
    ],
    tips: [
      "Exiger les certificats d'authenticité",
      "Vérifier la réputation du vendeur",
      "Inspecter minutieusement l'état du produit",
    ],
    forbidden: ["Contrefaçons", "Imitations non autorisées"],
    seoKeywords: "luxe bénin, prestige, marque, premium, cher",
  },
  services: {
    name: "SERVICES & RÉPARATIONS",
    icon: Wrench,
    description: "Réparations, consulting et services divers",
    longDescription: "Trouve des professionnels qualifiés pour tous tes besoins : réparations, design, consulting et bien plus. Services de qualité garantis.",
    color: "from-gray-600 to-gray-700",
    borderColor: "border-gray-500",
    textColor: "text-gray-600",
    bgColor: "bg-gray-600",
    bgLight: "bg-gray-50",
    image: "/plumber-repair-service.jpg",
    images: [],
    subcategories: [
      "Réparation & Maintenance",
      "Services Numériques & Consulting",
      "Nettoyage & Entretien à Domicile",
      "Services de Gravure & Personnalisation",
      "Services de Livraison & Logistique",
      "Services Photographiques & Vidéographie",
      "Services de Design & Création",
    ],
    tips: [
      "Décrire clairement le service proposé",
      "Indiquer le tarif (horaire/forfait)",
      "Demander un devis détaillé",
    ],
    forbidden: ["Services illégaux", "Travail au noir"],
    seoKeywords: "service bénin, réparation, nettoyage, consulting, aide",
  },
  numerique: {
    name: "PRODUITS NUMÉRIQUES",
    icon: FileDigit,
    description: "Logiciels, fichiers, e-books et abonnements",
    longDescription: "Accédez à une bibliothèque de produits numériques : logiciels, e-books, templates et abonnements en quelques clics.",
    color: "from-blue-400 to-blue-500",
    borderColor: "border-blue-300",
    textColor: "text-blue-600",
    bgColor: "bg-blue-400",
    bgLight: "bg-blue-50",
    image: "/placeholder.jpg",
    images: [],
    subcategories: [
      "Logiciels & Applications",
      "Licences Numériques",
      "Fichiers Numériques",
      "Cours Numériques & Certifications",
      "Modèles & Templates Numériques",
      "Abonnements",
    ],
    tips: [
      "Vérifier la compatibilité système",
      "S'assurer du format de fichier",
      "Lire les conditions de licence",
    ],
    forbidden: ["Logiciels piratés", "Contenus sous copyright non autorisé"],
    seoKeywords: "numérique bénin, logiciel, e-book, téléchargement, digital",
  },
}

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? categoryData[slug] : null

  // Fonction pour ouvrir WhatsApp avec un message prédéfini
  const handleWhatsAppClick = (_specificItem?: string) => {
    window.open("https://kloo.me/bot-wa-catalogue", "_blank", "noopener,noreferrer")
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <Link to="/categories" className="text-primary hover:text-primary/80 font-semibold">
            ← Retour aux catégories
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = category.icon

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Catégorie ${category.name} - wa-catalog`,
    description: category.longDescription,
    url: `https://wa-catalog.com/categories/${slug}`,
    image: category.image,
    provider: {
      "@type": "Organization",
      name: "wa-catalog",
      url: "https://wa-catalog.com",
    },
  }

  return (
    <>
      <SEO
        title={`${category.name} - Trouve les meilleurs produits`}
        description={category.longDescription}
        keywords={`${category.name} bénin, ${category.seoKeywords}`}
        canonical={`https://wa-catalog.com/categories/${slug}`}
        image={category.image}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Header avec images */}
        <div className={`relative bg-gradient-to-br ${category.color} overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }} />
          </div>

          {/* Images Gallery Background - Mobile */}
          <div className="absolute inset-0 lg:hidden">
            <div className="absolute inset-0 opacity-15">
              {category.images.slice(0, 1).map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Exemple ${category.name}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
          </div>

          {/* Images Gallery Background - Desktop */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end gap-4 p-8 opacity-20">
            {category.images.slice(0, 3).map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Exemple ${category.name} ${idx + 1}`}
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
                loading="lazy"
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 sm:gap-2 text-white/80 mb-4 sm:mb-6 text-xs sm:text-sm flex-wrap">
                <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>›</span>
                <Link to="/categories" className="hover:text-white transition-colors">Catégories</Link>
                <span>›</span>
                <span className="text-white font-semibold">{category.name}</span>
              </nav>

              {/* Icon + Title - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Icon - Smaller on mobile */}
                <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 border-white/30 shadow-2xl shrink-0">
                  <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                {/* Text Content - Centered on mobile, left-aligned on desktop */}
                <div className="text-center sm:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-3 leading-tight drop-shadow-lg">
                    {category.name}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-semibold sm:font-medium leading-snug sm:leading-normal">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Long Description - Better mobile formatting */}
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed text-center sm:text-left max-w-xl mx-auto sm:mx-0">
                {category.longDescription}
              </p>

              {/* CTAs - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-stretch sm:items-center max-w-4xl">
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-2xl hover:shadow-white/30 hover:scale-105 active:scale-95 group w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                  Discuter avec le bot
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to={`/categories/${slug}/produits`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl active:scale-95 w-full sm:w-auto"
                >
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                  Voir les produits disponibles
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5" />
                  <span className="text-sm font-medium">Vendeurs vérifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Réponse en 30s</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Gratuit pour acheteurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Subcategories */}
              <div className={`bg-white rounded-2xl shadow-md p-8 border-t-4 ${category.borderColor}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className={`w-2 h-8 ${category.bgColor} rounded-full`} />
                  Sous-catégories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.subcategories.map((sub: string) => (
                    <button
                      key={sub}
                      onClick={() => handleWhatsAppClick(sub)}
                      className={`flex items-center gap-3 p-4 ${category.bgLight} rounded-xl hover:shadow-md transition-all cursor-pointer group border-2 border-transparent hover:${category.borderColor}`}
                    >
                      <CheckCircle className={`w-6 h-6 ${category.textColor} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                      <span className={`text-gray-800 font-medium text-left group-hover:${category.textColor} transition-colors`}>{sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-md p-8 border border-green-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  Conseils pour bien acheter
                </h2>
                <ul className="space-y-4">
                  {category.tips.map((tip: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed pt-1">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Forbidden */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-600 p-3 rounded-full">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-red-900">Produits strictement interdits</h2>
                </div>
                <ul className="space-y-3">
                  {category.forbidden.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                      <span className="text-red-600 font-bold text-2xl leading-none">×</span>
                      <span className="text-red-900 font-medium pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-300">
                  <p className="text-sm text-red-900 font-semibold">
                    ⚠️ La publication d'un produit interdit entraîne la suspension immédiate et définitive du compte vendeur.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar sticky */}
            <div className="space-y-6">
              {/* CTA Card sticky */}
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl shadow-2xl p-8 text-white sticky top-24 border-4 border-white/20`}>
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-3">Recherche sur WhatsApp</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Toute la recherche se fait dans WhatsApp. Clique ci-dessous et décris ce que tu veux à notre bot intelligent.
                </p>

                <button
                  onClick={() => handleWhatsAppClick()}
                  className="w-full bg-green-500 text-white px-6 py-4 rounded-xl font-bold transition-all hover:scale-105 hover:bg-green-600 shadow-2xl mb-4 group"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Discuter maintenant
                  </div>
                </button>

                <p className="text-xs text-white/80 text-center">
                  ⚡ Gratuit • 💯 Rapide • ✅ Sécurisé
                </p>
              </div>

              {/* How it works */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Comment ça marche ?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Clique sur le bouton</p>
                      <p className="text-sm text-gray-600">Ouvre WhatsApp</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Décris ce que tu cherches</p>
                      <p className="text-sm text-gray-600">Sois précis sur tes besoins</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Reçois les vendeurs</p>
                      <p className="text-sm text-gray-600">En moins de 30 secondes</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
