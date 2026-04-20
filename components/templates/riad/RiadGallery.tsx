'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { src: '/riad/hero.png', className: 'col-span-2 row-span-2 h-[480px]', alt: 'Patio du riad' },
  { src: '/riad/gallery-1.png', className: 'h-[232px]', alt: 'Zellige marocain' },
  { src: '/riad/gallery-2.png', className: 'h-[232px]', alt: 'Porte sculptée' },
  { src: '/riad/hammam.png', className: 'h-[270px]', alt: 'Hammam' },
  { src: '/riad/spa.png', className: 'h-[270px]', alt: 'Soins spa' },
  { src: '/riad/breakfast.png', className: 'col-span-1 h-[270px]', alt: 'Petit-déjeuner marocain' },
];

export function RiadGallery() {
  return (
    <section className="py-28 bg-[#1C1208]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] uppercase tracking-[0.3em] text-sm font-semibold block mb-4">
            Instants de vie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#F5ECD7] mb-8">Galerie</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C9A84C]/40" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A84C]/60" />
            <div className="h-px w-16 bg-[#C9A84C]/40" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`relative overflow-hidden group ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Moroccan inner frame on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute inset-3 border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/40 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
