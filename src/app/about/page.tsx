import type { Metadata } from 'next';
import Link from 'next/link';
import { PILLARS } from '@/data/services';
import { CTASection } from '@/components/sections/CTASection';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

export const metadata: Metadata = {
  title: 'About Us — Digital Studio | DYRATEK',
  description:
    'DYRATEK is a digital studio that builds clean websites, mobile apps, and business automations.'
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FBFBF9] py-10 sm:py-14 lg:py-18 border-b border-[#E1E4E0]">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-12 lg:space-y-16">
        {/* Page Hero */}
        <MotionFadeIn>
          <div className="pb-12 border-b border-[#E1E4E0] space-y-4 max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
              About DYRATEK
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight tracking-tight">
              Simple design.<br />
              Reliable software.
            </h1>
            <p className="text-lg text-[#555B57] leading-relaxed pt-2">
              We help growing businesses build clear websites, mobile apps, and automated workflows that save time and keep work organized.
            </p>
          </div>
        </MotionFadeIn>

        {/* Studio Approach */}
        <MotionFadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#E1E4E0]">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                Our approach
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl text-[#123D32] tracking-tight">
                No fluff, just useful tools
              </h2>
              <div className="rounded-2xl bg-[#F0F3F1] p-6 border border-[#E1E4E0] space-y-3 text-sm text-[#1E2221]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#123D32]" aria-hidden="true" />
                  <span><strong className="text-[#123D32]">Design:</strong> Clean and readable</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#123D32]" aria-hidden="true" />
                  <span><strong className="text-[#123D32]">Code:</strong> Modern and dependable</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#123D32]" aria-hidden="true" />
                  <span><strong className="text-[#123D32]">Goal:</strong> Practical business results</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#555B57] leading-relaxed">
              <p className="font-semibold text-xl sm:text-2xl text-[#123D32] leading-snug">
                Many businesses get stuck between two extremes: flashy design agencies that build slow websites, or technical developers who build confusing screens nobody can use.
              </p>
              <p>
                We bridge both sides. We design clear, simple screens and build them with dependable code. We focus on clarity so your visitors understand your offer right away.
              </p>
              <p>
                Everything we build uses proven, well-supported programming tools and clean layouts. You get a maintainable system that your team can run smoothly.
              </p>
            </div>
          </div>
        </MotionFadeIn>

        {/* Core Principles */}
        <div className="space-y-8 pb-16 border-b border-[#E1E4E0]">
          <MotionFadeIn delay={0.15}>
            <div>
              <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                Quality Standards
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl text-[#123D32] tracking-tight mt-1">
                How we work
              </h2>
              <p className="text-base sm:text-lg text-[#555B57] mt-2">
                Three simple standards we bring to every project.
              </p>
            </div>
          </MotionFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionFadeIn delay={0.2}>
              <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#123D32] hover:-translate-y-0.5 hover:shadow-sm h-full">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F3F1] text-[#123D32] flex items-center justify-center font-bold text-base">
                    1
                  </div>
                  <h3 className="font-bold text-xl text-[#123D32]">
                    Fast Loading Times
                  </h3>
                  <p className="text-sm text-[#555B57] leading-relaxed">
                    Your pages load quickly on mobile and desktop. Fast pages keep visitors interested and help your site perform better on search.
                  </p>
                </div>
              </div>
            </MotionFadeIn>

            <MotionFadeIn delay={0.25}>
              <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#123D32] hover:-translate-y-0.5 hover:shadow-sm h-full">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F3F1] text-[#123D32] flex items-center justify-center font-bold text-base">
                    2
                  </div>
                  <h3 className="font-bold text-xl text-[#123D32]">
                    Clear Structure
                  </h3>
                  <p className="text-sm text-[#555B57] leading-relaxed">
                    We design straightforward page structures and clear navigation so your systems remain easy to understand and maintain over time.
                  </p>
                </div>
              </div>
            </MotionFadeIn>

            <MotionFadeIn delay={0.3}>
              <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#123D32] hover:-translate-y-0.5 hover:shadow-sm h-full">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F3F1] text-[#123D32] flex items-center justify-center font-bold text-base">
                    3
                  </div>
                  <h3 className="font-bold text-xl text-[#123D32]">
                    Connected Workflows
                  </h3>
                  <p className="text-sm text-[#555B57] leading-relaxed">
                    We link your everyday business software so routine tasks happen on their own. Spend less time copying data and more time with customers.
                  </p>
                </div>
              </div>
            </MotionFadeIn>
          </div>
        </div>

        {/* 3 Pillars Overview */}
        <div className="space-y-8 pb-10">
          <MotionFadeIn delay={0.15}>
            <div>
              <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                Offerings
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl text-[#123D32] tracking-tight mt-1">
                Three ways we help
              </h2>
              <p className="text-base sm:text-lg text-[#555B57] mt-2">
                Eleven focused services to support your business.
              </p>
            </div>
          </MotionFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, idx) => (
              <MotionFadeIn key={pillar.id} delay={0.2 + idx * 0.05}>
                <div
                  className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#123D32] hover:shadow-sm space-y-6 h-full"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                        {pillar.name}
                      </span>
                      <span className="text-xs text-[#555B57] font-medium">
                        {pillar.services.length} services
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-[#123D32] mb-2">
                      {pillar.name}
                    </h3>
                    <p className="text-sm text-[#555B57] mb-4 leading-relaxed">
                      {pillar.tagline}
                    </p>
                    <ul className="space-y-2.5 border-t border-[#E1E4E0] pt-4 text-sm text-[#1E2221]">
                      {pillar.services.map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="min-h-[44px] sm:min-h-[32px] py-1 text-[#1E2221] hover:text-[#123D32] hover:underline flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#123D32]" aria-hidden="true" />
                            <span>{s.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/services#${pillar.id}`}
                      className="min-h-[44px] inline-flex items-center text-sm font-semibold text-[#123D32] hover:underline"
                    >
                      View all {pillar.name} services →
                    </Link>
                  </div>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>

        {/* Global CTA Band */}
        <CTASection />
      </div>
    </div>
  );
}
