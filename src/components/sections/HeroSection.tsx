'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useSpring } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AmbientGridCanvas } from '@/components/motion/AmbientGridCanvas';
import { MagneticButton } from '@/components/motion/MagneticButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [orderCount, setOrderCount] = useState(1);
  const [isAssembled, setIsAssembled] = useState(false);
  const [activePulse, setActivePulse] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  // Desktop 3D Tilt Spring
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  // Self-Assembly Timeline (0.9s skeleton to real UI)
  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }
    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, 900);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Handle Desktop Parallax Tilt (Max 4 degrees)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;

    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    const clampedX = Math.max(-1, Math.min(1, deltaX));
    const clampedY = Math.max(-1, Math.min(1, deltaY));

    rotateX.set(-clampedY * 3.5);
    rotateY.set(clampedX * 3.5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Interactive Live Pipeline Trigger
  const handleTriggerAction = () => {
    setOrderCount((prev) => prev + 1);
    setActivePulse(true);
    setTimeout(() => setActivePulse(false), 1400);
  };

  // GSAP ScrollTrigger Hero Pinning
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (typeof window === 'undefined') return;

    const hero = heroRef.current;
    const mockup = mockupRef.current;
    if (!hero || !mockup) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: '+=65%',
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        animation: gsap.to(mockup, {
          scale: 1.04,
          y: 20,
          opacity: 0.96,
          ease: 'power1.inOut'
        })
      });
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#FBFBF9] py-10 sm:py-14 lg:py-20 overflow-hidden"
    >
      {/* Dynamic Multi-Color Ambient Aurora Glowing Flares */}
      <div
        className="absolute -top-24 -right-24 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-400/25 via-cyan-400/25 to-indigo-500/20 blur-3xl pointer-events-none animate-glow-slow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-amber-300/20 via-rose-400/15 to-purple-500/15 blur-3xl pointer-events-none animate-glow-slow"
        aria-hidden="true"
      />

      {/* 60fps Iridescent Ambient Grid Canvas Background */}
      <AmbientGridCanvas />

      <div ref={pinContainerRef} className="relative z-10 max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Line-by-Line Mask Reveal Headline & Value Props */}
          <div className="lg:col-span-6 space-y-6">
            {/* Studio Badge with Vibrant Gradient Border */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-300/70 shadow-xs text-xs font-semibold text-[#123D32]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span>DYRATEK Digital Studio</span>
                <span className="text-emerald-700/80 font-normal">• Systems Engineering</span>
              </div>
            </div>

            {/* Line-by-Line Mask Reveal Headline with Colorful Gradient Shimmer */}
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-[76px] text-[#123D32] tracking-tight leading-[1.04]">
              <span className="block overflow-hidden pb-1">
                <span className="block animate-hero-line-1">
                  Simple design.
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block animate-hero-line-2">
                  Dependable code.
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 via-cyan-500 to-indigo-600 bg-clip-text text-transparent font-extrabold animate-gradient animate-hero-line-3">
                  Zero friction.
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[#555B57] leading-relaxed max-w-[56ch]">
              We engineer custom websites, mobile apps, and business automations that run fast, communicate clearly, and stay organized.
            </p>

            {/* 3 Value Pillars Strip: Vibrant Multi-Color Badges */}
            <div className="grid grid-cols-3 gap-2.5 py-2 border-y border-[#E1E4E0]/80 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50/90 text-emerald-900 border border-emerald-200/80 font-semibold shadow-2xs">
                <span className="text-emerald-600 font-bold">⚡</span>
                <span>Fast load</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50/90 text-indigo-900 border border-indigo-200/80 font-semibold shadow-2xs">
                <span className="text-indigo-600 font-bold">🔄</span>
                <span>Automated</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50/90 text-cyan-900 border border-cyan-200/80 font-semibold shadow-2xs">
                <span className="text-cyan-600 font-bold">🛡️</span>
                <span>WCAG-AA</span>
              </div>
            </div>

            {/* CTAs with Colorful Gradient Highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <MagneticButton strength={0.2}>
                <Link
                  href="/contact"
                  className="min-h-[50px] px-8 rounded-xl bg-gradient-to-r from-[#123D32] via-[#1a5747] to-[#123D32] text-[#FBFBF9] text-base font-semibold flex items-center justify-center shadow-lg shadow-emerald-950/20 hover:shadow-emerald-900/40 border border-emerald-500/30 active:scale-[0.98] transition-all"
                >
                  Contact us
                </Link>
              </MagneticButton>
              <Link
                href="/services"
                className="min-h-[50px] px-8 rounded-xl bg-white/90 backdrop-blur-md border border-emerald-200 text-[#123D32] text-base font-semibold flex items-center justify-center hover:bg-emerald-50/60 hover:border-emerald-400 active:scale-[0.98] transition-all shadow-xs"
              >
                See our services
              </Link>
            </div>

            {/* Availability Notice */}
            <div className="text-xs text-[#555B57] flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" aria-hidden="true" />
              <span>Available for new projects • 5-stage transparent delivery</span>
            </div>
          </div>

          {/* Right Column: The "Live System" Interactive Architecture Scene */}
          <div className="lg:col-span-6 relative">
            <motion.div
              ref={mockupRef}
              style={{
                rotateX: shouldReduceMotion ? 0 : rotateX,
                rotateY: shouldReduceMotion ? 0 : rotateY,
                transformPerspective: 1000
              }}
              className="relative w-full max-w-[760px] lg:max-w-none mx-auto transition-transform duration-100 ease-out select-none"
            >
              {/* Colorful Glow Aura behind mockup */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/25 to-indigo-500/25 blur-xl -z-10 animate-glow-slow"
                aria-hidden="true"
              />

              {/* Desktop Browser Window Frame */}
              <div className="rounded-2xl bg-white border border-[#E1E4E0] shadow-2xl overflow-hidden">
                {/* Browser Header Bar with Mac colorful buttons */}
                <div className="h-10 bg-[#F3F4F1] px-4 border-b border-[#E1E4E0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-xs" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-xs" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-xs" />
                    </div>
                    <div className="ml-2 h-6 rounded-md bg-white border border-[#E1E4E0] px-3 flex items-center gap-1.5 text-[12px] text-[#555B57] font-mono">
                      <span className="text-emerald-500">🔒</span>
                      <span>store.concept.dyratek</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-[11px] shadow-xs">
                      Live Demo
                    </span>
                  </div>
                </div>

                {/* Self-Assembling Store Content */}
                <div className="p-5 sm:p-6 space-y-4 bg-white min-h-[260px]">
                  {!isAssembled ? (
                    /* Skeleton Assembly State (0.9s) */
                    <div className="space-y-4 animate-pulse">
                      <div className="flex justify-between items-center pb-2 border-b border-[#F3F4F1]">
                        <div className="h-4 w-32 bg-emerald-100 rounded" />
                        <div className="h-4 w-20 bg-cyan-100 rounded" />
                      </div>
                      <div className="h-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl" />
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="h-28 bg-indigo-50/60 rounded-xl" />
                        <div className="h-28 bg-cyan-50/60 rounded-xl" />
                      </div>
                    </div>
                  ) : (
                    /* Resolved Real UI State */
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-[#F3F4F1]">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-[#123D32]">Digital Storefront Preview</span>
                          <span className="px-2 py-0.5 rounded-full text-[11px] bg-emerald-100 text-emerald-800 font-bold">
                            Active
                          </span>
                        </div>
                        <span className="text-xs text-[#555B57] flex items-center gap-1.5">
                          <span>Orders:</span>
                          <motion.span
                            key={orderCount}
                            initial={{ scale: 1.4 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-[11px] text-white font-bold shadow-xs"
                          >
                            #{1042 + orderCount}
                          </motion.span>
                        </span>
                      </div>

                      {/* Interactive Dispatch Box with Vibrant Gradient */}
                      <div className="rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-4 flex items-center justify-between border border-emerald-200/80 shadow-xs">
                        <div>
                          <div className="font-bold text-sm text-[#123D32]">Automated order dispatch</div>
                          <div className="text-xs text-emerald-800/80 mt-0.5">Instant CRM sync and inventory update</div>
                        </div>
                        <button
                          type="button"
                          onClick={handleTriggerAction}
                          className="h-9 px-4 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-xs font-bold flex items-center hover:opacity-90 transition-opacity cursor-pointer active:scale-95 shadow-md shadow-emerald-600/30"
                        >
                          Trigger Order
                        </button>
                      </div>

                      {/* Product Preview Items with Colorful Cards */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div
                          onClick={handleTriggerAction}
                          className="rounded-xl border border-blue-200 p-3 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 hover:border-blue-500 transition-all group cursor-pointer shadow-xs"
                        >
                          <div className="h-14 rounded-lg bg-gradient-to-br from-blue-500/15 to-indigo-500/20 flex items-center justify-center text-xs text-blue-900 font-bold group-hover:from-blue-500/25 group-hover:to-indigo-500/30 transition-all">
                            📦 Modular Studio Suite
                          </div>
                          <div className="flex justify-between items-center mt-2.5 text-xs">
                            <span className="font-semibold text-blue-950">$165.00</span>
                            <span className="text-blue-600 font-bold text-[10px] px-1.5 py-0.5 rounded bg-blue-100">
                              PRO
                            </span>
                          </div>
                        </div>

                        <div
                          onClick={handleTriggerAction}
                          className="rounded-xl border border-amber-200 p-3 bg-gradient-to-br from-amber-50/40 to-rose-50/30 hover:border-amber-500 transition-all group cursor-pointer shadow-xs"
                        >
                          <div className="h-14 rounded-lg bg-gradient-to-br from-amber-500/15 to-rose-500/20 flex items-center justify-center text-xs text-amber-900 font-bold group-hover:from-amber-500/25 group-hover:to-rose-500/30 transition-all">
                            ⚡ Automation Engine
                          </div>
                          <div className="flex justify-between items-center mt-2.5 text-xs">
                            <span className="font-semibold text-amber-950">$240.00</span>
                            <span className="text-amber-600 font-bold text-[10px] px-1.5 py-0.5 rounded bg-amber-100">
                              FAST
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Connected Phone & Automated Workflow Notification */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 w-full sm:w-80">
                {/* Animated Multi-Color SVG Connector */}
                <div className="hidden sm:block absolute -top-8 left-12 w-20 h-10 pointer-events-none -z-0">
                  <svg className="w-full h-full" viewBox="0 0 80 40" fill="none">
                    <defs>
                      <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="50%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 0 C 10 20, 60 10, 60 38"
                      stroke="url(#heroGradient)"
                      strokeWidth="3"
                      strokeDasharray="100"
                      strokeDashoffset={isAssembled ? 0 : 100}
                      className="transition-all duration-1000 ease-out"
                    />
                    {activePulse && (
                      <circle cx="60" cy="38" r="5" fill="#06B6D4" className="animate-ping" />
                    )}
                  </svg>
                </div>

                <div className="rounded-2xl bg-white border-2 border-emerald-500 shadow-2xl p-4 space-y-2.5 relative z-10">
                  <div className="flex items-center justify-between text-[12px] border-b border-[#F3F4F1] pb-2">
                    <span className="font-bold text-[#123D32] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Automation Pipe
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      Active
                    </span>
                  </div>

                  {/* 3 Linked Stages: Colorful Pill Cards */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-200/60 font-medium">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                      <span>Order received & validated</span>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200/60 font-medium">
                      <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                      <span>Database & CRM synchronized</span>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold">
                      <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                      <span>Team alerted via Slack / Webhook</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-[#555B57]">
                    <span className="text-emerald-700 font-medium">Latency: 14ms</span>
                    <Link href="/services/business-automation" className="font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                      <span>Explore pipe</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
