export const stats = [
  { value: "+120", label: "Projets livrés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "+40%", label: "ROI moyen" },
  { value: "24/7", label: "Support dédié" },
];

export const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice",
    company: "Boutique Mode",
    content: "Notre CA en ligne a augmenté de 60% en 3 mois grâce à leur solution e-commerce.",
    quote: "Notre CA en ligne a augmenté de 60% en 3 mois grâce à leur solution e-commerce.",
    avatar: "",
  },
  {
    name: "Karim Benali",
    role: "CEO",
    company: "LogiPro",
    content: "L'ERP sur mesure a transformé notre gestion opérationnelle. Gain de temps considérable.",
    quote: "L'ERP sur mesure a transformé notre gestion opérationnelle. Gain de temps considérable.",
    avatar: "",
  },
  {
    name: "Marie Dupont",
    role: "Responsable Commerciale",
    company: "Agri+",
    content: "Le CRM développé par DevAgency a doublé l'efficacité de notre équipe commerciale.",
    quote: "Le CRM développé par DevAgency a doublé l'efficacité de notre équipe commerciale.",
    avatar: "",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "299",
    description: "Idéal pour les petites structures",
    features: ["Site vitrine 5 pages", "SEO de base", "Formulaire de contact", "Support 30 jours"],
    cta: "Démarrer",
    highlighted: false,
    popular: false,
  },
  {
    name: "Business",
    price: "999",
    description: "Pour les entreprises en croissance",
    features: ["Site sur mesure", "CRM intégré", "Dashboard analytique", "Support 6 mois", "Formation incluse"],
    cta: "Choisir Business",
    highlighted: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Solutions complexes et scalables",
    features: ["ERP complet", "Intégrations API", "Infrastructure cloud", "Support illimité", "SLA garanti"],
    cta: "Nous contacter",
    highlighted: false,
    popular: false,
  },
];

export const faqItems = [
  {
    question: "Combien de temps dure un projet ?",
    answer: "Selon la complexité, entre 4 semaines pour un site vitrine et 6 mois pour un ERP complet.",
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer: "Oui, tous nos projets incluent une période de support, et nous proposons des contrats de maintenance mensuels.",
  },
  {
    question: "Travaillez-vous avec des entreprises à l'étranger ?",
    answer: "Absolument. Nous travaillons avec des clients en France, Belgique, Maroc et dans toute la francophonie.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Next.js, React, Node.js, PostgreSQL, et les meilleurs outils cloud selon les besoins du projet.",
  },
];

export const features = [
  { title: "Performance", description: "Applications rapides et optimisées pour tous les appareils.", icon: "zap" },
  { title: "Sécurité", description: "Architecture sécurisée et données protégées par design.", icon: "shield" },
  { title: "Scalabilité", description: "Solutions qui grandissent avec votre entreprise.", icon: "layers" },
  { title: "Support", description: "Une équipe disponible pour vous accompagner dans la durée.", icon: "users" },
];

export const trustedCompanies = [
  { name: "Acme Corp", logo: "" },
  { name: "LogiPro", logo: "" },
  { name: "Agri+", logo: "" },
  { name: "MedConsult", logo: "" },
  { name: "StyleHub", logo: "" },
];

export const serviceCards = [
  {
    slug: "crm",
    title: "CRM Sur Mesure",
    description:
      "Centralisez vos données clients, automatisez vos suivis et boostez vos ventes avec un CRM adapté à votre métier.",
    icon: "users",
    href: "/services/crm",
    features: ["Pipeline de vente", "Automatisation", "Tableau de bord analytique"],
  },
  {
    slug: "erp",
    title: "ERP Intégré",
    description:
      "Pilotez l'ensemble de votre entreprise depuis une seule plateforme : stocks, comptabilité, RH et production.",
    icon: "cpu",
    href: "/services/erp",
    features: ["Gestion des stocks", "Comptabilité intégrée", "Modules RH"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Performant",
    description:
      "Des boutiques en ligne rapides, sécurisées et optimisées pour convertir vos visiteurs en acheteurs fidèles.",
    icon: "shoppingCart",
    href: "/services/ecommerce",
    features: ["Paiement sécurisé", "SEO optimisé", "Mobile-first"],
  },
];
