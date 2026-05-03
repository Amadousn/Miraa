# Guide Shopify — De A à Z pour lancer Maison Miraa

Ce guide te prend en main du compte Shopify vide jusqu'au site en ligne qui encaisse des paiements.

---

## ⚙️ Étape 1 — Créer le compte Shopify (15 min)

1. Va sur https://www.shopify.com/fr → **Démarrer l'essai gratuit**
2. Crée un compte avec ton email pro (`amadousine23@gmail.com` ou un email Miraa dédié)
3. Renseigne :
   - **Nom de la boutique** : Maison Miraa
   - **Pays** : France
   - **Devise** : EUR
   - **Tu vends** : Vêtements pour homme
4. Tu auras un domaine temporaire `maison-miraa.myshopify.com` (déjà utilisé dans ton `.env.local` ✅)

**Plan recommandé** : commence en **Basic** (29 €/mois après essai gratuit). Tu pourras upgrade plus tard.

---

## 📦 Étape 2 — Créer les 7 produits (45 min)

**Important** : Le `handle` (slug URL) de chaque produit Shopify doit **exactement matcher** les IDs du code, sinon les pages produit du site ne fonctionneront pas.

### Aller dans `Produits → Ajouter un produit`

Pour chaque produit, configure ainsi :

#### Produit 1 — Pantalon Structuré Kaki
- **Titre** : `Pantalon Structuré Kaki`
- **Handle** (URL) : `pantalon-kaki` ⚠️ critique
- **Description** : Pantalon droit taille mi-haute, pince centrale, tombé impeccable. Couleur kaki profond, coupe intemporelle.
- **Prix** : `49.99` EUR
- **Suivre la quantité** : oui (mets 50 par taille au début)
- **Catégorie produit** : Pantalons
- **Type** : Pantalons
- **Tags** : `new`, `bestseller`
- **Variantes** :
  - Option : `Taille` → S, M, L, XL, XXL (5 variantes)
- **Images** : upload `public/products/pantalon_kaki.jpg` + d1 + d2 + d3 + d4

#### Produit 2 — Pantalon Droit Sable
- **Handle** : `pantalon-sable`
- **Prix** : `49.99`
- **Tags** : `new`
- **Images** : `pantalon_sable.jpg` + d1-d4
- **Tailles** : S, M, L, XL, XXL

#### Produit 3 — T-shirt Manches Longues Sable
- **Handle** : `teeshirt-sable-ls`
- **Prix** : `59.99`
- **Tags** : `bestseller`
- **Images** : `tshirt_sable_ml.jpg` + d1-d3
- **Tailles** : S, M, L, XL, XXL

#### Produit 4 — T-shirt Col Rond Sable
- **Handle** : `teeshirt-col-rond-sable`
- **Prix** : `49.99`
- **Images** : `tshirt_sable_mc.jpg` + d1-d3
- **Tailles** : S, M, L, XL, XXL

#### Produit 5 — T-shirt Col Rond Marron
- **Handle** : `teeshirt-marron`
- **Prix** : `49.99`
- **Tags** : `new`
- **Images** : `tshirt_marron_mc.jpg` + d1-d3
- **Tailles** : S, M, L, XL, XXL

#### Produit 6 — Veste Sans Manches Kaki
- **Handle** : `veste-bomber-kaki`
- **Prix** : `64.99`
- **Tags** : `new`, `bestseller`
- **Images** : `veste_kaki.jpg` + d1-d4
- **Tailles** : S, M, L, XL, XXL

#### Produit 7 — Veste Réversible Gris/Sable
- **Handle** : `veste-reversible`
- **Prix** : `84.99`
- **Images** : `veste_reversible.jpg` + d1-d5
- **Tailles** : S, M, L, XL, XXL

### Vérification
Pour chaque produit, vérifie que :
- ✅ Statut = **Actif**
- ✅ Canaux de vente = **Online Store** coché
- ✅ Au moins 5 variantes (1 par taille)

---

## 🌐 Étape 3 — Activer la Storefront API (10 min)

C'est cette API qui permet au site Next.js de récupérer les produits Shopify.

1. Dans Shopify Admin : **Paramètres** → **Apps et canaux de vente** → **Développer des applications**
2. Si pas activé : clique **Autoriser le développement d'applications personnalisées**
3. **Créer une app** → Nom : `Miraa Headless`
4. Onglet **Configuration** → **API Storefront** → **Configurer**
5. Coche les permissions suivantes :
   - ✅ `unauthenticated_read_product_listings`
   - ✅ `unauthenticated_read_product_inventory`
   - ✅ `unauthenticated_read_product_tags`
   - ✅ `unauthenticated_write_checkouts`
   - ✅ `unauthenticated_read_checkouts`
   - ✅ `unauthenticated_read_collections`
