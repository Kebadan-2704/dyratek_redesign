import React from 'react';
import Link from 'next/link';
import { PILLARS } from '@/data/services';

export function ServicesTaxonomySection() {
  const buildPillar = PILLARS.find((p) => p.id === 'build') || PILLARS[0];
  const automatePillar = PILLARS.find((p) => p.id === 'automate') || PILLARS[1];
  const growPillar = PILLARS.find((p) => p.id === 'create-grow') || PILLARS[2];

  return (
    <section className="w-full bg-[#F3F4F1] py-16 sm:py-20 lg:py-24 border-b border-[#E1E4E0]" id="services">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
        {/* Section Header */}
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#123D32]">
            Three clear ways we help your business
          </h2>
          <p className="text-base sm:text-lg text-[#555B57] mt-3 max-w-[65ch] leading-relaxed">
            We organize our services into three areas: Build, Automate, and Grow.
          </p>
        </div>

        {/* Asymmetric Layout: Build Featured Left + Automate & Grow Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* BUILD Featured Anchor Card (4 Services) */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F0F3F1] text-[#123D32] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl text-[#123D32] mb-2">{buildPillar.name}</h3>
              <p className="text-base text-[#555B57] leading-relaxed mb-6">
                {buildPillar.tagline}
              </p>
              <div className="space-y-3.5 border-t border-[#E1E4E0] pt-5">
                <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                  Included services:
                </div>
                <ul className="space-y-2.5">
                  {buildPillar.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-start gap-2.5 text-sm text-[#1E2221] hover:text-[#123D32]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#123D32] mt-2 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium group-hover:underline">{service.name}</div>
                          <div className="text-xs text-[#555B57]">{service.tagline}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-[#E1E4E0] mt-8">
              <Link
                href="/services#build"
                className="text-sm font-semibold text-[#123D32] hover:underline"
              >
                View all Build services
              </Link>
            </div>
          </div>

          {/* Right Column: Automate & Grow Stacked */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* AUTOMATE Card (2 Services) */}
            <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs flex-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F0F3F1] text-[#123D32] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#123D32] mb-1.5">{automatePillar.name}</h3>
                <p className="text-sm text-[#555B57] leading-relaxed mb-4">
                  {automatePillar.tagline}
                </p>
                <ul className="space-y-2.5 text-sm text-[#1E2221] border-t border-[#E1E4E0] pt-4">
                  {automatePillar.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-start gap-2.5 text-sm text-[#1E2221] hover:text-[#123D32]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#123D32] mt-2 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium group-hover:underline">{service.name}</div>
                          <div className="text-xs text-[#555B57]">{service.tagline}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E1E4E0] mt-5">
                <Link
                  href="/services#automate"
                  className="text-sm font-semibold text-[#123D32] hover:underline"
                >
                  View all Automate services
                </Link>
              </div>
            </div>

            {/* GROW Card (All 5 Services Listed) */}
            <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 flex flex-col justify-between shadow-xs flex-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F0F3F1] text-[#123D32] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#123D32] mb-1.5">{growPillar.name}</h3>
                <p className="text-sm text-[#555B57] leading-relaxed mb-4">
                  {growPillar.tagline}
                </p>
                <ul className="space-y-2 text-sm text-[#1E2221] border-t border-[#E1E4E0] pt-4">
                  {growPillar.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between text-sm text-[#1E2221] hover:text-[#123D32]"
                      >
                        <span className="font-medium group-hover:underline">{service.name}</span>
                        <span className="text-xs text-[#555B57]">{service.shortName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#E1E4E0] mt-5">
                <Link
                  href="/services#create-grow"
                  className="text-sm font-semibold text-[#123D32] hover:underline"
                >
                  View all Grow services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
