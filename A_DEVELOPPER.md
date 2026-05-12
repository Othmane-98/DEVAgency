# Roadmap Frontend & Design UI/UX (À faire)

Ce document liste les prochaines étapes de développement avec un focus **100% sur le frontend, le design et l'expérience utilisateur (UI/UX)** afin de sublimer l'interface du site vitrine et de ses modèles.

## 1. Création des Pages Complètes pour les Modèles (Design System)
Il faut designer et coder les pages de destination complètes pour les 3 modèles phares, avec une attention particulière aux détails visuels :
- [ ] **Interface Restaurant (`/templates/restaurant`)** :
  - Design du Menu digital interactif (avec filtres interactifs Plats/Boissons/Desserts).
  - Galerie en grille maçonnerie avec effet de Lightbox (zoom au clic).
  - Formulaire de réservation visuel en multi-étapes (step-by-step).
- [ ] **Interface Hôtel (`/templates/hotel`)** :
  - Composant de recherche de disponibilité (Date picker stylisé).
  - Fiches "Chambres" avec slider/carrousel intégré.
  - Section "Commodités/Spa" avec présentation sous forme de cartes élégantes (bords arrondis, glassmorphism).
- [ ] **Interface Médicale (`/templates/medical`)** :
  - Composant "Prendre RDV" clair et rassurant (boutons flottants).
  - Accordéon (FAQ) interactif pour les questions sur les soins.
  - Cartes de présentation des médecins avec effet "Hover-reveal" pour afficher les spécialités.

## 2. Animations & Micro-Interactions (Framer Motion)
L'objectif est d'ajouter un côté "Premium" par le mouvement fluide :
- [ ] **Transitions de page (Page Transitions)** : Animations d'entrée et de sortie fluides lors de la navigation entre les pages (fade-in, slide-up).
- [ ] **Scroll Reveal (Animations au défilement)** : Apparition progressive des sections (titres, paragraphes, images) au fur et à mesure que l'utilisateur scrolle vers le bas.
- [ ] **Effets de survol avancés (Hover Effects)** : 
  - Effets "Magnétisme" sur les boutons principaux.
  - Bordures lumineuses dynamiques (glowing borders) sur les cartes de service.
- [ ] **Micro-interactions** : Animations des icônes (hamburger menu, coche de validation sur les formulaires).

## 3. UI Kit & Composants Visuels Communs
- [ ] **Refonte de la Navigation (Mega-Menu)** : Transformer le header actuel en un Mega-Menu interactif avec des images d'illustration dans les sous-menus.
- [ ] **Boutons & Typographie** : Harmoniser les variantes de boutons (Primary, Outline, Ghost) et assurer une hiérarchie typographique parfaite (titres marquants, lisibilité améliorée).
- [ ] **Système de Notification (Toast)** : Installer des alertes visuelles élégantes (via `sonner` ou `react-hot-toast`) pour les messages de succès ou d'erreur sur les formulaires.

## 4. Polissage Visuel & Responsive Design
- [ ] **Mode Sombre (Dark Mode) Parfait** : 
  - Ajuster les dégradés et les couleurs d'arrière-plan pour éviter un contraste trop brutal.
  - S'assurer que les ombres (box-shadow) sont visibles et adaptées au mode sombre.
- [ ] **Perfection Responsive** :
  - Revoir l'affichage sur mobile (espacements, tailles de police).
  - Améliorer le menu tiroir sur mobile (Mobile Drawer) avec des animations "slide-in".
- [ ] **Optimisation des Images Frontend** : Poursuivre l'effort sur les placeholders fluous (Blur-up loading) en attendant le chargement complet des images haute définition.
