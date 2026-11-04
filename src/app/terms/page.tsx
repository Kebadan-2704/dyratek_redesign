import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — DYRATEK',
  description: 'Terms of service for using this website.'
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="pb-8 mb-12 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] uppercase tracking-tight">
            Terms of Service
          </h1>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-8 font-body text-sm sm:text-base text-[#2A2A2A]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              Overview
            </h2>
            <p>
              By using this website, you agree to these standard website terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              Website Content
            </h2>
            <p>
              The text, sample projects, and materials published on this website are provided for general informational purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              Project Agreements
            </h2>
            <p>
              Project timelines, deliverables, payments, and support terms are defined in individual written project agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              Questions
            </h2>
            <p>
              If you have questions regarding these terms, please contact us through our contact form.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E2DA] flex justify-between items-center font-mono text-xs">
          <Link href="/" aria-label="Go to homepage" className="text-[#123D32] font-bold hover:text-[#C83B35]">
            ← Return to homepage
          </Link>
          <Link href="/privacy" aria-label="View Privacy Policy" className="text-[#123D32] hover:underline">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
