import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

export function PrototypesSection() {
  return (
    <section className="w-full bg-[#F3F4F1] py-16 sm:py-20 lg:py-24 border-b border-[#E1E4E0]" id="work">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
        {/* Section Header */}
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#123D32]">
            Sample projects to show how we build
          </h2>
          <p className="text-base sm:text-lg text-[#555B57] mt-3 max-w-[65ch] leading-relaxed">
            These sample projects demonstrate the kinds of digital systems we design and build.
          </p>
        </div>

        {/* Notice Box */}
        <div className="rounded-xl bg-white border-l-4 border-l-[#123D32] border border-[#E1E4E0] p-4 text-sm text-[#555B57]">
          <strong className="text-[#123D32]">Notice:</strong> These are sample projects to show how we design and build. They are not work for real clients.
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.slug}
              className="rounded-2xl bg-white border border-[#E1E4E0] p-6 sm:p-9 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Column Left: Information & Specs */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-[#F0F3F1] text-[#123D32] font-semibold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#F3F4F1] text-[#555B57] font-medium border border-[#E1E4E0]">
                      Sample Project
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl text-[#123D32]">
                    <Link
                      href={`/work/${project.slug}`}
                      className="hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-base text-[#555B57] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                      Project Highlights:
                    </div>
                    <ul className="space-y-2 text-sm text-[#1E2221]">
                      {project.architectureDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#123D32] mt-2 flex-shrink-0" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E1E4E0] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 text-xs text-[#555B57]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#F3F4F1] border border-[#E1E4E0] text-[#123D32] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-sm font-semibold text-[#123D32] hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </div>

                {/* Column Right: Code-Drawn Visual Thumbnail */}
                <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#E1E4E0] rounded-xl p-5 select-none" aria-hidden="true">
                  {idx === 0 && (
                    /* Store Mockup */
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E1E4E0] text-xs font-medium text-[#123D32]">
                        <span>Store Catalog Preview</span>
                        <span className="text-[#555B57]">Cart drawer</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="bg-white border border-[#E1E4E0] rounded-lg p-3 space-y-1.5">
                          <div className="h-14 bg-[#F0F3F1] rounded flex items-center justify-center text-xs text-[#123D32] font-medium">
                            Product card
                          </div>
                          <div className="text-xs font-semibold text-[#1E2221]">Fast search</div>
                          <div className="text-[11px] text-[#123D32]">In stock</div>
                        </div>
                        <div className="bg-white border border-[#E1E4E0] rounded-lg p-3 space-y-1.5">
                          <div className="h-14 bg-[#F0F3F1] rounded flex items-center justify-center text-xs text-[#123D32] font-medium">
                            Product card
                          </div>
                          <div className="text-xs font-semibold text-[#1E2221]">Clear filters</div>
                          <div className="text-[11px] text-[#123D32]">In stock</div>
                        </div>
                      </div>
                      <div className="p-2 rounded bg-white border border-[#E1E4E0] flex justify-between items-center text-xs">
                        <span className="text-[#555B57]">Inventory status</span>
                        <span className="text-[#123D32] font-semibold">Automatic update</span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    /* Inquiry Flow Mockup */
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E1E4E0] text-xs font-medium text-[#123D32]">
                        <span>Connected Inquiry Flow</span>
                        <span className="text-[#555B57]">Automated</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-white border border-[#E1E4E0] flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#123D32]">1. Web Form Inquiry</span>
                          <span className="text-[#555B57]">Received</span>
                        </div>
                        <div className="h-3 flex justify-center items-center text-[#555B57]">
                          <svg className="w-3 h-3 text-[#123D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#E1E4E0] flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#123D32]">2. Customer Directory</span>
                          <span className="text-[#123D32] font-medium">Record saved</span>
                        </div>
                        <div className="h-3 flex justify-center items-center text-[#555B57]">
                          <svg className="w-3 h-3 text-[#123D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#E1E4E0] flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#123D32]">3. Team Alert</span>
                          <span className="text-[#123D32] font-medium">Notification</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    /* Design Kit Swatches */
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E1E4E0] text-xs font-medium text-[#123D32]">
                        <span>Design Kit Swatches</span>
                        <span className="text-[#555B57]">Consistent UI</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-10 rounded-md bg-[#123D32] text-[#FBFBF9] text-[10px] flex items-center justify-center font-medium">
                          Forest
                        </div>
                        <div className="h-10 rounded-md bg-[#FBFBF9] border border-[#E1E4E0] text-[#1E2221] text-[10px] flex items-center justify-center font-medium">
                          Porcelain
                        </div>
                        <div className="h-10 rounded-md bg-[#1E2221] text-[#FBFBF9] text-[10px] flex items-center justify-center font-medium">
                          Charcoal
                        </div>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <div className="h-8 rounded-lg bg-[#123D32] text-[#FBFBF9] text-xs font-medium flex items-center justify-center">
                          Primary Button
                        </div>
                        <div className="h-8 rounded-lg bg-white border border-[#E1E4E0] text-[#123D32] text-xs font-medium flex items-center justify-center">
                          Secondary Button
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects Action */}
        <div className="text-center pt-4">
          <Link
            href="/work"
            className="inline-flex items-center justify-center h-12 px-7 rounded-xl bg-white border border-[#E1E4E0] text-[#123D32] text-base font-medium hover:bg-[#F3F4F1] transition-colors shadow-xs"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
