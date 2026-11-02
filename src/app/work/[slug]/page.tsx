import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { Button } from '@/components/ui/Button';

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
    title: `${project.title} — Architectural Blueprint | DYRATEK`,
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
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-[#2A2A2A]/70 mb-8 pb-4 border-b border-[#E5E2DA]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123D32]">HOME</Link>
          <span className="text-[#E5E2DA]">/</span>
          <Link href="/work" className="hover:text-[#123D32]">WORK</Link>
          <span className="text-[#E5E2DA]">/</span>
          <span className="text-[#C83B35] font-bold">{project.title.toUpperCase()}</span>
        </nav>

        {/* Hero Section */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-[11px] text-[#123D32] font-bold">
              {project.category}
            </span>
            <span className="px-2.5 py-1 bg-[#C83B35]/10 border border-[#C83B35]/30 font-mono text-[11px] text-[#C83B35] font-bold">
              {project.conceptDisclaimer}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="font-heading font-semibold text-lg lg:text-xl text-[#2A2A2A]/90 max-w-2xl leading-relaxed">
            {project.heroHeadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button href="/contact" variant="primary" size="md" showArrow>
              Commission Similar Architecture
            </Button>
            <Button href="/work" variant="secondary" size="md">
              Back to All Prototypes
            </Button>
          </div>
        </div>

        {/* Challenge & Solution Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="lg:col-span-6 space-y-4 bg-[#ECE8DF] p-6 lg:p-8 border border-[#E5E2DA]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#C83B35] font-bold">
              <span className="w-1.5 h-1.5 bg-[#C83B35]" />
              01 // THE SYSTEM CHALLENGE
            </div>
            <h2 className="font-heading font-bold text-2xl uppercase text-[#123D32]">
              Architectural Bottleneck
            </h2>
            <p className="font-body text-sm text-[#2A2A2A]/85 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 bg-[#F4F1E9] p-6 lg:p-8 border border-[#123D32]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#123D32] font-bold">
              <span className="w-1.5 h-1.5 bg-[#123D32]" />
              02 // THE APPLIED SOLUTION
            </div>
            <h2 className="font-heading font-bold text-2xl uppercase text-[#123D32]">
              Engineered Resolution
            </h2>
            <p className="font-body text-sm text-[#2A2A2A]/85 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technical Architecture Specifications */}
        <div className="pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
              03 // TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl uppercase text-[#123D32]">
              System Specifications &amp; Attributes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.architectureDetails.map((detail, idx) => (
              <div
                key={idx}
                className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 font-mono text-xs text-[#2A2A2A]/90 flex items-start gap-3"
              >
                <span className="text-[#C83B35] font-bold text-sm">0{idx + 1}</span>
                <span className="leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Matrix */}
        <div className="pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
              04 // CONTRACT ARTIFACTS
            </span>
            <h2 className="font-heading font-extrabold text-3xl uppercase text-[#123D32]">
              Demonstration Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.deliverables.map((deliv, idx) => (
              <div key={idx} className="bg-[#ECE8DF] border border-[#E5E2DA] p-6 space-y-2">
                <div className="font-mono text-xs text-[#123D32] font-bold uppercase">
                  {deliv.label}
                </div>
                <div className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  {deliv.specification}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Involved Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block">
              05 // PRODUCTION STACK
            </span>
            <h3 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-xs text-[#123D32] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block">
              06 // INVOLVED DISCIPLINES
            </span>
            <h3 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              Practice Areas Combined
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.servicesInvolved.map((serv) => (
                <span
                  key={serv}
                  className="px-3 py-1.5 bg-[#123D32] text-[#F4F1E9] font-mono text-xs font-semibold"
                >
                  {serv}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Governance Disclaimer */}
        <div className="p-6 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-xs text-[#2A2A2A]/70 mb-16">
          <div className="font-bold text-[#123D32] mb-1">DATA GOVERNANCE &amp; ACCREDITATION:</div>
          <p>
            {project.conceptDisclaimer}. All architecture designs, code snippets, and interface states are proprietary property of DYRATEK.
          </p>
        </div>

        {/* Back Link & CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/work"
            className="font-mono text-xs uppercase font-bold text-[#123D32] hover:text-[#C83B35] transition-colors"
          >
            ← Return to All Technical Dossiers
          </Link>
          <Button href="/contact" variant="primary" size="md" showArrow>
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}
