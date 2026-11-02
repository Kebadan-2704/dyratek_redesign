import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ServicesTaxonomySection } from '@/components/sections/ServicesTaxonomySection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PrototypesSection } from '@/components/sections/PrototypesSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <PhilosophySection />
      <ServicesTaxonomySection />
      <CapabilitiesSection />
      <ProcessSection />
      <PrototypesSection />
      <ValuePropositionSection />
      <CTASection />
    </>
  );
}
