'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceSlug: 'web-development',
    budgetBand: '30k-60k',
    brief: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'validated'>('idle');

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid corporate email address';
    }
    if (!formData.brief.trim()) errors.brief = 'Project brief or architectural requirements are required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmissionState('validated');
    } else {
      if (errors.name) {
        document.getElementById('name')?.focus();
      } else if (errors.email) {
        document.getElementById('email')?.focus();
      } else if (errors.brief) {
        document.getElementById('brief')?.focus();
      }
    }
  };

  return (
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Page Hero */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>COMMENCE COLLABORATION // PROJECT INGESTION</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Initiate a project briefing.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            Submit your technical or commercial scope parameters. Direct review conducted by senior engineering and design leads with initial response within two business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Column Left: Contact Details & Protocol */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#ECE8DF] border border-[#E5E2DA] p-6 lg:p-8 space-y-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold pb-3 border-b border-[#E5E2DA]">
                Direct Contact Protocol
              </div>

              <div className="space-y-4 font-mono text-xs text-[#2A2A2A]/80">
                <div>
                  <div className="text-[10px] text-[#2A2A2A]/60 uppercase mb-1">
                    Direct Email:
                  </div>
                  <a
                    href="mailto:hello@dyratek.com"
                    className="text-[#123D32] font-bold hover:underline text-sm"
                  >
                    hello@dyratek.com
                  </a>
                  <span className="text-[#123D32]/70 text-[10px] font-mono block mt-1">
                    Direct inquiries reviewed by senior software engineering squads
                  </span>
                </div>

                <div className="pt-3 border-t border-[#E5E2DA]">
                  <div className="text-[10px] text-[#2A2A2A]/60 uppercase mb-1">
                    Turnaround SLA:
                  </div>
                  <div className="text-[#123D32] font-semibold">
                    Technical Scope within 48 Business Hours
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E2DA]">
                  <div className="text-[10px] text-[#2A2A2A]/60 uppercase mb-1">
                    Intellectual Property:
                  </div>
                  <div className="text-[#123D32] font-semibold">
                    100% Code &amp; Design Token Sovereignty
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E2DA]">
                  <div className="text-[10px] text-[#2A2A2A]/60 uppercase mb-1">
                    NDA / Confidentiality:
                  </div>
                  <div className="text-[#2A2A2A]">
                    Mutual Non-Disclosure Agreement provided prior to detailed technical architecture review.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#F4F1E9] border border-[#E5E2DA] font-mono text-xs text-[#2A2A2A]/70 space-y-2">
              <div className="font-bold text-[#123D32]">BUSINESS INTEGRITY NOTICE:</div>
              <p className="font-body text-xs leading-relaxed">
                DYRATEK does not employ automated sales bots. All project submissions are scrutinized by actual software architects and design leads.
              </p>
            </div>
          </div>

          {/* Column Right: Interactive Scope Briefing Form */}
          <div className="lg:col-span-7">
            <div id="discovery" className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 lg:p-10 scroll-mt-28">
              <div className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-6 pb-3 border-b border-[#E5E2DA] flex justify-between items-center">
                <span>PROJECT INGESTION SPECIFICATION</span>
                <span className="text-[#2A2A2A]/50">CONFIDENTIAL</span>
              </div>

              {submissionState === 'validated' ? (
                <div className="p-6 bg-[#ECE8DF] border-l-4 border-[#123D32] space-y-4">
                  <div className="font-mono text-xs text-[#123D32] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#123D32]" />
                    Client-Side Parameters Successfully Validated
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A] leading-relaxed">
                    Thank you, <span className="font-bold text-[#123D32]">{formData.name}</span>. Your project parameters for <span className="font-bold text-[#123D32]">{formData.serviceSlug}</span> have been verified through local client-side validation schemas.
                  </p>
                  <div className="p-3 bg-[#F4F1E9] border border-[#E5E2DA] font-mono text-xs text-[#123D32] space-y-1">
                    <div className="font-bold">SUBMISSION VERIFICATION:</div>
                    <p className="font-body text-[11px] text-[#2A2A2A]/80">
                      Inquiries submitted to hello@dyratek.com route directly to technical leadership for feasibility evaluation. An engineering director will reach out within two business days.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmissionState('idle')}
                    className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold underline hover:text-[#C83B35] pt-2 cursor-pointer"
                  >
                    ← Edit Briefing Parameters
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={Boolean(formErrors.name)}
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className={`w-full bg-[#ECE8DF] border p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none ${
                          formErrors.name ? 'border-[#C83B35]' : 'border-[#E5E2DA]'
                        }`}
                      />
                      {formErrors.name && (
                        <p id="name-error" role="alert" className="font-mono text-[10px] text-[#C83B35] mt-1 font-semibold">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                        Corporate Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@enterprise.com"
                        className={`w-full bg-[#ECE8DF] border p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none ${
                          formErrors.email ? 'border-[#C83B35]' : 'border-[#E5E2DA]'
                        }`}
                      />
                      {formErrors.email && (
                        <p id="email-error" role="alert" className="font-mono text-[10px] text-[#C83B35] mt-1 font-semibold">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Primary Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                        Company / Organisation
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Global"
                        className="w-full bg-[#ECE8DF] border border-[#E5E2DA] p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                        Primary Service Domain *
                      </label>
                      <select
                        id="service"
                        name="service"
                        aria-required="true"
                        value={formData.serviceSlug}
                        onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                        className="w-full bg-[#ECE8DF] border border-[#E5E2DA] p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none"
                      >
                        {SERVICES.map((serv) => (
                          <option key={serv.slug} value={serv.slug}>
                            {serv.index} &bull; {serv.name} ({serv.pillarName})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Estimated Timeline / Budget Band */}
                  <div>
                    <label htmlFor="budgetBand" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                      Target Project Scope &amp; Budget Band
                    </label>
                    <select
                      id="budgetBand"
                      name="budgetBand"
                      value={formData.budgetBand}
                      onChange={(e) => setFormData({ ...formData, budgetBand: e.target.value })}
                      className="w-full bg-[#ECE8DF] border border-[#E5E2DA] p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none"
                    >
                      <option value="15k-30k">Scoping Sprint / Architecture ($15,000 – $30,000)</option>
                      <option value="30k-60k">Core Platform Build ($30,000 – $60,000)</option>
                      <option value="60k-120k">Enterprise System / Multichannel ($60,000 – $120,000)</option>
                      <option value="retainer">Monthly Retainer &amp; Engineering Squad</option>
                    </select>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label htmlFor="brief" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                      Technical &amp; Commercial Brief *
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      rows={5}
                      aria-required="true"
                      aria-invalid={Boolean(formErrors.brief)}
                      aria-describedby={formErrors.brief ? 'brief-error' : undefined}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Outline your product requirements, current technology stack, operational bottlenecks, or specific timeline constraints..."
                      className={`w-full bg-[#ECE8DF] border p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none leading-relaxed ${
                        formErrors.brief ? 'border-[#C83B35]' : 'border-[#E5E2DA]'
                      }`}
                    />
                    {formErrors.brief && (
                      <p id="brief-error" role="alert" className="font-mono text-[10px] text-[#C83B35] mt-1 font-semibold">
                        {formErrors.brief}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-[#E5E2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-[10px] text-[#2A2A2A]/60">
                      * MANDATORY FIELDS REQUIRED
                    </span>
                    <Button type="submit" variant="primary" size="lg" showArrow>
                      Validate &amp; Ingest Briefing
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
