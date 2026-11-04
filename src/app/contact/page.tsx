'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/services';

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
    <div className="w-full bg-[#FBFBF9] py-14 sm:py-20 lg:py-24 border-b border-[#E1E4E0]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-[#E1E4E0]">
          <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
            Get In Touch
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight">
            Tell us about your project.
          </h1>
          <p className="text-lg text-[#555B57] leading-relaxed pt-2">
            Send us a message about what you want to build. We will review your goals and talk through practical options.
          </p>
        </div>

        {/* 2-Column Equal Height Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column Left: Information Sidebar (Equal Height) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 shadow-xs flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                    What to Expect
                  </span>
                  <h2 className="font-bold text-2xl text-[#123D32] mt-1">
                    Direct Review
                  </h2>
                </div>

                <div className="space-y-5 text-sm text-[#555B57] leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#F0F3F1] text-[#1E2221] space-y-1.5 border border-[#E1E4E0]">
                    <div className="font-semibold text-sm text-[#123D32]">Direct Conversation</div>
                    <div>Our team reads every inquiry and reviews your requirements before responding.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-[#123D32]">Practical Discussion</div>
                    <div>We outline the steps and options to help you move forward with clarity.</div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#E1E4E0]">
                    <div className="font-semibold text-sm text-[#123D32]">Working With Us</div>
                    <div>All projects follow a clear 5-stage plan with working previews before launch.</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E1E4E0] text-xs text-[#555B57] space-y-1">
                <div className="font-semibold text-[#123D32]">DYRATEK Digital Studio</div>
                <div>Custom websites, mobile apps, and business automations.</div>
              </div>
            </div>
          </div>

          {/* Column Right: Form Container */}
          <div className="lg:col-span-7 flex flex-col">
            <div id="discovery" className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-9 shadow-xs flex-1 scroll-mt-28">
              <div className="pb-4 mb-6 border-b border-[#E1E4E0] flex justify-between items-center">
                <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                  Project Inquiry
                </span>
                <span className="text-xs text-[#555B57]">Direct Form</span>
              </div>

              {submissionState === 'validated' ? (
                <div className="p-7 rounded-xl bg-[#F0F3F1] border border-[#123D32] space-y-4">
                  <div className="text-sm font-bold text-[#123D32] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#123D32]" />
                    Message Received
                  </div>
                  <p className="text-base text-[#1E2221] leading-relaxed">
                    Thank you, <strong className="text-[#123D32]">{formData.name}</strong>. We received your note. Our team will review your project details and follow up with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmissionState('idle')}
                    className="text-sm font-semibold text-[#123D32] hover:underline pt-2 cursor-pointer block"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-[#123D32]">
                        Your Name <span className="text-[#C83B35]">*</span>
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
                        className={`w-full h-12 px-4 rounded-xl bg-[#FBFBF9] border text-base text-[#1E2221] transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D32] focus:border-transparent ${
                          formErrors.name ? 'border-[#C83B35]' : 'border-[#E1E4E0]'
                        }`}
                      />
                      {formErrors.name && (
                        <p id="name-error" role="alert" className="text-xs text-[#C83B35] font-medium">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-[#123D32]">
                        Email Address <span className="text-[#C83B35]">*</span>
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
                        className={`w-full h-12 px-4 rounded-xl bg-[#FBFBF9] border text-base text-[#1E2221] transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D32] focus:border-transparent ${
                          formErrors.email ? 'border-[#C83B35]' : 'border-[#E1E4E0]'
                        }`}
                      />
                      {formErrors.email && (
                        <p id="email-error" role="alert" className="text-xs text-[#C83B35] font-medium">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Primary Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-[#123D32]">
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
                        className="w-full h-12 px-4 rounded-xl bg-[#FBFBF9] border border-[#E1E4E0] text-base text-[#1E2221] transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D32] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-semibold text-[#123D32]">
                        Service Needed <span className="text-[#C83B35]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        aria-required="true"
                        value={formData.serviceSlug}
                        onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-[#FBFBF9] border border-[#E1E4E0] text-base text-[#1E2221] transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D32] focus:border-transparent"
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
                  <div className="space-y-2">
                    <label htmlFor="brief" className="block text-sm font-semibold text-[#123D32]">
                      Project Details <span className="text-[#C83B35]">*</span>
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
                      className={`w-full p-4 rounded-xl bg-[#FBFBF9] border text-base text-[#1E2221] transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D32] focus:border-transparent leading-relaxed ${
                        formErrors.brief ? 'border-[#C83B35]' : 'border-[#E1E4E0]'
                      }`}
                    />
                    {formErrors.brief && (
                      <p id="brief-error" role="alert" className="text-xs text-[#C83B35] font-medium">
                        {formErrors.brief}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-[#E1E4E0] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#555B57]">
                      * Required fields
                    </span>
                    <button
                      type="submit"
                      aria-label="Send message to our team"
                      className="h-12 px-8 rounded-xl bg-[#123D32] text-[#FBFBF9] text-base font-medium flex items-center justify-center shadow-xs hover:bg-[#0B2720] transition-colors cursor-pointer"
                    >
                      Send message
                    </button>
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
