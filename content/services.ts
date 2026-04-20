export type ServiceIcon = "users" | "cpu" | "shoppingCart" | "monitor" | "plug";

export type ServiceSlug = "crm" | "erp" | "ecommerce" | "web" | "api";

type ServiceHighlight = {
  value: string;
  label: string;
};

type ServicePillar = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  navLabel: string;
  navDescription: string;
  description: string;
  heroTitle: string;
  heroLead: string;
  icon: ServiceIcon;
  highlights: ServiceHighlight[];
  features: string[];
  pillars: ServicePillar[];
  deliverables: string[];
  stack: string[];
  idealFor: string[];
  ctaMessage: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "crm",
    title: "CRM Sur Mesure",
    navLabel: "CRM Sur Mesure",
    navDescription: "Centralisez clients, pipelines et ventes",
    description:
      "Centralisez vos données clients, automatisez vos suivis et boostez vos ventes avec un CRM adapté à votre métier.",
    heroTitle: "Un CRM qui épouse votre cycle de vente, pas l'inverse.",
    heroLead:
      "Nous concevons des CRM sur mesure pour structurer votre prospection, fiabiliser vos relances et donner à vos équipes une vue claire de chaque opportunité.",
    icon: "users",
    highlights: [
      { value: "-35%", label: "de temps perdu sur les tâches manuelles" },
      { value: "360°", label: "de visibilité sur chaque prospect et client" },
      { value: "24/7", label: "de suivi automatisé des leads entrants" },
    ],
    features: [
      "Pipeline commercial multi-étapes et personnalisable",
      "Relances, rappels et séquences automatisées",
      "Tableaux de bord vente, conversion et performance",
      "Historique client unifié pour les équipes sales et support",
    ],
    pillars: [
      {
        title: "Pilotage commercial",
        description: "Suivez vos leads, devis, signatures et relances dans un tunnel clair, pensé pour votre métier.",
      },
      {
        title: "Automatisation intelligente",
        description: "Réduisez les actions répétitives avec des workflows sur mesure pour vos équipes commerciales.",
      },
      {
        title: "Vision managériale",
        description: "Accédez à des reportings fiables pour anticiper les performances et arbitrer rapidement.",
      },
    ],
    deliverables: [
      "Cartographie du cycle de vente et ateliers de cadrage",
      "CRM web sur mesure avec droits d'accès par rôle",
      "Automatisations emails, rappels et affectation des leads",
      "Dashboards KPI, export Excel et filtres avancés",
      "Formation des équipes et support post-lancement",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Resend", "API métier"],
    idealFor: [
      "Équipes commerciales qui veulent structurer leur prospection",
      "Entreprises avec plusieurs sources d'acquisition à centraliser",
      "Directions qui ont besoin d'un reporting fiable et actionnable",
    ],
    ctaMessage: "Je souhaite structurer mon pipeline commercial avec un CRM sur mesure.",
  },
  {
    slug: "erp",
    title: "ERP Intégré",
    navLabel: "ERP Intégré",
    navDescription: "Pilotez stocks, RH et comptabilité",
    description:
      "Pilotez l'ensemble de votre entreprise depuis une seule plateforme : stocks, comptabilité, RH et production.",
    heroTitle: "Un ERP unique pour faire circuler l'information entre vos équipes.",
    heroLead:
      "Nous bâtissons des ERP modulaires pour synchroniser opérations, stocks, achats, RH et finance dans une seule plateforme fiable et évolutive.",
    icon: "cpu",
    highlights: [
      { value: "1", label: "plateforme pour connecter vos opérations clés" },
      { value: "-40%", label: "de ressaisies et d'erreurs entre services" },
      { value: "+100%", label: "de traçabilité sur vos flux métier" },
    ],
    features: [
      "Gestion des stocks, achats et approvisionnements",
      "Modules RH, planning et suivi des équipes",
      "Comptabilité, facturation et états de gestion",
      "Process métier sur mesure selon votre organisation",
    ],
    pillars: [
      {
        title: "Organisation centralisée",
        description: "Évitez les doubles saisies en réunissant les données critiques de l'entreprise dans un seul socle.",
      },
      {
        title: "Processus fiabilisés",
        description: "Formalisez vos validations, contrôles et règles métier pour limiter les écarts opérationnels.",
      },
      {
        title: "Croissance modulaire",
        description: "Commencez avec les modules prioritaires puis faites évoluer l'ERP au rythme de vos besoins.",
      },
    ],
    deliverables: [
      "Audit des flux métier et découpage en modules",
      "ERP sur mesure avec architecture modulaire",
      "Règles de validation, alertes et historiques d'actions",
      "Reporting de gestion et tableaux de bord temps réel",
      "Connecteurs avec vos outils existants et accompagnement au déploiement",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Connecteurs API"],
    idealFor: [
      "PME en croissance avec plusieurs outils déconnectés",
      "Entreprises industrielles, logistiques ou de services multi-process",
      "Directions opérationnelles qui veulent une vue consolidée",
    ],
    ctaMessage: "Je veux centraliser mes opérations dans un ERP modulaire.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Performant",
    navLabel: "E-commerce",
    navDescription: "Boutiques performantes et optimisées SEO",
    description:
      "Des boutiques en ligne rapides, sécurisées et optimisées pour convertir vos visiteurs en acheteurs fidèles.",
    heroTitle: "Une boutique pensée pour vendre vite, bien et à grande échelle.",
    heroLead:
      "Nous créons des expériences e-commerce rapides, rassurantes et orientées conversion, avec un socle technique prêt pour le SEO, le catalogue et la croissance.",
    icon: "shoppingCart",
    highlights: [
      { value: "<2s", label: "de temps de chargement sur les pages clés" },
      { value: "+18%", label: "de conversion grâce à des parcours optimisés" },
      { value: "SEO", label: "technique prêt pour la croissance organique" },
    ],
    features: [
      "Catalogue produits, variantes et promotions",
      "Tunnel d'achat optimisé mobile et desktop",
      "Paiement sécurisé et gestion des commandes",
      "SEO technique, analytics et optimisation conversion",
    ],
    pillars: [
      {
        title: "Performance de conversion",
        description: "Chaque écran est conçu pour réduire la friction et transformer l'intention en achat.",
      },
      {
        title: "Opérations simplifiées",
        description: "Commandes, livraisons, promotions et catalogue restent simples à piloter au quotidien.",
      },
      {
        title: "Croissance durable",
        description: "Le socle technique est prêt pour le référencement, l'acquisition et les pics de trafic.",
      },
    ],
    deliverables: [
      "Conception UX du tunnel d'achat et des fiches produit",
      "Boutique sur mesure reliée aux moyens de paiement",
      "Gestion du catalogue, du stock et des promotions",
      "Instrumentation analytics et optimisation SEO",
      "Recette, mise en ligne et accompagnement post-lancement",
    ],
    stack: ["Next.js", "React", "Stripe", "CMS", "Analytics", "Search Console"],
    idealFor: [
      "Marques qui veulent une boutique plus premium et plus rapide",
      "E-commerçants qui ont besoin d'un meilleur taux de conversion",
      "Entreprises qui veulent relier boutique, CRM et opérations",
    ],
    ctaMessage: "Je souhaite lancer ou refondre une boutique e-commerce plus performante.",
  },
  {
    slug: "web",
    title: "Sites & Applications",
    navLabel: "Sites & Applications",
    navDescription: "Interfaces modernes, rapides et accessibles",
    description:
      "Concevez des sites web et applications métier élégants, rapides et pensés pour offrir une expérience claire sur tous les écrans.",
    heroTitle: "Des interfaces qui inspirent confiance et accélèrent l'usage.",
    heroLead:
      "Nous développons des sites premium, plateformes clients et applications web qui allient image de marque, clarté d'usage et performance technique.",
    icon: "monitor",
    highlights: [
      { value: "100%", label: "responsive sur mobile, tablette et desktop" },
      { value: "Core", label: "Web Vitals optimisés dès la conception" },
      { value: "UX", label: "pensée pour la conversion et l'adoption" },
    ],
    features: [
      "Sites corporate, landing pages et plateformes clients",
      "Applications métier avec espaces sécurisés",
      "Design system, composants réutilisables et contenus dynamiques",
      "Accessibilité, performance et maintenance facilitées",
    ],
    pillars: [
      {
        title: "Image de marque",
        description: "Donnez à votre présence digitale une identité claire, premium et cohérente avec votre positionnement.",
      },
      {
        title: "Expérience utilisateur",
        description: "Nous structurons les parcours pour guider l'utilisateur vers les bonnes actions avec fluidité.",
      },
      {
        title: "Fondation technique saine",
        description: "Le projet est livré avec une base propre, scalable et facile à faire évoluer par la suite.",
      },
    ],
    deliverables: [
      "Cadrage UX, arborescence et wireframes",
      "Maquettes UI haute fidélité et design system",
      "Développement Next.js et intégration de contenus",
      "Formulaires, espaces privés et composants métier",
      "Déploiement, SEO technique et support de lancement",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "CMS", "Vercel"],
    idealFor: [
      "Entreprises qui veulent moderniser leur présence digitale",
      "Équipes qui ont besoin d'une application métier fluide",
      "Marques qui cherchent une base solide pour grandir ensuite",
    ],
    ctaMessage: "Je veux créer un site ou une application plus crédible et plus efficace.",
  },
  {
    slug: "api",
    title: "Intégrations API",
    navLabel: "Intégrations API",
    navDescription: "Connectez vos outils métier entre eux",
    description:
      "Connectez vos logiciels internes, services SaaS et partenaires grâce à des intégrations API robustes et bien documentées.",
    heroTitle: "Des intégrations fiables pour faire parler vos outils entre eux.",
    heroLead:
      "Nous relions vos CRM, ERP, outils e-commerce, solutions comptables ou partenaires externes avec des flux API sécurisés, traçables et maintenables.",
    icon: "plug",
    highlights: [
      { value: "0", label: "double saisie entre vos outils clés" },
      { value: "Temps réel", label: "ou synchronisation planifiée selon le besoin" },
      { value: "Logs", label: "et monitoring pour garder le contrôle" },
    ],
    features: [
      "Connexion entre outils métier, SaaS et systèmes internes",
      "Webhooks, synchronisations et jobs planifiés",
      "Gestion des erreurs, logs et reprise automatique",
      "Documentation technique et sécurisation des accès",
    ],
    pillars: [
      {
        title: "Interopérabilité",
        description: "Nous faisons circuler la donnée au bon format entre vos plateformes sans fragiliser vos opérations.",
      },
      {
        title: "Fiabilité opérationnelle",
        description: "Chaque flux est pensé avec logs, alertes et stratégies de reprise pour limiter les incidents.",
      },
      {
        title: "Évolutivité",
        description: "Vos intégrations restent documentées et extensibles lorsque votre stack ou vos partenaires évoluent.",
      },
    ],
    deliverables: [
      "Cartographie des flux source et cible",
      "Développement des endpoints, webhooks et connecteurs",
      "Gestion des droits, secrets et journalisation",
      "Tableau de suivi des synchronisations et statuts",
      "Documentation d'usage et transfert de compétences",
    ],
    stack: ["REST", "GraphQL", "Node.js", "Webhooks", "Queues", "Monitoring"],
    idealFor: [
      "Entreprises avec plusieurs outils non connectés",
      "Équipes qui veulent fiabiliser les échanges de données",
      "Directions qui ont besoin de synchronisations traçables",
    ],
    ctaMessage: "Je veux connecter mes outils avec des intégrations API fiables.",
  },
];

export const featuredServiceCards = serviceDetails
  .filter((service) => ["crm", "erp", "ecommerce"].includes(service.slug))
  .map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    icon: service.icon,
    href: `/services/${service.slug}`,
    features: service.features.slice(0, 3),
  }));

export const allServiceCards = serviceDetails.map((service) => ({
  slug: service.slug,
  title: service.title,
  description: service.description,
  icon: service.icon,
  href: `/services/${service.slug}`,
  features: service.features.slice(0, 3),
}));

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
