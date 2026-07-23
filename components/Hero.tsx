'use client';

import { ArrowRight, ShieldCheck, Download, ChevronDown, Compass, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (topic?: string) => void;
  onOpenRoadmapModal: () => void;
}

export default function Hero({ onOpenConsultation, onOpenRoadmapModal }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-brand-cream border-b border-brand-navy/5">
      {/* Refined Geometric Background Signature */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#1A3A52 0.75px, transparent 0.75px), radial-gradient(#D4AF37 0.75px, #F7F5F0 0.75px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px',
            opacity: 0.15,
          }}
        />
        <svg
          className="absolute top-0 right-0 w-full h-full max-w-4xl text-brand-navy/10"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="600" cy="200" r="350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="600" cy="200" r="240" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 200,600 L 600,200" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />
          <rect x="450" y="350" width="120" height="120" stroke="currentColor" strokeWidth="1" transform="rotate(15 450 350)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-slate-light/60 border border-brand-navy/10 text-xs font-semibold tracking-wider text-brand-navy uppercase mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span>B2B Advisory & Enterprise Transformation</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.15] mb-6">
            Transform Operations Through{' '}
            <span className="relative inline-block text-brand-navy">
              Intelligent Strategy
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-gold/60"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-brand-text/90 font-normal leading-relaxed max-w-2.5xl mb-10">
            Catalix Global advises C-suite leadership and operational executives on high-stakes CIO/CDO initiatives, ERP governance, and practical AI adoption to drive measurable bottom-line yield.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={() => onOpenConsultation('Executive Strategy Session')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-navy hover:bg-brand-navy-dark rounded-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-brand-navy group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenRoadmapModal}
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-brand-navy bg-white hover:bg-brand-gold-light border border-brand-gold rounded-sm transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
            >
              <Download className="w-4 h-4 mr-2.5 text-brand-gold group-hover:scale-110 transition-transform" />
              <span>Download AI Roadmap</span>
            </button>
          </div>

          {/* Trust Indicators Bar - Fixed to Single Line per item */}
          <div className="pt-8 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-y-4 gap-x-6">
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-xs font-semibold text-brand-navy tracking-wide uppercase">
                CIO / CDO Governance
              </span>
            </div>

            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <Compass className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-xs font-semibold text-brand-navy tracking-wide uppercase">
                ERP Lifecycle Leadership
              </span>
            </div>

            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <div className="w-4 h-4 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              </div>
              <span className="text-xs font-semibold text-brand-navy tracking-wide uppercase">
                Enterprise AI Frameworks
              </span>
            </div>

            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <TrendingUp className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-xs font-semibold text-brand-navy tracking-wide uppercase">
                EBITDA Yield Focused
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs font-medium text-brand-text/60 hover:text-brand-navy transition-colors"
        aria-label="Scroll to services"
      >
        <span>EXPLORE SERVICES</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold" />
      </a>
    </section>
  );
}
