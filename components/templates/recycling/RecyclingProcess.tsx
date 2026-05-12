'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Collecte',
    description:
      'Nos camions collectent les déchets plastiques auprès des municipalités, entreprises et points de collecte partenaires sur tout le territoire.',
    image: '/recycling/process-collect.png',
    tag: 'Logistique terrain',
  },
  {
    number: '02',
    title: 'Tri & Analyse',
    description:
      'Chaque lot est trié par type de résine et couleur grâce à nos lignes automatisées équipées de capteurs infrarouges et de vision par ordinateur.',
    image: '/recycling/process-sort.png',
    tag: 'Technologie IA',
  },
  {
    number: '03',
    title: 'Transformation',
    description:
      'Le plastique trié est broyé, lavé puis extrudé en granulés de haute qualité, prêts à être réutilisés comme matière première secondaire.',
    image: '/recycling/process-transform.png',
    tag: 'Extrusion industrielle',
  },
  {
    number: '04',
    title: 'Valorisation',
    description:
      'Les granulés recyclés sont livrés à nos clients industriels pour fabriquer de nouveaux produits — emballages, mobilier, pièces techniques.',
    image: '/recycling/process-deliver.png',
    tag: 'Distribution B2B',
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-0 items-stretch min-h-[480px] ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}
    >
      {/* Image panel */}
      <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Clip-path reveal */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: '#F0F7F4' }}
          initial={{ clipPath: isEven ? 'inset(0 0 0 0)' : 'inset(0 0 0 0)' }}
          whileInView={{ clipPath: isEven ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        />

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
          className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: 'rgba(27,67,50,0.75)', color: '#95D5B2', backdropFilter: 'blur(8px)' }}
        >
          {step.tag}
        </motion.div>
      </div>

      {/* Text panel */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 py-14"
        style={{ backgroundColor: '#F0F7F4' }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.3 }}
          className="text-[6rem] font-black leading-none select-none mb-2 tracking-tighter"
          style={{ color: 'rgba(27,67,50,0.10)' }}
        >
          {step.number}
        </motion.span>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="h-0.5 w-12 mb-6"
          style={{ backgroundColor: '#F4A261', originX: 0 }}
        />

        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.4 }}
          className="text-3xl md:text-4xl font-black tracking-tight mb-5"
          style={{ color: '#0D1F17' }}
        >
          {step.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
          className="text-base leading-relaxed max-w-[52ch]"
          style={{ color: '#264653' }}
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function RecyclingProcess() {
  return (
    <section id="process" className="overflow-hidden" style={{ backgroundColor: '#F0F7F4' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 70, damping: 18 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ backgroundColor: '#1B4332', display: 'inline-block' }} />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold" style={{ color: '#1B4332' }}>
                Notre Processus
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: '#0D1F17' }}>
              De la collecte<br />
              <span style={{ color: '#1B4332' }}>à la valorisation.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.15 }}
            className="text-base leading-relaxed pb-2"
            style={{ color: '#264653' }}
          >
            Un cycle vertueux entièrement maîtrisé en quatre étapes —
            de la collecte jusqu&apos;à la livraison de matière recyclée certifiée.
          </motion.p>
        </div>
      </div>

      {/* Steps — full-bleed alternating panels */}
      <div>
        {steps.map((step, index) => (
          <ProcessStep key={step.number} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
