'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Chief Trading Officer',
    bio: '15+ years in algorithmic trading at top-tier firms.',
    image: '/trading/team-trader-1.png',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Head of Risk Management',
    bio: 'Expert in portfolio optimization and risk hedging strategies.',
    image: '/trading/team-trader-2.png',
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'VP of Trading Operations',
    bio: 'Led execution infrastructure across 50+ global markets.',
    image: '/trading/team-trader-3.png',
  },
];

export function TradingTeam() {
  return (
    <section className="py-20 px-4 bg-[#0A1515]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expert Leadership
          </h2>
          <p className="text-[#1FD9B6] text-lg">
            Decades of combined market experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group text-center"
            >
              <div className="relative h-72 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">
                {member.name}
              </h3>
              <p className="text-[#1FD9B6] font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
