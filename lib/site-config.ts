import { serviceDetails } from "@/content/services";

export const siteConfig = {
  name: "DevAgence",
  description: "Agence digitale spécialisée en logiciels métiers, sites web et intégrations sur mesure.",
  domain: "https://devagence.fr",
  phone: "+33 1 00 00 00 00",
  email: "contact@devagence.fr",
  whatsapp: "+33600000000",
  address: "Paris, France",
};

export const navItems = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
];

export const serviceNavLinks = serviceDetails.map((service) => ({
  label: service.navLabel,
  href: `/services/${service.slug}`,
  description: service.navDescription,
}));

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;
  if (message) return `${base}?text=${encodeURIComponent(message)}`;
  return base;
}
