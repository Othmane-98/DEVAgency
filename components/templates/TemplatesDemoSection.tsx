"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TemplateDemoCard } from "./TemplateDemoCard";
import { demoTemplates } from "@/content/demo-templates";

const categories = [
  { id: "all", label: "Tous" },
  { id: "restaurant", label: "Restaurant" },
  { id: "hotel", label: "Hôtel" },
  { id: "medical", label: "Médical" },
  { id: "riad", label: "Riad" },
  { id: "recycling", label: "Recyclage" },
  { id: "trading", label: "Trading" },
  { id: "crm", label: "CRM" },
];

export function TemplatesDemoSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? demoTemplates
      : demoTemplates.filter((t) => t.category === activeCategory);

  return (
    <section className="px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background text-muted-foreground hover:bg-accent"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template, i) => (
          <TemplateDemoCard key={template.id} template={template} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
