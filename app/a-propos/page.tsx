"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-amber-500/5 rounded-full blur-[100px] -z-10" />

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="md:w-1/2"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Notre Histoire
          </motion.div>
          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            L&apos;agence qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">transforme</span> vos idées.
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Depuis plus de 8 ans, NexaFlow accompagne les PME et ETI dans leur transformation digitale avec une approche orientée impact métier, rigueur technologique et design d&apos;exception.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 1 }}
          className="md:w-1/2 relative"
        >
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Notre équipe au travail"
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto mt-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold mb-12 text-center">Nos valeurs fondatrices</motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Transparence", desc: "Une communication claire, sans jargon, et une honnêteté totale sur les coûts et les délais." },
              { title: "Rigueur", desc: "Un code propre, des tests automatisés et une architecture pensée pour durer." },
              { title: "Haut de Gamme", desc: "Le souci du détail dans chaque pixel et chaque interaction utilisateur." },
              { title: "Partenariat", desc: "Nous ne sommes pas que des prestataires, mais de véritables partenaires technologiques." },
              { title: "Innovation", desc: "Veille continue pour intégrer les meilleures technologies (Next.js, IA, Framer) à vos projets." },
              { title: "Impact", desc: "Chaque fonctionnalité développée doit servir un objectif métier mesurable." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                variants={fadeUpVariant}
                className="p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-colors group"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 text-xl font-bold font-mono group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 lg:px-8 max-w-5xl mx-auto mt-32">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="rounded-3xl bg-gradient-to-br from-primary/20 to-background border border-primary/30 p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faisons équipe</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de votre vision et voyons comment notre expertise peut accélérer votre croissance digitale.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
            Nous Contacter <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
