'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DyratekLogo } from '@/components/ui/DyratekLogo';

const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        pillar: '01 // BUILD',
        items: [
          { label: 'Web Development', href: '/services/web-development' },
          { label: 'App Development', href: '/services/app-development' },
          { label: 'E-commerce Solutions', href: '/services/ecommerce-solutions' },
          { label: 'Digital Solutions', href: '/services/digital-solutions' },
        ],
      },
      {
        pillar: '02 // AUTOMATE',
        items: [
          { label: 'Business Automation', href: '/services/business-automation' },
          { label: 'Email & WhatsApp Marketing', href: '/services/email-whatsapp-marketing' },
        ],
      },
      {
        pillar: '03 // CREATE & GROW',
        items: [
          { label: 'UI/UX Design', href: '/services/ui-ux-design' },
          { label: 'Creative & Video', href: '/services/creative-video' },
          { label: 'Digital Marketing', href: '/services/digital-marketing' },
          { label: 'Performance Marketing', href: '/services/performance-marketing' },
          { label: 'Content Strategy & Copywriting', href: '/services/content-strategy-copywriting' },
        ],
      },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState('');
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isMobileOpen) setIsMobileOpen(false);
    if (isServicesOpen) setIsServicesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleServicesEnter = useCallback(() => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  }, []);

  const closeMenus = useCallback(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F1E9]/90 backdrop-blur-xl border-b border-[#E5E2DA]'
          : 'bg-transparent border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-16 h-20 flex items-center justify-between">
        {/* Approved Official DYRATEK Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#123D32]"
          aria-label="DYRATEK — Home"
        >
          <DyratekLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <Link
                  href={item.href}
                  className={`font-mono text-[11px] uppercase tracking-[0.08em] font-medium transition-colors flex items-center gap-1.5 py-2 ${
                    isActive(item.href) ? 'text-[#123D32]' : 'text-[#2A2A2A] hover:text-[#123D32]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#E5E2DA] text-[#123D32] font-mono font-semibold">
                    11
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Services Dropdown */}
                {isServicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <div className="bg-[#F4F1E9] border border-[#E5E2DA] shadow-[0_8px_0px_rgba(18,61,50,0.04)] p-6 min-w-[640px]">
                      <div className="grid grid-cols-3 gap-6">
                        {item.children.map((pillar) => (
                          <div key={pillar.pillar}>
                            <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-[#E5E2DA]">
                              <span className="w-1 h-1 bg-[#C83B35] inline-block" aria-hidden="true" />
                              <span className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
                                {pillar.pillar}
                              </span>
                            </div>
                            <div className="space-y-1">
                              {pillar.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={closeMenus}
                                  className={`block py-1.5 px-2 text-[13px] font-medium transition-colors ${
                                    isActive(subItem.href)
                                      ? 'text-[#123D32] bg-[#E5E2DA]'
                                      : 'text-[#2A2A2A] hover:text-[#123D32] hover:bg-[#ECE8DF]'
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#E5E2DA] flex justify-between items-center text-[11px] font-mono">
                        <span className="text-[#2A2A2A]/60">PRACTICE ARCHITECTURE</span>
                        <Link href="/services" onClick={closeMenus} className="text-[#123D32] font-bold hover:text-[#C83B35]">
                          View All 11 Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-[0.08em] font-medium transition-colors py-2 ${
                  isActive(item.href) ? 'text-[#123D32]' : 'text-[#2A2A2A] hover:text-[#123D32]'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Action Area: Start a Project CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#123D32] text-[#F4F1E9] font-mono text-[11px] uppercase tracking-[0.06em] font-semibold px-5 py-2.5 hover:bg-[#1b4f42] transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block flex-shrink-0" aria-hidden="true" />
            Start a Project
          </Link>

          {/* Mobile Menu Toggle (min 44x44px touch target) */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 text-[#123D32] cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-[1.5px] w-full bg-current transition-all duration-300 origin-center ${
                  isMobileOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-current transition-all duration-300 origin-center ${
                  isMobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-20 bg-[#F4F1E9] z-40 transition-all duration-300 overflow-y-auto ${
          isMobileOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="px-5 py-8 space-y-1" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-[#E5E2DA]">
                <button
                  className="flex items-center justify-between w-full py-4 text-left cursor-pointer min-h-[44px]"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                >
                  <span className="font-heading font-semibold text-lg text-[#123D32] uppercase">
                    {item.label}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#123D32] transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="pb-4 space-y-6">
                    {item.children.map((pillar) => (
                      <div key={pillar.pillar}>
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="w-1 h-1 bg-[#C83B35]" aria-hidden="true" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold text-[#123D32]">
                            {pillar.pillar}
                          </span>
                        </div>
                        <div className="space-y-0.5 pl-2.5">
                          {pillar.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeMenus}
                              className={`block py-2 text-[15px] min-h-[44px] flex items-center transition-colors ${
                                isActive(subItem.href)
                                  ? 'text-[#123D32] font-medium'
                                  : 'text-[#2A2A2A] hover:text-[#123D32]'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/services"
                      onClick={closeMenus}
                      className="block py-3 text-[13px] font-mono uppercase tracking-wider text-[#123D32] font-semibold min-h-[44px] flex items-center"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenus}
                className={`block py-4 border-b border-[#E5E2DA] font-heading font-semibold text-lg uppercase min-h-[44px] flex items-center ${
                  isActive(item.href) ? 'text-[#123D32]' : 'text-[#2A2A2A] hover:text-[#123D32]'
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-6">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="flex items-center justify-center gap-2 w-full bg-[#123D32] text-[#F4F1E9] font-mono text-[11px] uppercase tracking-[0.06em] font-semibold px-5 py-4 min-h-[48px] hover:bg-[#1b4f42] transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              Start a Project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
