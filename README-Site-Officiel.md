README Site Officiel wa-catalog

1. Vue d’ensemble de la marque et du projet

- Nom officiel: wa-catalog (confirmé dans [bot/knowledge/wa-catalog-kb.json](bot/knowledge/wa-catalog-kb.json) et [bot/knowledge/platform-overview.md](bot/knowledge/platform-overview.md))
- Tagline de référence: Le premier assistant shopping WhatsApp qui indexe et recherche tous les catalogues WhatsApp Business en Afrique. Trouvez n’importe quel produit en un message et contactez instantanément les vendeurs vérifiés. (voir [bot/knowledge/platform-overview.md](bot/knowledge/platform-overview.md))
- Ce que le site n’est pas: une marketplace transactionnelle. Il ne présente ni panier, ni paiement, ni livraison, ni contact direct avec les vendeurs depuis le site.
- Ce que le site est: une vitrine pédagogique et éditoriale qui explique le fonctionnement, met en avant des produits et catégories (sans détails exhaustifs), et pousse systématiquement vers une conversation avec le bot WhatsApp wa-catalog. Toute recherche et toute mise en relation se font exclusivement dans WhatsApp (voir [bot/knowledge/client-guide.md](bot/knowledge/client-guide.md)).

2. Objectifs du site et indicateurs de succès

