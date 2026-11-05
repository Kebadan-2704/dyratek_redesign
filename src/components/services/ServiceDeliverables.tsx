'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ServiceDeliverablesProps {
  deliverables: string[];
}

export function ServiceDeliverables({ deliverables }: ServiceDeliverablesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl bg-white border border-[#E1E4E0] p-7 sm:p-10 space-y-6 shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#E1E4E0]">
        <div>
          <span className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
            Scope &amp; Deliverables
          </span>
          <h2 className="font-bold text-2xl text-[#123D32] mt-0.5 tracking-tight">
            What is included
          </h2>
        </div>
        <span className="text-xs text-[#555B57] font-medium bg-[#F0F3F1] px-2.5 py-1 rounded-md">
          {deliverables.length} Specific Deliverables
        </span>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deliverables.map((item, idx) => (
          <motion.li
            key={idx}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: idx * 0.05, ease: 'easeOut' }}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E1E4E0] hover:border-[#123D32] transition-colors"
          >
            <span className="w-5 h-5 rounded-full bg-[#EBF2EE] text-[#123D32] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <motion.path
                  initial={shouldReduceMotion ? {} : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05, ease: 'easeOut' }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="text-sm font-medium text-[#1E2221] leading-relaxed">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

