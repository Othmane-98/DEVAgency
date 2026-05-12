"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface Template {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  href: string;
  year: string;
}

const templates: Template[] = [
  {
    id: "restaurant",
    title: "Restaurant Gastronomique",
    subtitle: "Menu digital, réservations & galerie immersive",
    category: "Restauration",
    image: "/restaurant/gallery-wine.png",
    href: "/templates/restaurant",
    year: "2024",
  },
  {
    id: "hotel",
    title: "Hôtel Boutique Luxe",
    subtitle: "Réservation temps réel, suites & spa",
    category: "Hôtellerie",
    image: "/hotel/hero.png",
    href: "/templates/hotel",
    year: "2024",
  },
  {
    id: "riad",
    title: "Riad Traditionnel Marocain",
    subtitle: "Hammam, spa & expériences culturelles authentiques",
    category: "Tourisme & Culture",
    image: "/riad/hero.png",
    href: "/templates/riad",
    year: "2024",
  },
  {
    id: "medical",
    title: "Clinique Médicale",
    subtitle: "Prise de rendez-vous en ligne & présentation médecins",
    category: "Santé",
    image: "/medical/hero.png",
    href: "/templates/medical",
    year: "2024",
  },
  {
    id: "recycling",
    title: "EcoPlast Recyclage",
    subtitle: "Impact environnemental, processus & B2B",
    category: "Environnement",
    image: "/recycling/hero.png",
    href: "/templates/recycling",
    year: "2024",
  },
];

interface CardProps {
  template: Template;
  index: number;
  className?: string;
}

function PortfolioCard({ template, index, className = "" }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image layer */}
      <Image
        src={template.image}
        alt={template.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        className={`object-cover transition-transform duration-[800ms] ease-out will-change-transform ${
          hovered ? "scale-[1.07]" : "scale-[1.02]"
        }`}
        priority={index === 0}
      />

      {/* Permanent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover tint */}
      <motion.div
        className="absolute inset-0 bg-black/20"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Sheen on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top: badge + index */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
            {template.category}
          </span>
          <span className="text-[11px] font-medium text-white/40 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom: title + cta */}
        <div>
          <motion.p
            className="mb-1.5 text-xs text-white/55"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.3 }}
          >
            {template.subtitle}
          </motion.p>

          <h3 className="text-lg font-bold leading-snug text-white">
            {template.title}
          </h3>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.04 }}
            className="mt-4"
          >
            <Link
              href={template.href}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-black transition-all hover:bg-white/90 active:scale-95"
            >
              Voir le site
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export function PortfolioPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 px-4 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]"
      />

      {/* Top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2.5"
            >
              <span className="text-primary text-xs font-bold tracking-[0.22em] uppercase">
                Portfolio
              </span>
              <span className="flex items-center justify-center rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-bold text-primary">
                5 créations
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.6rem] leading-[1.08]"
            >
              Des sites qui{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                marquent les esprits
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="max-w-[260px] shrink-0 text-sm leading-relaxed text-muted-foreground md:text-right"
          >
            Chaque site est conçu sur-mesure pour son secteur — design, performance et conversion.
          </motion.p>
        </div>

        {/* ── Grid Row 1: featured (2 cols) + hotel ── */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="h-[440px] md:col-span-2">
            <PortfolioCard
              template={templates[0]}
              index={0}
              className="h-full w-full"
            />
          </div>
          <div className="h-[440px]">
            <PortfolioCard
              template={templates[1]}
              index={1}
              className="h-full w-full"
            />
          </div>
        </div>

        {/* ── Grid Row 2: 3 equal cards ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {templates.slice(2).map((template, i) => (
            <div key={template.id} className="h-[300px]">
              <PortfolioCard
                template={template}
                index={i + 2}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>

        {/* ── Discover CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <Link
            href="/realisations"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-9 py-4 text-sm font-semibold text-background shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-100"
          >
            {/* Shimmer on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Découvrir toutes nos réalisations</span>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-background/15 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground">
            Restauration · Hôtellerie · Santé · Tourisme · Environnement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
