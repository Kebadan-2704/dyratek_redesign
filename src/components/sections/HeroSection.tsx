'use client';

import React from 'react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#FBFBF9] py-12 lg:py-20 border-b border-[#E1E4E0] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative (65ch, 18px body, sentence case) */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] text-[#123D32]">
              Websites and apps built for your business
            </h1>
            <p className="text-base sm:text-lg text-[#555B57] leading-relaxed max-w-[56ch]">
              We design fast websites and apps that help your company work better. We also connect your business tools so routine tasks happen automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="h-12 px-7 rounded-xl bg-[#123D32] text-[#FBFBF9] text-base font-medium flex items-center justify-center shadow-xs hover:bg-[#0B2720] transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="h-12 px-7 rounded-xl bg-white border border-[#E1E4E0] text-[#123D32] text-base font-medium flex items-center justify-center hover:bg-[#F3F4F1] transition-colors"
              >
                See our services
              </Link>
            </div>
          </div>

          {/* Right Column: Tangible Shop Scene (No grey skeleton bars, no fake metrics) */}
          <div className="lg:col-span-6 relative select-none" aria-hidden="true">
            {/* Desktop Browser Window Frame */}
            <div className="rounded-2xl bg-white border border-[#E1E4E0] shadow-md overflow-hidden max-w-[480px] mx-auto">
              {/* Browser Header */}
              <div className="h-10 bg-[#F3F4F1] px-4 border-b border-[#E1E4E0] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4D8D2]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4D8D2]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4D8D2]"></span>
                </div>
                <div className="ml-2 flex-1 h-6 rounded-md bg-white border border-[#E1E4E0] px-3 flex items-center text-[13px] text-[#555B57]">
                  <span>store.example.com</span>
                </div>
              </div>

              {/* Sample Store Content */}
              <div className="p-5 space-y-4 bg-white">
                <div className="flex justify-between items-center pb-2 border-b border-[#F3F4F1]">
                  <span className="font-semibold text-xs text-[#123D32]">Online store demo</span>
                  <span className="text-xs text-[#555B57]">Shopping cart</span>
                </div>
                <div className="rounded-xl bg-[#F0F3F1] p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-[#123D32]">Clean storefront layout</div>
                    <div className="text-xs text-[#555B57] mt-0.5">Automatic inventory updates</div>
                  </div>
                  <div className="h-7 px-3 rounded-lg bg-[#123D32] text-[#FBFBF9] text-xs font-medium flex items-center">
                    Order item
                  </div>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-xl border border-[#E1E4E0] p-2.5 bg-white">
                    <div className="h-16 rounded-lg bg-[#E6ECE8] flex items-center justify-center text-xs text-[#123D32] font-medium">
                      Product catalog
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs">
                      <span className="font-medium text-[#1E2221]">Sample item</span>
                      <span className="text-[#123D32] font-semibold">In stock</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#E1E4E0] p-2.5 bg-white">
                    <div className="h-16 rounded-lg bg-[#E6ECE8] flex items-center justify-center text-xs text-[#123D32] font-medium">
                      Product catalog
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs">
                      <span className="font-medium text-[#1E2221]">Sample item</span>
                      <span className="text-[#123D32] font-semibold">In stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Phone Frame with Approved Inquiry Notification Text */}
            <div className="absolute -bottom-5 -right-2 sm:-right-4 w-60 sm:w-68 rounded-2xl bg-white border-2 border-[#123D32] shadow-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-[13px] text-[#555B57] border-b border-[#F3F4F1] pb-1.5">
                <span className="font-semibold text-[#123D32]">Automated Workflow</span>
                <span>Just now</span>
              </div>
              <div className="rounded-xl bg-[#F0F3F1] p-2.5 space-y-1">
                <div className="text-xs font-semibold text-[#123D32] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#123D32]"></span>
                  <span>Customer inquiry received</span>
                </div>
                <div className="text-[13px] text-[#1E2221] leading-snug">
                  Updates customer records and notifies the team.
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-[#555B57] pt-0.5">
                <span>Order received</span>
                <span className="font-medium text-[#123D32]">View details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
