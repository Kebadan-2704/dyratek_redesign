import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { ServiceVisualHeader } from '@/components/services/ServiceVisualHeader';
import { ServiceDeliverables } from '@/components/services/ServiceDeliverables';

export const instant = false;

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
    <div className="w-full bg-[#FBFBF9] py-10 sm:py-16 border-b border-[#E1E4E0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-[#555B57] pb-3 border-b border-[#E1E4E0]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123D32] min-h-[44px] sm:min-h-0 inline-flex items-center">Home</Link>
          <span className="text-[#D4D8D2]" aria-hidden="true">/</span>
          <Link href="/services" className="hover:text-[#123D32] min-h-[44px] sm:min-h-0 inline-flex items-center">Services</Link>
          <span className="text-[#D4D8D2]" aria-hidden="true">/</span>
          <span className="font-semibold text-[#123D32]">{service.name}</span>
        </nav>

        {/* Visual Header with Tailored Abstract Loop Illustration */}
        <ServiceVisualHeader service={service} />

        {/* Interactive Scope & Deliverables Checklist with Draw-In Motion */}
        <ServiceDeliverables deliverables={service.deliverables} />

        {/* Contact Action Bar — Immediate Solid Contrast, Never Greyed Out */}
        <div className="rounded-2xl bg-[#123D32] text-[#FBFBF9] p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-bold text-xl sm:text-2xl text-[#FBFBF9]">
              Ready to implement {service.name}?
            </h3>
            <p className="text-sm text-[#D8D4CA] leading-relaxed">
              Tell us about your project timeline and requirements. We review every note directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="min-h-[48px] w-full md:w-auto px-8 rounded-xl bg-[#FBFBF9] text-[#123D32] font-semibold text-sm flex items-center justify-center hover:bg-white active:scale-[0.98] transition-all shadow-xs"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="min-h-[48px] w-full md:w-auto px-6 rounded-xl bg-transparent border border-[#FBFBF9]/30 text-[#FBFBF9] font-medium text-sm flex items-center justify-center hover:bg-[#FBFBF9]/10 transition-all"
            >
              All services
            </Link>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="pt-8 border-t border-[#E1E4E0] space-y-5">
            <h2 className="font-bold text-lg text-[#123D32]">
              Related services you might also need
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group min-h-[80px] rounded-xl bg-white p-5 border border-[#E1E4E0] hover:border-[#123D32] hover:-translate-y-1 transition-all block shadow-xs space-y-1.5"
                >
                  <div className="font-semibold text-sm text-[#123D32] group-hover:underline">
                    {rel.name}
                  </div>
                  <p className="text-xs text-[#555B57] line-clamp-2">
                    {rel.tagline}
                  </p>
                  <div className="text-xs font-semibold text-[#123D32] pt-1 flex items-center gap-1">
                    <span>View details</span>
                    <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
