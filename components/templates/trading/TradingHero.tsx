'use client';
import { motion } from 'framer-motion';

export function TradingHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/trading/hero-video.mp4"
        poster="/trading/hero.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Professional Trading<br />
          <span className="text-[#1FD9B6]">Redefined</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Lightning-fast execution, institutional-grade tools, and transparent fees. Trade with confidence.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="px-8 py-4 bg-[#1FD9B6] text-[#0F2A2A] font-bold rounded-lg hover:bg-[#1AC99F] transition-colors duration-300"
        >
          Start Trading Today
        </motion.button>
      </div>
    </section>
  );
}
