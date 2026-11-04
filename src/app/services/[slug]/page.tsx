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
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      type: 'article',
      url: `https://dyratek.com/services/${service.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta.title,
      description: service.meta.description
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

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.pillarName,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'DYRATEK',
      url: 'https://dyratek.com'
    },
    url: `https://dyratek.com/services/${service.slug}`
  };

  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-5 lg:px-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 font-mono text-xs text-[#2A2A2A]/70 mb-8 pb-4 border-b border-[#E5E2DA]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123D32]">HOME</Link>
          <span className="text-[#E5E2DA]" aria-hidden="true">/</span>
          <Link href="/services" className="hover:text-[#123D32]">SERVICES</Link>
          <span className="text-[#E5E2DA]" aria-hidden="true">/</span>
          <span className="text-[#C83B35] font-bold">{service.name.toUpperCase()}</span>
        </nav>

        {/* Part 1: Headline + 2 Sentences */}
        <div className="pb-10 mb-10 border-b border-[#E5E2DA]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-[11px] text-[#123D32] font-bold">
              CATEGORY: {service.pillarName.toUpperCase()}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight leading-[1.05] mb-6">
            {service.name}
          </h1>

          <p className="font-body text-base lg:text-lg text-[#2A2A2A]/90 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Part 2: What's Included (4 to 5 bullets) */}
        <div className="pb-10 mb-10 border-b border-[#E5E2DA]">
          <h2 className="font-heading font-bold text-xl uppercase text-[#123D32] mb-6">
            What&apos;s included
          </h2>

          <div className="space-y-3 font-mono text-xs sm:text-sm">
            {service.deliverables.map((item, dIdx) => (
              <div
                key={dIdx}
                className="bg-[#ECE8DF] p-4 border border-[#E5E2DA] flex items-start gap-3"
              >
                <span className="text-[#C83B35] font-bold">0{dIdx + 1}.</span>
                <span className="text-[#2A2A2A] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Contact Us Button */}
        <div className="pb-12 mb-12 border-b border-[#E5E2DA] flex flex-wrap items-center gap-4">
          <Button
            href="/contact"
            aria-label={`Contact us about ${service.name}`}
            variant="primary"
            size="md"
            showArrow
          >
            Contact us
          </Button>
          <Button
            href="/services"
            aria-label="See all services"
            variant="secondary"
            size="md"
          >
            See services
          </Button>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div>
            <h2 className="font-heading font-bold text-sm uppercase text-[#123D32]/70 mb-4 font-mono">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  aria-label={`View details for ${rel.name}`}
                  className="bg-[#ECE8DF] p-4 border border-[#E5E2DA] hover:border-[#123D32] transition-colors block"
                >
                  <div className="font-heading font-bold text-sm text-[#123D32] mb-1">
                    {rel.name}
                  </div>
                  <p className="font-mono text-[11px] text-[#2A2A2A]/70 line-clamp-2">
                    {rel.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
