'use client';

import React from 'react';
import Link from 'next/link';
import { PILLARS } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function ServicesTaxonomySection() {
  return (
    <section className="w-full bg-[#F4F1E9] py-20 lg:py-28 border-b border-[#E5E2DA]" id="services">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#C83B35] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              <span>What We Do</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-[44px] leading-tight text-[#123D32] uppercase tracking-tight">
              Three clear ways we help your business.
            </h2>
          </div>
          <div className="max-w-md mt-4 md:mt-0 space-y-2">
            <p className="font-body text-xs sm:text-sm text-[#2A2A2A]/85 leading-relaxed">
              Automations connect your everyday business tools so routine tasks happen on their own. For example, when a new customer reaches out, their details save automatically and notify your team.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const isAutomate = pillar.id === 'automate';
            return (
              <ScrollReveal key={pillar.id} delay={idx * 120}>
                <div
                  className={`h-full flex flex-col justify-between bg-[#F4F1E9] p-7 border-t-2 ${
                    isAutomate ? 'border-t-[#C83B35]' : 'border-t-[#123D32]'
                  } border border-[#E5E2DA] transition-all duration-300 hover:-translate-y-1 hover:border-[#123D32] hover:shadow-sm active:scale-[0.99]`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span
                        className={`font-mono text-xs uppercase font-bold tracking-wider ${
                          isAutomate ? 'text-[#C83B35]' : 'text-[#123D32]'
                        }`}
                      >
                        {pillar.code}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 bg-[#ECE8DF] border border-[#E5E2DA] text-[#123D32] font-semibold">
                        {pillar.services.length} SERVICES
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl uppercase text-[#123D32] mb-2.5">
                      {pillar.name}
                    </h3>

                    <p className="font-body text-xs text-[#2A2A2A]/80 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="space-y-3.5 border-t border-[#E5E2DA] pt-4">
                      {pillar.services.map((service, sIdx) => {
                        const isLast = sIdx === pillar.services.length - 1;
                        return (
                          <div
                            key={service.id}
                            className={`${!isLast ? 'pb-3.5 border-b border-[#E5E2DA]/70' : 'pb-1'}`}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              aria-label={`View details for ${service.name}`}
                              className="group/link block min-h-[44px] flex flex-col justify-center"
                            >
                              <div className="flex items-center justify-between text-xs font-heading font-bold text-[#123D32] group-hover/link:text-[#C83B35] transition-colors">
                                <span>{service.name}</span>
                                <span className="font-mono text-[10px] text-[#C83B35] font-semibold">
                                  {service.index}
                                </span>
                              </div>
                              <p className="font-mono text-[11px] text-[#2A2A2A]/60 mt-0.5 line-clamp-1">
                                {service.tagline}
                              </p>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E5E2DA]">
                    <Link
                      href={`/services#${pillar.id}`}
                      aria-label={`See all ${pillar.name} services`}
                      className={`inline-flex items-center justify-between w-full font-mono text-xs uppercase font-bold min-h-[44px] transition-colors group/cta ${
                        isAutomate
                          ? 'text-[#C83B35] hover:text-[#99221f]'
                          : 'text-[#123D32] hover:text-[#0A261F]'
                      }`}
                    >
                      <span>See these services</span>
                      <span className="transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Section Closing Action */}
        <div className="mt-12 text-center">
          <Button href="/contact" aria-label="Contact us about our services" variant="primary" size="md">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
