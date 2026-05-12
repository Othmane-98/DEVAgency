'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const securityFeatures = [
  {
    id: 1,
    title: 'Bank-Grade Encryption',
    description: 'Military-level encryption protects all your data and transactions.',
    image: '/trading/security-encryption.png',
  },
  {
    id: 2,
    title: 'Fund Protection',
    description: 'Segregated accounts and SIPC insurance up to $500k per account.',
    image: '/trading/security-vault.png',
  },
  {
    id: 3,
    title: 'Compliance Certified',
    description: 'Regulated by SEC, FINRA, and FinCEN. Full audit transparency.',
    image: '/trading/security-compliance.png',
  },
];

export function TradingSecurity() {
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
            Security You Can Trust
          </h2>
          <p className="text-[#1FD9B6] text-lg">
            Your assets are our priority
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
