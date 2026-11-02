import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Framework & Data Governance — DYRATEK',
  description:
    'Institutional data privacy policy, client credential governance, and security protocols enforced by DYRATEK.'
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="pb-8 mb-12 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>INSTITUTIONAL GOVERNANCE // PRIVACY FRAMEWORK</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] uppercase tracking-tight">
            Privacy Policy &amp; Data Security
          </h1>
          <p className="font-mono text-xs text-[#2A2A2A]/60 mt-3 uppercase">
            VERSION 1.0 // EFFECTIVE DATE: JANUARY 2026
          </p>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-10 font-body text-sm sm:text-base text-[#2A2A2A]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              01. Scope &amp; Commitment
            </h2>
            <p>
              DYRATEK operates with strict data minimization principles. This Privacy Framework details how we collect, process, and protect information submitted through our public website, client scoping portals, and collaborative engineering environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              02. Collection of Information
            </h2>
            <p>
              We only collect information directly submitted by corporate representatives during project scoping, including: full name, corporate email address, organizational entity, and project specifications. We do not sell, rent, or lease corporate inquiry data to third-party data brokers or marketing syndicates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              03. Client Credential &amp; Secret Management
            </h2>
            <p>
              During active engineering engagements, all client credentials, API keys, and repository accesses are managed through encrypted vaults using zero-knowledge encryption protocols. Client secrets are never committed into version control or transmitted via unencrypted communication channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              04. Cookies &amp; Telemetry
            </h2>
            <p>
              Our public website uses minimal, privacy-conscious telemetry to monitor Core Web Vitals, server response times, and navigation health. We do not deploy intrusive third-party cross-site advertising trackers or cookie walls.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl uppercase text-[#123D32]">
              05. Governance &amp; Contact Inquiries
            </h2>
            <p>
              For privacy compliance or data deletion requests, contact our governance team at:
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
          <Link href="/terms" className="text-[#123D32] hover:underline">
            View Terms of Engagement →
          </Link>
        </div>
      </div>
    </div>
  );
}

