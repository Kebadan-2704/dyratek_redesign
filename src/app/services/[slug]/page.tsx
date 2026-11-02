import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { Button } from '@/components/ui/Button';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found — DYRATEK'
    };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      type: 'article',
      url: `https://dyratek.com/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-[#2A2A2A]/70 mb-8 pb-4 border-b border-[#E5E2DA]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123D32]">HOME</Link>
          <span className="text-[#E5E2DA]">/</span>
          <Link href="/services" className="hover:text-[#123D32]">SERVICES</Link>
          <span className="text-[#E5E2DA]">/</span>
          <span className="text-[#C83B35] font-bold">{service.name.toUpperCase()}</span>
        </nav>

        {/* Hero Section */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-[11px] text-[#123D32] font-bold">
              PILLAR: {service.pillarName.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-[#C83B35] font-bold">
              TAXONOMY INDEX // {service.index} ({service.pillarIndex})
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            {service.name}
          </h1>

          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            {service.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button href="/contact" variant="primary" size="md" showArrow>
              Commission this Service
            </Button>
            <Button href="/services" variant="secondary" size="md">
              View All Services
            </Button>
          </div>
        </div>

        {/* Strategic Objective & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <span className="font-mono text-xs uppercase text-[#C83B35] font-bold">
                01 // STRATEGIC OBJECTIVE
              </span>
              <h2 className="font-heading font-bold text-2xl uppercase text-[#123D32]">
                Commercial Rationale
              </h2>
              <div className="p-4 bg-[#ECE8DF] border-l-2 border-[#123D32] font-mono text-[11px] text-[#2A2A2A]/80 space-y-1">
                <div>PILLAR: {service.pillarName}</div>
                <div>DELIVERY TIMELINE: 3–6 WEEKS</div>
                <div>OWNERSHIP: 100% IP SOVEREIGNTY</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="font-heading font-semibold text-xl text-[#123D32] leading-relaxed">
              {service.strategicObjective}
            </p>
            <p className="font-body text-base text-[#2A2A2A]/85 leading-relaxed">
              {service.description}
            </p>

            {/* Expected Outcomes */}
            <div className="pt-6 border-t border-[#E5E2DA]">
              <div className="font-mono text-xs uppercase text-[#123D32] font-bold mb-3">
                BENCHMARK OUTCOMES:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.metricsOrOutcomes.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-[#ECE8DF] p-3 border border-[#E5E2DA] font-mono text-xs text-[#123D32] font-semibold">
                    <span className="text-[#C83B35] mr-1">›</span> {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Capabilities */}
        <div className="pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
              02 // SCOPE & ARCHITECTURE
            </span>
            <h2 className="font-heading font-extrabold text-3xl uppercase text-[#123D32]">
              Engineered Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#123D32]"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[10px] text-[#C83B35] font-bold">
                      CAPABILITY // 0{cIdx + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg uppercase text-[#123D32] mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Technology Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 mb-16 border-b border-[#E5E2DA]">
          {/* Deliverables */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
              03 // ARTIFACTS
            </span>
            <h2 className="font-heading font-extrabold text-2xl uppercase text-[#123D32] mb-6">
              Contract Deliverables
            </h2>
            <div className="space-y-3 font-mono text-xs">
              {service.deliverables.map((deliv, dIdx) => (
                <div
                  key={dIdx}
                  className="bg-[#ECE8DF] p-3.5 border border-[#E5E2DA] flex items-start gap-3"
                >
                  <span className="text-[#C83B35] font-bold">0{dIdx + 1}</span>
                  <span className="text-[#2A2A2A] font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
              04 // TOOLING & PROTOCOLS
            </span>
            <h2 className="font-heading font-extrabold text-2xl uppercase text-[#123D32] mb-6">
              Production Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-xs text-[#123D32] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 p-4 bg-[#F4F1E9] border border-[#E5E2DA] font-mono text-xs text-[#2A2A2A]/70 space-y-2">
              <div className="font-bold text-[#123D32]">INFRASTRUCTURE GUARANTEE:</div>
              <p className="font-body text-xs">
                Zero legacy lock-in. All technologies selected have open specifications, robust documentation, and strong enterprise ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Phased Methodology */}
        <div className="pb-16 mb-16 border-b border-[#E5E2DA]">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
              05 // EXECUTION PATHWAY
            </span>
            <h2 className="font-heading font-extrabold text-2xl uppercase text-[#123D32]">
              Phased Working Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.methodology.map((step) => (
              <div key={step.step} className="bg-[#ECE8DF] border border-[#E5E2DA] p-5">
                <div className="font-mono text-xl font-bold text-[#123D32] mb-2">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-sm uppercase text-[#123D32] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-[#2A2A2A]/80 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="pb-16 mb-16 border-b border-[#E5E2DA]">
            <div className="mb-6">
              <span className="font-mono text-xs uppercase text-[#C83B35] font-bold block mb-1">
                06 // INTEGRATED DISCIPLINES
              </span>
              <h2 className="font-heading font-extrabold text-2xl uppercase text-[#123D32]">
                Related Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 flex flex-col justify-between hover:border-[#123D32] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#C83B35] font-bold mb-2 block">
                      INDEX // {rel.index}
                    </span>
                    <h3 className="font-heading font-bold text-lg uppercase text-[#123D32] mb-2">
                      <Link href={`/services/${rel.slug}`}>{rel.name}</Link>
                    </h3>
                    <p className="font-body text-xs text-[#2A2A2A]/80 mb-4 line-clamp-2">
                      {rel.tagline}
                    </p>
                  </div>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="font-mono text-xs uppercase font-bold text-[#123D32] hover:text-[#C83B35] transition-colors"
                  >
                    Explore Service →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conversion CTA */}
        <div className="bg-[#123D32] text-[#F4F1E9] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs text-[#A5D6C6] uppercase tracking-wider mb-2 font-semibold">
              COMMENCE ENGAGEMENT
            </div>
            <h2 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-[#F4F1E9]">
              Engage DYRATEK for {service.name}
            </h2>
            <p className="font-body text-xs text-[#F4F1E9]/80 max-w-lg mt-2">
              Our engineering team is ready to scope your project requirements. Typical initial review delivered within 48 hours.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" variant="accent" size="md" showArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
