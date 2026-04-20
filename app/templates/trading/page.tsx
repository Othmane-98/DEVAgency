import { Metadata } from 'next';
import { TradingHeader } from '@/components/templates/trading/TradingHeader';
import { TradingHero } from '@/components/templates/trading/TradingHero';
import { TradingFeatures } from '@/components/templates/trading/TradingFeatures';
import { TradingDashboard } from '@/components/templates/trading/TradingDashboard';
import { TradingSecurity } from '@/components/templates/trading/TradingSecurity';
import { TradingTeam } from '@/components/templates/trading/TradingTeam';
import { TradingCTA } from '@/components/templates/trading/TradingCTA';
import { TradingFooter } from '@/components/templates/trading/TradingFooter';
import { TemplateBackButton } from '@/components/templates/TemplateBackButton';

export const metadata: Metadata = {
  title: 'Trading Platform | WebAgency',
  description: 'Professional trading platform with real-time data, advanced tools, and institutional-grade security.',
};

export default function TradingTemplatePage() {
  return (
    <>
      <TemplateBackButton />
      <TradingHeader />
      <main
        className="min-h-screen font-sans"
        style={{ backgroundColor: '#0A1515', color: '#E8EAED' }}
      >
        <TradingHero />
        <TradingFeatures />
        <TradingDashboard />
        <TradingSecurity />
        <TradingTeam />
        <TradingCTA />
      </main>
      <TradingFooter />
    </>
  );
}
