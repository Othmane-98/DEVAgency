export const siteConfig = {
  name: "DevAgence",
  description: "Agence web spécialisée en CRM, ERP et E-commerce sur mesure.",
  domain: "https://devagence.fr",
  phone: "+212 6 39 32 96 86",
  email: "Devagence0@gmail.com",
  whatsapp: "+212639329686",
  address: "Maroc",
};

export const navItems = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
];

export const serviceNavLinks = [
  { label: "CRM Sur Mesure", href: "/services/crm", description: "Centralisez clients, pipelines et ventes" },
  { label: "ERP Intégré", href: "/services/erp", description: "Pilotez stocks, RH et comptabilité" },
  { label: "E-commerce", href: "/services/ecommerce", description: "Boutiques performantes et optimisées SEO" },
  { label: "Sites & Applications", href: "/services/web", description: "Interfaces modernes, rapides et accessibles" },
  { label: "Intégrations API", href: "/services/api", description: "Connectez vos outils métier entre eux" },
];

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;
  if (message) return `${base}?text=${encodeURIComponent(message)}`;
  return base;
}
