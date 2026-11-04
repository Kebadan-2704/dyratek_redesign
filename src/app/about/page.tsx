import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PILLARS } from '@/data/services';

export const metadata: Metadata = {
  title: 'About Us — Digital Studio | DYRATEK',
  description:
    'DYRATEK is a digital studio that builds clean websites, mobile apps, and business automations.'
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Page Hero */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>ABOUT DYRATEK</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Simple design.<br />
            Reliable software.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            We help growing businesses build fast websites, mobile apps, and automated workflows that save time and keep work organized.
          </p>
        </div>

        {/* Founding Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 mb-20 border-b border-[#E5E2DA]">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C83B35] font-bold">
                OUR APPROACH
              </span>
              <h2 className="font-heading font-bold text-2xl uppercase text-[#123D32]">
                No Fluff, Just Useful Tools
              </h2>
              <div className="p-4 bg-[#ECE8DF] border-l-2 border-[#123D32] font-mono text-[11px] space-y-2 text-[#2A2A2A]/80">
                <div>DESIGN: CLEAN &amp; READABLE</div>
                <div>CODE: MODERN &amp; MAINTAINABLE</div>
                <div>GOAL: PRACTICAL BUSINESS RESULTS</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 font-body text-sm sm:text-base text-[#2A2A2A]/85 leading-relaxed">
            <p className="font-heading font-semibold text-xl sm:text-2xl text-[#123D32] leading-snug">
              Many businesses get stuck between two extremes: flashy design agencies that build slow websites, or technical developers who build confusing screens nobody can use.
            </p>
            <p>
              We bridge both sides. We design clear, simple screens and back them up with fast, modern code. We skip distracting animations and corporate buzzwords so your visitors understand your offer right away.
            </p>
            <p>
              Everything we build uses proven, well-supported programming tools and clean layouts. You get a maintainable system that your team can run smoothly.
            </p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="pb-20 mb-20 border-b border-[#E5E2DA]">
          <SectionHeading
            index="01"
            label="OUR STANDARDS"
            heading="How We Work"
            description="Three simple standards we bring to every project."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-3 block">
                  STANDARD 01
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                  Fast Loading Times
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  Your pages load quickly on mobile and desktop. Fast pages keep visitors interested and help your site perform better on Google search.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[10px] text-[#2A2A2A]/60">
                BENCHMARK: LIGHTWEIGHT ASSETS
              </div>
            </div>

            <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-3 block">
                  STANDARD 02
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                  Clean Code
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  We write clean code and provide clear documentation so your systems remain easy to understand and maintain over time.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[10px] text-[#2A2A2A]/60">
                STANDARD: WELL-DOCUMENTED
              </div>
            </div>

            <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-3 block">
                  STANDARD 03
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                  Connected Workflows
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  We link your everyday business software so routine tasks happen on their own. Spend less time copying data and more time with customers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[10px] text-[#2A2A2A]/60">
                OUTCOME: AUTOMATED TASKS
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Overview */}
        <div className="pb-20 mb-20 border-b border-[#E5E2DA]">
          <SectionHeading
            index="02"
            label="OUR SERVICES"
            heading="Three Ways We Help"
            description="Eleven focused services to support your business."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-[#ECE8DF] border border-[#E5E2DA] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs uppercase font-bold text-[#123D32]">
                      {pillar.code}
                    </span>
                    <span className="font-mono text-[10px] text-[#C83B35] font-bold">
                      {pillar.services.length} SERVICES
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-2">
                    {pillar.name}
                  </h3>
                  <p className="font-body text-xs text-[#2A2A2A]/80 mb-4 leading-relaxed">
                    {pillar.tagline}
                  </p>
                  <ul className="space-y-1 font-mono text-xs text-[#2A2A2A]/70 border-t border-[#E5E2DA] pt-3">
                    {pillar.services.map((s) => (
                      <li key={s.id} className="flex items-center gap-1.5">
                        <span className="text-[#C83B35]">›</span>
                        <Link href={`/services/${s.slug}`} aria-label={`View details for ${s.name}`} className="hover:text-[#123D32]">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="bg-[#123D32] text-[#F4F1E9] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs text-[#A5D6C6] uppercase tracking-wider mb-2 font-semibold">
              HAVE A PROJECT IN MIND?
            </div>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-[#F4F1E9]">
              Tell Us About Your Project
            </h2>
            <p className="font-body text-xs text-[#F4F1E9]/80 max-w-lg mt-2">
              Send us a message to discuss your timeline, goals, and ideas.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" aria-label="Contact us to discuss your project" variant="accent" size="md" showArrow>
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
