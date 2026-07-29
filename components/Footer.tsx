'use client';

import Link from 'next/link';
import { Mail, Globe, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { servicesData, sectorsData, businessSystemsData } from '@/data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-brand-gold/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (40%) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <Logo size="md" variant="light" />
            </Link>

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

          {/* Practice Services Col (30%) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Advisory Practice
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-brand-gold transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-brand-gold font-semibold hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Sectors & Systems Col (30%) */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h4 className="font-serif font-bold text-base text-white tracking-wide mb-2">
                Sectors & Platforms
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase block mb-1">
                    Sectors
                  </span>
                  {sectorsData.slice(0, 3).map((sec) => (
                    <Link
                      key={sec.id}
                      href={`/sectors/${sec.slug}`}
                      className="block py-0.5 hover:text-brand-gold transition-colors truncate"
                    >
                      {sec.title}
                    </Link>
                  ))}
                  <Link href="/sectors" className="text-brand-gold text-[11px] font-semibold block mt-1">
                    All Sectors →
                  </Link>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase block mb-1">
                    Platforms
                  </span>
                  {businessSystemsData.slice(0, 3).map((sys) => (
                    <Link
                      key={sys.id}
                      href={`/business-systems/${sys.slug}`}
                      className="block py-0.5 hover:text-brand-gold transition-colors truncate"
                    >
                      {sys.title}
                    </Link>
                  ))}
                  <Link href="/business-systems" className="text-brand-gold text-[11px] font-semibold block mt-1">
                    All Systems →
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center gap-3 text-xs font-semibold text-slate-300">
              <Link href="/why-us" className="hover:text-brand-gold transition-colors">
                Why Us
              </Link>
              <span>•</span>
              <Link href="/approach" className="hover:text-brand-gold transition-colors">
                Our Approach
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-brand-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Catalix Global. All rights reserved. Registered trademark of Catalix Global Advisory LLC.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
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