- Objectifs:
  - Expliquer comment fonctionne wa-catalog.
  - Mettre en avant les catégories et des exemples de produits typiques (contenu éditorial simplifié, sans liens directs vers vendeurs ni surabondance de détails).
  - Rediriger vers une conversation WhatsApp avec le bot via un bouton unique “Discuter avec le bot”.
  - Onboarder les vendeurs via le formulaire officiel ou WhatsApp (voir [bot/knowledge/inscription-vendeur.md](bot/knowledge/inscription-vendeur.md)).
  - Présenter des statistiques publiques agrégées et anonymisées (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
  - Centraliser aide, sécurité, FAQ, contact et conformité.
- KPIs:
  - CTR du bouton “Discuter avec le bot” par page.
  - Taux de clics vers l’inscription vendeur (https://kloo.me/vendeur-wa-catalogue).
  - Temps de lecture des pages “Comment ça marche” et “Sécurité”.
  - Trafic organique (SEO) sur catégories, aide et FAQ.
  - Consultations de la page “Statistiques”.

3. Publics cibles et personas

- Acheteur pressé:
  - Veut trouver vite et déclencher la conversation WhatsApp dès l’arrivée.
- Acheteur prudent:
  - Veut comprendre les bonnes pratiques, la sécurité, la négociation (voir [bot/knowledge/security-best-practices.md](bot/knowledge/security-best-practices.md)).
- Vendeur déjà équipé (catalogue WhatsApp Business):
  - Veut s’inscrire rapidement, connaître la commission par lead et les plans (voir [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)).
- Vendeur sans catalogue:
  - Veut un accompagnement via WhatsApp (voir [bot/knowledge/inscription-vendeur.md](bot/knowledge/inscription-vendeur.md)).
- Équipe wa-catalog:
  - Veut un cadre éditorial et de gouvernance clair.

4. Proposition de valeur, messages clés et ton éditorial

- Messages clés:
  - La recherche et la mise en relation se font uniquement dans WhatsApp.
  - wa-catalog est gratuit pour les acheteurs; les vendeurs paient à la performance (commission par lead) et via des plans optionnels (voir [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)).
  - Vendeurs vérifiés, conseils sécurité, transparence sur les limites actuelles (pas de paiement intégré, pas de livraison intégrée, pas d’avis publics).
- Ton éditorial:
  - Clair, direct, francophone, rassurant, orienté action.
- Microcopy à répéter:
  - “Recherche sur WhatsApp”
  - “Toute la mise en relation se fait dans WhatsApp”
  - “Clique sur ��Discuter avec le bot’ pour démarrer”

5. Architecture d’information et arborescence

- Navigation principale:
  - Accueil (/)
  - Comment ça marche (/comment-ca-marche)
  - Catégories (/categories)
  - Devenir vendeur (/devenir-vendeur)
  - Statistiques (/statistiques)
  - Aide (/aide)
  - Tarifs (/tarifs)
  - Contact (/contact)
  - Mentions légales (/mentions-legales), CGU (/cgu), Confidentialité (/confidentialite), Cookies (/cookies)
- Navigation secondaire (footer):
  - FAQ (/aide/faq)
  - Dépannage (/aide/depannage)
  - Sécurité (/aide/securite)
  - Accessibilité (/accessibilite)
- Objectifs par page:
  - Accueil: expliquer, rassurer, orienter vers le bouton “Discuter avec le bot”.
  - Comment ça marche: déroulé pas-à-pas de la conversation WhatsApp (voir [bot/knowledge/client-guide.md](bot/knowledge/client-guide.md)).
  - Catégories: exposer la taxonomie et des exemples typiques (voir [bot/knowledge/categories-and-products.md](bot/knowledge/categories-and-products.md)).
  - Listes et fiches produits (éditorialisées): présenter succinctement et pousser vers “Discuter avec le bot”.
  - Devenir vendeur: processus officiel et tarifs (voir [bot/knowledge/inscription-vendeur.md](bot/knowledge/inscription-vendeur.md) et [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)).
  - Statistiques: définitions, visualisations, mise à jour (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
  - Aide: guides acheteur, sécurité, dépannage (voir [bot/knowledge/client-guide.md](bot/knowledge/client-guide.md), [bot/knowledge/security-best-practices.md](bot/knowledge/security-best-practices.md), [bot/knowledge/troubleshooting.md](bot/knowledge/troubleshooting.md)).
  - Tarifs: transparence vendeurs (voir [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)).
  - Légales: conformité, RGPD, cookies, sécurité.

6. Pages clés et wireframes textuels

6.1 Accueil (/)

- Objectif: orienter immédiatement vers WhatsApp.
- Sections:
  - Hero:
    - Titre: “Trouve n’importe quel produit sur WhatsApp”
    - Sous-texte: “Dis ce que tu cherches, on te montre les vendeurs vérifiés”
    - CTA principal (seul actif): “Discuter avec le bot”
  - 3 étapes:
    - 1 Envoyer sa demande
    - 2 Préciser ville, livraison, budget
    - 3 Recevoir des vendeurs et discuter dans WhatsApp
  - Catégories populaires: vignettes menant vers /categories/<slug> (sans contact vendeur).
  - Sécurité: conseils synthétiques + lien “Voir tous les conseils sécurité”.
  - Devenir vendeur: avantages, résumé des tarifs, CTA “S’inscrire”.
  - Bloc “Recherche sur WhatsApp” répété: rappel qu’aucune recherche ne se fait sur le site.

- Wireframe textuel:
  - Header (logo, nav)
  - Hero (titre, sous-texte, bouton “Discuter avec le bot”)
  - 3-étapes
  - Grille catégories
  - Bloc sécurité
  - Bloc vendeurs
  - Footer (liens légaux et aide)

6.2 Catégories (/categories) et pages catégorie (/categories/electronique)

- Objectif: expliquer la couverture et guider vers WhatsApp.
- Contenu:
  - Liste complète des catégories acceptées, exemples et conditions (voir [bot/knowledge/categories-and-products.md](bot/knowledge/categories-and-products.md)).
  - Page de catégorie:
    - Intro et sous-catégories typiques.
    - Rappels d’interdits pertinents.
    - CTA unique: “Discuter avec le bot”.
  - Microcopy réitérée: “Recherche sur WhatsApp”.

6.3 Pages liste de produits éditorialisées (/categories/electronique/produits)

- Objectif: inspirer et déclencher la discussion WhatsApp.
- Contenu:
  - Cartes produits avec titre, prix indicatif, état, ville, 1 image.
  - Aucun lien direct vers vendeurs; pas de détails exhaustifs.
  - Bouton unique par carte: “Discuter avec le bot”.
  - Au clic, un message personnalisé est prérempli dans WhatsApp à destination du bot (voir section 7 pour le template).
  - Filtres UI (pour guider visuellement): fourchette de prix, ville, livraison, état, catégorie. Ils filtrent l’affichage éditorial, sans recherche serveur. Avertissement: “La recherche temps réel se fait dans WhatsApp”.

6.4 Page détail produit éditorialisée (/produits/iphone-13-128go-bleu)

- Objectif: fiche synthétique d’orientation.
- Contenu minimal:
  - Nom, catégorie, prix indicatif, état, ville, 2–3 attributs (ex: couleur, capacité), 2–3 images, description courte.
  - Aucune donnée vendeur ni lien direct vendeur.
  - Bouton unique: “Discuter avec le bot”.
  - Note publique absente; remplacer par bloc “Confiance & Vérification”: badges (explicatifs) et rappel Sécurité (voir [bot/knowledge/security-best-practices.md](bot/knowledge/security-best-practices.md)).
  - Rappels: pas de paiement ni livraison intégrée (voir [bot/knowledge/troubleshooting.md](bot/knowledge/troubleshooting.md)).

6.5 “Comment trouver un produit” (/comment-ca-marche)

- Aligné sur [bot/knowledge/client-guide.md](bot/knowledge/client-guide.md).
- Déroulé:
  - Exemple de message à envoyer au bot.
  - 3 informations obligatoires: ville, livraison (Oui/Non), budget max.
  - Conversation type.
- CTA:
  - Bouton “Discuter avec le bot” (unique).
- Exemple de message prérempli (format wa.me vers le bot):
  - wa.me/22999323073?text=Je%20cherche%20un%20iPhone%2013%20%C3%A0%20Cotonou%20-%20Livraison%3A%20Non%20-%20Budget%3A%20450000%20FCFA
  - Remarque: le site construit dynamiquement ce texte en fonction du produit/catégorie/page d’origine.

6.6 “Devenir vendeur” (/devenir-vendeur)

- Processus officiel (voir [bot/knowledge/inscription-vendeur.md](bot/knowledge/inscription-vendeur.md)):
  - Cas 1: formulaire https://kloo.me/vendeur-wa-catalogue.
  - Cas 2: contact WhatsApp +229 99 32 30 73 pour accompagnement.
- Tarification (voir [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)):
  - Commission par lead (recommandation de départ: 2 % ou 100 FCFA/lead; négociable).
  - Plans Starter (5 000 FCFA/mois), Business (10 000 FCFA/mois), Boost (5 000 FCFA/7 jours).
  - Add-ons: Setup Pro, Badge Vendeur Vérifié.
  - Offre de lancement: gratuite pour les 50 premiers vendeurs (si encore active).
- CTA unique: “S’inscrire” (vers kloo.me) et “Parler à l’équipe sur WhatsApp”.

6.7 Statistiques publiques (/statistiques)

- Objectif: transparence agrégée et anonymisée (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
- Métriques:
  - Requêtes traitées (période).
  - Top catégories demandées.
  - Questions sans réponse fréquentes (anonymisées).
  - Confiance moyenne des réponses KB (si disponible).
- Sources:
  - Vues de base de données: kb_daily_stats, kb_top_faqs, kb_low_confidence_queries (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
- Visualisations:
  - Séries temporelles, Top N, compteurs.
- Mise à jour:
  - Quotidienne (minimum) avec estampille “Dernière mise à jour”.

7. Recherche, filtrage, pertinence et bouton “Discuter avec le bot”

- Principe cardinal:
  - La recherche ne s’effectue jamais sur le site; le site n’affiche que du contenu éditorial succinct. Toute action mène au bouton “Discuter avec le bot”.
- Bouton “Discuter avec le bot”:
  - Présent sur toutes les pages clés (Accueil, Catégories, Listes et Fiches produit, Comment ça marche, Aide).
  - Au clic, ouvre WhatsApp (mobile ou web) via wa.me/22999323073 avec un message prérempli personnalisé en fonction du contexte:
    - Page catégorie: “Je cherche dans la catégorie [NomCatégorie] à [Ville], livraison [Oui/Non], budget [XX] FCFA”
    - Carte produit (éditoriale): “Je cherche [Produit] (catégorie [NomCatégorie]) à [Ville], livraison [Oui/Non], budget [XX] FCFA”
- Pertinence (côté bot):
  - Basée sur la KB hybride et le scoring par mots-clés/similarité (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
- Filtres UI (site):
  - Purement visuels pour guider la sélection éditoriale; ne réalisent aucune requête côté site.

8. Taxonomie, conventions de nommage et URLs

- Catégories (voir [bot/knowledge/categories-and-products.md](bot/knowledge/categories-and-products.md)):
  - Électronique, Mode & Beauté, Maison & Déco, Auto & Moto, Alimentation, Formations & Cours, Livres & E-books, Services Divers.
- Slugs:
  - minuscules, tirets, sans accents.
  - Exemples:
    - /categories/electronique
    - /produits/iphone-13-128go-bleu
- Paramètres UTM:
  - utm_source=site, utm_medium=cta, utm_campaign=wa-whatsapp
- Maillage:
  - Accueil → Catégories → Listes/Fiches → “Discuter avec le bot” → WhatsApp.

9. Intégration avec le bot et services existants

- Références (voir [bot/knowledge/README.md](bot/knowledge/README.md)):
  - Base de connaissances: [bot/knowledge/wa-catalog-kb.json](bot/knowledge/wa-catalog-kb.json).
  - Orchestration KB + IA: services internes (côté bot).
  - Analytics KB: base de données (tables et vues).
- Site:
  - Contenu éditorial synchronisé depuis [bot/knowledge/](bot/knowledge/README.md).
  - Statistiques publiques: lecture seule des vues de base de données.
  - Génération de liens wa.me vers le bot avec message prérempli; aucune intégration directe aux vendors.
- Stocks et mises à jour:
  - Le site n'est pas une source de vérité produits; il expose de l'éditorial. La relation et l'état réel sont confirmés dans WhatsApp.
- Latence et cache:
  - CDN pour contenu statique (TTL 10–30 min).
  - Statistiques côté serveur (TTL 60–300 s) et estampille de mise à jour.
- Erreurs/états:
  - Fallback “Statistiques momentanément indisponibles” et maintien d’une version précédemment générée.

10. Architecture logique du site, hébergement, CDN, cache, sauvegardes

- Front:
  - SSG/SSR léger, assets optimisés, compression Brotli/HTTP/2.
- Backend minimal:
  - Lecture seule de base de données pour /statistiques.
- Données:
  - Éditorial: Markdown/JSON depuis [bot/knowledge/](bot/knowledge/README.md).
  - Analytics: base de données (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
- Sauvegardes:
  - Quotidiennes du dépôt et des vues/exports de base de données.
- Observabilité:
  - Logs d'accès, mesures CDN, erreurs front.

11. Rôles, permissions, modération, sécurité, reprise d'activité

- Rôles:
  - Acheteur: consultation, clic “Discuter avec le bot”.
  - Vendeur: onboarding via formulaire/WhatsApp.
  - Administrateur: publication éditoriale, pages légales, statistiques publiques.
- Modération et qualité:
  - Produits interdits rappelés (voir [bot/knowledge/categories-and-products.md](bot/knowledge/categories-and-products.md)); suspension en cas de non-conformité.
- Sécurité:
  - Mettre en avant [bot/knowledge/security-best-practices.md](bot/knowledge/security-best-practices.md).
- PRA:
  - RPO 24 h (backups).
  - RTO 4 h (restauration site + config lecture base de données).
  - Procédure: restaurer build statique, configurer accès lecture, purger CDN.

12. Conformité et confiance (légales, CGU/CGV, confidentialité, cookies, RGPD)

- Mentions légales: éditeur, hébergeur, contact.
- CGU acheteurs: usage du site, absence de garantie, mise en relation.
- CGV vendeurs: commission par lead, plans, suspensions en cas de non-paiement (voir [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)).
- Confidentialité:
  - Collecte minimale (analytics agrégé).
  - Aucune donnée personnelle publique.
  - Droits: via support@wa-catalog.com.
- Cookies:
  - Bandeau de consentement (opt-in analytics).
- Sécurité:
  - HTTPS, HSTS, CSP, pas de scripts tiers non essentiels.
- RGPD:
  - Base légale: intérêt légitime (analytics agrégés).
  - Conservation:
    - Logs KB: nettoyage recommandé à 90 jours (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
    - Logs web: 90 jours.

13. Accessibilité, performances et SEO

- Accessibilité:
  - Cible WCAG 2.1 AA; focus visible, contrastes AA, alt images, navigation clavier, langue fr.
- Performances:
  - LCP < 2.5 s; CLS < 0.1; INP < 200 ms; poids page < 300 Ko (hors images), images WebP/AVIF, lazy-loading.
- SEO technique:
  - Titles/meta, canonical, sitemap, robots, données structurées:
    - Organization (Accueil), ItemList (Catégories/Listes), Product (Fiche éditoriale, sans avis).
- SEO éditorial:
  - Contenu unique dérivé de [bot/knowledge/](bot/knowledge/README.md), maillage interne.
- Internationalisation:
  - Français uniquement (voir [bot/knowledge/platform-overview.md](bot/knowledge/platform-overview.md)); préparer structure /fr/.

14. Analytique et observabilité

- KPIs:
  - CTR “Discuter avec le bot”.
  - Clics “S’inscrire vendeur” (kloo.me).
  - Vues “Comment ça marche”, “Sécurité”, “FAQ”.
  - Temps de lecture.
- Plan de taggage:
  - Événements:
    - click_chatbot_cta (labels: page, category_slug, product_slug, position)
    - click_vendor_signup (label: kloo.me)
    - view_how_it_works
    - view_security
    - view_category
- Observabilité:
  - window.onerror, traces pages /statistiques, qualité cache.

15. Parcours utilisateurs détaillés

- Acheteur:
  - Accueil → “Discuter avec le bot” → WhatsApp → message/3 infos → résultats → discussion.
- Acheteur prudent:
  - Accueil → Sécurité/Aide → “Discuter avec le bot”.
- Vendeur avec catalogue:
  - Accueil → Devenir vendeur → “S’inscrire” (kloo.me) → confirmation 24–48 h.
- Vendeur sans catalogue:
  - Accueil → Devenir vendeur → “Parler à l’équipe sur WhatsApp” → accompagnement.

16. Exemples de microcopy et CTA

- “Recherche sur WhatsApp”
- “Discuter avec le bot”
- “Comprendre comment ça marche”
- “Voir les catégories”
- “Lire les conseils sécurité”
- “S’inscrire maintenant”

17. Stratégie d’indexation et de recherche (site vs bot)

- Site:
  - Indexation SEO des pages éditoriales (catégories, guides, aide).
  - Pas d’indexation de données produits exhaustives (contenu indicatif).
- Bot (contexte):
  - Recherche en langage naturel, scoring KB (voir [bot/knowledge/README.md](bot/knowledge/README.md)).
- Pont:
  - Bouton “Discuter avec le bot” comme unique déclencheur.

18. Politique de contenu, gouvernance et contribution

- Source de contenu:
  - [bot/knowledge/](bot/knowledge/README.md) (Markdown/JSON).
- Rôles:
  - Rédacteur, Relecteur, Publieur.
- Workflow:
  - Brouillon → relecture sécurité/conformité/SEO → validation → publication CI.
- Contribution:
  - Propositions via PR; respect de la taxonomie et du ton; citations aux sources internes.
- Fork (si nécessaire):
  - Créer fork pour refontes, maintenir synchronisation, PR documentées.

19. Checklists qualité et critères d’acceptation

- Accueil:
  - CTA “Discuter avec le bot” visible au-dessus du pli.
  - Bloc “Recherche sur WhatsApp” présent et répété.
- Comment ça marche:
  - Les 3 informations (ville, livraison, budget) sont explicites.
  - Un exemple de message prérempli est affiché.
- Catégories:
  - Chaque page propose CTA unique “Discuter avec le bot”.
  - Rappels d’interdits pertinents.
- Listes/Fiches produit:
  - Aucune mention de vendeur ni lien direct vendeur.
  - CTA unique “Discuter avec le bot”.
- Devenir vendeur:
  - Lien kloo.me et WhatsApp support présents.
  - Tarifs/commissions explicités.
- Statistiques:
  - Estampille “Dernière mise à jour” et définitions des métriques.

20. Plan de lancement par phases et jalons

- Phase 1 (S1–S2): Accueil, Comment ça marche, Catégories, Devenir vendeur.
- Phase 2 (S3–S4): Aide, Sécurité, FAQ, Dépannage.
- Phase 3 (M2): Statistiques publiques (lecture base de données).
- Phase 4 (M3+): Listes/Fiches éditorialisées supplémentaires.
- Améliorations continues: SEO, accessibilité, perfs.

21. Plan de tests

- Fonctionnels:
  - CTA “Discuter avec le bot” génère bien un message prérempli contextuel vers wa.me/22999323073.
  - Clic “S’inscrire” ouvre kloo.me.
- Accessibilité:
  - Navigation clavier, alt images, contrastes.
- Performance:
  - Core Web Vitals conformes; cache CDN.
- Données:
  - Fallback /statistiques; estampille correcte.
- Conformité:
  - Bandeau cookies, pages légales, politique de confidentialité.

22. Risques et mitigations

- Mauvaise interprétation “recherche sur le site”:
  - Mitigation: répéter “Recherche sur WhatsApp”; CTA unique; aucun lien vendeur.
- Lien kloo.me indisponible:
  - Mitigation: WhatsApp support +229 99 32 30 73.
- Attentes sur avis publics:
  - Mitigation: bloc “Confiance & Vérification” et limites actuelles (voir [bot/knowledge/troubleshooting.md](bot/knowledge/troubleshooting.md)).
- Fraudes/arnaques:
  - Mitigation: mise en avant [bot/knowledge/security-best-practices.md](bot/knowledge/security-best-practices.md).
- Charge /statistiques:
  - Mitigation: cache serveur, TTL et fallback.

23. Glossaire

- wa.me: lien “click to chat” WhatsApp.
- Lead: contact initié par un acheteur.
- Commission par lead: frais côté vendeur à la performance (voir [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)).
- Badge “Vendeur Vérifié”: statut de confiance contrôlé par l’équipe.

24. Références internes

- Présentation générale: [bot/knowledge/platform-overview.md](bot/knowledge/platform-overview.md)
- Guide acheteur: [bot/knowledge/client-guide.md](bot/knowledge/client-guide.md)
- Guide vendeur: [bot/knowledge/vendor-guide.md](bot/knowledge/vendor-guide.md)
- Inscription vendeur: [bot/knowledge/inscription-vendeur.md](bot/knowledge/inscription-vendeur.md)
- Catégories & produits: [bot/knowledge/categories-and-products.md](bot/knowledge/categories-and-products.md)
- Tarifs & plans: [bot/knowledge/pricing-and-plans.md](bot/knowledge/pricing-and-plans.md)
- Sécurité: [bot/knowledge/security-best-practices.md](bot/knowledge/security-best-practices.md)
- Dépannage: [bot/knowledge/troubleshooting.md](bot/knowledge/troubleshooting.md)
- Base de connaissance (FAQs): [bot/knowledge/wa-catalog-kb.json](bot/knowledge/wa-catalog-kb.json)
- Architecture KB et analytics: [bot/knowledge/README.md](bot/knowledge/README.md)

25. Spécifications minimales pour implémentation

- Routes:
  - /, /comment-ca-marche, /categories, /categories/:slug, /categories/:slug/produits, /produits/:slug, /devenir-vendeur, /statistiques, /aide, /aide/faq, /aide/depannage, /aide/securite, /tarifs, /contact, /mentions-legales, /cgu, /confidentialite, /cookies, /accessibilite.
- CTA:
  - Bouton unique “Discuter avec le bot” partout; wa.me/22999323073 avec message contextuel prérempli.
- Intégrations:
  - Lecture Markdown/JSON depuis [bot/knowledge/](bot/knowledge/README.md).
  - Lecture seule de base de données pour /statistiques.
- Caching:
  - HTML 10–30 min; /statistiques 60–300 s; estampille de mise à jour.
- Conformité:
  - Pages légales; bandeau cookies; politique confidentialité.

Ce README formalise une approche stricte: le site expose uniquement du contenu éditorial simplifié, sans liens directs vers des vendeurs ni détails exhaustifs, et pousse chaque visiteur vers le bot via un bouton unique “Discuter avec le bot”. Toute la recherche et toute la mise en relation s'opèrent dans WhatsApp, conformément aux documents de référence de la base de connaissance.
