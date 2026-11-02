import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Engagement & Governance — DYRATEK',
  description:
    'Commercial terms of engagement, intellectual property sovereignty, warranty frameworks, and delivery conditions governed by DYRATEK.'
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="pb-8 mb-12 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>INSTITUTIONAL GOVERNANCE // TERMS OF ENGAGEMENT</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] uppercase tracking-tight">
            Terms of Service &amp; Delivery Conditions
          </h1>
          <p className="font-mono text-xs text-[#2A2A2A]/60 mt-3 uppercase">
            VERSION 1.0 // EFFECTIVE DATE: JANUARY 2026
          </p>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-10 font-body text-sm sm:text-base text-[#2A2A2A]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              01. Engagement Framework
            </h2>
            <p>
              These Terms of Engagement govern the provision of digital product engineering, software development, business automation, and growth marketing services executed by DYRATEK. Individual projects are formally defined through written Master Service Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              02. Intellectual Property Sovereignty
            </h2>
            <p>
              Upon complete settlement of agreed milestone deliverables, the client retains 100% full intellectual property ownership of all custom codebase repositories, design tokens, Figma libraries, relational schemas, and project documentation created specifically for their engagement. DYRATEK claims zero ongoing licensing fees or proprietary runtime rights over bespoke deliverables.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              03. Phased Delivery &amp; Milestone Acceptance
            </h2>
            <p>
              Engagements progress through the 5-Stage Blueprint: Discover, Design, Build, Launch, and Grow. Each phase requires explicit client sign-off and functional verification in dedicated staging environments before advancement to the subsequent milestone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              04. Post-Deployment Warranty &amp; SLAs
            </h2>
            <p>
              All delivered software architectures include a 30-day post-launch warranty covering defect remediation, latency profiling, and configuration adjustments resulting from our scope. Ongoing maintenance, infrastructure monitoring, and feature iteration are provided through dedicated monthly service level agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              05. Governance &amp; Inquiries
            </h2>
            <p>
              For legal governance inquiries or contract clarifications:
            </p>
            <div className="p-4 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-xs text-[#123D32]">
              Email: <a href="mailto:hello@dyratek.com" className="font-bold underline">hello@dyratek.com</a>
              <span className="text-[#C83B35] text-[10px] block mt-1">
                [Client-Confirmation Placeholder: hello@dyratek.com]
              </span>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E2DA] flex justify-between items-center font-mono text-xs">
          <Link href="/" className="text-[#123D32] font-bold hover:text-[#C83B35]">
            ← Return to Homepage
          </Link>
          <Link href="/privacy" className="text-[#123D32] hover:underline">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}

