'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function EcommerceSolutionsGraphic() {
  const [stock, setStock] = useState(14);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState(8942);

  const simulateCheckout = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setOrderConfirmed(false);

    setTimeout(() => {
      setStock((s) => Math.max(1, s - 1));
      setIsProcessing(false);
      setOrderConfirmed(true);
      setOrderNumber((n) => n + 1);
    }, 1100);
  };

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">🛍️ E-Commerce Engine</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            Stripe + Webhooks
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          PCI Level 1
        </div>
      </div>

      {/* Cart & Checkout Simulation */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#16382E] border border-[#2A5A4D] flex items-center justify-center text-lg">
              📦
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Architectural Stand v2</div>
              <div className="text-[10px] text-[#88A699]">SKU: DYR-MOD-01 • In Stock</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-emerald-400 font-mono">$165.00</div>
            <div className="text-[10px] text-[#88A699] font-mono">{stock} units left</div>
          </div>
        </div>

        {/* Live Payment Method Badges */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 text-[10px] text-[#A3B8B0]">
          <span className="flex items-center gap-1">
            <span>💳</span> Apple Pay / Stripe / CC
          </span>
          <span className="text-emerald-400 font-mono font-semibold">256-Bit SSL</span>
        </div>

        {/* Order Receipt Notice */}
        <AnimatePresence>
          {orderConfirmed && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-[11px] space-y-0.5 text-emerald-200"
            >
              <div className="flex items-center justify-between font-bold text-emerald-300">
                <span>✓ Payment Captured</span>
                <span>Order #{orderNumber}</span>
              </div>
              <div className="text-[10px] text-emerald-100/80">
                Inventory decremented • Warehouse webhook dispatched (TRK-89241).
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Checkout Button */}
        <button
          type="button"
          disabled={isProcessing}
          onClick={simulateCheckout}
          className="w-full py-2.5 px-3 rounded-lg bg-[#1D4A3D] hover:bg-[#255C4D] active:scale-[0.98] border border-[#2A5A4D] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Processing Payment Gateway...</span>
            </>
          ) : (
            <>
              <span>⚡</span>
              <span>Test 1-Click Checkout Flow</span>
            </>
          )}
        </button>
      </div>

      {/* Conversion Highlights */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Checkout Latency</div>
          <div className="font-bold text-emerald-400">&lt; 1.2s Flow</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Cart Abandonment</div>
          <div className="font-bold text-emerald-400">-32% Average</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Inventory Sync</div>
          <div className="font-bold text-emerald-400">Zero Race Condition</div>
        </div>
      </div>
    </div>
  );
}

