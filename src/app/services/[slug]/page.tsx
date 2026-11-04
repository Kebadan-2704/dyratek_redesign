import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';

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
    <div className="w-full bg-[#FBFBF9] py-14 sm:py-20 border-b border-[#E1E4E0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-[#555B57] pb-4 border-b border-[#E1E4E0]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123D32]">Home</Link>
          <span className="text-[#D4D8D2]" aria-hidden="true">/</span>
          <Link href="/services" className="hover:text-[#123D32]">Services</Link>
          <span className="text-[#D4D8D2]" aria-hidden="true">/</span>
          <span className="font-semibold text-[#123D32]">{service.name}</span>
        </nav>

        {/* Part 1: Headline + 2 Sentences */}
        <div className="space-y-4 max-w-[65ch]">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
              Category: {service.pillarName}
            </span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight">
            {service.name}
          </h1>

          <p className="text-lg text-[#555B57] leading-relaxed pt-2">
            {service.description}
          </p>
        </div>

        {/* Part 2: What's Included (4–5 deliverables bullets) */}
        <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 space-y-5 max-w-2xl shadow-xs">
          <h2 className="font-bold text-xl text-[#123D32]">
            What&apos;s included
          </h2>

          <ul className="space-y-3">
            {service.deliverables.map((item, dIdx) => (
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Part 3: Contact Us Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <Link
            href="/contact"
            className="h-12 px-7 rounded-xl bg-[#123D32] text-[#FBFBF9] text-base font-medium flex items-center justify-center shadow-xs hover:bg-[#0B2720] transition-colors"
          >
            Contact us
          </Link>
          <Link
            href="/services"
            className="h-12 px-7 rounded-xl bg-white border border-[#E1E4E0] text-[#123D32] text-base font-medium flex items-center justify-center hover:bg-[#F3F4F1] transition-colors"
          >
            See all services
          </Link>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="pt-10 border-t border-[#E1E4E0] space-y-5">
            <h2 className="font-semibold text-base text-[#123D32]">
              Related services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="rounded-xl bg-white p-5 border border-[#E1E4E0] hover:border-[#123D32] transition-colors block shadow-xs space-y-1"
                >
                  <div className="font-semibold text-sm text-[#123D32]">
                    {rel.name}
                  </div>
                  <p className="text-xs text-[#555B57] line-clamp-2">
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
