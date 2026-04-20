import { Metadata } from 'next';
import { RiadHero } from '@/components/templates/riad/RiadHero';
import { RiadExperiences } from '@/components/templates/riad/RiadExperiences';
import { RiadSuites } from '@/components/templates/riad/RiadSuites';
import { RiadGallery } from '@/components/templates/riad/RiadGallery';
import { RiadHeader } from '@/components/templates/riad/RiadHeader';
import { RiadFooter } from '@/components/templates/riad/RiadFooter';
import { TemplateBackButton } from '@/components/templates/TemplateBackButton';

export const metadata: Metadata = {
  title: 'Modèle Riad Marocain | WebAgency',
  description: 'Découvrez notre modèle de site web authentique pour les riads et maisons d\'hôtes marocaines.',
};

export default function RiadTemplatePage() {
  return (
    <div className="min-h-screen bg-[#1C1208] text-[#F5ECD7] font-sans selection:bg-[#C9A84C] selection:text-[#1C1208]">
      <TemplateBackButton />
      <RiadHeader />

      <main>
        {/* 1. Hero — video background */}
        <RiadHero />

        {/* 2. Expériences — hammam, spa, piscine, petit-déjeuner */}
        <RiadExperiences />

        {/* 3. Suites & Chambres */}
        <RiadSuites />

        {/* 4. Galerie */}
        <RiadGallery />
      </main>

      <RiadFooter />
    </div>
  );
}
