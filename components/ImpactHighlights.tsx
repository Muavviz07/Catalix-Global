'use client';

import Link from 'next/link';
import { Boxes, Gauge, TrendingUp, ArrowRight, Coins, Truck, Calculator } from 'lucide-react';
import { homepageOutcomes } from '@/data/siteData';

interface ImpactHighlightsProps {
  onOpenConsultation?: (topic?: string) => void;
}

const iconMap = {
  Boxes,
  Gauge,
  TrendingUp,
  Coins,
  Truck,
};

export default function ImpactHighlights({ onOpenConsultation }: ImpactHighlightsProps) {
  return (
    <section id="outcomes" className="py-8 bg-brand-navy-dark text-white border-b border-brand-gold/20 relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-brand-gold/30 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-gold uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span>MEASURABLE OPERATIONAL RESULTS</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Impact That Matters
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Measurable business outcomes delivered across enterprise plant operations and multi-site supply chains.
          </p>
        </div>

        {/* 6 Outcome Cards (5 Benchmark Cards + 1 Executive Diagnostic CTA Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageOutcomes.map((outcome) => {
            const Icon = iconMap[outcome.iconName] || TrendingUp;
            return (
              <div
                key={outcome.id}
                className="bg-white/5 p-8 rounded-sm border border-white/15 hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Metric Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold border border-brand-gold/30 flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-navy bg-brand-gold px-3 py-1 rounded-full shadow-xs">
                      {outcome.metric}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-white group-hover:text-brand-gold transition-colors">
                    {outcome.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {outcome.copy}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-brand-gold group-hover:text-brand-gold">
                  <span>Verified Outcome Benchmark</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          <div className="bg-brand-navy p-8 rounded-sm border-2 border-brand-gold hover:border-brand-gold-hover transition-all duration-300 shadow-xl hover:-translate-y-1 relative group flex flex-col justify-between ring-1 ring-brand-gold/30">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-sm bg-brand-gold text-brand-navy flex items-center justify-center shadow-md">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-navy bg-brand-gold px-3 py-1 rounded-full shadow-xs">
                  CUSTOM DIAGNOSTIC
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-white group-hover:text-brand-gold transition-colors">
                Calculate Your Specific Yield
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Schedule a confidential 30-minute operational benchmark diagnostic with a Catalix Managing Partner to quantify your plant&apos;s inventory velocity and EBITDA potential.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-brand-gold/30">
              <button
                onClick={() => onOpenConsultation?.('Operational Benchmark Diagnostic')}
                className="w-full py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
              >
                <span>Request Custom Diagnostic</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
