import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { CTASection } from '@/components/sections/CTASection';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

export const metadata: Metadata = {
  title: 'Our Work — Sample Projects & Concepts | DYRATEK',
  description:
    'Explore sample projects showing how we build clean online stores, workflow automations, and design kits.'
};

export default function WorkPage() {
  return (
    <div className="w-full bg-[#FBFBF9] py-10 sm:py-14 lg:py-18 border-b border-[#E1E4E0]">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-10 lg:space-y-14">
        {/* Page Hero */}
        <MotionFadeIn>
          <div className="pb-12 border-b border-[#E1E4E0] space-y-4 max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
              Our Work
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight tracking-tight">
              Sample projects and concepts.
            </h1>
            <p className="text-lg text-[#555B57] leading-relaxed pt-1">
              These sample projects demonstrate the kinds of digital systems we design and build.
            </p>

            <div className="mt-4 p-4 rounded-xl bg-[#F0F3F1] border border-[#E1E4E0] text-sm text-[#1E2221]">
              <strong className="text-[#123D32]">Notice:</strong> These are sample demonstration projects to show how we design and build. They are not work for real clients.
            </div>
          </div>
        </MotionFadeIn>

        {/* Projects List */}
        <div className="space-y-10">
          {PROJECTS.map((project, pIdx) => (
            <MotionFadeIn key={project.slug} delay={pIdx * 0.08}>
              <article
                className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-10 shadow-xs transition-all duration-300 hover:border-[#123D32] hover:shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="px-2.5 py-1 rounded-md bg-[#F0F3F1] text-[#123D32]">
                        Category: {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#F3F4F1] text-[#555B57]">
                        Demonstration Sample
                      </span>
                    </div>

                    <h2 className="font-bold text-2xl sm:text-3xl text-[#123D32] tracking-tight">
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123D32] rounded-md"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-base sm:text-lg text-[#555B57] leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-[#E1E4E0]">
                      <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                        Key Highlights:
                      </div>
                      <ul className="space-y-2">
                        {project.architectureDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-sm text-[#1E2221]">
                            <svg
                              className="w-4 h-4 text-[#123D32] mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-[#F3F4F1] border border-[#E1E4E0] text-xs font-medium text-[#123D32]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 rounded-xl bg-[#FBFBF9] border border-[#E1E4E0] p-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide border-b border-[#E1E4E0] pb-2">
                        Project Format
                      </div>
                      <div className="space-y-1.5 text-sm text-[#555B57]">
                        <div>Type: Concept demonstration</div>
                        <div>Status: Interactive preview</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E1E4E0]">
                      <Link
                        href={`/work/${project.slug}`}
                        className="min-h-[48px] px-5 rounded-xl bg-[#123D32] text-[#FBFBF9] text-sm font-semibold flex items-center justify-center hover:bg-[#0B2720] active:scale-[0.98] transition-all shadow-xs"
                      >
                        View project details →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </MotionFadeIn>
          ))}
        </div>

        {/* Global CTA Band */}
        <CTASection />
      </div>
    </div>
  );
}
