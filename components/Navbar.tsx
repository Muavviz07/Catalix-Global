'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Menu,
  X,
  Compass,
  TrendingUp,
  Award,
  Cpu,
  Mail,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenConsultation: (topic?: string) => void;
}

const mobileNavItems = [
  {
    name: 'Services',
    href: '#services',
    icon: Compass,
    badge: 'Core Practice Areas',
  },
  {
    name: 'Impact Results',
    href: '#outcomes',
    icon: TrendingUp,
    badge: 'Yield Metrics',
  },
  {
    name: 'Why Catalix',
    href: '#why-us',
    icon: Award,
    badge: 'Our Differentiators',
  },
  {
    name: 'AI Governance',
    href: '#ai-advisory',
    icon: Cpu,
    badge: '2026 AI Roadmap',
  },
];

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream/95 backdrop-blur-md py-3.5 shadow-sm border-b border-brand-navy/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-sm p-0.5"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links (Unchanged) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-brand-text/90 hover:text-brand-navy transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </a>
            <a
              href="#outcomes"
              className="text-sm font-medium text-brand-text/90 hover:text-brand-navy transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              Impact Results
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-brand-text/90 hover:text-brand-navy transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              Why Catalix
            </a>
            <a
              href="#ai-advisory"
              className="text-sm font-medium text-brand-text/90 hover:text-brand-navy transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              AI Governance
            </a>
          </nav>

          {/* Desktop CTA (Unchanged) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation('Executive Consultation')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-dark rounded-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-brand-navy group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
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

      {/* Refined Mobile Drawer Navigation (Mobile Only) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-brand-cream border-b border-brand-navy/15 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
                Executive Menu
              </span>

              {/* Interactive Mobile Navigation Cards */}
              <div className="space-y-2.5">
                {mobileNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-md bg-white border border-brand-navy/10 active:border-brand-gold active:bg-brand-gold-light transition-all shadow-xs group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-sm bg-brand-navy/5 text-brand-navy group-active:bg-brand-navy group-active:text-brand-gold flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-brand-navy block leading-none">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-brand-text/60 block mt-1 font-medium">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-brand-navy/40 group-active:text-brand-gold group-active:translate-x-1 transition-all" />
                    </a>
                  );
                })}
              </div>

              {/* Action Button & Footer Info */}
              <div className="pt-4 border-t border-brand-navy/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation('Executive Consultation');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-brand-navy rounded-md shadow-md active:bg-brand-navy-dark transition-all"
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
