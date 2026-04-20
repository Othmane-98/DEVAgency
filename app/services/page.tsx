"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  Cpu,
  MonitorSmartphone,
  PlugZap,
  Search,
  ShieldCheck,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { allServiceCards } from "@/content/services";

// Map available icons for services
const iconMap: Record<string, any> = {
  users: Users,
  shopping: ShoppingCart,
  shoppingCart: ShoppingCart,
  zap: Zap,
  layers: Cpu,
  cpu: Cpu,
  monitor: MonitorSmartphone,
  plug: PlugZap,
  shield: ShieldCheck,
  search: Search
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px] -z-10" />

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Nos Solutions
          </motion.div>
          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            L&apos;arsenal digital pour votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">croissance</span>.
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Des architectures logicielles sur mesure, conçues pour optimiser vos processus, fidéliser vos clients et propulser vos ventes.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto mt-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-16"
        >
          {allServiceCards.map((service, index) => {
            const Icon = iconMap[service.icon] || Zap;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={service.slug}
                variants={fadeUpVariant}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center p-8 lg:p-12 rounded-3xl border border-border/50 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-colors group relative overflow-hidden`}
              >
                {/* Decorative Blob */}
                <div className={`absolute ${isEven ? '-right-20' : '-left-20'} top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors duration-700`} />

                <div className="flex-1 space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/10">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 pt-4">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors group-hover:scale-[1.02]"
                    >
                      Détails de l&apos;offre
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="relative flex flex-1 w-full items-center justify-center rounded-2xl border border-border/40 bg-accent/30 p-6 shadow-inner aspect-video lg:p-12">
                  {/* Abstract Representation of the service */}
                  <div className="w-full h-full bg-background/50 backdrop-blur-md rounded-xl border border-border flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <Icon className="h-32 w-32 text-primary/20 absolute" />
                    <div className="z-10 bg-card/90 px-6 py-4 rounded-lg shadow-xl border border-border backdrop-blur-lg transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                      <p className="font-mono text-sm text-primary">Status: Operational</p>
                      <h3 className="font-bold text-lg mt-1">{service.title} Active</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Process CTA section */}
      <section className="px-4 lg:px-8 max-w-7xl mx-auto mt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] bg-gradient-to-tr from-[#1A1C1C] to-background border border-border p-12 lg:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent -z-10" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comment nous travaillons ?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Découvrez notre méthodologie rigoureuse, de la conception à la mise en production, garantissant le succès de votre projet technologique.
          </p>
          <Link href="/processus" className="inline-flex items-center gap-2 bg-foreground text-background border border-border px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-background hover:text-foreground hover:border-foreground transition-all shadow-xl">
            Voir Notre Processus
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
