'use client';

import { Mail, Globe, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-brand-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block focus:outline-none">
              <Logo size="md" variant="light" />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Catalix Global is a premier B2B consulting firm specializing in executive CIO/CDO advisory, ERP governance, digital transformation, and practical AI adoption.
            </p>

            <div className="flex flex-col space-y-2 pt-2 text-xs text-slate-300">
              <a
                href="mailto:consulting@catalixglobal.com"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>consulting@catalixglobal.com</span>
              </a>
              <a
                href="https://www.catalixglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Globe className="w-4 h-4 text-brand-gold" />
                <span>www.catalixglobal.com</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Advisory Practice
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">
                  CIO & CDO Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">
                  ERP Steering & Governance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#ai-advisory" className="hover:text-brand-gold transition-colors">
                  AI Governance & Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Business Impact & Governance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Executive Focus
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#outcomes" className="hover:text-brand-gold transition-colors">
                  Inventory & Working Capital Optimization
                </a>
              </li>
              <li>
                <a href="#outcomes" className="hover:text-brand-gold transition-colors">
                  OEE & Production Throughput Gains
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-gold transition-colors">
                  Independent Vendor Selection
                </a>
              </li>
              <li>
                <a href="#ai-advisory" className="hover:text-brand-gold transition-colors">
                  2026 Enterprise AI Roadmap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Catalix Global. All rights reserved. Registered trademark of Catalix Global Advisory LLC.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Engagement</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-white/5 hover:bg-brand-gold hover:text-brand-navy transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
