import { Metadata } from 'next';
import { HotelHero } from '@/components/templates/hotel/HotelHero';
import { HotelRooms } from '@/components/templates/hotel/HotelRooms';
import { HotelAmenities } from '@/components/templates/hotel/HotelAmenities';
import { HotelHeader } from '@/components/templates/hotel/HotelHeader';
import { HotelFooter } from '@/components/templates/hotel/HotelFooter';
import { TemplateBackButton } from '@/components/templates/TemplateBackButton';

export const metadata: Metadata = {
  title: 'Modèle Hôtel Luxe | WebAgency',
  description: 'Découvrez notre modèle de site web premium pour les hôtels et spas de luxe.',
};

export default function HotelTemplatePage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1A1C1C] font-sans selection:bg-[#775A19] selection:text-white">
      <TemplateBackButton />
      <HotelHeader />

      <main>
        {/* 1. Hero Section avec Date Picker */}
        <HotelHero />

        {/* 2. Chambres et Suites (Slider) */}
        <HotelRooms />

        {/* 3. Commodités et Spa (Glassmorphism) */}
        <HotelAmenities />
      </main>

      <HotelFooter />
    </div>
  );
}
