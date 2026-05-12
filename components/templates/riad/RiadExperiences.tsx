'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flame, Sparkles, Waves, Coffee } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Hammam Traditionnel',
    desc: 'Rituels ancestraux de purification au savon beldi, gommage au kessa et enveloppement à l\'argile ghassoul.',
    icon: Flame,
    image: '/riad/hammam.png',
  },
  {
    id: 2,
    title: 'Spa & Soins Argan',
    desc: 'Massages aux huiles essentielles et à l\'argan pur du Maroc. Soins du visage à la rose de Damas.',
    icon: Sparkles,
    image: '/riad/spa.png',
  },
  {
    id: 3,
    title: 'Piscine & Terrasse',
    desc: 'Plongez dans notre piscine en zellige sur le rooftop avec vue imprenable sur les toits de la médina.',
    icon: Waves,
    image: '/riad/pool.png',
  },
  {
    id: 4,
    title: 'Petit-Déjeuner Marocain',
    desc: 'Msemen, amlou, miel de thym, jus d\'orange frais et thé à la menthe servis sur la terrasse au lever du soleil.',
    icon: Coffee,
    image: '/riad/breakfast.png',
  },
];

export function RiadExperiences() {
  return (
    <section className="py-28 bg-[#1C1208]">
      {/* Ambient glow */}
      <div className="absolute left-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <span className="text-[#C9A84C] uppercase tracking-[0.3em] text-sm font-semibold block mb-4">
            L&apos;Art de Vivre Marocain
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F5ECD7] mb-8">
            Vos Expériences
          </h2>
          {/* Moroccan divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C9A84C]/40" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A84C]/60" />
            <div className="h-px w-16 bg-[#C9A84C]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative h-[420px] overflow-hidden cursor-pointer"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208] via-[#1C1208]/50 to-transparent" />

              {/* Inner border — Moroccan decorative frame */}
              <div className="absolute inset-3 border border-[#C9A84C]/20 pointer-events-none transition-all duration-500 group-hover:inset-5 group-hover:border-[#C9A84C]/50" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center mb-4">
                  <exp.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="text-2xl font-serif text-[#F5ECD7] mb-3">{exp.title}</h3>
                <p className="text-[#F5ECD7]/60 font-light text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
