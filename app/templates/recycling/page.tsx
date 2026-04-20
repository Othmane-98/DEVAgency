import { Metadata } from 'next';
import { RecyclingHero } from '@/components/templates/recycling/RecyclingHero';
import { RecyclingImpact } from '@/components/templates/recycling/RecyclingImpact';
import { RecyclingProcess } from '@/components/templates/recycling/RecyclingProcess';
import { RecyclingMaterials } from '@/components/templates/recycling/RecyclingMaterials';
import { RecyclingGallery } from '@/components/templates/recycling/RecyclingGallery';
import { RecyclingContact } from '@/components/templates/recycling/RecyclingContact';
import { RecyclingHeader } from '@/components/templates/recycling/RecyclingHeader';
import { RecyclingFooter } from '@/components/templates/recycling/RecyclingFooter';
import { TemplateBackButton } from '@/components/templates/TemplateBackButton';

export const metadata: Metadata = {
  title: 'EcoPlast — Recyclage Plastique | WebAgency',
  description:
    'Template de site vitrine pour une entreprise de recyclage plastique. Présentation du processus, impact environnemental, matériaux traités et contact.',
};

export default function RecyclingTemplatePage() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F8FAF8', color: '#0D1F17' }}>
      <TemplateBackButton />
      <RecyclingHeader />

      <main>
        <RecyclingHero />
        <RecyclingImpact />
        <RecyclingProcess />
        <RecyclingMaterials />
        <RecyclingGallery />
        <RecyclingContact />
      </main>

      <RecyclingFooter />
    </div>
  );
}
