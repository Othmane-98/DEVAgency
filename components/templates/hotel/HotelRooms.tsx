'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Coffee, Wifi } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: "Suite Présidentielle",
    description: "Une oasis de luxe avec vue panoramique sur l&apos;océan, salon privé et service majordome 24/7.",
    price: "1 200€",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop"
    ],
    amenities: ["Vue Océan", "120m²", "Lit King Size"]
  },
  {
    id: 2,
    name: "Chambre Terrasse Exécutive",
    description: "L&apos;élégance contemporaine avec une grande terrasse aménagée pour profiter des couchers de soleil.",
    price: "550€",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop"
    ],
    amenities: ["Terrasse 30m²", "65m²", "Baignoire Îlot"]
  },
  {
    id: 3,
    name: "Chambre Supérieure",
    description: "Un cocon de confort avec une décoration raffinée, idéale pour les escapades romantiques.",
    price: "320€",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop"
    ],
    amenities: ["Vue Jardin", "40m²", "Douche Italienne"]
  }
];

export function HotelRooms() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1C1C] mb-6">Chambres & Suites</h2>
            <p className="text-[#444748] text-lg font-light">
              Des espaces pensés comme des refuges privés, alliant l&apos;esthétique du design contemporain au confort absolu.
            </p>
          </div>
          <button className="px-6 py-3 border border-[#1A1C1C] text-[#1A1C1C] hover:bg-[#1A1C1C] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
            Voir tout
          </button>
        </div>

        <div className="flex flex-col gap-12">
          {rooms.map((room, idx) => (
            <RoomCard key={room.id} room={room} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface RoomType {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  amenities: string[];
}

function RoomCard({ room, index }: { room: RoomType; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col lg:flex-row bg-white overflow-hidden shadow-[0_10px_30px_rgba(26,28,28,0.03)] group"
    >
      {/* Slider Area */}
      <div className="relative h-[400px] lg:h-[500px] lg:w-3/5 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image 
              src={room.images[currentImage]} 
              alt={room.name} 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevImage}
            className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1C1C] hover:bg-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1C1C] hover:bg-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {room.images.map((_: string, i: number) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentImage ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-2/5 bg-[#F3F3F3] group-hover:bg-[#E2E2E2] transition-colors duration-500">
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity: string, i: number) => (
            <span key={i} className="text-xs font-semibold tracking-widest uppercase border border-[#747878]/30 px-3 py-1 text-[#444748]">
              {amenity}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl font-serif text-[#1A1C1C] mb-4">{room.name}</h3>
        <p className="text-[#444748] font-light mb-8 leading-relaxed">
          {room.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#747878]/20 pt-6">
          <div>
            <span className="text-sm font-light text-[#444748] uppercase tracking-widest block mb-1">À partir de</span>
            <span className="text-2xl font-serif text-[#1A1C1C]">{room.price} <span className="text-sm font-sans font-normal text-[#747878]">/ nuit</span></span>
          </div>
          <button className="text-[#775A19] font-medium uppercase tracking-widest text-sm hover:text-[#1A1C1C] transition-colors flex items-center gap-2">
            Réserver <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
