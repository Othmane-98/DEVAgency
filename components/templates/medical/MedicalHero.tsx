'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CalendarHeart, PhoneCall, ArrowRight } from 'lucide-react';

export function MedicalHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#F6FAFB] to-[#E7EFF1]">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl"
        >
          <div className="inline-flex flex-row items-center gap-2 px-4 py-2 rounded-full bg-[#D0E6ED]/50 text-[#00687B] text-sm font-semibold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00687B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00687B]"></span>
            </span>
            <span>Urgences 24/7 Disponibles</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2A3436] mb-6 leading-tight">
            Votre Santé,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00687B] to-[#40555B]">Notre Priorité Absolue.</span>
          </h1>

          <p className="text-[#566163] text-lg md:text-xl mb-10 leading-relaxed font-light">
            Une approche médicale intégrative alliant les dernières technologies de pointe à une écoute profondément humaine. Prenez le contrôle de votre bien-être.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#00687B] text-white rounded-xl font-medium shadow-[0_10px_30px_rgba(0,104,123,0.2)] flex items-center justify-center gap-3 hover:bg-[#005B6C] transition-colors"
            >
              <CalendarHeart className="w-5 h-5" />
              <span>Prendre un RDV en ligne</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-[#00687B] rounded-xl font-medium border border-[#D0E6ED] flex items-center justify-center gap-3 hover:bg-[#F6FAFB] transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              <span>01 23 45 67 89</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full h-[500px] md:h-[600px]"
        >
          {/* Main Image */}
          <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-[2rem] overflow-hidden shadow-2xl rounded-tr-none">
            <Image
              src="/medical/hero.png"
              alt="Médecin en consultation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#00687B]/20" />
          </div>

          {/* Floating Card (Glassmorphism) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-4 left-0 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_40px_rgba(42,52,54,0.08)] border border-white max-w-xs"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#F0F4F5] flex items-center justify-center text-[#00687B] font-bold text-xl">
                98%
              </div>
              <div>
                <h4 className="font-bold text-[#2A3436]">Satisfaction</h4>
                <p className="text-sm text-[#566163]">Patients guéris en 2023</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-b from-[#98E6FB]/20 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
