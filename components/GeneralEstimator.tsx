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
    <section id="estimator" className="py-24 bg-white border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span>OPERATIONAL YIELD CALCULATOR</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Estimate Your Enterprise Transformation Value
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto my-2" />
          <p className="text-base text-brand-text/80 leading-relaxed">
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
              <p className="text-sm text-brand-text/90 leading-relaxed">
                Based on historical client engagements across industrial manufacturing, high-tech, and consumer goods supply chains.
              </p>

              <ul className="space-y-3 pt-2 text-xs text-brand-navy font-medium">
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

            <div className="p-4 bg-brand-navy/5 rounded-sm border border-brand-navy/10 flex items-start gap-3 text-xs text-brand-navy">
              <Sparkles className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>
                Calculations provide an executive preview. For a comprehensive audit, request a custom diagnostic tailored to your multi-site architecture.
              </span>
            </div>
          </div>

          {/* Right Column: Calculator Widget */}
          <div className="lg:col-span-7 bg-brand-navy-dark p-8 sm:p-12 rounded-sm border border-brand-gold/30 shadow-2xl space-y-8 text-white">
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

            {/* Output Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-5 bg-brand-navy/80 rounded-sm border border-brand-gold/40">
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-300 uppercase block mb-1">
                  EST. WORKING CAPITAL RELEASED
                </span>
                <div className="font-serif font-bold text-3xl sm:text-4xl text-brand-gold">
                  ${workingCapital}M
                </div>
                <span className="text-[11px] text-slate-300 block mt-1">
                  Inventory & buffer stock rationalization
                </span>
              </div>

              <div className="p-5 bg-brand-navy/80 rounded-sm border border-white/20">
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-300 uppercase block mb-1">
                  EST. ANNUAL EBITDA CAPACITY LIFT
                </span>
                <div className="font-serif font-bold text-3xl sm:text-4xl text-white">
                  ${ebitdaLift}M
                </div>
                <span className="text-[11px] text-slate-300 block mt-1">
                  OEE & downtime reduction gains
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() =>
                  onOpenConsultation(
                    `Custom Yield Diagnostic ($${revenue}M Revenue, ${plants} Sites)`
                  )
                }
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-md group"
              >
                <span>Request Custom Executive Diagnostic</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
