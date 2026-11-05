'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { PILLARS } from '@/data/services';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

export function ServicesTaxonomySection() {
  const buildPillar = PILLARS.find((p) => p.id === 'build') || PILLARS[0];
  const automatePillar = PILLARS.find((p) => p.id === 'automate') || PILLARS[1];
  const growPillar = PILLARS.find((p) => p.id === 'create-grow') || PILLARS[2];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-[#F3F4F1] py-12 sm:py-16 lg:py-20 border-b border-[#E1E4E0] overflow-hidden" id="services">
      {/* Background ambient multi-color glows */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/15 via-teal-400/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-purple-400/15 via-pink-400/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="space-y-3">
          <MotionFadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-emerald-300 text-xs font-bold text-emerald-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Core Taxonomy</span>
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#123D32] tracking-tight mt-2">
              Three clear ways we help your business
            </h2>
            <p className="text-base sm:text-lg text-[#555B57] max-w-[65ch] leading-relaxed mt-1">
              We organize our services into three distinct areas: Build, Automate, and Grow.
            </p>
          </MotionFadeIn>
        </div>

        {/* Asymmetric Layout: Build Featured Left + Automate & Grow Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* BUILD Featured Anchor Card: Emerald / Cyan Palette */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -4, rotate: -0.2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-white border-2 border-emerald-500/40 p-7 sm:p-9 flex flex-col justify-between shadow-xl hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <motion.path
                        initial={shouldReduceMotion ? {} : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs">
                    PILLAR 01
                  </span>
                </div>

                <h3 className="font-bold text-2xl text-emerald-950 mb-2">{buildPillar.name}</h3>
                <p className="text-base text-[#555B57] leading-relaxed mb-6">
                  {buildPillar.tagline}
                </p>

                <div className="space-y-3.5 border-t border-emerald-200/60 pt-5">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    Included services:
                  </div>
                  <ul className="space-y-2.5">
                    {buildPillar.services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-2.5 text-sm text-[#1E2221] hover:text-emerald-700 min-h-[40px] items-center"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <div className="font-semibold relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-emerald-600 after:transition-all after:duration-200">
                              {service.name}
                            </div>
                            <div className="text-xs text-[#555B57]">{service.tagline}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-200/60 mt-8">
                <Link
                  href="/services#build"
                  className="min-h-[44px] text-sm font-bold text-emerald-700 inline-flex items-center gap-1.5 group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-emerald-700 after:transition-all after:duration-200">
                    View all Build services
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Automate & Grow Stacked */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* AUTOMATE Card: Electric Indigo / Violet Palette */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -3, rotate: 0.2 }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-white border-2 border-indigo-500/40 p-7 flex flex-col justify-between shadow-xl hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <motion.path
                        initial={shouldReduceMotion ? {} : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs">
                    PILLAR 02
                  </span>
                </div>

                <h3 className="font-bold text-xl text-indigo-950 mb-1.5">{automatePillar.name}</h3>
                <p className="text-sm text-[#555B57] leading-relaxed mb-4">
                  {automatePillar.tagline}
                </p>

                <div className="space-y-2 border-t border-indigo-200/60 pt-3.5">
                  <ul className="space-y-2">
                    {automatePillar.services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-center gap-2 text-sm text-[#1E2221] hover:text-indigo-700 min-h-[36px]"
                        >
                          <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" aria-hidden="true" />
                          <span className="font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-200">
                            {service.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-indigo-200/60 mt-4">
                <Link
                  href="/services#automate"
                  className="min-h-[44px] text-xs font-bold text-indigo-700 inline-flex items-center gap-1 group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-indigo-700 after:transition-all after:duration-200">
                    View all Automate services
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>

            {/* GROW Card: Sunset Amber / Rose Palette */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -3, rotate: -0.2 }}
              transition={{ duration: 0.35, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-white border-2 border-amber-500/40 p-7 flex flex-col justify-between shadow-xl hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow-lg shadow-amber-500/30 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <motion.path
                        initial={shouldReduceMotion ? {} : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-xs">
                    PILLAR 03
                  </span>
                </div>

                <h3 className="font-bold text-xl text-amber-950 mb-1.5">{growPillar.name}</h3>
                <p className="text-sm text-[#555B57] leading-relaxed mb-4">
                  {growPillar.tagline}
                </p>

                <div className="space-y-2 border-t border-amber-200/60 pt-3.5">
                  <ul className="space-y-1.5">
                    {growPillar.services.slice(0, 3).map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-center gap-2 text-sm text-[#1E2221] hover:text-amber-700 min-h-[36px]"
                        >
                          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" aria-hidden="true" />
                          <span className="font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-amber-600 after:transition-all after:duration-200">
                            {service.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-200/60 mt-4">
                <Link
                  href="/services#create-grow"
                  className="min-h-[44px] text-xs font-bold text-amber-700 inline-flex items-center gap-1 group"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-amber-700 after:transition-all after:duration-200">
                    View all Grow services ({growPillar.services.length})
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
