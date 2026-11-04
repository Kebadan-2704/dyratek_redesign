import type { Metadata } from 'next';
import Link from 'next/link';
import { PILLARS } from '@/data/services';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services — Websites, Apps & Automation | DYRATEK',
  description:
    'Explore our 11 services across Build, Automate, and Grow. Clean websites, mobile apps, and automated workflows.'
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Page Hero */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>OUR SERVICES</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Websites, apps, and automations.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            Explore the 11 ways we help businesses build better digital tools and work smoothly.
          </p>

          {/* Pillar Jump Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-[#E5E2DA] font-mono text-xs">
            <span className="text-[#2A2A2A]/60 uppercase">JUMP TO:</span>
            {PILLARS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-3 py-1 bg-[#ECE8DF] border border-[#E5E2DA] text-[#123D32] font-semibold hover:border-[#123D32] transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>

        {/* Pillars Detailed Breakdown */}
        <div className="space-y-24">
          {PILLARS.map((pillar) => (
            <section key={pillar.id} id={pillar.id} className="scroll-mt-24">
              {/* Pillar Header */}
              <div className="pb-6 mb-8 border-b-2 border-[#123D32] flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="font-mono text-xs text-[#C83B35] font-bold uppercase tracking-wider mb-1">
                    {pillar.code}
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl lg:text-4xl uppercase text-[#123D32]">
                    {pillar.name}
                  </h2>
                </div>
                <p className="font-body text-sm text-[#2A2A2A]/80 max-w-md">
                  {pillar.description}
                </p>
              </div>

              {/* Pillar Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pillar.services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#123D32] group"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[11px] px-2 py-0.5 bg-[#ECE8DF] border border-[#E5E2DA] text-[#123D32] font-bold">
                          SERVICE {service.index}
                        </span>
                        <span className="font-mono text-xs text-[#C83B35] font-semibold">
                          {service.pillarIndex}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-2xl uppercase text-[#123D32] mb-2 group-hover:text-[#C83B35] transition-colors">
                        <Link href={`/services/${service.slug}`} aria-label={`View details for ${service.name}`}>
                          {service.name}
                        </Link>
                      </h3>

                      <p className="font-body text-xs sm:text-sm text-[#2A2A2A]/85 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Included Items Preview */}
                      <div className="space-y-2 mb-6">
                        <div className="font-mono text-[10px] uppercase text-[#123D32] font-bold">
                          WHAT IS INCLUDED:
                        </div>
                        {service.deliverables.slice(0, 3).map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 font-mono text-xs text-[#2A2A2A]/80">
                            <span className="text-[#C83B35]" aria-hidden="true">›</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E5E2DA] flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        aria-label={`View details for ${service.name}`}
                        className="font-mono text-xs uppercase font-bold text-[#123D32] group-hover:text-[#C83B35] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>View details</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                      <span className="font-mono text-[10px] text-[#2A2A2A]/50">
                        {service.deliverables.length} Items Included
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-24 bg-[#123D32] text-[#F4F1E9] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs text-[#A5D6C6] uppercase tracking-wider mb-2 font-semibold">
              READY TO DISCUSS A PROJECT?
            </div>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-[#F4F1E9]">
              Talk with our team
            </h2>
            <p className="font-body text-xs text-[#F4F1E9]/80 max-w-lg mt-2">
              Tell us about your project requirements and goals. We will be happy to talk through options.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" aria-label="Contact us about our services" variant="accent" size="md" showArrow>
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
