'use client';

import React from 'react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const ADVANTAGES = [
  {
    index: '01 // ONE TEAM',
    title: 'Designers & Coders Together',
    description:
      'Our designers and developers work side by side. That means no messy handoffs, faster delivery, and no miscommunication.'
  },
  {
    index: '02 // CODE HANDOVER',
    title: 'Clean Code Handover',
    description:
      'We hand over clean code files and documentation upon project completion.'
  },
  {
    index: '03 // SAVE TIME',
    title: 'Practical Automations',
    description:
      'We link your apps so tasks happen on their own. Spend less time copying data and more time running your business.'
  },
  {
    index: '04 // READY TO GROW',
    title: 'Built to Expand',
    description:
      'We write clean, standard code that is easy to update. As your business adds new services, your software grows with you.'
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
              <span>07 / WHY CHOOSE US</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-[44px] leading-tight text-[#123D32] uppercase tracking-tight">
              Why Businesses Choose DYRATEK
            </h2>
          </div>
          <p className="font-mono text-xs text-[#2A2A2A]/70 uppercase tracking-wider mt-4 md:mt-0 font-medium">
            SIMPLE • HONEST • DEPENDABLE
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
                  VERIFIED QUALITY
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
