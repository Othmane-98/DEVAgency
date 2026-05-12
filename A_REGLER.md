# Audit et Corrections à Apporter (A_REGLER.md)

Ce document dresse la liste des problèmes actuels, bugs potentiels et axes d'amélioration critiques à régler sur le site web, en complément des évolutions UI/UX prévues dans `dev.md`.

## 1. Liens Morts et Navigation (Routing)
- [x] **Liens "#" omniprésents** : De nombreux boutons (Hero, Footer, Navigation) pointent vers `#` au lieu de pages réelles ou de sections spécifiques. Cela nuit à l'UX et au SEO.
- [x] **Page 404 non personnalisée** : Le site requiert une page `not-found.tsx` stylisée pour guider l'utilisateur s'il se perd.
- [ ] **Absence de fil d'Ariane (Breadcrumbs)** : Pour les pages profondes (ex: les modèles), l'utilisateur n'a pas de moyen clair de revenir en arrière autrement que par le menu.

## 2. Responsive Design & Mobile (UI/UX)
- [x] **Menu Hamburger Mobile** : 
  - L'animation du menu n'est pas toujours fluide.
  - Le menu plein écran sur mobile manque de "Padding" sécurisé en bas (pour éviter les barres de navigation natives iOS/Android).
- [x] **Tailles de typographie mobiles** : Certaines polices (`text-6xl`, `text-8xl`) dans les sections Hero (Restaurant, Hôtel) peuvent déborder ou causer un défilement horizontal (overflow-x) sur les très petits écrans (iPhone SE).
- [ ] **Espacements (Padding/Margin)** : Les sections utilisant `py-24` sont parfois trop espacées sur mobile. Il faudrait utiliser des classes responsives comme `py-12 md:py-24`.

## 3. Performance & Optimisation (Vitesse)
- [ ] **Images non optimisées** :
  - Bien que le composant `next/image` soit utilisé, certaines grandes images (Hero) nécessitent l'attribut `priority={true}` combiné à `quality={90}` pour améliorer le LCP (Largest Contentful Paint).
  - Les placeholders (flou ou couleur de fond) doivent être uniformisés pendant le chargement des images distantes (Unsplash).
- [ ] **Bundle Size (Taille du JS)** :
  - L'utilisation massive de `framer-motion` sur plusieurs composants peut alourdir le chargement initial. Il faut s'assurer que les imports sont optimisés ou utiliser `LazyMotion`.
- [ ] **Polices d'écriture** :
  - Les polices (Manrope, Noto Serif, Inter) doivent être chargées via `next/font` pour éviter les sauts de mise en page (CLS - Cumulative Layout Shift).

## 4. Accessibilité (A11y) & Conformité WCAG
- [x] **Contraste des couleurs** :
  - Vérifier si les textes gris clair sur fond blanc (`#566163` sur `#F6FAFB`) respectent le ratio de contraste AA de 4.5:1.
- [x] **États de Focus (Keyboard Navigation)** :
  - La navigation au clavier (Tab) n'est pas évidente. Il faut ajouter des anneaux de focus (ex : `focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A059]`) sur tous les `<button>`, `<a>` et `<input>`.
- [x] **Attributs ARIA manquants** :
  - Les icônes (`lucide-react`) utilisées comme boutons (sliders, boutons fermer) doivent avoir un `aria-label` descriptif pour les lecteurs d'écran.

## 5. SEO & Métadonnées
- [x] **Balises Meta manquantes** :
  - Les pages n'ont pas de balises `openGraph` (OG) ou `twitter:card` correctement configurées dans leur objet `metadata`.
- [x] **Structure H1-H6** :
  - S'assurer que chaque page ne possède qu'un **seul et unique H1**. Actuellement, certains composants (comme les démos) peuvent générer plusieurs H1 s'ils sont mal imbriqués.
- [x] **Sitemap & Robots.txt** :
  - Le fichier `sitemap.ts` génère actuellement des routes basiques. Il doit intégrer dynamiquement toutes les nouvelles routes (`/templates/restaurant`, etc.).

## 6. Qualité du Code & Dette Technique
- [x] **Typage TypeScript (`any`)** :
  - Des types `any` ont été repérés (ex: dans `HotelRooms.tsx` pour l'itération des commodités). Il faut définir des interfaces strictes (`interface Room`, `interface Amenity`).
- [ ] **Formulaires (Validation)** :
  - Le formulaire de réservation du Restaurant (`ReservationForm.tsx`) utilise des inputs HTML classiques avec l'attribut `required`. Il faudrait le brancher à **Zod** + **React Hook Form** (qui sont déjà dans le `package.json`) pour une validation robuste et sécurisée côté client.
- [x] **Gestion des États d'Erreur** :
  - Le formulaire final simule un succès au bout de 1.5s, mais ne prévoit pas le cas où une erreur réseau surviendrait (Message "Une erreur est survenue, veuillez réessayer").

---

**Recommandation d'action immédiate :**
La priorité absolue devrait être la **correction des liens morts** et la **résolution des problèmes liés au responsive mobile** (overflow et typographie) avant de lancer des campagnes d'acquisition sur ces modèles.
