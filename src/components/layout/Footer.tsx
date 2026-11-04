'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FOOTER_PILLARS, FOOTER_COMPANY, FOOTER_LEGAL } from '@/data/navigation';
import { DyratekLogo } from '@/components/ui/DyratekLogo';

export default function Footer() {
  const [wordmarkRevealed, setWordmarkRevealed] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = wordmarkRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWordmarkRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="w-full bg-[#F4F1E9] border-t border-[#E5E2DA]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12">
          {/* Brand Colophon with Official Original Logo */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block" aria-label="DYRATEK Home">
                <DyratekLogo size="lg" />
              </Link>
              <p className="mt-5 font-body text-sm text-[#2A2A2A] max-w-sm leading-relaxed opacity-90">
                We build fast websites, mobile apps, and automated workflows that help your business grow.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#2A2A2A]/70">
                <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
                <span className="tracking-wider uppercase font-semibold text-[#123D32]">
                  BUILD • AUTOMATE • GROW
                </span>
              </div>
              <div className="p-3 bg-[#ECE8DF] border-l-2 border-[#123D32] font-mono text-[11px] text-[#2A2A2A]/80 space-y-1">
                <div>SERVICES: BUILD • AUTOMATE • GROW</div>
                <div>SIMPLE • FAST • BUILT TO LAST</div>
              </div>
            </div>
          </div>

          {/* Service Architecture (3 Pillars) */}
          <div className="md:col-span-4 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#123D32] font-bold border-b border-[#E5E2DA] pb-2">
              What We Do
            </div>
            <div className="space-y-4">
              {FOOTER_PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <div className="font-heading font-bold text-xs uppercase text-[#123D32] mb-1.5">
                    {pillar.title}
                  </div>
                  <ul className="space-y-1">
                    {pillar.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-body text-xs text-[#2A2A2A]/80 hover:text-[#123D32] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company & Governance */}
          <div className="md:col-span-3 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#123D32] font-bold border-b border-[#E5E2DA] pb-2">
              Company
            </div>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-xs text-[#2A2A2A]/80 hover:text-[#123D32] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#E5E2DA] space-y-2">
              <div className="font-mono text-xs text-[#2A2A2A]/70 uppercase tracking-wider font-semibold">
                Say Hello
              </div>
              <div className="font-body text-xs text-[#2A2A2A]">
                <Link
                  href="/contact"
                  className="text-[#123D32] font-bold hover:underline"
                >
                  Contact form
                </Link>
                <span className="text-[#123D32]/70 text-[10px] font-mono block mt-0.5">
                  Get in touch to talk through your project.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sequence 11: Large Footer Wordmark Reveal */}
        <div
          ref={wordmarkRef}
          style={{
            transitionDuration: '750ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className={`py-8 border-t border-[#E5E2DA] overflow-hidden w-full max-w-full transition-all select-none ${
            wordmarkRevealed
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-[0.98] translate-y-4 motion-reduce:opacity-100 motion-reduce:scale-100 motion-reduce:translate-y-0'
          }`}
          aria-hidden="true"
        >
          <div className="font-heading font-extrabold text-[7vw] lg:text-[112px] leading-none text-[#123D32]/10 tracking-tight text-center uppercase whitespace-nowrap overflow-hidden">
            DYRATEK • DIGITAL STUDIO
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#2A2A2A]/60">
          <div>
            &copy; 2026 DYRATEK. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#123D32] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
