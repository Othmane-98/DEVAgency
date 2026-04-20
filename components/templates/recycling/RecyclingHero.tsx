'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const marqueeItems = [
  '48 000 tonnes recyclées / an',
  '72% de CO₂ économisé',
  '200+ partenaires industriels',
  '12 ans d\'expertise',
  'Certifié ISO 14001',
  '48 000 tonnes recyclées / an',
  '72% de CO₂ économisé',
  '200+ partenaires industriels',
  '12 ans d\'expertise',
  'Certifié ISO 14001',
];

const wordVariants = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 18,
      delay: 0.4 + i * 0.08,
    },
  }),
};

const headline1 = ['Transformer', 'le', 'plastique'];
const headline2 = ['en', 'ressource.'];

function FloatingOrb({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function RecyclingHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/recycling/hero-video.mp4"
        poster="/recycling/hero.png"
      />

      {/* Gradient overlays — heavier on left so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Ambient orbs */}
      <FloatingOrb
        className="w-96 h-96 bg-emerald-700/20 top-20 left-20"
        delay={0}
      />
      <FloatingOrb
        className="w-64 h-64 bg-amber-500/15 bottom-40 right-32"
        delay={3}
      />

      {/* Main content — left-aligned */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-40 max-w-5xl"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.span
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="inline-block h-px w-12"
            style={{ backgroundColor: '#95D5B2', originX: 0 }}
          />
          <span
            className="text-xs uppercase tracking-[0.35em] font-semibold"
            style={{ color: '#95D5B2' }}
          >
            Économie circulaire
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <h1 className="overflow-hidden">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
            {headline1.map((word, i) => (
              <motion.span
                key={word + i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4">
            {headline2.map((word, i) => (
              <motion.span
                key={word + i}
                custom={headline1.length + i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
                style={{
                  color: i === 1 ? '#F4A261' : 'white',
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 1 }}
          className="mt-8 text-base md:text-lg text-white/65 max-w-md leading-relaxed"
        >
          Nous collectons, trions et valorisons les déchets plastiques
          pour construire un avenir plus propre — une bouteille à la fois.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#process"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm"
            style={{ backgroundColor: '#1B4332' }}
          >
            Découvrir notre processus
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/30 text-white backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(244,162,97,0.15)' }}
          >
            Nous contacter
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-16 lg:left-24 z-10 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
        <span className="text-white/40 text-xs uppercase tracking-widest">Défiler</span>
      </motion.div>

      {/* Bottom marquee strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden py-3 border-t"
        style={{ backgroundColor: 'rgba(27,67,50,0.6)', borderColor: 'rgba(149,213,178,0.15)', backdropFilter: 'blur(12px)' }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className="text-xs uppercase tracking-widest font-medium flex items-center gap-4"
              style={{ color: '#95D5B2' }}>
              {item}
              <span className="inline-block w-1 h-1 rounded-full bg-current opacity-50" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
