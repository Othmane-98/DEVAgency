'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    src: '/recycling/facility-1.png',
    title: 'Centre de traitement',
    sub: '12 000 m² · 3 lignes de tri',
    cols: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    src: '/recycling/gallery-1.png',
    title: 'Matière compressée',
    sub: 'Balles ISO prêtes à l\'extrusion',
    cols: '',
    aspect: 'aspect-square',
  },
  {
    src: '/recycling/gallery-2.png',
    title: 'Granulés recyclés',
    sub: 'Qualité matière première secondaire',
    cols: '',
    aspect: 'aspect-square',
  },
  {
    src: '/recycling/gallery-3.png',
    title: 'Produits finis',
    sub: '100% plastique recyclé certifié',
    cols: 'md:col-span-2',
    aspect: 'aspect-[21/9]',
  },
];

function ParallaxImage({
  src,
  alt,
  containerRef,
}: {
  src: string;
  alt: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-3xl ${item.cols} ${item.aspect}`}
    >
      {/* Parallax image */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxImage src={item.src} alt={item.title} containerRef={ref} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Clip-path curtain reveal */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{ backgroundColor: '#0D1F17' }}
        initial={{ clipPath: 'inset(0 0 0 0 round 24px)' }}
        whileInView={{ clipPath: 'inset(0 0 100% 0 round 24px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 + index * 0.07 }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.07, type: 'spring', stiffness: 80 }}
        >
          <h3 className="text-white font-bold text-lg tracking-tight">{item.title}</h3>
          <p
            className="mt-1 text-sm max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-500 ease-out"
            style={{ color: '#95D5B2' }}
          >
            {item.sub}
          </p>
        </motion.div>
      </div>

      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: 'rgba(149,213,178,0.3)' }}
      />
    </motion.div>
  );
}

export function RecyclingGallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start end', 'center center'] });
  const titleX = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section className="py-24" style={{ backgroundColor: '#F0F7F4' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Asymmetric header with scroll-linked title */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div style={{ x: titleX, opacity: titleOpacity }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 inline-block" style={{ backgroundColor: '#1B4332' }} />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold" style={{ color: '#1B4332' }}>
                Nos Installations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: '#0D1F17' }}>
              Galerie.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
            className="text-base leading-relaxed max-w-xs pb-2"
            style={{ color: '#264653' }}
          >
            Un aperçu de notre site industriel et des matières que nous transformons chaque jour.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.src} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
