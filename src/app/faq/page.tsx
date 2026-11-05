'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FAQS } from '@/data/faq';
import { CTASection } from '@/components/sections/CTASection';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

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
  const shouldReduceMotion = useReducedMotion();

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
    <div className="w-full bg-[#FBFBF9] py-10 sm:py-14 lg:py-18 border-b border-[#E1E4E0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
        {/* Page Hero */}
        <MotionFadeIn>
          <div className="max-w-3xl space-y-4 pb-8 border-b border-[#E1E4E0]">
            <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
              Help &amp; Answers
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight tracking-tight">
              Frequently asked questions.
            </h1>
            <p className="text-lg text-[#555B57] leading-relaxed pt-1">
              Clear answers about our services, process, timelines, and technology.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-4" role="tablist" aria-label="FAQ categories">
              <span className="text-xs font-semibold text-[#555B57] uppercase tracking-wide mr-1">
                Filter:
              </span>
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`min-h-[44px] px-4 py-2 rounded-xl border text-sm font-medium transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#123D32] ${
                      isActive
                        ? 'bg-[#123D32] text-[#FBFBF9] border-[#123D32] shadow-xs'
                        : 'bg-white text-[#1E2221] border-[#E1E4E0] hover:bg-[#F3F4F1]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </MotionFadeIn>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            return (
              <MotionFadeIn key={faq.id} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl bg-white border transition-colors shadow-xs overflow-hidden ${
                    isOpen ? 'border-[#123D32]' : 'border-[#E1E4E0] hover:border-[#B7BEB9]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                    className="w-full min-h-[56px] p-6 text-left flex items-center justify-between gap-4 cursor-pointer outline-none focus-visible:bg-[#FBFBF9]"
                  >
                    <h2 className="font-bold text-lg text-[#123D32] leading-snug">
                      {faq.question}
                    </h2>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#123D32] text-[#FBFBF9]' : 'bg-[#F0F3F1] text-[#123D32]'
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                        initial={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-base text-[#555B57] leading-relaxed border-t border-[#F0F3F1]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionFadeIn>
            );
          })}
        </div>

        {/* Global CTA Band */}
        <CTASection />
      </div>
    </div>
  );
}
