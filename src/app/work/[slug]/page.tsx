import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { CTASection } from '@/components/sections/CTASection';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — DYRATEK'
    };
  }

  return {
    title: `${project.title} — Sample Project | DYRATEK`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`
    },
    openGraph: {
      title: `${project.title} — DYRATEK`,
      description: project.summary,
      url: `https://dyratek.com/work/${project.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — DYRATEK`,
      description: project.summary
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.heroHeadline,
    description: project.summary,
    creator: {
      '@type': 'Organization',
      name: 'DYRATEK',
      url: 'https://dyratek.com'
    },
    url: `https://dyratek.com/work/${project.slug}`
  };

  return (
    <div className="w-full bg-[#FBFBF9] py-14 sm:py-20 lg:py-24 border-b border-[#E1E4E0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#555B57] pb-4 border-b border-[#E1E4E0]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <span className="text-[#D4D8D2]" aria-hidden="true">/</span>
          <Link href="/work" className="hover:text-[#123D32]">Work</Link>
          <span className="text-[#D4D8D2]" aria-hidden="true">/</span>
          <span className="font-semibold text-[#123D32]">{project.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="space-y-5 max-w-3xl pb-8 border-b border-[#E1E4E0]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 rounded-md bg-[#F0F3F1] text-[#123D32]">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#F3F4F1] text-[#555B57]">
              Demonstration Sample
            </span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-[#555B57] leading-relaxed">
            {project.heroHeadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="/contact"
              className="h-12 px-7 rounded-xl bg-[#123D32] text-[#FBFBF9] text-base font-medium flex items-center justify-center shadow-xs hover:bg-[#0B2720] transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/work"
              className="h-12 px-7 rounded-xl bg-white border border-[#E1E4E0] text-[#123D32] text-base font-medium flex items-center justify-center hover:bg-[#F3F4F1] transition-colors"
            >
              See all projects
            </Link>
          </div>
        </div>

        {/* Concept Notice */}
        <div className="p-4 rounded-xl bg-[#F0F3F1] border border-[#E1E4E0] text-sm text-[#1E2221]">
          <strong className="text-[#123D32]">Notice:</strong> These are sample demonstration projects to show how we design and build. They are not work for real clients.
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-[#E1E4E0]">
          <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 space-y-4 shadow-xs">
            <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
              The Challenge
            </div>
            <h2 className="font-bold text-2xl text-[#123D32]">
              Initial situation
            </h2>
            <p className="text-base text-[#555B57] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-2xl bg-[#F0F3F1] border border-[#E1E4E0] p-7 sm:p-9 space-y-4 shadow-xs">
            <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
              Our Solution
            </div>
            <h2 className="font-bold text-2xl text-[#123D32]">
              What we designed
            </h2>
            <p className="text-base text-[#555B57] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-[#E1E4E0]">
          <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 space-y-5 shadow-xs">
            <h3 className="font-bold text-xl text-[#123D32]">
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {project.architectureDetails.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-3 text-base text-[#1E2221]">
                  <svg
                    className="w-5 h-5 text-[#123D32] mt-0.5 flex-shrink-0"
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

          <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 space-y-5 shadow-xs">
            <h3 className="font-bold text-xl text-[#123D32]">
              Included Deliverables
            </h3>
            <div className="space-y-3">
              {project.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E1E4E0] space-y-1">
                  <div className="font-semibold text-sm text-[#123D32]">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#555B57]">
                    {item.specification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global CTA Band */}
        <CTASection />
      </div>
    </div>
  );
}
