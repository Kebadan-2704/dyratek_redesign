'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { DyratekLogo } from '@/components/ui/DyratekLogo';
import { NAV_PILLARS } from '@/data/navigation';

interface NavItem {
  label: string;
  href: string;
  children?: typeof NAV_PILLARS;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: NAV_PILLARS
  },
  { label: 'Work', href: '/work' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState('');
  const pathname = usePathname();
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isMobileOpen) setIsMobileOpen(false);
    if (isServicesOpen) setIsServicesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      // Trap focus in mobile dialog
      const dialog = mobileMenuRef.current;
      if (dialog) {
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length > 0) {
          focusables[0].focus();
        }
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Global escape key listener to close dropdown & mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isServicesOpen) setIsServicesOpen(false);
        if (isMobileOpen) {
          setIsMobileOpen(false);
          mobileToggleRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isServicesOpen, isMobileOpen]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesContainerRef.current &&
        !servicesContainerRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const toggleServices = useCallback(() => {
    setIsServicesOpen((prev) => !prev);
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
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E1E4E0] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
        {/* DYRATEK Official Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#123D32] rounded-lg min-h-[44px]"
          aria-label="DYRATEK Home"
        >
          <DyratekLogo size="md" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={servicesContainerRef}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`text-[15px] font-medium py-2 transition-colors ${
                      isActive(item.href) ? 'text-[#123D32] font-semibold' : 'text-[#555B57] hover:text-[#123D32]'
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={toggleServices}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                    aria-label="Toggle services menu"
                    className="p-1.5 ml-0.5 text-[#555B57] hover:text-[#123D32] rounded-md transition-colors cursor-pointer"
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
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
                </div>

                {/* Services Dropdown */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 pt-1 z-50"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="bg-white border border-[#E1E4E0] shadow-lg rounded-2xl p-6 min-w-[620px]">
                        <div className="grid grid-cols-3 gap-6">
                          {item.children.map((pillar) => (
                            <div key={pillar.pillar}>
                              <div className="font-semibold text-xs text-[#123D32] pb-2 mb-3 border-b border-[#E1E4E0]">
                                {pillar.pillar}
                              </div>
                              <div className="space-y-1">
                                {pillar.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={closeMenus}
                                    className={`block py-1.5 px-2 rounded-lg text-sm transition-colors ${
                                      isActive(subItem.href)
                                        ? 'text-[#123D32] bg-[#F3F4F1] font-medium'
                                        : 'text-[#555B57] hover:text-[#123D32] hover:bg-[#F3F4F1]'
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 pt-4 border-t border-[#E1E4E0] flex justify-between items-center text-xs">
                          <span className="text-[#555B57]">11 services across Build, Automate, and Grow</span>
                          <Link
                            href="/services"
                            onClick={closeMenus}
                            className="font-semibold text-[#123D32] hover:underline"
                          >
                            View all services
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium transition-colors py-2 ${
                  isActive(item.href) ? 'text-[#123D32] font-semibold' : 'text-[#555B57] hover:text-[#123D32]'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="h-11 px-5 rounded-xl bg-[#123D32] text-[#FBFBF9] text-sm font-medium flex items-center justify-center hover:bg-[#0B2720] transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            ref={mobileToggleRef}
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2.5 rounded-xl text-[#123D32] hover:bg-[#F3F4F1] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-200 origin-center ${
                  isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-200 origin-center ${
                  isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#FBFBF9] z-40 overflow-y-auto border-t border-[#E1E4E0]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-nav-title"
          >
            <div className="p-6 space-y-6 max-w-lg mx-auto">
              <h2 id="mobile-nav-title" className="sr-only">
                Mobile Navigation Menu
              </h2>

              <nav className="space-y-1" aria-label="Mobile links">
                {NAV_ITEMS.map((item) =>
                  item.children ? (
                    <div key={item.label} className="border-b border-[#E1E4E0] pb-2 mb-2">
                      <div className="flex items-center justify-between py-3">
                        <Link
                          href={item.href}
                          onClick={closeMenus}
                          className="font-semibold text-lg text-[#123D32]"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="p-2 text-[#555B57] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                          aria-expanded={isServicesOpen}
                          aria-label="Toggle service categories"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isServicesOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-3 pb-3 space-y-4 overflow-hidden"
                          >
                            {item.children.map((pillar) => (
                              <div key={pillar.pillar} className="space-y-1.5">
                                <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                                  {pillar.pillar}
                                </div>
                                <div className="space-y-1 pl-2">
                                  {pillar.items.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      onClick={closeMenus}
                                      className="block py-2 text-sm text-[#555B57] hover:text-[#123D32] min-h-[44px] flex items-center"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      className={`block py-3 text-lg border-b border-[#E1E4E0] min-h-[44px] flex items-center ${
                        isActive(item.href) ? 'font-semibold text-[#123D32]' : 'text-[#555B57] hover:text-[#123D32]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={closeMenus}
                  className="w-full h-12 rounded-xl bg-[#123D32] text-[#FBFBF9] font-medium flex items-center justify-center hover:bg-[#0B2720] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
