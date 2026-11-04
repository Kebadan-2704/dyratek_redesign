import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Work — Sample Projects & Concepts | DYRATEK',
  description:
    'Explore sample projects showing how we build clean online stores, workflow automations, and design kits.'
};

export default function WorkPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Page Hero */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>OUR WORK</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Sample projects and concepts.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            These sample projects demonstrate the kinds of digital systems we design and build.
          </p>

          <div className="mt-8 p-4 bg-[#ECE8DF] border-l-4 border-[#123D32] text-xs font-body text-[#2A2A2A]">
            <strong>Notice:</strong> These are sample projects to show how we design and build. They are not work for real clients.
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.slug}
              className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 lg:p-10 transition-all duration-300 hover:border-[#123D32]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                    <span className="px-2 py-0.5 bg-[#ECE8DF] text-[#123D32] font-bold border border-[#E5E2DA]">
                      {project.pillar}
                    </span>
                    <span className="px-2 py-0.5 bg-[#ECE8DF] text-[#2A2A2A]/70 border border-[#E5E2DA]">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase text-[#123D32]">
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`View details for ${project.title}`}
                      className="hover:text-[#C83B35] transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="font-body text-base text-[#2A2A2A]/85 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[10px] uppercase text-[#123D32] font-bold">
                      PROJECT HIGHLIGHTS:
                    </div>
                    {project.architectureDetails.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 font-mono text-xs text-[#2A2A2A]/80">
                        <span className="text-[#C83B35] font-bold" aria-hidden="true">›</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-xs text-[#123D32] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#ECE8DF] border border-[#E5E2DA] p-6 font-mono text-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="font-bold text-[#123D32] border-b border-[#E5E2DA] pb-2 mb-3">
                      PROJECT OVERVIEW 0{idx + 1}
                    </div>
                    <div className="space-y-2 text-[#2A2A2A]/70 text-[11px]">
                      <div>FORMAT: Sample Preview</div>
                      <div>STATUS: Ready to View</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E2DA]">
                    <Link
                      href={`/work/${project.slug}`}
                      aria-label={`View details for ${project.title}`}
                      className="block w-full text-center py-3 bg-[#123D32] text-[#F4F1E9] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#1b4f42] transition-colors"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-[#123D32] text-[#F4F1E9] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs text-[#A5D6C6] uppercase tracking-wider mb-2 font-semibold">
              START YOUR PROJECT
            </div>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-[#F4F1E9]">
              Talk with our team
            </h2>
            <p className="font-body text-xs text-[#F4F1E9]/80 max-w-lg mt-2">
              Send us a message to discuss your timeline, goals, and ideas.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" aria-label="Contact us about your project" variant="accent" size="md" showArrow>
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
