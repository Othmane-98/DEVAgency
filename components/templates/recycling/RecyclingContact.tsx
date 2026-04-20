'use client';

import { motion } from 'framer-motion';
import { Truck, BarChart3, Handshake } from 'lucide-react';

const services = [
  {
    Icon: Truck,
    label: 'Collecte',
    desc: 'Nous venons chercher vos déchets plastiques directement sur site, partout en France.',
  },
  {
    Icon: Handshake,
    label: 'Partenariat B2B',
    desc: 'Approvisionnez votre production en granulés recyclés certifiés de haute qualité.',
  },
  {
    Icon: BarChart3,
    label: 'Audit gratuit',
    desc: 'Diagnostic complet de vos flux plastiques et plan de valorisation sans engagement.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18 },
  },
};

export function RecyclingContact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28" style={{ backgroundColor: '#0D1F17' }}>
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-t"
            style={{
              borderColor: 'rgba(149,213,178,0.04)',
              width: '100%',
              top: `${(i + 1) * (100 / 7)}%`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-l h-full"
            style={{
              borderColor: 'rgba(149,213,178,0.04)',
              left: `${(i + 1) * (100 / 9)}%`,
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(27,67,50,0.6) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 70, damping: 18 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 inline-block" style={{ backgroundColor: '#95D5B2' }} />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold" style={{ color: '#95D5B2' }}>
                Partenariat
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-8">
              Rejoignez<br />
              le mouvement<span style={{ color: '#F4A261' }}>.</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-[45ch]">
              Vous produisez des déchets plastiques ? Vous cherchez des matières
              recyclées certifiées ? Construisons ensemble l&apos;économie circulaire
              de demain.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:contact@ecoplast.fr"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm"
                style={{ backgroundColor: '#F4A261', color: '#0D1F17' }}
              >
                Demander un audit gratuit
              </motion.a>
              <motion.a
                href="tel:+33147382910"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm border text-white"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                +33 1 47 38 29 10
              </motion.a>
            </div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 70 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#1B4332', '#264653', '#F4A261'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0D1F17]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-xs text-white/40">
                217 entreprises partenaires font déjà confiance à EcoPlast
              </span>
            </motion.div>
          </motion.div>

          {/* Right — service cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-4 md:pt-10"
          >
            {services.map(({ Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={cardVariants}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group flex gap-5 p-6 rounded-2xl border transition-colors duration-300 cursor-default"
                style={{
                  borderColor: 'rgba(149,213,178,0.1)',
                  backgroundColor: 'rgba(27,67,50,0.25)',
                }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(149,213,178,0.12)' }}
                >
                  <Icon size={20} style={{ color: '#95D5B2' }} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Certification badge */}
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-2xl border mt-2"
              style={{ borderColor: 'rgba(244,162,97,0.2)', backgroundColor: 'rgba(244,162,97,0.05)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-black text-xs"
                  style={{ backgroundColor: 'rgba(244,162,97,0.2)', color: '#F4A261' }}
                >
                  ISO
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#F4A261' }}>
                    Certifié ISO 14001
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Système de management environnemental audité chaque année depuis 2017.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
