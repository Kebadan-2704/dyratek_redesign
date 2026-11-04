import React from 'react';
import Link from 'next/link';
import { FOOTER_PILLARS, FOOTER_COMPANY, FOOTER_LEGAL } from '@/data/navigation';
import { DyratekLogo } from '@/components/ui/DyratekLogo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBFBF9] border-t border-[#E1E4E0]" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E1E4E0]">
          {/* Column 1: Brand & Action (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" aria-label="DYRATEK Home" className="inline-block">
              <DyratekLogo size="lg" />
            </Link>
            <p className="text-[15px] text-[#555B57] leading-relaxed max-w-sm">
              We design clean websites, mobile apps, and automated workflows that help your business work better.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#123D32] text-[#FBFBF9] hover:bg-[#0B2720] text-sm font-medium transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Column 2: Services Grouped by Pillar (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-semibold text-[#123D32] pb-2 border-b border-[#E1E4E0]">
              Services
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
              {FOOTER_PILLARS.map((pillar) => (
                <div key={pillar.title} className="space-y-2.5">
                  <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                    {pillar.title}
                  </div>
                  <ul className="space-y-1.5">
                    {pillar.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[13px] text-[#555B57] hover:text-[#123D32] transition-colors leading-snug block"
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

          {/* Column 3: Company & Governance (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-sm font-semibold text-[#123D32] pb-2 border-b border-[#E1E4E0]">
              Company
            </div>
            <ul className="space-y-2 pt-1">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#555B57] hover:text-[#123D32] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#555B57] hover:text-[#123D32] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555B57]">
          <div>
            &copy; 2026 DYRATEK. All rights reserved.
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
