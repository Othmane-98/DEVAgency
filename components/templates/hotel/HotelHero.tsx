'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Users, ChevronDown } from 'lucide-react';

export function HotelHero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hotel/hero.png"
          alt="Luxury Hotel Pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.2em] text-[#F9F9F9] mb-4 text-sm font-medium">Boutique Hôtel 5 Étoiles</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
            Un Sanctuaire <br className="hidden md:block" /> d&apos;Élégance
          </h1>
        </motion.div>
      </div>

      {/* Booking Bar (Glassmorphism) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container relative z-20 mx-auto px-4 max-w-5xl"
      >
        <div className="bg-white/70 backdrop-blur-[20px] rounded-none md:rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(26,28,28,0.08)] border border-white/50">
          <form className="flex flex-col md:flex-row gap-4 items-end">
            
            {/* Arrivée */}
            <div className="flex-1 w-full">
              <label className="block text-xs uppercase tracking-widest text-[#444748] font-bold mb-2">Arrivée</label>
              <div className="relative border-b border-[#C4C7C7] hover:border-[#1A1C1C] transition-colors pb-2">
                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 text-[#775A19] w-5 h-5" />
                <input 
                  type="date" 
                  className="w-full bg-transparent text-[#1A1C1C] focus:outline-none pl-8 pr-2 font-mono text-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Départ */}
            <div className="flex-1 w-full">
              <label className="block text-xs uppercase tracking-widest text-[#444748] font-bold mb-2">Départ</label>
              <div className="relative border-b border-[#C4C7C7] hover:border-[#1A1C1C] transition-colors pb-2">
                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 text-[#775A19] w-5 h-5" />
                <input 
                  type="date" 
                  className="w-full bg-transparent text-[#1A1C1C] focus:outline-none pl-8 pr-2 font-mono text-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Voyaguers */}
            <div className="flex-1 w-full relative">
              <label className="block text-xs uppercase tracking-widest text-[#444748] font-bold mb-2">Voyageurs</label>
              <div className="relative border-b border-[#C4C7C7] hover:border-[#1A1C1C] transition-colors pb-2 group cursor-pointer">
                <Users className="absolute left-0 top-1/2 -translate-y-1/2 text-[#775A19] w-5 h-5" />
                <div className="pl-8 pr-6 text-lg text-[#1A1C1C]">2 Adultes</div>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1A1C1C] w-4 h-4 transition-transform group-hover:rotate-180" />
              </div>
            </div>

            {/* Action */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <button 
                type="button" 
                className="w-full bg-[#000000] text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#1C1B1B] transition-colors rounded-sm"
              >
                Vérifier
              </button>
            </div>

          </form>
        </div>
      </motion.div>
    </section>
  );
}
