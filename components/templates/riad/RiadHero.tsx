'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function RiadHero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/riad/hero-video.mp4"
        poster="/riad/hero.png"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />

      {/* Moroccan geometric top stripe */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C9A84C] via-[#8B1A1A] to-[#C9A84C] z-20" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-[#C9A84C] uppercase tracking-[0.4em] text-sm font-semibold">
            مرحباً بكم &nbsp;·&nbsp; Bienvenue
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Riad Dar <br />
          <span className="text-[#C9A84C] italic">Al Anouar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Au cœur de la médina de Marrakech, vivez une immersion dans l&apos;art de vivre marocain authentique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-[#C9A84C] text-[#1C1208] px-10 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#D4B96A] transition-colors">
            Réserver votre séjour
          </button>
          <button className="border border-white/50 text-white px-10 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
            Découvrir
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
