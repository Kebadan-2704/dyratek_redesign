import React from 'react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" id="contact-briefing">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="rounded-2xl bg-[#123D32] text-[#FBFBF9] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FBFBF9] leading-tight">
              Ready to start your project?
            </h2>
            <p className="text-base sm:text-lg text-[#D8D4CA] leading-relaxed">
              Send us a message to discuss your timeline, goals, and ideas. We will be happy to talk through options.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full md:w-auto h-12 px-8 rounded-xl bg-[#FBFBF9] text-[#123D32] font-semibold text-base hover:bg-white transition-colors shadow-xs"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
