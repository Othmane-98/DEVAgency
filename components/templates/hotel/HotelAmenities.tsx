'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Wine, Sunrise } from 'lucide-react';

const amenities = [
  {
    id: 1,
    title: "The Serenity Spa",
    desc: "Un espace holistique dédié au bien-être, incluant hammam, piscine intérieure chauffée et massages sur-mesure.",
    icon: Sparkles,
    bgImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Gastronomie & Cave",
    desc: "Découvrez notre restaurant étoilé et notre cave abritant plus de 1000 références de vins d&apos;exception.",
    icon: Wine,
    bgImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Rooftop Exclusif",
    desc: "Profitez d&apos;une vue à 360° sur la ville depuis notre terrasse privée, réservée exclusivement à nos résidents.",
    icon: Sunrise,
    bgImage: "/hotel/rooftop.png"
  }
];

export function HotelAmenities() {
  return (
    <section className="py-24 bg-[#1A1C1C] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#775A19]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A1C1C] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] uppercase tracking-widest text-sm font-semibold mb-4 block">L&apos;Expérience Lumière</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#F9F9F9] mb-6">Commodités & Spa</h2>
          <div className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[450px] w-full overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <Image 
                src={item.bgImage} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1C] via-[#1A1C1C]/40 to-transparent" />

              {/* Glassmorphic Content Card */}
              <div className="absolute bottom-4 left-4 right-4 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#E5D1B0]" />
                </div>
                <h3 className="text-2xl font-serif text-[#F9F9F9] mb-2">{item.title}</h3>
                <p className="text-[#F9F9F9]/70 font-light text-sm line-clamp-2 md:line-clamp-none transition-all duration-500 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-xs uppercase tracking-widest text-[#E5D1B0] font-semibold border-b border-[#E5D1B0] pb-1 cursor-pointer hover:text-white transition-colors">
                    Découvrir plus
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
