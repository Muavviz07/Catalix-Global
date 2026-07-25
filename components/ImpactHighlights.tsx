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
    <section id="outcomes" className="py-24 bg-white border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-2" />
          <div className="text-xs font-semibold tracking-wider text-brand-gold uppercase">
            MEASURABLE OPERATIONAL RESULTS
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Impact That Matters
          </h2>
          <p className="text-base text-brand-text/80">
            Measurable business outcomes delivered across enterprise plant operations and multi-site supply chains.
          </p>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

                  <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                    {outcome.copy}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 mt-6 text-xs italic text-brand-navy/70">
                  <strong>Impact:</strong> {outcome.businessImpact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="text-center">
          <Link
            href="/services/operational-excellence"
            className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors group"
          >
            <span>Explore All Operational Yield Strategies</span>
            <ArrowRight className="w-4 h-4 ml-1.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
