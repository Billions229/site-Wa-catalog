# Pages manquantes selon README-Site-Officiel.md

## ✅ Pages existantes

1. **/** (Accueil) - `HomePage.tsx` ✅
2. **/comment-ca-marche** - `HowItWorksPage.tsx` ✅
3. **/categories** - `CategoriesPage.tsx` ✅
4. **/categories/:slug** - `CategoryDetailPage.tsx` ✅
5. **/categories/:slug/produits** - `CategoryProductsPage.tsx` ✅

## ❌ Pages manquantes à créer

### Pages principales (Navigation principale)

6. **/devenir-vendeur** ❌
   - Processus d'inscription vendeur
   - Formulaire kloo.me/vendeur-wa-catalogue
   - Contact WhatsApp +229 99 32 30 73
   - Références: `bot/knowledge/inscription-vendeur.md`, `bot/knowledge/pricing-and-plans.md`

7. **/statistiques** ❌
   - Statistiques publiques agrégées et anonymisées
   - Requêtes traitées, top catégories, FAQ anonymisées
   - Visualisations (séries temporelles, Top N, compteurs)
   - Références: `bot/knowledge/README.md`

8. **/aide** ❌
   - Guides acheteur, sécurité, dépannage
   - Références: `bot/knowledge/client-guide.md`, `bot/knowledge/security-best-practices.md`, `bot/knowledge/troubleshooting.md`

9. **/tarifs** ❌
   - Tarifs transparents pour vendeurs
   - Commission par lead, plans (Starter, Business, Boost)
   - Add-ons (Setup Pro, Badge Vendeur Vérifié)
   - Références: `bot/knowledge/pricing-and-plans.md`
   - Note: Le composant `Pricing.tsx` existe déjà mais pas la page dédiée

10. **/contact** ❌
    - Formulaire de contact
    - Informations: +229 99 32 30 73, support@wa-catalog.com, Cotonou, Bénin

### Pages de navigation secondaire (Footer)

11. **/aide/faq** ❌
    - FAQ complète
    - Références: `bot/knowledge/wa-catalog-kb.json`

12. **/aide/depannage** ❌
    - Guide de dépannage
    - Références: `bot/knowledge/troubleshooting.md`

13. **/aide/securite** ❌
    - Conseils sécurité
    - Références: `bot/knowledge/security-best-practices.md`

14. **/accessibilite** ❌
    - Page d'accessibilité (WCAG 2.1 AA)

### Pages légales

15. **/mentions-legales** ❌
    - Éditeur, hébergeur, contact

16. **/cgu** ❌
    - Conditions Générales d'Utilisation (acheteurs et vendeurs)
    - Références: `bot/knowledge/pricing-and-plans.md` pour CGV vendeurs

17. **/confidentialite** ❌
    - Politique de confidentialité
    - RGPD, collecte minimale, droits

18. **/cookies** ❌
    - Politique de cookies
    - Bandeau de consentement (opt-in analytics)

### Pages produits (optionnelles selon phase)

19. **/produits/:slug** ❌
    - Page détail produit éditorialisée
    - Fiche synthétique d'orientation
    - Pas de données vendeur ni lien direct vendeur
    - Bouton unique "Discuter avec le bot"
    - Note: Phase 4 (M3+) selon README

## Résumé

- **Pages principales manquantes**: 5 (devenir-vendeur, statistiques, aide, tarifs, contact)
- **Pages aide manquantes**: 3 (faq, depannage, securite)
- **Pages légales manquantes**: 4 (mentions-legales, cgu, confidentialite, cookies)
- **Pages autres**: 2 (accessibilite, produits/:slug)

**Total: 14 pages manquantes à créer**

## Priorités selon le README

### Phase 1 (S1–S2) - À faire maintenant
- ✅ Accueil
- ✅ Comment ça marche
- ✅ Catégories
- ❌ Devenir vendeur

### Phase 2 (S3–S4) - Priorité suivante
- ❌ Aide
- ❌ Sécurité
- ❌ FAQ
- ❌ Dépannage

### Phase 3 (M2) - Plus tard
- ❌ Statistiques publiques

### Phase 4 (M3+) - Optionnel
- ❌ Pages détail produit éditorialisées

### Toujours nécessaires (conformité)
- ❌ Tarifs (page dédiée)
- ❌ Contact
- ❌ Mentions légales
- ❌ CGU
- ❌ Confidentialité
- ❌ Cookies
- ❌ Accessibilité

