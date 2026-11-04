'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function CTASection() {
  return (
    <section className="w-full bg-[#123D32] text-[#F4F1E9] py-20 lg:py-28" id="contact-briefing">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4F1E9]/70 font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F1E9] leading-[1.05]">
              Ready to start your project?
            </h2>

            <p className="font-body text-base lg:text-lg text-[#F4F1E9]/80 max-w-xl mx-auto leading-relaxed">
              Send us a message to discuss your timeline, goals, and ideas. We will be happy to talk through options.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                aria-label="Contact us to get started"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F4F1E9] text-[#123D32] font-mono text-xs uppercase tracking-wider font-bold px-8 py-4 min-h-[48px] hover:bg-white transition-colors group"
              >
                <span className="w-2 h-2 bg-[#C83B35]" aria-hidden="true" />
                <span className="text-[#123D32]">Contact us</span>
                <span className="text-[#123D32] group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
