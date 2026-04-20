export type DemoTemplate = {
  id: string;
  title: string;
  description: string;
  category: "restaurant" | "hotel" | "medical" | "riad" | "recycling" | "trading" | "crm";
  tags: string[];
  previewClassName: string;
  patternClassName?: string;
};

export const demoTemplates: DemoTemplate[] = [
  {
    id: "restaurant",
    title: "Restaurant Gastronomique",
    description:
      "Un site élégant pour mettre en valeur votre cuisine, gérer vos réservations et présenter votre équipe.",
    category: "restaurant",
    tags: ["Réservation", "Menu digital", "Galerie"],
    previewClassName: "from-amber-900 via-amber-800 to-orange-900",
  },
  {
    id: "hotel",
    title: "Hôtel Boutique Luxe",
    description:
      "Une expérience en ligne immersive pour votre hôtel avec réservation en temps réel et présentation des suites.",
    category: "hotel",
    tags: ["Réservation", "Galerie", "Spa"],
    previewClassName: "from-slate-800 via-slate-700 to-zinc-800",
  },
  {
    id: "medical",
    title: "Clinique & Cabinet Médical",
    description:
      "Site professionnel pour votre cabinet avec prise de rendez-vous en ligne, présentation des spécialistes et FAQ.",
    category: "medical",
    tags: ["Rendez-vous", "Médecins", "FAQ"],
    previewClassName: "from-blue-900 via-blue-800 to-teal-900",
  },
  {
    id: "riad",
    title: "Riad Traditionnel Marocain",
    description:
      "Une vitrine authentique pour votre riad avec présentation du hammam, spa, suites et expériences culturelles marocaines.",
    category: "riad",
    tags: ["Hammam", "Spa", "Suites", "Authentique"],
    previewClassName: "from-red-950 via-amber-950 to-orange-950",
    patternClassName:
      "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
  },
  {
    id: "recycling",
    title: "EcoPlast — Recyclage Plastique",
    description:
      "Site vitrine pour une entreprise de recyclage plastique avec présentation du processus, impact environnemental et matériaux traités.",
    category: "recycling",
    tags: ["Environnement", "Processus", "B2B", "Impact"],
    previewClassName: "from-green-900 via-emerald-800 to-teal-950",
  },
  {
    id: "trading",
    title: "Trading Platform Pro",
    description:
      "Professional trading platform with real-time data, advanced tools, institutional-grade security, and expert leadership.",
    category: "trading",
    tags: ["Real-time Data", "Advanced Tools", "Security", "24/7"],
    previewClassName: "from-cyan-950 via-teal-900 to-blue-950",
  },
  {
    id: "crm",
    title: "AutoParts CRM — Pièces Auto",
    description:
      "CRM complet pour un distributeur de pièces automobiles : pipeline de vente, gestion des clients B2B, suivi des commandes et tableau de bord analytique.",
    category: "crm",
    tags: ["Pipeline", "Clients B2B", "Commandes", "Dashboard"],
    previewClassName: "from-gray-900 via-slate-800 to-zinc-900",
  },
];
