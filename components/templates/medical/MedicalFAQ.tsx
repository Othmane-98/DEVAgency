'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Quelles sont les heures d&apos;ouverture de la clinique ?",
    answer: "Notre clinique est ouverte du Lundi au Vendredi de 8h00 à 20h00, et le Samedi de 9h00 à 13h00. Un service d&apos;urgences est assuré 24/7 pour les cas nécessitant une intervention immédiate."
  },
  {
    question: "Comment puis-je annuler ou modifier mon rendez-vous ?",
    answer: "Vous pouvez annuler ou modifier votre rendez-vous directement depuis votre espace patient en ligne, ou en appelant notre secrétariat au 01 23 45 67 89 au moins 24 heures à l&apos;avance."
  },
  {
    question: "Acceptez-vous les mutuelles et la carte vitale ?",
    answer: "Oui, la Clinique Serenity est conventionnée. Nous acceptons la carte vitale ainsi que la majorité des mutuelles complémentaires. Le tiers payant peut s'appliquer selon votre couverture."
  },
  {
    question: "Faut-il apporter son dossier médical lors de la première visite ?",
    answer: "Il est fortement recommandé d&apos;apporter tout document utile lors de votre première consultation (résultats d&apos;examens récents, ordonnances en cours, lettre de votre médecin traitant) pour optimiser votre prise en charge."
  },
  {
    question: "Proposez-vous des consultations en télé-médecine ?",
    answer: "Absolument. Nos médecins généralistes et certains spécialistes proposent des créneaux de téléconsultation, accessibles via notre plateforme sécurisée après prise de rendez-vous."
  }
];

export function MedicalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D0E6ED] text-[#00687B] mb-6 shadow-sm">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A3436] mb-4">Questions Fréquentes</h2>
        <p className="text-[#566163] text-lg font-light max-w-2xl mx-auto">
          Trouvez rapidement les réponses à vos questions concernant l&apos;organisation des soins, les urgences et la gestion administrative.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className={`w-full text-left p-6 md:px-8 bg-white border rounded-2xl flex items-center justify-between transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#98E6FB] shadow-[0_10px_30px_rgba(42,52,54,0.08)] ring-1 ring-[#98E6FB]/50' 
                    : 'border-[#E7EFF1] hover:border-[#D0E6ED] hover:bg-[#F6FAFB]'
                }`}
                aria-expanded={isOpen}
              >
                <span className={`text-lg font-medium pr-8 ${isOpen ? 'text-[#00687B]' : 'text-[#2A3436]'}`}>
                  {faq.question}
                </span>
                
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-[#00687B] text-white' : 'bg-[#E7EFF1] text-[#00687B] group-hover:bg-[#D0E6ED]'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:px-8 text-[#566163] leading-relaxed font-light border-l-2 border-[#00687B] ml-4 md:ml-6 mt-2 mb-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center p-8 bg-[#EEF5F6] rounded-2xl border border-[#D0E6ED]">
        <p className="text-[#2A3436] font-medium mb-2">Vous n&apos;avez pas trouvé votre réponse ?</p>
        <p className="text-[#566163] font-light text-sm mb-4">
          Notre équipe administrative est à votre disposition pour vous renseigner.
        </p>
        <button className="text-[#00687B] font-semibold hover:underline decoration-2 underline-offset-4">
          Nous contacter
        </button>
      </div>
    </div>
  );
}
