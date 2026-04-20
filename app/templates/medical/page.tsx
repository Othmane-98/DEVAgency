import { Metadata } from 'next';
import { MedicalHero } from '@/components/templates/medical/MedicalHero';
import { MedicalDoctors } from '@/components/templates/medical/MedicalDoctors';
import { MedicalFAQ } from '@/components/templates/medical/MedicalFAQ';
import { MedicalHeader } from '@/components/templates/medical/MedicalHeader';
import { MedicalFooter } from '@/components/templates/medical/MedicalFooter';
import { TemplateBackButton } from '@/components/templates/TemplateBackButton';

export const metadata: Metadata = {
  title: 'Modèle Clinique Médicale | WebAgency',
  description: 'Modèle de site premium pour cliniques et professionnels de santé.',
};

export default function MedicalTemplatePage() {
  return (
    <div className="min-h-screen bg-[#F6FAFB] text-[#2A3436] font-sans selection:bg-[#98E6FB] selection:text-[#00404C]">
      <TemplateBackButton />
      <MedicalHeader />

      <main>
        {/* 1. Hero avec boutons flottants "Prendre RDV" */}
        <MedicalHero />

        {/* 2. Cartes Médecins avec Hover-reveal */}
        <MedicalDoctors />

        {/* 3. Accordéon FAQ Interactif */}
        <div className="bg-white py-24">
          <MedicalFAQ />
        </div>
      </main>

      <MedicalFooter />
    </div>
  );
}
