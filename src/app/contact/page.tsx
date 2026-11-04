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
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.brief.trim()) errors.brief = 'Please share a few details about your project';
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
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Tell us about your project.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            Send us a message about what you want to build. We will review your goals and talk through practical options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Column Left: Contact Details & Protocol */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#ECE8DF] border border-[#E5E2DA] p-6 lg:p-8 space-y-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold pb-3 border-b border-[#E5E2DA]">
                What to Expect
              </div>

              <div className="space-y-4 font-mono text-xs text-[#2A2A2A]/80">
                <div>
                  <div className="text-[10px] text-[#2A2A2A]/60 uppercase mb-1">
                    Review Process:
                  </div>
                  <div className="text-[#123D32] font-semibold">
                    Direct Review
                  </div>
                  <span className="text-[#123D32]/70 text-[10px] font-mono block mt-1">
                    Our team reads every inquiry and reviews the project requirements.
                  </span>
                </div>

                <div className="pt-3 border-t border-[#E5E2DA]">
                  <div className="text-[10px] text-[#2A2A2A]/60 uppercase mb-1">
                    Discussion:
                  </div>
                  <div className="text-[#2A2A2A]">
                    We outline the steps and options to help you move forward.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Form */}
          <div className="lg:col-span-7">
            <div id="discovery" className="bg-[#F4F1E9] border border-[#E5E2DA] p-6 lg:p-10 scroll-mt-28">
              <div className="font-mono text-xs uppercase text-[#C83B35] font-bold mb-6 pb-3 border-b border-[#E5E2DA] flex justify-between items-center">
                <span>PROJECT INQUIRY</span>
                <span className="text-[#2A2A2A]/50">CONFIDENTIAL</span>
              </div>

              {submissionState === 'validated' ? (
                <div className="p-6 bg-[#ECE8DF] border-l-4 border-[#123D32] space-y-4">
                  <div className="font-mono text-xs text-[#123D32] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#123D32]" />
                    Message Received
                  </div>
                  <p className="font-body text-sm text-[#2A2A2A] leading-relaxed">
                    Thank you, <span className="font-bold text-[#123D32]">{formData.name}</span>. We received your note. Our team will review your project details and follow up with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmissionState('idle')}
                    className="font-mono text-xs uppercase tracking-wider text-[#123D32] font-bold underline hover:text-[#C83B35] pt-2 cursor-pointer"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                        Your Name *
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
                        placeholder="e.g. Sarah Jenkins"
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
                        Email Address *
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
                        placeholder="sarah@company.com"
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
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Studio"
                        className="w-full bg-[#ECE8DF] border border-[#E5E2DA] p-3 text-xs font-mono text-[#2A2A2A] focus:border-[#123D32] focus:bg-[#F4F1E9] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                        Service Needed *
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
                            {serv.name} ({serv.pillarName})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="brief" className="block font-mono text-[11px] uppercase tracking-wider text-[#123D32] font-semibold mb-2">
                      Project Details *
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
                      placeholder="Tell us what you want to build and any details you have in mind..."
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
                      * REQUIRED FIELDS
                    </span>
                    <Button type="submit" aria-label="Send message to our team" variant="primary" size="lg" showArrow>
                      Send message
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