6. **Sauvegarder**
7. Onglet **Identifiants API** → copie le **Storefront API access token**
8. Met à jour `.env.local` :
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=maison-miraa.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=ton-nouveau-token
```

---

## 💳 Étape 4 — Activer Shopify Payments (20 min + 24-48h vérification)

Sans ça, tu ne peux **pas** encaisser de paiements.

1. **Paramètres** → **Paiements**
2. **Activer Shopify Payments** (ou Stripe en alternative)
3. Renseigne :
   - **Nom légal** de l'entreprise + SIRET
   - **Numéro de TVA intracommunautaire** (FR + 11 chiffres)
   - **Adresse du siège social**
   - **Coordonnées bancaires** (IBAN/BIC)
   - **Pièce d'identité** (carte d'identité ou passeport scan)
4. Active aussi :
   - **Apple Pay** (gratuit)
   - **Google Pay** (gratuit)
   - **PayPal** (commission 1,2-2,9% selon volume)

⚠️ La vérification Shopify prend 24-48h. Anticipe.

**Pas de SIRET encore ?** Tu peux créer une **micro-entreprise** sur https://formalites.entreprises.gouv.fr (gratuit, 2-3 semaines de délai).

---

## 🚚 Étape 5 — Configurer la livraison (10 min)

**Paramètres** → **Expédition et livraison**

### Profil de livraison « Général »

**France métropolitaine** :
- Tarif fixe : `5,90 €`
- Livraison gratuite à partir de `100,00 €`

**Union Européenne** :
- Tarif fixe : `9,90 €`

**Reste du monde** :
- Désactive temporairement ou « Sur devis »

**Transporteur recommandé** :
- **Mondial Relay** (Point Relais — économique, ~3,90 €)
- **Colissimo** (domicile, fiable, ~6 €)

### Activer les étiquettes Shopify Shipping (optionnel)
Permet d'imprimer les étiquettes directement depuis l'admin Shopify avec des tarifs négociés.

---

## 🧾 Étape 6 — Configurer les taxes (5 min)

**Paramètres** → **Taxes et droits de douane**

1. **Région** : France
2. **TVA** : 20% (taux normal — applicable au prêt-à-porter)
3. **Inclure la TVA dans les prix** : ✅ activé (les prix affichés sont TTC)

⚠️ Si micro-entreprise sous le seuil de TVA (< 36 800 € HT) : **désactive la TVA** et **ajoute la mention obligatoire** "TVA non applicable, art. 293 B du CGI" dans tes mentions légales et factures.

---

## 🔗 Étape 7 — Acheter un nom de domaine (10 min)

1. Va sur **OVH** (https://www.ovh.com), **Gandi** ou **Namecheap**
2. Achète `maisonmiraa.com` (~12 €/an)
3. Si pas dispo, alternatives :
   - `miraa-paris.com`
   - `maison-miraa.com`
   - `miraa.fr`

⚠️ Note ce domaine — tu en auras besoin partout :
- Dans `app/sitemap.ts` (déjà mis : `maisonmiraa.com`)
- Dans `app/robots.ts` (déjà mis)
- Dans `app/layout.tsx` (`metadataBase`)

Si tu choisis un autre domaine, fais Find & Replace de `maisonmiraa.com` dans tout le projet.

---

## 🚀 Étape 8 — Déployer sur Vercel (15 min)

C'est ce qui rend le site accessible publiquement.

### A. Pousser le code sur GitHub
```bash
cd C:/Users/Amadou123/Desktop/miraa
git init
git add .
git commit -m "Initial commit Miraa"
git branch -M main
gh repo create maison-miraa --private --source=. --push
```

### B. Connecter Vercel à GitHub
1. Va sur https://vercel.com → **Sign up** avec GitHub
2. **Import Git Repository** → sélectionne `maison-miraa`
3. **Framework Preset** : Next.js (auto-détecté)
4. **Environment Variables** : ajoute :
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN = maison-miraa.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = ton-token
   ```
5. **Deploy**

Site en ligne en ~2 min sur `maison-miraa.vercel.app`.

