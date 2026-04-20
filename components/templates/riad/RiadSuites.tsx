'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const suites = [
  {
    id: 1,
    name: 'Suite Sultan',
    desc: 'Plafond en bois de cèdre peint à la main, lit baldaquin en cuivre, bain maure privatif et salon oriental.',
    price: '380€',
    amenities: ['Bain maure', '80m²', 'Vue médina'],
    image: '/riad/suite.png',
  },
  {
    id: 2,
    name: 'Chambre Zellige',
    desc: 'Mosaïques zellige authentiques réalisées par les artisans de Fès, terrasse privée et fontaine en marbre de Carrare.',
    price: '220€',
    amenities: ['Terrasse privée', '45m²', 'Fontaine'],
    image: '/riad/gallery-2.png',
  },
];

export function RiadSuites() {
  return (
    <section className="py-28 bg-[#F5ECD7]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#C0733A] uppercase tracking-[0.3em] text-sm font-semibold block mb-3">
              Hébergement
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1C1208]">
              Suites & Chambres
            </h2>
          </div>
          <button className="px-6 py-3 border border-[#1C1208] text-[#1C1208] hover:bg-[#1C1208] hover:text-[#F5ECD7] transition-colors uppercase tracking-widest text-sm font-semibold">
            Toutes les chambres
          </button>
        </div>

        <div className="flex flex-col gap-10">
          {suites.map((suite, idx) => (
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } bg-white overflow-hidden shadow-sm group`}
            >
              {/* Image */}
              <div className="relative h-[360px] lg:h-[460px] lg:w-3/5 overflow-hidden">
                <Image
                  src={suite.image}
                  alt={suite.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Decorative inner frame */}
                <div className="absolute inset-4 border border-[#C9A84C]/30 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-14 flex flex-col justify-center lg:w-2/5 bg-[#FAF6ED] group-hover:bg-[#F5ECD7] transition-colors duration-500">
                <div className="flex flex-wrap gap-2 mb-6">
                  {suite.amenities.map((a, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold tracking-widest uppercase border border-[#C0733A]/30 px-3 py-1 text-[#C0733A]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-serif text-[#1C1208] mb-4">{suite.name}</h3>
                <p className="text-[#5C4A2A] font-light mb-8 leading-relaxed">{suite.desc}</p>

                <div className="mt-auto flex items-center justify-between border-t border-[#C0733A]/20 pt-6">
                  <div>
                    <span className="text-sm font-light text-[#8B6A3A] uppercase tracking-widest block mb-1">
                      À partir de
                    </span>
                    <span className="text-2xl font-serif text-[#1C1208]">
                      {suite.price}{' '}
                      <span className="text-sm font-sans font-normal text-[#8B6A3A]">/ nuit</span>
                    </span>
                  </div>
                  <button className="text-[#C0733A] font-medium uppercase tracking-widest text-sm hover:text-[#1C1208] transition-colors flex items-center gap-2">
                    Réserver <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
