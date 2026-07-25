'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-cream border-b border-brand-navy/10 overflow-hidden">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A3A52_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Kicker Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-xs font-semibold text-brand-navy uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span>B2B ADVISORY & ENTERPRISE TRANSFORMATION</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight tracking-tight"
          >
            Drive Measurable Business Impact Through Intelligent Operations
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-text/80 font-normal leading-relaxed max-w-2xl"
          >
            Strategic consulting for CIO/CDO leadership, ERP governance, and AI adoption to unlock enterprise value and working capital.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-7 py-4 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-brand-cream text-brand-navy font-semibold text-sm uppercase tracking-wider rounded-sm border border-brand-navy/30 hover:border-brand-gold transition-all duration-300"
            >
              <span>Explore Services</span>
            </a>
          </motion.div>
        </div>

        {/* Trust Indicators Bar (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-brand-navy/80"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>CIO / CDO Governance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>ERP Lifecycle Leadership</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>Enterprise AI Frameworks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span>EBITDA Yield Focused</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
