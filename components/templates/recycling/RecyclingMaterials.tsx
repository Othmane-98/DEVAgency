'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const materials = [
  {
    code: 'PET',
    number: '01',
    name: 'Polyéthylène téréphtalate',
    description:
      'Bouteilles d\'eau et de boissons, flacons de cosmétiques. Très haute valeur de recyclage — transformé en fibres textiles ou nouvelles bouteilles alimentaires.',
    image: '/recycling/material-pet.png',
    uses: ['Bouteilles', 'Fibres textiles', 'Emballages alimentaires'],
    recyclabilityRate: 89,
  },
  {
    code: 'HDPE',
    number: '02',
    name: 'Polyéthylène haute densité',
    description:
      'Bidons de lessive, flacons de shampoing, réservoirs. Résistant et stable, idéal pour les produits de nettoyage et les tuyauteries industrielles.',
    image: '/recycling/material-hdpe.png',
    uses: ['Tuyaux', 'Mobilier urbain', 'Conteneurs'],
    recyclabilityRate: 94,
  },
  {
    code: 'PP',
    number: '03',
    name: 'Polypropylène',
    description:
      'Pots de yaourt, bouchons, boîtes alimentaires. Résistant à la chaleur, transformé en pièces automobiles et objets du quotidien durables.',
    image: '/recycling/material-pp.png',
    uses: ['Pièces auto', 'Emballages', 'Appareils ménagers'],
    recyclabilityRate: 76,
  },
];

function MaterialCard({
  material,
  isLarge,
  index,
}: {
  material: (typeof materials)[0];
  isLarge: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
        isLarge ? 'md:row-span-2' : ''
      }`}
      style={{ backgroundColor: '#1B4332' }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isLarge ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="absolute inset-0"
        >
          <Image
            src={material.image}
            alt={material.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-transparent to-transparent" />

        {/* Code badge */}
        <div className="absolute top-5 left-5 flex items-baseline gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#95D5B2', opacity: 0.7 }}>
            {material.number}
          </span>
        </div>

        {/* Hover arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#F4A261' }}
        >
          <ArrowUpRight size={16} className="text-[#0D1F17]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-end justify-between mb-3">
          <h3 className="text-3xl font-black text-white tracking-tight">{material.code}</h3>
          <span className="text-xs font-bold font-mono tabular-nums" style={{ color: '#F4A261' }}>
            {material.recyclabilityRate}%
          </span>
        </div>

        <p className="text-xs mb-3 font-medium" style={{ color: '#95D5B2' }}>{material.name}</p>

        {/* Recyclability bar */}
        <div className="h-0.5 w-full rounded-full mb-5" style={{ backgroundColor: 'rgba(149,213,178,0.15)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: '#95D5B2', originX: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: material.recyclabilityRate / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Description — reveals on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="text-white/60 text-sm leading-relaxed mb-4 overflow-hidden"
            >
              {material.description}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {material.uses.map((use) => (
            <span
              key={use}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ backgroundColor: 'rgba(149,213,178,0.1)', color: '#95D5B2' }}
            >
              {use}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function RecyclingMaterials() {
  return (
    <section className="py-24" style={{ backgroundColor: '#0D1F17' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Asymmetric header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 70, damping: 18 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 inline-block" style={{ backgroundColor: '#95D5B2' }} />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold" style={{ color: '#95D5B2' }}>
                Matériaux
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Les plastiques<br />
              <span style={{ color: '#95D5B2' }}>que nous traitons.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.15 }}
            className="text-white/50 text-base leading-relaxed max-w-xs pb-2"
          >
            Passez la souris sur chaque carte pour en savoir plus sur chaque résine.
          </motion.p>
        </div>

        {/* Asymmetric grid: 2-col, first item spans 2 rows */}
        <div className="grid md:grid-cols-[1fr_1fr] md:grid-rows-2 gap-5">
          <MaterialCard material={materials[0]} isLarge index={0} />
          <MaterialCard material={materials[1]} isLarge={false} index={1} />
          <MaterialCard material={materials[2]} isLarge={false} index={2} />
        </div>
      </div>
    </section>
  );
}
