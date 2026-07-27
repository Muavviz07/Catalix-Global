'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface GeneralEstimatorProps {
  onOpenConsultation: (topic: string) => void;
}

export default function GeneralEstimator({ onOpenConsultation }: GeneralEstimatorProps) {
  const [revenue, setRevenue] = useState(250);
  const [plants, setPlants] = useState(4);

  // Formulas
  // Working Capital Release = (Annual Revenue × 0.12 × 0.2) × (Plants × 0.15 + 0.5)
  const workingCapital = (
    revenue * 0.12 * 0.2 * (plants * 0.15 + 0.5)
  ).toFixed(2);

  // EBITDA Lift = (Annual Revenue × 0.035) × (Plants × 0.2 + 0.4)
  const ebitdaLift = (
    revenue * 0.035 * (plants * 0.2 + 0.4)
  ).toFixed(2);

  return (
    <section id="estimator" className="py-10 lg:py-14 bg-white border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Fix 4: Tighter gap & Fix 5: Prominent kicker badge & subtitle legibility) */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand-gold/15 border border-brand-gold/30 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-navy uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span>OPERATIONAL YIELD CALCULATOR</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Estimate Your Enterprise Transformation Value
          </h2>
          <p className="text-base sm:text-lg text-brand-navy/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Adjust your annual enterprise revenue and manufacturing facility count to preview potential working capital releases and efficiency gains.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & Benchmark */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-brand-cream/60 rounded-sm border border-brand-navy/10 space-y-4">
              <h3 className="font-serif font-bold text-2xl text-brand-navy">
                Data-Backed Impact Benchmarks
              </h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                Based on historical client engagements across industrial manufacturing, high-tech, and consumer goods supply chains.
              </p>

              <ul className="space-y-3 pt-2 text-xs text-brand-navy font-bold">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  <span>Average Inventory Buffer Reduction: 18% - 28%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  <span>OEE Capacity Lift: +8% to +14%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                  <span>S&OP Planning Accuracy Target: 95%+</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-brand-navy/5 rounded-sm border border-brand-navy/10 flex items-start gap-3 text-xs text-brand-navy font-medium">
              <Sparkles className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>
                Calculations provide an executive preview. For a comprehensive audit, request a custom diagnostic tailored to your multi-site architecture.
              </span>
            </div>
          </div>

          {/* Right Column: Calculator Widget */}
          <div className="lg:col-span-7 bg-brand-navy-dark p-8 sm:p-10 rounded-sm border border-brand-gold/30 shadow-2xl space-y-8 text-white">
            {/* Slider 1: Revenue */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label className="font-medium text-slate-200">
                  Annual Enterprise Revenue ($M)
                </label>
                <span className="font-mono font-bold text-lg text-brand-gold">
                  ${revenue}M
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={2000}
                step={25}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>$50M</span>
                <span>$1,000M</span>
                <span>$2,000M</span>
              </div>
            </div>

            {/* Slider 2: Plants */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label className="font-medium text-slate-200">
                  Active Manufacturing & Distribution Facilities
                </label>
                <span className="font-mono font-bold text-lg text-brand-gold">
                  {plants} Sites
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={plants}
                onChange={(e) => setPlants(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1 Site</span>
                <span>12 Sites</span>
                <span>25 Sites</span>
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white/5 rounded-sm border border-brand-gold/30 space-y-1">
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block">
                  Est. Working Capital Release
                </span>
                <div className="text-3xl font-serif font-bold text-brand-gold">
                  ${workingCapital}M
                </div>
                <span className="text-[10px] text-slate-400 block pt-1">
                  Inventory & buffer reduction yield
                </span>
              </div>

              <div className="p-5 bg-white/5 rounded-sm border border-brand-gold/30 space-y-1">
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block">
                  Est. Annual EBITDA Expansion
                </span>
                <div className="text-3xl font-serif font-bold text-brand-gold">
                  ${ebitdaLift}M
                </div>
                <span className="text-[10px] text-slate-400 block pt-1">
                  OEE, scrap & process margin lift
                </span>
              </div>
            </div>

            {/* CTA inside Widget */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <span className="text-xs text-slate-300">
                Want an audited diagnostic for your board?
              </span>
              <button
                onClick={() =>
                  onOpenConsultation(
                    `Operational Yield Diagnostic ($${revenue}M Revenue, ${plants} Sites)`
                  )
                }
                className="w-full sm:w-auto px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Request Audited Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
