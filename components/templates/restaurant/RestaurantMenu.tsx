'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = [
  {
    category: 'Entrées',
    items: [
      { name: 'Tartare de Bar de Ligne', desc: 'Agrumes, caviar osciètre, huile d\'olive de Sicile', price: '45€' },
      { name: 'Foie Gras Poêlé', desc: 'Rhubarbe rôtie, réduction de vieux Porto, brioche', price: '52€' },
      { name: 'Asperges Vertes du Vaucluse', desc: 'Sabayon au champagne, truffe noire d\'été', price: '38€' }
    ]
  },
  {
    category: 'Plats',
    items: [
      { name: 'Pigeon de Racan Mâturé', desc: 'Pastilla de cuisse, laquage aux épices douces', price: '68€' },
      { name: 'Turbot Sauvage Rôti', desc: 'Asperges blanches, morilles, sauce vin jaune', price: '75€' },
      { name: 'Ris de Veau Croustillant', desc: 'Pommes soufflées, jus perlé, jeunes pousses', price: '72€' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Soufflé au Grand Marnier', desc: 'Sorbet orange sanguine, tuile croustillante', price: '25€' },
      { name: 'Chocolat Grand Cru', desc: 'Ganache montée, fève tonka, glace vanille fumée', price: '28€' },
      { name: 'Fraises des Bois', desc: 'Crémeux verveine, meringue légère, jus court', price: '24€' }
    ]
  }
];

export function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState('Entrées');

  return (
    <section id="menu" className="py-24 bg-[#121212] relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#F9F9F9]">Notre Carte</h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-8" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-6 py-2 uppercase tracking-widest text-sm transition-all duration-300 ${
                  activeCategory === cat.category 
                    ? 'text-[#121212] bg-[#C5A059]' 
                    : 'text-[#E5D1B0] hover:text-[#F9F9F9] border border-transparent hover:border-[#C5A059]/30'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence mode="wait">
            {menuData.find(c => c.category === activeCategory)?.items.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif text-[#F9F9F9] group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
                  <span className="flex-grow mx-4 mb-2 border-b border-dashed border-[#C5A059]/30"></span>
                  <span className="text-lg font-mono text-[#E5D1B0]">{item.price}</span>
                </div>
                <p className="text-sm text-[#F9F9F9]/60 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
