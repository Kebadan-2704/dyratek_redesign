'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function FooterWordmark() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden pt-8 pb-4 select-none pointer-events-none">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0.12 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.12, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full text-center font-bold tracking-tighter text-[#123D32] text-[13vw] lg:text-[140px] leading-none"
        aria-hidden="true"
      >
        DYRATEK
      </motion.div>
    </div>
  );
}

