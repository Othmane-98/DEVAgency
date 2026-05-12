'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Utensils } from 'lucide-react';

export function RestaurantHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop"
          alt="Restaurant Ambiance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-black/60" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="flex flex-col items-center"
        >
          <div className="mb-6 flex space-x-2 items-center text-[#C5A059]">
             <Utensils size={20} />
             <span className="uppercase tracking-[0.3em] text-sm font-semibold">Haute Gastronomie</span>
             <Utensils size={20} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-[#F9F9F9] mb-6 tracking-tight">
            L&apos;Élégance de <br />
            <span className="italic text-[#C5A059]">la Réserve</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-[#E5D1B0] mb-10 font-light">
            Une expérience culinaire immersive où chaque plat raconte une histoire de passion, de terroir et de créativité absolue.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a 
              href="#reservations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#C5A059] text-[#121212] font-semibold tracking-wide rounded-none flex items-center justify-center space-x-3 hover:bg-[#D4AF68] transition-colors"
            >
              <span>Réserver une table</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-[#C5A059] text-[#C5A059] font-semibold tracking-wide rounded-none hover:bg-[#C5A059]/10 transition-colors backdrop-blur-sm"
            >
              Découvrir la Carte
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#F9F9F9]/50"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-light">Défiler</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </motion.div>
    </section>
  );
}
