'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faq';
import { CTASection } from '@/components/sections/CTASection';

const CATEGORIES = [
  'All',
  'Working With Us',
  'Technology & Code',
  'Timelines & Pricing',
  'Support & Security'
] as const;

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-01');

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <div className="w-full bg-[#FBFBF9] py-14 sm:py-20 lg:py-24 border-b border-[#E1E4E0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-[#E1E4E0]">
          <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
            Help &amp; Answers
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight">
            Frequently asked questions.
          </h1>
          <p className="text-lg text-[#555B57] leading-relaxed pt-2">
            Clear answers about our services, process, timelines, and technology.
          </p>

          {/* Category Filter Pills (Aligned with Container) */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs font-semibold text-[#555B57] uppercase tracking-wide mr-1">
              Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#123D32] text-[#FBFBF9] border-[#123D32]'
                    : 'bg-white text-[#1E2221] border-[#E1E4E0] hover:bg-[#F3F4F1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List (Aligned with Hero) */}
        <div className="max-w-3xl space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#E1E4E0] overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBFBF9] transition-colors"
                >
                  <h2 className="font-bold text-lg text-[#123D32] leading-snug">
                    {faq.question}
                  </h2>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F0F3F1] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#123D32] text-[#FBFBF9]' : 'text-[#123D32]'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-base text-[#555B57] leading-relaxed border-t border-[#F0F3F1]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global CTA Band */}
        <CTASection />
      </div>
    </div>
  );
}
