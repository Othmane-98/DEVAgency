'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'Real-Time Data',
    description: 'Live market data with sub-millisecond latency across all assets.',
    image: '/trading/feature-data.png',
  },
  {
    id: 2,
    title: 'Advanced Tools',
    description: 'Professional-grade charting, technical analysis, and automation.',
    image: '/trading/feature-tools.png',
  },
  {
    id: 3,
    title: 'Ultra-Low Fees',
    description: '0% commission on stocks and ETFs. Competitive spreads on forex.',
    image: '/trading/feature-fees.png',
  },
  {
    id: 4,
    title: '24/7 Trading',
    description: 'Access global markets across every time zone, around the clock.',
    image: '/trading/feature-24-7.png',
  },
];

export function TradingFeatures() {
  return (
    <section className="py-20 px-4 bg-[#0F1F1F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-[#1FD9B6] text-lg">
            Built for serious traders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F1F]/90 via-[#0F1F1F]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
