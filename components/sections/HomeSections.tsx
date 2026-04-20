"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCards, stats, testimonials, pricingPlans, faqItems, features, trustedCompanies } from "@/content/site-content";
import { getWhatsAppLink } from "@/lib/site-config";

// --- Formats d'animation réutilisables ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Icon components
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function ShoppingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PlugIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6m0 8v6M5.636 5.636l4.243 4.243m4.242 4.242 4.243 4.243m-12.728 0 4.243-4.243m4.242-4.242 4.243-4.243" />
    </svg>
  );
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  users: UsersIcon,
  layers: LayersIcon,
  shopping: ShoppingIcon,
  zap: ZapIcon,
  shield: ShieldIcon,
  plug: PlugIcon,
  trending: TrendingIcon,
  chart: ChartIcon,
  headphones: HeadphonesIcon,
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-12 pt-24 md:pb-32 md:pt-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUpVariant} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <motion.span 
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ duration: 2, repeat: Infinity }} 
                className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" 
              />
              Nouveau: Integration IA disponible
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-7xl leading-[1.1]">
              La plateforme complète pour{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">digitaliser votre entreprise</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              CRM, ERP et E-commerce sur mesure. Deployez des solutions robustes, securisees et evolutives en quelques semaines.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                Demander une demo
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:border-accent shadow-sm"
              >
                Voir nos realisations
              </Link>
            </motion.div>
            
            <motion.p variants={fadeUpVariant} className="mt-6 text-sm text-muted-foreground">
              Plus de 80+ entreprises nous font confiance
            </motion.p>
          </motion.div>
          
          {/* Template Showcase — real images of our work */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Main browser mockup */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-primary/10"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border/50 bg-card/70 backdrop-blur-sm px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <div className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <div className="mx-3 flex h-6 flex-1 items-center gap-2 rounded-md bg-accent/40 px-3">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-1.5 w-32 rounded bg-muted-foreground/20" />
                </div>
              </div>
              {/* Real template image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src="/riad/hero.png"
                  alt="Aperçu template Riad"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold text-white">Riad Marocain — Template live</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — hotel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.75, type: "spring", stiffness: 120 }}
              className="absolute -right-8 top-6 w-36 overflow-hidden rounded-xl border border-border/60 shadow-2xl"
              style={{ pointerEvents: "none" }}
            >
              <div className="relative h-24">
                <Image src="/hotel/hero.png" alt="Hôtel template" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 px-2 py-1.5">
                  <p className="text-[10px] font-bold text-white leading-tight">Hôtel Boutique</p>
                  <p className="text-[9px] text-white/60">Hôtellerie</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — recycling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.95, type: "spring", stiffness: 120 }}
              className="absolute -left-8 bottom-14 w-36 overflow-hidden rounded-xl border border-border/60 shadow-2xl"
              style={{ pointerEvents: "none" }}
            >
              <div className="relative h-24">
                <Image src="/recycling/hero.png" alt="Recycling template" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 px-2 py-1.5">
                  <p className="text-[10px] font-bold text-white leading-tight">EcoPlast</p>
                  <p className="text-[9px] text-white/60">Environnement</p>
                </div>
              </div>
            </motion.div>

            {/* Success badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -bottom-5 right-10 rounded-xl border border-border/60 bg-card/85 backdrop-blur-md px-4 py-3 shadow-xl"
              style={{ pointerEvents: "none" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/20">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Déploiement réussi</p>
                  <p className="text-[10px] text-muted-foreground">à l&apos;instant</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="border-y border-border/50 bg-background/50 backdrop-blur-sm py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:col-span-3">
            {stats.map((stat, index) => (
              <motion.div variants={fadeUpVariant} key={stat.label} className="relative">
                {index > 0 && (
                  <div className="absolute -left-3 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
                )}
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Trusted By Logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t border-border/50 pt-8"
        >
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Ils nous font confiance
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            {trustedCompanies.map((company) => (
              <Image
                key={company.name}
                src={company.logo}
                alt={company.name}
                width={140}
                height={40}
                className="h-7 md:h-9 w-auto object-contain hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return null; // Merged into SocialProof
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 relative">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-widest uppercase text-primary">Fonctionnalités</motion.p>
          <motion.h2 variants={fadeUpVariant} className="mt-3 text-balance text-3xl font-bold text-foreground md:text-5xl">
            Tout ce dont vous avez besoin pour réussir
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="mt-4 text-pretty text-muted-foreground text-lg">
            Des outils puissants et intuitifs pour accélérer votre transformation digitale.
          </motion.p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || ZapIcon;
            return (
              <motion.div
                variants={fadeUpVariant}
                key={feature.title}
                className="group relative rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesPreviewSection() {
  return (
    <section className="bg-accent/20 py-16 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-widest uppercase text-primary">Solutions</motion.p>
            <motion.h2 variants={fadeUpVariant} className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
              Nos expertises
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="mt-3 max-w-2xl text-muted-foreground text-lg">
              Des solutions sur mesure adaptées à votre métier et vos objectifs.
            </motion.p>
          </div>
          <motion.div variants={fadeUpVariant}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors"
            >
              Voir toutes les solutions
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 md:grid-cols-3"
        >
          {serviceCards.map((service) => {
            const Icon = iconMap[service.icon] || ZapIcon;
            return (
              <motion.div variants={fadeUpVariant} key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-border/60 bg-gradient-to-b from-card to-background p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground flex-grow">{service.description}</p>
                  <ul className="mt-6 space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <CheckIcon className="h-5 w-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary border-t border-border/50 pt-6">
                    Découvrir ce service
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function InteractiveUISection() {
  return (
    <section className="py-16 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-widest uppercase text-primary">Collaboration</motion.p>
            <motion.h2 variants={fadeUpVariant} className="mt-3 text-balance text-4xl font-bold text-foreground md:text-5xl">
              Itération rapide. Innovation constante.
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              La plateforme pour un progrès rapide. Permettez à votre équipe de se concentrer sur les fonctionnalités plutôt que sur la gestion avec notre CI/CD automatisé et tests intégrés.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="mt-8 space-y-5">
              {[
                "Déploiement automatisé à chaque commit",
                "Tests end-to-end sécurisés",
                "Tableaux de bords en temps réel",
                "Architecture Serverless fiable",
              ].map((item) => (
                <motion.div variants={fadeUpVariant} key={item} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/30">
                    <CheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base font-medium text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeUpVariant}>
              <Link
                href="/processus"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground hover:bg-primary/10 transition-colors"
              >
                Découvrir notre processus
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Interactive UI Mock */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-border/80 bg-card p-2 md:p-6 shadow-2xl"
          >
            <div className="rounded-xl bg-accent/30 border border-border/40 p-6 backdrop-blur-md">
              <p className="mb-6 text-sm font-medium text-foreground">
                Recherche rapide.{" "}
                <span className="text-muted-foreground">
                  Filtrez les données de vos clients instantanément.
                </span>
              </p>
              
              {/* Mock Search/Filter UI */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/80 px-4 py-3 shadow-inner">
                  <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm text-muted-foreground font-mono">/recherche dashboard_metrics...</span>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <motion.div 
                      key={item}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 px-4 py-3 cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${item === 1 ? 'bg-green-500' : 'bg-primary'}`} />
                        <span className="text-sm font-medium text-foreground">
                          {item === 1 ? 'métriques_utilisateurs_actif' : item === 2 ? 'requête_API_stats' : 'rapport_chiffre_affaire'}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-accent">
                        {item === 1 ? '24ms' : '12ms'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="bg-accent/20 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUpVariant} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
             Transparence totale
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Tarifs et Formules
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="mt-4 text-pretty text-lg text-muted-foreground">
            Des plans adaptés à chaque étape de votre croissance.
          </motion.p>
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              variants={fadeUpVariant}
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-primary bg-card shadow-2xl shadow-primary/20 scale-105 z-10"
                  : "border border-border/80 bg-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
                    Recommandé
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
              
              <div className="mt-6 flex items-baseline gap-1 border-b border-border/50 pb-8">
                {plan.price === "Sur mesure" ? (
                  <span className="text-4xl font-bold text-foreground tracking-tight">{plan.price}</span>
                ) : (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}<span className="text-2xl">DH</span></span>
                    <span className="text-base font-medium text-muted-foreground">/mois</span>
                  </>
                )}
              </div>
              
              <ul className="mt-8 space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <CheckIcon className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground/90 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className={`mt-auto block w-full rounded-xl py-4 text-center text-sm font-bold tracking-wide uppercase transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] shadow-lg"
                    : "border-2 border-border bg-transparent text-foreground hover:border-foreground"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-widest uppercase text-primary">Témoignages</motion.p>
          <motion.h2 variants={fadeUpVariant} className="mt-3 text-balance text-4xl font-bold text-foreground md:text-5xl">
            Ils parlent de nous
          </motion.h2>
        </motion.div>
        
        {/* Testimonials Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              variants={fadeUpVariant}
              key={item.name}
              className="relative flex flex-col justify-between rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-8 transition-colors hover:bg-card hover:border-primary/30"
            >
              <div>
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-6 text-lg italic leading-relaxed text-muted-foreground">
                  &quot;{item.quote}&quot;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-amber-600 text-lg font-bold text-white shadow-inner">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-bold text-foreground">{item.name}</p>
                  <p className="text-sm font-medium text-primary">
                    {item.role} @ {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section className="bg-accent/10 py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-4xl font-bold text-foreground md:text-5xl">
            Questions fréquentes
          </h2>
        </motion.div>
        
        {/* FAQ Items */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="mt-16 space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              variants={fadeUpVariant}
              key={item.question}
              className="rounded-2xl border border-border/80 bg-card/50 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(curr => curr === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-accent/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-foreground pr-4">{item.question}</span>
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'bg-primary border-primary text-primary-foreground rotate-180' : 'border-border text-muted-foreground'}`}>
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="border-t border-border/50 px-6 py-5 text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1A1C1C] to-[#0A0A0A] border border-border/30 px-6 py-20 text-center md:px-16 md:py-24 shadow-2xl"
        >
          {/* Decorative background vectors */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Prêt à accélérer votre projet ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Parlons de vos objectifs et de votre feuille de route digitale. Obtenez une consultation gratuite avec nos experts en architecture logicielle.
            </p>
            
            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-xl shadow-primary/20"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 hover:border-white/40"
              >
                Formulaire email
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
