"use client";

import { motion } from "framer-motion";
import { TemplatesDemoSection } from "@/components/templates/TemplatesDemoSection";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Portfolio & Cas Pratiques
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">réalisations</span>.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Découvrez comment nous avons transformé la présence digitale de dizaines d&apos;entreprises grâce à des architectures robustes et un design sur-mesure.
          </p>
        </motion.div>
      </section>

      {/* Main Portfolio Templates */}
      <section className="mt-8">
        <TemplatesDemoSection />
      </section>

      {/* Statistics / Impact */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 p-12 rounded-[2rem] bg-card border border-border/50"
        >
           <div className="text-center">
             <div className="text-5xl font-bold text-primary mb-2">+40%</div>
             <div className="text-muted-foreground font-medium">Augmentation moyenne des conversions</div>
           </div>
           <div className="text-center border-t md:border-t-0 md:border-l border-border/50 pt-8 md:pt-0">
             <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
             <div className="text-muted-foreground font-medium">Uptime Garanti</div>
           </div>
           <div className="text-center border-t md:border-t-0 md:border-l border-border/50 pt-8 md:pt-0">
             <div className="text-5xl font-bold text-primary mb-2">100</div>
             <div className="text-muted-foreground font-medium">Score Mobile sur PageSpeed</div>
           </div>
        </motion.div>
      </section>

      {/* CTA section */}
      <section className="px-4 lg:px-8 max-w-5xl mx-auto mt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="rounded-3xl border border-primary/30 bg-primary/5 p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à rejoindre ces succès ?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
            Démarrer votre projet <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
