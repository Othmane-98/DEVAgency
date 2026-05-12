'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function TradingDashboard() {
  return (
    <section className="py-20 px-4 bg-[#0A1515]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Platform
          </h2>
          <p className="text-[#1FD9B6] text-lg">
            Everything you need in one dashboard
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-xl overflow-hidden border border-[#1FD9B6]/20 shadow-2xl"
        >
          <Image
            src="/trading/dashboard-preview.png"
            alt="Trading Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1515]/40 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
