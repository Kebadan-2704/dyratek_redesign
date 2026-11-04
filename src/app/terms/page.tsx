import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — DYRATEK',
  description: 'Terms of service for using this website.'
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#FBFBF9] py-14 sm:py-20 lg:py-24 border-b border-[#E1E4E0]">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8 space-y-12">
        {/* Header */}
        <div className="pb-8 border-b border-[#E1E4E0] space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
            Legal Terms
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl text-[#123D32] leading-tight">
            Terms of Service
          </h1>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-8 text-base text-[#555B57] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Overview
            </h2>
            <p>
              By using this website, you agree to these standard website terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Website Content
            </h2>
            <p>
              The text, sample projects, and materials published on this website are provided for general informational purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Project Agreements
            </h2>
            <p>
              Project timelines, deliverables, payments, and support terms are defined in individual written project agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Questions
            </h2>
            <p>
              If you have questions regarding these terms, please contact us through our contact form.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-[#E1E4E0] flex justify-between items-center text-sm font-medium">
          <Link href="/" className="text-[#123D32] hover:underline">
            ← Return to homepage
          </Link>
          <Link href="/privacy" className="text-[#123D32] hover:underline">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
