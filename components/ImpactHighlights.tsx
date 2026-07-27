'use client';

import Link from 'next/link';
import { Boxes, Gauge, TrendingUp, ArrowRight } from 'lucide-react';
import { homepageOutcomes } from '@/data/siteData';

const iconMap = {
  Boxes,
  Gauge,
  TrendingUp,
};

export default function ImpactHighlights() {
  return (
    <section id="outcomes" className="py-10 lg:py-14 bg-brand-cream/60 border-b border-brand-navy/10 relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A3A52_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (Fix 4: Tighter gap & Fix 5: Prominent kicker badge & subtitle legibility) */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand-gold/15 border border-brand-gold/30 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-navy uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span>MEASURABLE OPERATIONAL RESULTS</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Impact That Matters
          </h2>
          <p className="text-base sm:text-lg text-brand-navy/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Measurable business outcomes delivered across enterprise plant operations and multi-site supply chains.
          </p>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {homepageOutcomes.map((outcome) => {
            const Icon = iconMap[outcome.iconName];
            return (
              <div
                key={outcome.id}
                className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Metric Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-navy bg-brand-gold px-3 py-1 rounded-full shadow-xs">
                      {outcome.metric}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-brand-navy group-hover:text-brand-gold transition-colors">
                    {outcome.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-normal">
                    {outcome.copy}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-brand-navy/10 flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-gold">
                  <span>Verified Outcome Benchmark</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Banner */}
        <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-sm border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-lg text-white">
              Want to calculate your exact working capital and EBITDA yield?
            </h4>
            <p className="text-xs text-slate-300">
              Use our interactive operational yield calculator below or schedule a partner diagnostic.
            </p>
          </div>
          <a
            href="#estimator"
            className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xs flex-shrink-0"
          >
            Calculate Yield Now
          </a>
        </div>
      </div>
    </section>
  );
}
