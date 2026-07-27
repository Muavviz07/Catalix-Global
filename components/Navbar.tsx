'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ChevronDown, Mail, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import NavDropdown from './NavDropdown';
import { servicesData, sectorsData, businessSystemsData } from '@/data/siteData';

interface NavbarProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveAccordion, setMobileActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesDropdownItems = servicesData.map((s) => ({
    name: s.title,
    href: `/services/${s.slug}`,
    subtitle: s.subtitle,
  }));

  const sectorsDropdownItems = sectorsData.map((sec) => ({
    name: sec.title,
    href: `/sectors/${sec.slug}`,
    subtitle: sec.subtitle,
  }));

  const systemsDropdownItems = businessSystemsData.map((sys) => ({
    name: sys.title,
    href: `/business-systems/${sys.slug}`,
    subtitle: sys.subtitle,
  }));

  const toggleMobileAccordion = (key: string) => {
    setMobileActiveAccordion(mobileActiveAccordion === key ? null : key);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream/95 backdrop-blur-md py-3 shadow-sm border-b border-brand-navy/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-sm p-0.5"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavDropdown
              label="Services"
              items={servicesDropdownItems}
              viewAllHref="/services"
              viewAllLabel="View All Services →"
            />
            <NavDropdown
              label="Sectors"
              items={sectorsDropdownItems}
              viewAllHref="/sectors"
              viewAllLabel="View All Sectors →"
            />
            <NavDropdown
              label="Platforms"
              items={systemsDropdownItems}
              viewAllHref="/business-systems"
              viewAllLabel="View All Platforms →"
            />
            <Link
              href="/approach"
              className="text-sm font-medium text-brand-text/90 hover:text-brand-navy transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              Approach
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation('Executive Consultation')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-dark rounded-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-brand-navy group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md bg-brand-navy text-brand-gold hover:text-white transition-colors focus:outline-none shadow-xs"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-cream border-b border-brand-navy/15 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
                Executive Menu
              </span>

              {/* Accordion 1: Services */}
              <div className="border-b border-brand-navy/10 pb-2">
                <button
                  onClick={() => toggleMobileAccordion('services')}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-brand-navy text-left"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-gold transition-transform ${
                      mobileActiveAccordion === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileActiveAccordion === 'services' && (
                  <div className="pl-3 py-2 space-y-2">
                    {servicesDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-medium text-brand-navy hover:text-brand-gold py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-bold text-brand-gold pt-1"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 2: Sectors */}
              <div className="border-b border-brand-navy/10 pb-2">
                <button
                  onClick={() => toggleMobileAccordion('sectors')}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-brand-navy text-left"
                >
                  <span>Sectors</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-gold transition-transform ${
                      mobileActiveAccordion === 'sectors' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileActiveAccordion === 'sectors' && (
                  <div className="pl-3 py-2 space-y-2">
                    {sectorsDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-medium text-brand-navy hover:text-brand-gold py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/sectors"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-bold text-brand-gold pt-1"
                    >
                      View All Sectors →
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 3: Platforms */}
              <div className="border-b border-brand-navy/10 pb-2">
                <button
                  onClick={() => toggleMobileAccordion('systems')}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-brand-navy text-left"
                >
                  <span>Enterprise Platforms</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-gold transition-transform ${
                      mobileActiveAccordion === 'systems' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileActiveAccordion === 'systems' && (
                  <div className="pl-3 py-2 space-y-2">
                    {systemsDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-medium text-brand-navy hover:text-brand-gold py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/business-systems"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-bold text-brand-gold pt-1"
                    >
                      View All Enterprise Platforms →
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct Link: Approach */}
              <div className="border-b border-brand-navy/10 pb-2">
                <Link
                  href="/approach"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-bold text-brand-navy py-2"
                >
                  Approach & Engagement Model
                </Link>
              </div>

              {/* Mobile CTA Button & Footer Details */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation('Executive Consultation');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-brand-navy rounded-md shadow-md"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-brand-text/70 pt-2 px-1">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-gold" />
                    <span>consulting@catalixglobal.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    <span>NDA Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
