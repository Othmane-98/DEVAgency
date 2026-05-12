import {
  HeroSection,
  SocialProofSection,
  StatsSection,
  FeaturesSection,
  ServicesPreviewSection,
  InteractiveUISection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections/HomeSections";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesPreviewSection />
      <PortfolioPreviewSection />
      <InteractiveUISection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