### C. Brancher ton domaine personnalisé
1. Vercel → projet Miraa → **Settings** → **Domains**
2. Ajoute `maisonmiraa.com` et `www.maisonmiraa.com`
3. Vercel donne 2 entrées DNS à créer :
   - A record `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
4. Va sur l'interface DNS de ton registrar (OVH/Gandi) → ajoute ces 2 records
5. Patiente 5-30 min → le SSL est auto-généré par Vercel

---

## 📧 Étape 9 — Email professionnel (15 min)

Pour `contact@maisonmiraa.com` (référencé partout dans le site).

**Option A — Google Workspace** (recommandé, 6 €/mois)
1. https://workspace.google.com/
2. Domaine : `maisonmiraa.com`
3. Suis l'assistant → ajoute les MX records DNS chez ton registrar

**Option B — Zoho Mail** (gratuit jusqu'à 5 utilisateurs)
1. https://www.zoho.com/mail/
2. Plan gratuit "Forever Free Plan"

**Option C — OVH** (si tu as acheté le domaine chez eux, 1,99 €/mois)

---

## 📝 Étape 10 — Compléter les pages légales (30 min)

Ouvre ces fichiers et remplace les `[placeholders]` par tes vraies infos :

### `app/mentions-legales/page.tsx`
- `[Forme juridique]` → ex : Auto-entreprise / SAS / SARL
- `[Numéro SIRET]` → ton SIRET (14 chiffres)
- `[Adresse du siège social]` → ton adresse
- `[Code postal, Ville]`
- `[Nom du responsable]` → ton nom
- Hébergeur → si tu déploies sur Vercel, garde l'info Vercel actuelle

### `app/cgv/page.tsx`
Vérifie tous les articles. Le contenu actuel est générique-conforme mais à adapter à ton activité.

### `app/confidentialite/page.tsx`
Le RGPD impose de mentionner :
- Coordonnées du DPO si tu en as un (sinon = toi)
- Liste des sous-traitants : Shopify, Vercel, Stripe, Google Analytics si activé

⚠️ **Si tu actives Google Analytics ou Meta Pixel**, tu DOIS ajouter un bandeau cookies (CookieYes / Axeptio gratuit jusqu'à 25k vues/mois).

---

## 🧪 Étape 11 — Tester un achat réel (20 min)

Avant d'annoncer le lancement :

1. **Mode test** (Stripe/Shopify Payments)
   - Active le mode test dans Paiements
   - Achète un produit avec la carte `4242 4242 4242 4242` (n'importe quelle date / CVC)
   - Vérifie : email confirmation → commande dans admin → email expédition

2. **Achat réel**
   - Désactive le mode test
   - Achète un produit avec ta vraie carte (le pantalon à 49,99 €)
   - Vérifie : argent débité → arrivé dans ton compte → commande dans admin
   - Annule la commande pour te rembourser (ou teste le retour)

3. **Test mobile**
   - Ouvre le site depuis ton téléphone
   - Vérifie le hamburger menu, le panier, le checkout

---

## 📊 Étape 12 — Analytics (optionnel, 10 min)

### Google Analytics 4 (gratuit)
1. https://analytics.google.com → crée une propriété
2. Récupère le **Measurement ID** (`G-XXXXXXXXXX`)
3. Ajoute dans `app/layout.tsx` :
```tsx
import Script from 'next/script'

// Dans <body>, juste avant </body>
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="ga-init">
  {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');`}
</Script>
```
4. Active aussi le **bandeau cookies** (obligatoire si GA actif)

### Meta Pixel (Facebook/Instagram Ads)
À ajouter si tu prévois de la pub. Sinon skip.

---

## ✅ Checklist finale avant lancement public

- [ ] Les 7 produits sont créés dans Shopify avec les bons handles
- [ ] Les 7 produits ont les 5 tailles (S, M, L, XL, XXL)
- [ ] Les images produits sont uploadées sur Shopify (pas juste sur le site)
- [ ] Storefront API activée + token dans `.env.local` ET sur Vercel
- [ ] Shopify Payments validé (vérification 24-48h passée)
- [ ] Frais de livraison configurés
- [ ] TVA configurée
- [ ] Domaine personnalisé branché à Vercel
- [ ] Email pro `contact@maisonmiraa.com` opérationnel
- [ ] Pages légales remplies avec vraies infos
- [ ] Test d'achat réel réalisé et fonctionnel
- [ ] Email de confirmation reçu après achat
- [ ] Site responsive testé sur mobile + desktop

---

## 🎯 Lancement

Quand tout est ✅ :

1. Annonce sur Instagram + tes réseaux
2. Active **Google Search Console** : https://search.google.com/search-console → ajoute `maisonmiraa.com` → soumets `https://maisonmiraa.com/sitemap.xml`
3. Pareil sur **Bing Webmaster Tools**
4. Ajoute le site à **Google My Business** si tu as une adresse physique

---

## 🆘 En cas de problème

| Problème | Solution |
|----------|----------|
| Les produits Shopify ne s'affichent pas sur `/shop` | Vérifie que les produits sont **Actifs** + canal **Online Store** activé + token correct |
| Le checkout renvoie une erreur | Vérifie que les variantes ont bien des **stocks** > 0 |
| Pas d'email de confirmation reçu | Spams ? Sinon : Shopify → Paramètres → Notifications |
| Le domaine ne pointe pas | DNS prend jusqu'à 24h pour se propager. Vérifie sur https://dnschecker.org |
| Page 404 sur un produit | Le `handle` Shopify ne match pas l'ID du code. Renomme le handle dans Shopify |

---

## 📞 Support

- **Shopify** : chat 24/7 dans l'admin (icône ?)
- **Vercel** : https://vercel.com/help
- **Code du site** : Sirius Agency

Bon lancement.
