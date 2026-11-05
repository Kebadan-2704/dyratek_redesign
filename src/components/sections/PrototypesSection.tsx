'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { PROJECTS } from '@/data/projects';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

export function PrototypesSection() {
  const [activeTabs, setActiveTabs] = useState<Record<string, 'highlights' | 'deliverables'>>({
    'online-store': 'highlights',
    'inquiry-follow-up': 'highlights',
    'design-kit': 'highlights'
  });
  const shouldReduceMotion = useReducedMotion();

  const toggleTab = (slug: string, tab: 'highlights' | 'deliverables') => {
    setActiveTabs((prev) => ({ ...prev, [slug]: tab }));
  };

  return (
    <section className="relative w-full bg-[#F3F4F1] py-12 sm:py-16 lg:py-20 border-b border-[#E1E4E0]" id="work">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <MotionFadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E1E4E0] text-xs font-semibold text-[#123D32]">
              <span>Sample Work</span>
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#123D32] tracking-tight mt-2">
              Sample projects to show how we build
            </h2>
            <p className="text-base sm:text-lg text-[#555B57] max-w-[65ch] leading-relaxed mt-1">
              These sample projects demonstrate the kinds of digital systems we design and build.
            </p>
          </MotionFadeIn>
        </div>

        {/* Notice Box */}
        <MotionFadeIn>
          <div className="rounded-xl bg-white border-l-4 border-l-[#123D32] border border-[#E1E4E0] p-4 text-sm text-[#555B57] shadow-xs">
            <strong className="text-[#123D32]">Notice:</strong> These are sample projects to show how we design and build. They are not work for real clients.
          </div>
        </MotionFadeIn>

        {/* Sticky Stacked Cards Deck */}
        <div className="space-y-8 pb-4">
          {PROJECTS.map((project, idx) => {
            const currentTab = activeTabs[project.slug] || 'highlights';
            const stickyTopClass = [
              'sm:sticky sm:top-24',
              'sm:sticky sm:top-28',
              'sm:sticky sm:top-32'
            ][idx] || 'sm:sticky sm:top-24';

            return (
              <motion.article
                key={project.slug}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl bg-white border border-[#E1E4E0] p-6 sm:p-9 shadow-card hover:border-[#123D32] transition-all duration-300 ${stickyTopClass} z-[${10 + idx}]`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Column Left: Information & Interactive Tabs */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-[#F0F3F1] text-[#123D32] font-semibold">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#F3F4F1] text-[#555B57] font-medium border border-[#E1E4E0]">
                        Demonstration Concept
                      </span>
                    </div>

                    <h3 className="font-bold text-2xl sm:text-3xl text-[#123D32]">
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123D32] rounded"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-base text-[#555B57] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Interactive Tab Switcher */}
                    <div className="pt-2 border-t border-[#E1E4E0]">
                      <div className="flex items-center gap-2 mb-3" role="tablist" aria-label="Project detail tabs">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={currentTab === 'highlights'}
                          onClick={() => toggleTab(project.slug, 'highlights')}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer min-h-[40px] ${
                            currentTab === 'highlights'
                              ? 'bg-[#123D32] text-[#FBFBF9]'
                              : 'bg-[#F3F4F1] text-[#555B57] hover:text-[#123D32]'
                          }`}
                        >
                          Key Highlights
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={currentTab === 'deliverables'}
                          onClick={() => toggleTab(project.slug, 'deliverables')}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer min-h-[40px] ${
                            currentTab === 'deliverables'
                              ? 'bg-[#123D32] text-[#FBFBF9]'
                              : 'bg-[#F3F4F1] text-[#555B57] hover:text-[#123D32]'
                          }`}
                        >
                          Included Deliverables ({project.deliverables.length})
                        </button>
                      </div>

                      {/* Tab Content Panels */}
                      {currentTab === 'highlights' ? (
                        <ul className="space-y-2 text-sm text-[#1E2221]">
                          {project.architectureDetails.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#123D32] mt-2 flex-shrink-0" aria-hidden="true" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-2 pt-1">
                          {project.deliverables.map((deliv, dIdx) => (
                            <div key={dIdx} className="p-3 rounded-xl bg-[#FBFBF9] border border-[#E1E4E0] text-xs space-y-0.5">
                              <div className="font-semibold text-[#123D32]">{deliv.label}</div>
                              <div className="text-[#555B57]">{deliv.specification}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#F3F4F1] border border-[#E1E4E0] text-xs font-medium text-[#123D32]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column Right: Interactive Mockup Simulation Preview */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-xl border border-[#E1E4E0] bg-[#FBFBF9] p-5 space-y-4">
                      <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E1E4E0]">
                        <span className="font-semibold text-[#123D32]">Interactive Prototype</span>
                        <span className="px-2 py-0.5 rounded bg-[#E8EFEA] text-[#123D32] font-medium text-[11px]">
                          Simulated Preview
                        </span>
                      </div>

                      {/* Tailored Visual UI Mockup per project */}
                      {project.slug === 'online-store' && (
                        <div className="space-y-3">
                          <div className="rounded-xl bg-white border border-emerald-200/80 p-3 text-xs space-y-2 shadow-xs">
                            <div className="flex justify-between items-center text-[#555B57]">
                              <span className="font-semibold text-emerald-900">Catalog search</span>
                              <span className="font-mono text-[11px] text-cyan-600 font-bold">Turbopack SSR</span>
                            </div>
                            <div className="h-7 rounded-lg bg-emerald-50/60 border border-emerald-200 flex items-center px-2.5 text-emerald-800 text-[11px]">
                              <span>🔍 Search products...</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-200 space-y-1 shadow-2xs">
                              <div className="h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/30 flex items-center justify-center text-xs text-blue-900 font-bold">
                                📦 Studio Shelf
                              </div>
                              <div className="font-bold text-xs text-blue-950">$165.00</div>
                              <div className="text-[10px] text-emerald-700 font-bold">✓ Live in stock</div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-50 to-rose-50/60 border border-amber-200 space-y-1 shadow-2xs">
                              <div className="h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-rose-500/30 flex items-center justify-center text-xs text-amber-900 font-bold">
                                ⚡ Automation Dock
                              </div>
                              <div className="font-bold text-xs text-amber-950">$240.00</div>
                              <div className="text-[10px] text-emerald-700 font-bold">✓ Live in stock</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === 'inquiry-follow-up' && (
                        <div className="space-y-2.5 text-xs">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 space-y-1 shadow-2xs">
                            <div className="flex justify-between text-blue-900 text-[11px] font-bold">
                              <span>Pipeline Trigger</span>
                              <span className="font-mono text-cyan-600">0.2s</span>
                            </div>
                            <div className="text-blue-950 font-medium text-[11px]">New website inquiry submitted</div>
                          </div>
                          <div className="flex justify-center text-indigo-600 font-bold text-sm">↓</div>
                          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 space-y-1 shadow-2xs">
                            <div className="flex justify-between text-emerald-900 text-[11px] font-bold">
                              <span>Automated Sync</span>
                              <span className="text-emerald-700 font-mono">Instant (14ms)</span>
                            </div>
                            <div className="text-emerald-950 font-medium text-[11px]">Database record created & team alerted</div>
                          </div>
                        </div>
                      )}

                      {project.slug === 'design-kit' && (
                        <div className="space-y-2 text-xs">
                          <div className="p-3 rounded-xl bg-white border border-purple-200 space-y-2 shadow-2xs">
                            <div className="font-bold text-purple-950 text-[11px]">Design Tokens Spectrum</div>
                            <div className="flex gap-2">
                              <span className="w-6 h-6 rounded-lg bg-[#7C3AED] shadow-sm" title="#7C3AED Electric Violet" />
                              <span className="w-6 h-6 rounded-lg bg-[#06B6D4] shadow-sm" title="#06B6D4 Neon Cyan" />
                              <span className="w-6 h-6 rounded-lg bg-[#10B981] shadow-sm" title="#10B981 Bright Emerald" />
                              <span className="w-6 h-6 rounded-lg bg-[#F97316] shadow-sm" title="#F97316 Sunset Coral" />
                              <span className="w-6 h-6 rounded-lg bg-[#EC4899] shadow-sm" title="#EC4899 Rose Pink" />
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-[11px] text-purple-950 space-y-0.5 shadow-2xs">
                            <div className="font-bold text-purple-900">Typography & Token Pipeline</div>
                            <div>Plus Jakarta Sans • 8px Modular Scale • 100% WCAG AAA</div>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 border-t border-[#E1E4E0]">
                        <Link
                          href={`/work/${project.slug}`}
                          className="min-h-[44px] w-full rounded-lg bg-[#123D32] text-[#FBFBF9] text-xs font-semibold flex items-center justify-center hover:bg-[#0B2720] transition-colors shadow-xs"
                        >
                          View complete case concept &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
