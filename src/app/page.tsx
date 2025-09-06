'use client';

import { Header } from '@/components/Header';
import { UpdatedHeroSection, UpdatedObjectivesSection } from '@/components/IconReplacements';
import { CompanySection } from '@/components/CompanySection';
import { EventInfoSection } from '@/components/EventInfoSection';
import { PricingSection } from '@/components/PricingSection';
import { ValueAddedSection } from '@/components/ValueAddedSection';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { Footer } from '@/components/Footer';
import { OptimizedIntroductionSection } from '@/components/OptimizedComponents';

export default function Home() {
  return (
    <ThemeWrapper>
      <Header />
      <UpdatedHeroSection />
      <OptimizedIntroductionSection />
      <UpdatedObjectivesSection />
      <CompanySection />
      <EventInfoSection />
      <PricingSection />
      <ValueAddedSection />
      <Footer />
    </ThemeWrapper>
  );
}
