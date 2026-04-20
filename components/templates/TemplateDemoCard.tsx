"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DemoTemplate } from "@/content/demo-templates";

type Props = {
  template: DemoTemplate;
  index: number;
};


function MockBrowserChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      <div className="ml-3 h-5 flex-1 max-w-[55%] rounded bg-white/10" />
    </div>
  );
}

import Image from "next/image";

function MockPageContent({ category }: { category: DemoTemplate["category"] }) {
  if (category === "crm") {
    return (
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-10 bg-[#0F1520] flex flex-col items-center py-2 gap-1.5 flex-shrink-0">
          <div className="h-5 w-5 rounded bg-blue-500 mb-1" />
          {["bg-blue-500/80", "bg-white/20", "bg-white/15", "bg-white/15", "bg-white/10"].map((cls, i) => (
            <div key={i} className={`h-4 w-7 rounded-sm ${cls}`} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 bg-[#111827] p-2 flex flex-col gap-1.5 overflow-hidden">
          {/* KPI cards row */}
          <div className="grid grid-cols-4 gap-1">
            {[
              { v: "2.8M", c: "text-blue-400", bg: "bg-blue-500/20 border-blue-500/30" },
              { v: "142", c: "text-emerald-400", bg: "bg-emerald-500/20 border-emerald-500/30" },
              { v: "384", c: "text-violet-400", bg: "bg-violet-500/20 border-violet-500/30" },
              { v: "34%", c: "text-amber-400", bg: "bg-amber-500/20 border-amber-500/30" },
            ].map(({ v, c, bg }, i) => (
              <div key={i} className={`rounded-md border p-1 ${bg}`}>
                <div className={`text-[8px] font-black leading-none ${c}`}>{v}</div>
                <div className="h-0.5 w-3/4 mt-1 rounded-full bg-current opacity-30" />
              </div>
            ))}
          </div>
          {/* Chart bar */}
          <div className="flex items-end gap-0.5 h-8 px-1 bg-[#0F1520] rounded-md">
            {[40, 55, 48, 65, 70, 58, 75, 62, 80, 90, 78, 95].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${i === 11 ? "bg-blue-500" : i % 3 === 0 ? "bg-emerald-500/60" : "bg-blue-500/35"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          {/* Pipeline kanban */}
          <div className="grid grid-cols-4 gap-1 flex-1">
            {[
              { label: "Lead", col: "border-slate-500/60", card: "bg-slate-700/60" },
              { label: "Devis", col: "border-blue-500/60", card: "bg-blue-900/50" },
              { label: "Négo", col: "border-amber-500/60", card: "bg-amber-900/40" },
              { label: "Gagné", col: "border-emerald-500/60", card: "bg-emerald-900/50" },
            ].map(({ label, col, card }, i) => (
              <div key={i} className={`flex flex-col gap-0.5 rounded-sm border-t-2 bg-white/5 p-1 ${col}`}>
                <div className={`rounded-sm p-0.5 ${card}`}>
                  <div className="h-1 w-4/5 rounded-full bg-white/40" />
                  <div className="h-1 w-3/5 rounded-full bg-white/20 mt-0.5" />
                </div>
                {i < 3 && (
                  <div className={`rounded-sm p-0.5 ${card}`}>
                    <div className="h-1 w-full rounded-full bg-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const images = {
    restaurant: {
      hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      img1: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300",
      img2: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=300",
      heroTitleWidth: "w-24",
      heroSubWidth: "w-32",
    },
    hotel: {
      hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      img1: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=300",
      img2: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=300",
      heroTitleWidth: "w-32",
      heroSubWidth: "w-40",
    },
    medical: {
      hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      img1: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
      img2: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      heroTitleWidth: "w-28",
      heroSubWidth: "w-36",
    },
    riad: {
      hero: "/riad/hero.png",
      img1: "/riad/hammam.png",
      img2: "/riad/spa.png",
      heroTitleWidth: "w-28",
      heroSubWidth: "w-40",
    },
    recycling: {
      hero: "/recycling/hero.png",
      img1: "/recycling/gallery-1.png",
      img2: "/recycling/gallery-2.png",
      heroTitleWidth: "w-28",
      heroSubWidth: "w-40",
    },
    trading: {
      hero: "/trading/hero.png",
      img1: "/trading/feature-data.png",
      img2: "/trading/dashboard-preview.png",
      heroTitleWidth: "w-32",
      heroSubWidth: "w-40",
    },
  };

  const data = images[category];

  return (
    <div className="relative flex flex-1 flex-col p-4">
      {/* Header mock */}
      <div className="flex items-center justify-between gap-2 z-10 mb-3">
        <div className="h-4 w-16 rounded-md bg-white/20 backdrop-blur-md" />
        <div className="flex gap-1.5">
          <div className="h-3 w-6 rounded-sm bg-white/10" />
          <div className="h-3 w-6 rounded-sm bg-white/10" />
          <div className="h-3 w-8 rounded-sm bg-white/20" />
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative h-28 w-full overflow-hidden rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg group/hero">
        <Image 
          src={data.hero} 
          alt={`${category} hero`} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/hero:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover/hero:bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 z-10">
          <div className={`h-3.5 ${data.heroTitleWidth} rounded-md bg-white/90 shadow-sm`} />
          <div className={`h-2 ${data.heroSubWidth} rounded bg-white/70 shadow-sm`} />
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="mt-3 grid grid-cols-2 gap-3 pb-2">
        <div className="relative h-20 overflow-hidden rounded-lg shadow-sm group/card transition-shadow hover:shadow-md">
          <Image 
            src={data.img1} 
            alt={`${category} feature 1`} 
            fill 
            sizes="(max-width: 768px) 50vw, 16vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover/card:opacity-90" />
          <div className="absolute bottom-2 left-2 flex flex-col gap-1 z-10">
            <div className="h-2 w-14 rounded bg-white/90" />
            <div className="h-1.5 w-10 rounded bg-white/60" />
          </div>
        </div>
        <div className="relative h-20 overflow-hidden rounded-lg shadow-sm group/card transition-shadow hover:shadow-md">
          <Image 
            src={data.img2} 
            alt={`${category} feature 2`} 
            fill 
            sizes="(max-width: 768px) 50vw, 16vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover/card:opacity-90" />
          <div className="absolute bottom-2 left-2 flex flex-col gap-1 z-10">
             <div className="h-2 w-16 rounded bg-white/90" />
             <div className="h-1.5 w-12 rounded bg-white/60" />
          </div>
        </div>
      </div>
      
      {/* Floating Elements Mock */}
      {category === "hotel" ? (
        <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full border border-amber-400/40 bg-amber-400/20 shadow-lg backdrop-blur-md z-20" />
      ) : null}
      {category === "medical" ? (
        <div className="absolute right-5 top-[4.5rem] h-11 w-11 rounded-full border-2 border-white/40 bg-white/10 shadow-lg backdrop-blur-md z-20 flex justify-center items-center">
           <div className="h-4 w-4 rounded-full bg-white/20" />
        </div>
      ) : null}
    </div>
  );
}

export function TemplateDemoCard({ template, index }: Props) {
  const contactHref = `/contact?template=${encodeURIComponent(template.id)}`;
  const previewHref = `/templates/${template.category}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] } }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${template.previewClassName} ${template.patternClassName ?? ""}`}
        />
        <div className="absolute inset-0 flex flex-col bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        <div className="relative flex h-full flex-col text-white">
          <MockBrowserChrome />
          <MockPageContent category={template.category} />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{template.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {template.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href={previewHref}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Aperçu live
          </Link>
          <Link
            href={contactHref}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Utiliser ce modèle
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
