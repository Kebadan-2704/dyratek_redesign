'use client';

import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function PrototypesSection() {
  return (
    <section className="w-full bg-[#F4F1E9] py-20 lg:py-28 border-b border-[#E5E2DA]" id="work">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#123D32] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              <span>Sample Work</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-[44px] leading-tight text-[#123D32] uppercase tracking-tight">
              Sample projects to show how we build.
            </h2>
          </div>
        </div>

        {/* Notice Box */}
        <div className="mb-10 p-4 bg-[#ECE8DF] border-l-4 border-[#123D32] text-xs font-body text-[#2A2A2A]">
          <strong>Notice:</strong> These are sample projects to show how we design and build. They are not work for real clients.
        </div>

        {/* Projects Stack */}
        <div className="space-y-10">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 150}>
              <div className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 lg:p-10 transition-all duration-300 hover:border-[#123D32]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Column Left: Information & Specs */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Meta Qualifier Strip */}
                      <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-[10px]">
                        <span className="px-2 py-0.5 bg-[#ECE8DF] text-[#123D32] font-bold border border-[#E5E2DA]">
                          {project.category}
                        </span>
                        <span className="px-2 py-0.5 bg-[#ECE8DF] text-[#2A2A2A]/70 border border-[#E5E2DA]">
                          SAMPLE PROJECT
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-2xl lg:text-3xl uppercase text-[#123D32] mb-3">
                        <Link
                          href={`/work/${project.slug}`}
                          aria-label={`View details for ${project.title}`}
                          className="hover:text-[#C83B35] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="font-body text-sm text-[#2A2A2A]/85 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Architecture Details */}
                      <div className="space-y-2 mb-6">
                        {project.architectureDetails.slice(0, 3).map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 font-mono text-xs text-[#2A2A2A]/80">
                            <span className="text-[#C83B35] font-bold" aria-hidden="true">›</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions & Tech Stack */}
                    <div className="pt-6 border-t border-[#E5E2DA] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[#ECE8DF] text-[#123D32] font-medium border border-[#E5E2DA]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/work/${project.slug}`}
                        aria-label={`View details for ${project.title}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-[#123D32] font-bold hover:text-[#C83B35] transition-colors min-h-[44px]"
                      >
                        <span>View details</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Column Right: Overview Panel */}
                  <div className="lg:col-span-5 bg-[#ECE8DF] border border-[#E5E2DA] p-5 font-mono text-[10px]">
                    <div className="flex justify-between items-center pb-2.5 border-b border-[#E5E2DA] text-[#2A2A2A]/60">
                      <span className="font-bold text-[#123D32]">PROJECT OVERVIEW 0{idx + 1}</span>
                      <span className="text-[#123D32]">SAMPLE</span>
                    </div>

                    <div className="py-4 space-y-3">
                      <div className="bg-[#F4F1E9] p-3 border border-[#E5E2DA] space-y-1">
                        <div className="text-[#2A2A2A]/60 text-[9px] uppercase">The Challenge</div>
                        <div className="font-body text-xs text-[#2A2A2A]">{project.challenge}</div>
                      </div>

                      <div className="bg-[#F4F1E9] p-3 border border-[#E5E2DA] space-y-1">
                        <div className="text-[#2A2A2A]/60 text-[9px] uppercase">How We Solved It</div>
                        <div className="font-body text-xs text-[#2A2A2A]">{project.solution}</div>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#E5E2DA] flex justify-between items-center text-[#2A2A2A]/60 text-[9px]">
                      <span>FORMAT: WORKING PREVIEW</span>
                      <span className="text-[#123D32] font-bold">READY TO REVIEW</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Work Link */}
        <div className="mt-12 text-center">
          <Button href="/work" aria-label="View all sample projects" variant="secondary" size="md" showArrow>
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
