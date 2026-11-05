'use client';

import React from 'react';
import Link from 'next/link';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';
import { MagneticButton } from '@/components/motion/MagneticButton';

export function CTASection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" id="contact-briefing">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <MotionFadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-[#123D32] text-[#FBFBF9] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-md">
            {/* Ambient Background Grid Glow */}
            <div
              className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#1b5546] blur-3xl opacity-40 pointer-events-none -z-0"
              aria-hidden="true"
            />
            <div
              className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-[#0a231d] blur-2xl opacity-60 pointer-events-none -z-0"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-3 max-w-xl">
              <span className="inline-block px-3 py-1 rounded-md bg-[#1d4f42] text-xs font-semibold text-[#D8D4CA] uppercase tracking-wider">
                Start A Conversation
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FBFBF9] leading-tight tracking-tight">
                Ready to build something reliable?
              </h2>
              <p className="text-base sm:text-lg text-[#D8D4CA] leading-relaxed">
                Send us a message to discuss your timeline, goals, and ideas. We will be happy to talk through options.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <MagneticButton strength={0.25} className="w-full md:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full md:w-auto min-h-[52px] px-8 rounded-xl bg-[#FBFBF9] text-[#123D32] font-semibold text-base hover:bg-white active:scale-[0.98] transition-all shadow-sm group"
                >
                  <span>Contact us</span>
                  <span className="ml-2 transform group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
