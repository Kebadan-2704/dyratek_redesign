'use client';

import React from 'react';
import { TextHighlight } from '@/components/motion/TextHighlight';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function PhilosophySection() {
  return (
    <section className="w-full bg-[#F4F1E9] py-20 lg:py-28 border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Column Left: Positioning Label */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#123D32] font-bold">
                  02 / CORE PHILOSOPHY
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
                The Modern Delivery Model
              </h2>
              <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                Transforming complex commercial challenges into resilient digital systems through strict engineering discipline, automated workflows, and strategic interface design.
              </p>
              <div className="p-3 bg-[#ECE8DF] border-l-2 border-[#C83B35] font-mono text-[10px] text-[#2A2A2A]/70 space-y-1">
                <div>DELIVERY PARADIGM: INTEGRATED</div>
                <div>METHOD: MULTI-DISCIPLINARY SQUADS</div>
                <div>OUTCOME: SUSTAINED BUSINESS IMPACT</div>
              </div>
            </div>
          </div>

          {/* Column Right: Editorial Manifesto with Progressive Text Highlighting (Sequence 06) */}
          <div className="lg:col-span-9 flex flex-col justify-between">
            <TextHighlight threshold={0.35}>
              <blockquote className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug">
                “Where <span className="bg-[#123D32] text-[#F4F1E9] px-2.5 py-0.5 inline-block">product engineering</span> meets operational automation and measurable business growth. We partner with ambitious companies to replace fragmented workflows with <span className="text-[#C83B35] font-bold underline decoration-[#C83B35] underline-offset-8">cohesive digital ecosystems</span> designed for long-term scale.”
              </blockquote>
            </TextHighlight>

            {/* Sequence 05: Scroll-triggered Section Reveals for 3 Manifesto Cards */}
            <ScrollReveal delay={150}>
              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#E5E2DA]">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold mb-1.5">
                    01. FULL SPECTRUM CAPABILITY
                  </div>
                  <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                    From cloud-native web architectures and mobile native apps to headless commerce backends and custom internal tools.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold mb-1.5">
                    02. APPLIED AUTOMATION
                  </div>
                  <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                    Pragmatic, high-utility automation—interconnecting CRMs, WhatsApp business messaging, and event-driven webhook pipelines.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold mb-1.5">
                    03. COMMERCIALLY ALIGNED
                  </div>
                  <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                    Every sprint, interface component, and campaign pipeline is engineered to convert demand and unlock operational margin.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
