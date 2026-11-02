import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PILLARS } from '@/data/services';

export const metadata: Metadata = {
  title: 'About DYRATEK — Digital Product Foundry & Engineering Practice',
  description:
    'DYRATEK operates as an elite digital product foundry combining Swiss modernist design discipline with production software engineering and business automation.'
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Page Hero */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>INSTITUTIONAL DOSSIER // ABOUT DYRATEK</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Architectural precision.<br />
            Production-grade engineering.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            DYRATEK is a digital product foundry and technical engineering practice. We partner with forward-looking enterprises to design, engineer, and scale resilient software systems and growth engines.
          </p>
        </div>

        {/* Founding Philosophy & Editorial Stance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 mb-20 border-b border-[#E5E2DA]">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C83B35] font-bold">
                01 // THE FOUNDRY MODEL
              </span>
              <h2 className="font-heading font-bold text-2xl uppercase text-[#123D32]">
                Beyond Generic Agency Templates
              </h2>
              <div className="p-4 bg-[#ECE8DF] border-l-2 border-[#123D32] font-mono text-[11px] space-y-2 text-[#2A2A2A]/80">
                <div>FOUNDRY DISCIPLINE: SWISS MODERNISM</div>
                <div>CODE GOVERNANCE: 100% IP SOVEREIGNTY</div>
                <div>FOCUS: COMMERCIAL CREDIBILITY</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 font-body text-sm sm:text-base text-[#2A2A2A]/85 leading-relaxed">
            <p className="font-heading font-semibold text-xl sm:text-2xl text-[#123D32] leading-snug">
              Most digital solutions suffer from a fundamental disconnect: creative agencies deliver attractive interfaces that collapse under technical scale, while legacy engineering firms build functional backends wrapped in opaque, disjointed user experiences.
            </p>
            <p>
              DYRATEK operates at the intersection of architectural design and production engineering. We reject ephemeral design trends—such as gratuitous glassmorphism, floating decorative blobs, and artificial visual clutter—in favor of International Typographic Style (Swiss Modernism): visible hairline grids, mathematical proportions, and clear typography.
            </p>
            <p>
              Every system we engineer is built with modern, maintainable technologies: Next.js, React, TypeScript, and Tailwind CSS. We deliver clean, modular codebases that your internal teams can easily maintain and extend, backed by 100% intellectual property sovereignty and zero vendor lock-in.
            </p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="pb-20 mb-20 border-b border-[#E5E2DA]">
          <SectionHeading
            index="02"
            label="ENGINEERING PRINCIPLES"
            heading="How We Build"
            description="Our technical and operational standards are non-negotiable benchmarks applied to every engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-3 block">
                  PRINCIPLE // 01
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                  Deterministic Performance
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  We engineer platforms for sub-second Core Web Vitals, optimal edge caching, and atomic asset budgets. Speed is treated as a core product feature, not an afterthought.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[10px] text-[#2A2A2A]/60">
                BENCHMARK: LIGHTHOUSE &ge; 95
              </div>
            </div>

            <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-3 block">
                  PRINCIPLE // 02
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                  Complete IP Sovereignty
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  You retain full, unencumbered ownership of all custom code, design tokens, and infrastructure configurations. No recurring license fees or proprietary closed runtimes.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[10px] text-[#2A2A2A]/60">
                BENCHMARK: 100% CLIENT CODE OWNERSHIP
              </div>
            </div>

            <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-3 block">
                  PRINCIPLE // 03
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                  Pragmatic Automation
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  We automate repetitive operational friction points with error-resilient webhook pipelines and CRM synchronization, freeing talent for high-leverage commercial initiatives.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[10px] text-[#2A2A2A]/60">
                BENCHMARK: ZERO MANUAL DATA RE-ENTRY
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Overview */}
        <div className="pb-20 mb-20 border-b border-[#E5E2DA]">
          <SectionHeading
            index="03"
            label="THE 3-PILLAR STRUCTURE"
            heading="Our Practice Domains"
            description="Exactly 11 services across 3 pillars to cover your entire digital lifecycle."
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
                        <Link href={`/services/${s.slug}`} className="hover:text-[#123D32]">
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
              READY TO COMMENCE?
            </div>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-[#F4F1E9]">
              Schedule a Technical Discovery Sprint
            </h2>
            <p className="font-body text-xs text-[#F4F1E9]/80 max-w-lg mt-2">
              Discuss your architectural requirements directly with our senior engineering and design leads.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" variant="accent" size="md" showArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

