'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Elena Rossi",
    role: "Cardiologue En Chef",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
    bio: "Spécialiste des pathologies cardiaques avec plus de 15 ans d&apos;expérience en milieu hospitalier universitaire.",
    specialties: ["Échographie", "ECG d&apos;effort", "Hypertension"],
    availability: "Lun, Mer, Ven"
  },
  {
    name: "Dr. Marcus Chen",
    role: "Médecine Générale",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
    bio: "Médecin de famille dévoué, privilégiant une approche préventive et un suivi personnalisé pour tous les âges.",
    specialties: ["Bilan de santé", "Pédiatrie de base", "Vaccination"],
    availability: "Mar, Jeu, Sam"
  },
  {
    name: "Dr. Sarah Miller",
    role: "Pédiatre",
    image: "/medical/doctor-sarah.png",
    bio: "Experte en développement infantile, Dr. Miller offre un environnement rassurant pour les enfants et les parents.",
    specialties: ["Néonatalogie", "Suivi croissance", "Allergies enfant"],
    availability: "Lun au Ven"
  }
];

export function MedicalDoctors() {
  return (
    <section className="py-24 bg-[#EEF5F6]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2A3436] mb-4">Notre Équipe Médicale</h2>
            <p className="text-[#566163] text-lg font-light leading-relaxed">
              Des spécialistes reconnus, unis par une même vocation : vous offrir les meilleurs soins dans un cadre bienveillant.
            </p>
          </div>
          <button className="text-[#00687B] font-semibold flex items-center gap-2 hover:gap-3 transition-all hover:text-[#00404C]">
            Voir tous nos praticiens <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(42,52,54,0.04)] border border-[#E7EFF1]"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-[#00687B]/90 text-white p-6 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                  <p className="text-sm font-light mb-4 line-clamp-3">{doctor.bio}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-xs uppercase tracking-widest text-[#98E6FB] font-bold mb-2">Spécialités</h5>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map(spec => (
                        <span key={spec} className="px-2 py-1 bg-white/20 rounded text-xs">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                     <span className="text-xs font-light">Dispo: <span className="font-semibold">{doctor.availability}</span></span>
                     <button className="w-8 h-8 rounded-full bg-white text-[#00687B] flex items-center justify-center hover:scale-110 transition-transform">
                       <ArrowUpRight className="w-4 h-4" />
                     </button>
                  </div>
                </div>
              </div>

              {/* Persistent Patient-facing info */}
              <div className="p-6 relative bg-white z-10 transition-colors duration-300 group-hover:bg-[#F6FAFB]">
                <h3 className="text-2xl font-bold text-[#2A3436] mb-1">{doctor.name}</h3>
                <p className="text-[#00687B] font-medium text-sm">{doctor.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
