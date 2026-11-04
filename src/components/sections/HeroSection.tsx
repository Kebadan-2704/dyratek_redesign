'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { MaskedReveal } from '@/components/motion/MaskedReveal';
import { NexusConvergence } from '@/components/nexus/NexusConvergence';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F1E9] py-14 lg:py-24 border-b border-[#E5E2DA]">
      {/* Top Section Index Meta Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-16 mb-8 lg:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E5E2DA] font-mono text-[10px] sm:text-xs text-[#2A2A2A]/70">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span className="text-[#123D32] font-bold tracking-wider uppercase">
              DIGITAL STUDIO
            </span>
            <span className="text-[#E5E2DA] hidden sm:inline" aria-hidden="true">|</span>
            <span className="tracking-widest uppercase hidden md:inline">
              WEBSITES &amp; APPS
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123D32] inline-block" aria-hidden="true" />
              3 FOCUS AREAS
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C83B35] inline-block" aria-hidden="true" />
              11 SERVICES
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Column Left: Editorial Typography & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Sub-badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-2 sm:px-2.5 py-1 bg-[#ECE8DF] font-mono text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-[#123D32] font-bold border border-[#E5E2DA]">
                BUILD • AUTOMATE • GROW
              </span>
            </div>

            {/* Sequence 02: Masked Headline Reveal */}
            <MaskedReveal delay={120}>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.03em] text-[#123D32] uppercase mb-6 break-words">
                Websites and apps<br />
                built for your<br />
                <span className="text-[#123D32]/75">business.</span>
              </h1>
            </MaskedReveal>

            {/* Sequence 03: Paragraph and CTA Stagger */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-300 fill-mode-both">
              <p className="font-body text-base lg:text-lg text-[#2A2A2A] max-w-xl leading-relaxed opacity-90">
                We design fast websites and apps that help your company work better. We also connect your business tools so routine tasks happen automatically.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button href="/contact" aria-label="Contact us to discuss your project" variant="primary" size="md" showArrow className="w-full sm:w-auto text-center justify-center">
                  Contact us
                </Button>
                <Button href="/services" aria-label="See services we offer" variant="secondary" size="md" className="w-full sm:w-auto text-center justify-center">
                  See services
                </Button>
              </div>

              {/* Value Proposition Metric Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 border-t border-[#E5E2DA]">
                <div>
                  <div className="font-heading font-bold text-2xl lg:text-3xl text-[#123D32]">
                    Fast Pages
                  </div>
                  <div className="font-mono text-[11px] uppercase text-[#2A2A2A]/60 tracking-wider mt-0.5">
                    Tested across devices
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl lg:text-3xl text-[#123D32]">
                    Connected Tools
                  </div>
                  <div className="font-mono text-[11px] uppercase text-[#2A2A2A]/60 tracking-wider mt-0.5">
                    Automated daily workflows
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl lg:text-3xl text-[#123D32]">
                    Direct Support
                  </div>
                  <div className="font-mono text-[11px] uppercase text-[#2A2A2A]/60 tracking-wider mt-0.5">
                    Clear communication
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Interactive 3D Convergence Nexus Canvas */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px] lg:min-h-[520px]">
            <div className="w-full h-full relative flex items-center justify-center">
              <NexusConvergence />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
