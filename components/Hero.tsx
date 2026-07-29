'use client';

import { ArrowRight, ShieldCheck, ChevronDown, Compass, TrendingUp } from 'lucide-react';
import HeroOrbitalNodes from './HeroOrbitalNodes';

interface HeroProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white border-b-2 border-brand-gold">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Refined Geometric Background Signature */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 0.75px, transparent 0.75px)`,
            backgroundSize: '30px 30px',
            opacity: 0.1,
          }}
        />
        <svg
          className="absolute top-0 right-0 w-full h-full max-w-4xl text-brand-gold/20"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-brand-gold/40 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-gold uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span>CATALYSING INTELLIGENT ENTERPRISE TRANSFORMATION</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] 2xl:text-[52px] text-white tracking-tight leading-[1.18]">
              Executive Technology Leadership.{' '}
              <span className="relative inline-block text-white">
                Strategic Business Outcomes.
                <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-gold"></span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              We help manufacturing and industrial businesses accelerate growth, optimise operations, and build future-ready enterprises through independent strategic advisory.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Executive Consultation')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-brand-navy bg-brand-gold hover:bg-brand-gold-hover uppercase tracking-wider rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold-glow hover:-translate-y-0.5 group"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2.5 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-brand-gold/50 rounded-sm transition-all duration-300 shadow-xs hover:-translate-y-0.5 group"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Compact 1-Line Trust Indicators */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-wide uppercase">
                  CIO & CDO Advisory
                </span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Compass className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-wide uppercase">
                  ERP & AI Governance
                </span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <TrendingUp className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-wide uppercase">
                  EBITDA Yield Aligned
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Orbital Nodes Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0">
            <HeroOrbitalNodes />
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <a
        href="#services"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs font-medium text-slate-300 hover:text-brand-gold transition-colors"
        aria-label="Scroll to services"
      >
        <span>EXPLORE SERVICES</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold" />
      </a>
    </section>
  );
}
