"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Découverte & Stratégie",
    desc: "Nous analysons en profondeur vos besoins, vos utilisateurs et vos objectifs métier pour définir une feuille de route technique claire.",
    icon: Search,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500"
  },
  {
    id: "02",
    title: "Design UX/UI Premium",
    desc: "Nos designers créent des interfaces intuitives, accessibles et visuellement époustouflantes, validées par des maquettes haute-fidélité (Figma).",
    icon: PenTool,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500"
  },
  {
    id: "03",
    title: "Développement Agile",
    desc: "Développement full-stack robuste avec Next.js, React et des bases de données évolutives. Nous livrons des itérations rapides chaque semaine.",
    icon: Code2,
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-500"
  },
  {
    id: "04",
    title: "Déploiement & Croissance",
    desc: "Mise en production sécurisée (CI/CD), optimisation SEO technique et accompagnement continu pour faire évoluer votre plateforme.",
    icon: Rocket,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500"
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 px-4 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Notre Méthode
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            De l&apos;idée à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">l&apos;impact</span>.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Un processus transparent et itératif, pensé pour réduire les risques et maximiser la qualité de chaque livrable.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 lg:px-8 max-w-5xl mx-auto mt-12 relative">
        {/* Vertical Line */}
        <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-border to-transparent -z-10" />

        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Node counter */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-background border-[8px] border-card shadow-xl z-10">
                  <span className="text-2xl font-bold font-mono text-primary">{step.id}</span>
                </div>

                {/* Content Card */}
                <div className={`ml-28 md:ml-0 md:w-1/2 p-8 md:p-12 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md hover:border-primary/50 transition-colors group`}>
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} ${step.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA section */}
      <section className="px-4 lg:px-8 max-w-5xl mx-auto mt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/30 bg-primary/5 p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer le cycle ?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Planifier une découverte <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
