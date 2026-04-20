'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('fr-FR')}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 48000,
    suffix: ' t',
    label: 'Plastique recyclé',
    sub: 'par an',
    color: '#95D5B2',
  },
  {
    value: 72,
    suffix: '%',
    label: 'Réduction CO₂',
    sub: 'vs production vierge',
    color: '#F4A261',
  },
  {
    value: 217,
    suffix: '+',
    label: 'Partenaires',
    sub: 'entreprises et collectivités',
    color: '#95D5B2',
  },
  {
    value: 12,
    suffix: ' ans',
    label: 'D\'expertise',
    sub: 'dans le recyclage industriel',
    color: '#F4A261',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18 },
  },
};

export function RecyclingImpact() {
  return (
    <section className="relative overflow-hidden py-28" style={{ backgroundColor: '#0D1F17' }}>
      {/* Background image very subtle */}
      <div className="absolute inset-0">
        <Image
          src="/recycling/impact-bg.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0D1F17 0%, transparent 40%, #0D1F17 100%)' }} />
      </div>

      {/* Animated background ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(149,213,178,0.06)', width: 700, height: 700 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(149,213,178,0.04)', width: 1000, height: 1000 }}
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Asymmetric header: left text, right nothing (breathes) */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 70, damping: 18 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 inline-block" style={{ backgroundColor: '#95D5B2' }} />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold" style={{ color: '#95D5B2' }}>
                Notre Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Des chiffres<br />
              <span style={{ color: '#95D5B2' }}>qui parlent.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.15 }}
            className="text-white/50 text-base md:text-lg leading-relaxed md:self-end pb-2"
          >
            Chaque tonne de plastique recyclée représente une victoire concrète
            pour l&apos;environnement. Voici notre bilan depuis 2013.
          </motion.p>
        </div>

        {/* Stats grid — 4 items with divider lines */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="px-6 md:px-10 first:pl-0 last:pr-0 py-4"
            >
              <div
                className="text-4xl md:text-5xl font-black tracking-tighter font-mono"
                style={{ color: stat.color }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 font-semibold text-white text-sm">{stat.label}</p>
              <p className="mt-1 text-white/40 text-xs">{stat.sub}</p>

              {/* Animated progress line */}
              <div className="mt-4 h-px w-full bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: stat.color, originX: 0 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
