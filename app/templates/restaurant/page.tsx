import { Metadata } from 'next';
import { RestaurantHero } from '@/components/templates/restaurant/RestaurantHero';
import { RestaurantMenu } from '@/components/templates/restaurant/RestaurantMenu';
import { RestaurantGallery } from '@/components/templates/restaurant/RestaurantGallery';
import { ReservationForm } from '../../../components/templates/restaurant/ReservationForm';
import { RestaurantHeader } from '@/components/templates/restaurant/RestaurantHeader';
import { RestaurantFooter } from '@/components/templates/restaurant/RestaurantFooter';
import { TemplateBackButton } from '@/components/templates/TemplateBackButton';

export const metadata: Metadata = {
  title: 'Modèle de Restaurant Premium | WebAgency',
  description: 'Découvrez notre modèle de site web premium pour les restaurants gastronomiques.',
};

export default function RestaurantTemplatePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#F9F9F9] font-sans selection:bg-[#C5A059] selection:text-white">
      <TemplateBackButton />
      <RestaurantHeader />

      <main>
        {/* 1. Hero Section */}
        <RestaurantHero />

        {/* 2. Menu Section */}
        <RestaurantMenu />

        {/* 3. Gallery Section */}
        <RestaurantGallery />

        {/* 4. Reservation Section */}
        <section className="py-24 bg-[#1A1A1A]" id="reservations">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#F9F9F9]">Réservez votre table</h2>
              <p className="text-[#C5A059] uppercase tracking-widest text-sm font-medium">L&apos;expérience Heritage</p>
            </div>
            <ReservationForm />
          </div>
        </section>
      </main>

      <RestaurantFooter />
    </div>
  );
}
