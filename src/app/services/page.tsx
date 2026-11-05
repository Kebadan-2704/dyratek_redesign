import type { Metadata } from 'next';
import Link from 'next/link';
import { PILLARS } from '@/data/services';
import { CTASection } from '@/components/sections/CTASection';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

export const metadata: Metadata = {
  title: 'Our Services — Websites, Apps & Automation | DYRATEK',
  description:
    'Explore our 11 services across Build, Automate, and Grow. Clean websites, mobile apps, and automated workflows.'
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FBFBF9] py-10 sm:py-14 lg:py-18 border-b border-[#E1E4E0]">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-12 lg:space-y-16">
        {/* Page Hero */}
        <MotionFadeIn>
          <div className="pb-12 border-b border-[#E1E4E0] space-y-4 max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
              Our Services
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight tracking-tight">
              Websites, apps, and automations.
            </h1>
            <p className="text-lg text-[#555B57] leading-relaxed pt-1">
              Explore the 11 ways we help businesses build better digital tools and work smoothly.
            </p>

            {/* Pillar Quick Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4">
              <span className="text-xs font-semibold text-[#555B57] uppercase tracking-wide mr-1">
                Jump to:
              </span>
              {PILLARS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-white border border-[#E1E4E0] text-sm text-[#123D32] font-semibold hover:border-[#123D32] hover:bg-[#F3F4F1] transition-all inline-flex items-center shadow-xs"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </MotionFadeIn>

        {/* Pillars Detailed Breakdown */}
        <div className="space-y-20">
          {PILLARS.map((pillar) => (
            <section key={pillar.id} id={pillar.id} className="scroll-mt-28 space-y-8">
              {/* Pillar Header */}
              <MotionFadeIn>
                <div className="pb-4 border-b border-[#E1E4E0] flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                      Category: {pillar.name}
                    </span>
                    <h2 className="font-bold text-2xl sm:text-3xl text-[#123D32] mt-1 tracking-tight">
                      {pillar.name}
                    </h2>
                  </div>
                  <p className="text-base text-[#555B57] max-w-md leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </MotionFadeIn>

              {/* Pillar Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillar.services.map((service, sIdx) => (
                  <MotionFadeIn key={service.id} delay={sIdx * 0.05}>
                    <div
                      className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#123D32] hover:-translate-y-0.5 hover:shadow-sm group h-full"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="px-2.5 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
                            {service.pillarName}
                          </span>
                        </div>

                        <h3 className="font-bold text-xl sm:text-2xl text-[#123D32] group-hover:underline">
                          <Link href={`/services/${service.slug}`} aria-label={`View details for ${service.name}`}>
                            {service.name}
                          </Link>
                        </h3>

                        <p className="text-base text-[#555B57] leading-relaxed">
                          {service.description}
                        </p>

                        {/* Included Items Preview */}
                        <div className="space-y-2.5 pt-3 border-t border-[#E1E4E0]">
                          <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                            What is included:
                          </div>
                          <ul className="space-y-2">
                            {service.deliverables.slice(0, 3).map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5 text-sm text-[#1E2221]">
                                <svg
                                  className="w-4 h-4 text-[#123D32] mt-0.5 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#E1E4E0] flex items-center justify-between">
                        <Link
                          href={`/services/${service.slug}`}
                          aria-label={`View details for ${service.name}`}
                          className="min-h-[44px] py-1 text-sm font-semibold text-[#123D32] group-hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>View details</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                        <span className="text-xs text-[#555B57]">
                          {service.deliverables.length} Deliverables
                        </span>
                      </div>
                    </div>
                  </MotionFadeIn>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Global CTA Band */}
        <CTASection />
      </div>
    </div>
  );
}
