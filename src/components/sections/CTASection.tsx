'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function CTASection() {
  return (
    <section className="w-full bg-[#123D32] text-[#F4F1E9] py-20 lg:py-28" id="contact-briefing">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Column Left: Main Headline & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#F4F1E9]/70 font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
                <span>INITIATE COLLABORATION</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F1E9] mb-6 leading-[1.05]">
                Have an ambitious<br />
                idea?<br />
                <span className="text-[#A5D6C6]">Let&apos;s build it.</span>
              </h2>

              <p className="font-body text-base text-[#F4F1E9]/80 max-w-lg mb-10 leading-relaxed">
                Whether you are architecting a custom web platform, mobile application, deploying automated business workflows, or scaling commercial growth, our senior team is ready to collaborate.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F4F1E9] text-[#123D32] font-mono text-xs uppercase tracking-wider font-bold px-7 py-4 min-h-[48px] hover:bg-white transition-colors group"
                >
                  <span className="w-2 h-2 bg-[#C83B35]" aria-hidden="true" />
                  <span className="text-[#123D32]">Start a Project</span>
                  <span className="text-[#123D32] group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F4F1E9] border border-[#F4F1E9]/30 font-mono text-xs uppercase tracking-wider font-semibold px-7 py-4 min-h-[48px] hover:bg-[#F4F1E9]/10 hover:border-[#F4F1E9] transition-colors"
                >
                  <span>Schedule Discovery Session</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* Column Right: Direct Governance & Protocol Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A261F] border border-[#1E5245] p-6 lg:p-8 space-y-6">
                <div className="flex justify-between items-center pb-3 border-b border-[#1E5245] font-mono text-xs text-[#A5D6C6]">
                  <span className="font-bold">COLLABORATION PROTOCOL</span>
                  <span>DISCOVERY SPRINTS</span>
                </div>

                <p className="font-body text-xs text-[#F4F1E9]/80 leading-relaxed">
                  We review inbound architectural parameters directly with senior engineering and design leads. High-velocity scoping delivered within two business days.
                </p>

                <div className="space-y-3 pt-2 border-t border-[#1E5245] font-mono text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#A5D6C6]">DIRECT INQUIRIES:</span>
                    <a
                      href="mailto:hello@dyratek.com"
                      className="text-[#F4F1E9] font-bold hover:underline"
                    >
                      hello@dyratek.com
                    </a>
                  </div>
                  <div className="text-[10px] text-[#A5D6C6] font-mono">
                    DIRECT SCOPE REVIEW // CONFIDENTIAL ARCHITECTURE BRIEFING
                  </div>
                  <div className="flex justify-between text-[#A5D6C6] text-[11px] pt-1">
                    <span>INITIAL ENGAGEMENT:</span>
                    <span className="text-[#F4F1E9]">Technical / Scoping Call</span>
                  </div>
                  <div className="flex justify-between text-[#A5D6C6] text-[11px]">
                    <span>CODE OWNERSHIP:</span>
                    <span className="text-[#F4F1E9]">100% IP Sovereignty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
