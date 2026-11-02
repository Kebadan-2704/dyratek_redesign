'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faq';
import { Button } from '@/components/ui/Button';

const CATEGORIES = [
  'All',
  'Engagement & Scope',
  'Engineering & Architecture',
  'Delivery & Commercial',
  'Operations & Support'
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
    <div className="w-full bg-[#F4F1E9] py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Page Hero */}
        <div className="pb-12 mb-16 border-b border-[#E5E2DA]">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
            <span>KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] uppercase tracking-tight max-w-4xl leading-[1.05]">
            Operational answers &amp; standards.
          </h1>
          <p className="font-body text-base lg:text-xl text-[#2A2A2A]/85 max-w-2xl mt-6 leading-relaxed">
            Transparent clarification regarding engagement frameworks, intellectual property ownership, technology selections, and delivery protocols.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-[#E5E2DA] font-mono text-xs">
            <span className="text-[#2A2A2A]/60 mr-2 uppercase">FILTER CATEGORY:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 border transition-all text-xs font-semibold ${
                  activeCategory === cat
                    ? 'bg-[#123D32] text-[#F4F1E9] border-[#123D32]'
                    : 'bg-[#ECE8DF] text-[#2A2A2A] border-[#E5E2DA] hover:border-[#123D32]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F4F1E9] border border-[#E5E2DA] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 group cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#C83B35] font-bold uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h2 className="font-heading font-bold text-lg sm:text-xl uppercase text-[#123D32] group-hover:text-[#C83B35] transition-colors">
                      {faq.question}
                    </h2>
                  </div>
                  <span
                    className={`font-mono text-xl font-bold text-[#123D32] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-45 text-[#C83B35]' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#E5E2DA] font-body text-sm sm:text-base text-[#2A2A2A]/85 leading-relaxed bg-[#ECE8DF]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unresolved Questions Callout */}
        <div className="mt-20 max-w-4xl mx-auto bg-[#123D32] text-[#F4F1E9] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-[#A5D6C6] uppercase tracking-wider mb-1 font-semibold">
              UNRESOLVED INQUIRY?
            </div>
            <h2 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-[#F4F1E9]">
              Request a Technical Architecture Review
            </h2>
            <p className="font-body text-xs text-[#F4F1E9]/80 max-w-md mt-1">
              Direct consultation with our engineering squad to answer complex integration questions.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" variant="accent" size="md" showArrow>
              Submit Inquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

