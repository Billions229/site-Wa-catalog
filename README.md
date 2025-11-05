# site-Wa-catalog

Site web vitrine pour wa-catalog - Le premier assistant shopping WhatsApp au Bénin.

## 🚀 Technologies

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Shadcn UI Components
- Supabase (pour la page des avis clients)

## 📦 Installation

```bash
npm install
```

## ⚙️ Configuration

### Variables d'environnement (optionnel)

Pour utiliser la fonctionnalité des avis clients (`/avis-client`), vous devez configurer Supabase :

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez les variables suivantes :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase
```

**Note :** Si ces variables ne sont pas configurées, le site fonctionnera normalement mais la page `/avis-client` affichera un message indiquant que Supabase n'est pas configuré.

## 🛠️ Développement

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

Le build a été testé et fonctionne sans erreurs. ✅

## 📄 License

© 2025 wa-catalog. Tous droits réservés.

