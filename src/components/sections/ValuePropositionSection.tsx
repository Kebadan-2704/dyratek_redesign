'use client';

import React from 'react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const ADVANTAGES = [
  {
    index: '01 // DELIVERY',
    title: 'Integrated Execution',
    description:
      'Designers, software engineers, and growth strategists work in single cross-functional squads to eliminate communication silos and handoff delays.'
  },
  {
    index: '02 // SOVEREIGNTY',
    title: '100% Code Ownership',
    description:
      'You retain complete intellectual property and source code rights. No obscure licensing fees, closed vendor lock-in, or proprietary runtime traps.'
  },
  {
    index: '03 // PRAGMATISM',
    title: 'Applied Automation',
    description:
      'We implement structured, quantifiable automation to increase workflow velocity, customer conversion, and operational margin.'
  },
  {
    index: '04 // LONGEVITY',
    title: 'Engineered for Scale',
    description:
      'Architected on modular clean patterns and modern standards, allowing your systems to scale effortlessly as your business requirements expand.'
  }
];

export function ValuePropositionSection() {
  return (
    <section className="w-full bg-[#F4F1E9] py-20 lg:py-28 border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#C83B35] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              <span>07 / THE DYRATEK ADVANTAGE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-[44px] leading-tight text-[#123D32] uppercase tracking-tight">
              Why Growing Companies Choose Us
            </h2>
          </div>
          <p className="font-mono text-xs text-[#2A2A2A]/70 uppercase tracking-wider mt-4 md:mt-0 font-medium">
            FULL SOVEREIGNTY • ZERO LOCK-IN
          </p>
        </div>

        {/* 4 Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <ScrollReveal key={adv.index} delay={idx * 100}>
              <div
                className="h-full bg-[#F4F1E9] border border-[#E5E2DA] p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#123D32] hover:-translate-y-1"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase text-[#C83B35] font-bold mb-4">
                    {adv.index}
                  </div>
                  <h3 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-3">
                    {adv.title}
                  </h3>
                  <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E2DA] font-mono text-[9px] text-[#2A2A2A]/50 uppercase tracking-widest">
                  VERIFIED STANDARD
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
