import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesTaxonomySection } from '@/components/sections/ServicesTaxonomySection';
import { PrototypesSection } from '@/components/sections/PrototypesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesTaxonomySection />
      <PrototypesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
