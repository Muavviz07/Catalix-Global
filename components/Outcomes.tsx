'use client';

import { useState } from 'react';
import {
  TrendingUp,
  Boxes,
  Gauge,
  CalendarCheck,
  CheckCircle2,
  AlertTriangle,
  Calculator,
  ArrowRight,
} from 'lucide-react';

interface OutcomesProps {
  onOpenConsultation: (topic?: string) => void;
}

const outcomesList = [
  {
    id: 'inventory',
    title: 'Reduce Inventory',
    metric: '18-28% Capital Unlock',
    icon: Boxes,
    description:
      'Harmonize demand forecasting with plant scheduling to eliminate safety stock buffer inflation and release millions in tied-up working capital.',
    businessImpact: 'Improves cash flow velocity and reduces warehouse holding overheads.',
  },
  {
    id: 'oee',
    title: 'Improve OEE',
    metric: '+8 to 14% OEE Lift',
    icon: Gauge,
    description:
      'Identify micro-stoppages and throughput bottlenecks by connecting real-time operational technology (OT) telemetry with ERP planning.',
    businessImpact: 'Unlocks hidden capacity without adding expensive new capital assets.',
  },
  {
    id: 'planning',
    title: 'Optimize Planning',
    metric: '95%+ S&OP Accuracy',
    icon: TrendingUp,
    description:
      'Synchronize multi-site Sales & Operations Planning (S&OP) to align sales commitments with true factory constraints and material availability.',
    businessImpact: 'Prevents costly stockouts and stabilizes production scheduling.',
  },
  {
    id: 'scheduling',
    title: 'Strengthen Scheduling',
    metric: '40% Fast Changeovers',
    icon: CalendarCheck,
    description:
      'Implement dynamic finite-capacity scheduling to minimize line changeover delays, balance work-center loads, and meet tight customer OTIF targets.',
    businessImpact: 'Drives maximum shop-floor execution predictability.',
  },
  {
    id: 'quality',
    title: 'Elevate Quality',
    metric: '35% Less Scrap & Rework',
    icon: CheckCircle2,
    description:
      'Deploy automated root-cause quality governance and inline telemetry tracking to arrest defect generation at the source.',
    businessImpact: 'Protects margin integrity and reduces expensive warranty claims.',
  },
  {
    id: 'downtime',
    title: 'Reduce Downtime',
    metric: '25-35% Unplanned Outage Cut',
    icon: AlertTriangle,
    description:
      'Transition from reactive firefighting to predictive asset care and streamlined spare-parts availability across critical production lines.',
    businessImpact: 'Extends equipment useful life and stabilizes line availability.',
  },
];

export default function Outcomes({ onOpenConsultation }: OutcomesProps) {
  // Interactive Calculator State
  const [revenue, setRevenue] = useState<number>(250); // Millions $
  const [plants, setPlants] = useState<number>(4);

  // Estimations
  const estimatedInventoryUnlock = ((revenue * 0.12 * 0.2) * (plants * 0.15 + 0.5)).toFixed(1);
  const estimatedOeeValue = ((revenue * 0.035) * (plants * 0.2 + 0.4)).toFixed(1);

  return (
    <section id="outcomes" className="py-24 bg-brand-cream border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span>MEASURABLE BUSINESS OUTCOMES</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-4">
            Impact That Matters
          </h2>
          <p className="text-base text-brand-text/80 leading-relaxed font-normal">
            We measure advisory success solely by bottom-line financial metrics and operational yield improvements across enterprise supply chains.
          </p>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {outcomesList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-sm p-8 border border-brand-navy/10 hover:border-brand-gold/50 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-gold-light text-brand-navy border border-brand-gold/30">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-brand-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-text/90 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 text-xs font-medium text-brand-navy/70 flex items-center gap-1.5">
                  <span className="text-brand-gold font-bold">Yield Impact:</span>
                  <span>{item.businessImpact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Transformation Impact Calculator */}
        <div className="bg-brand-navy text-white rounded-sm p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Background Gradient */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Calculator Intro */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
                <Calculator className="w-4 h-4" />
                <span>ENTERPRISE IMPACT ESTIMATOR</span>
              </div>
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4">
                Estimate Your Operational Yield Gain
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Adjust annual enterprise revenue and manufacturing plant count to preview potential working capital releases and efficiency gains.
              </p>

              <div className="p-4 rounded-sm bg-white/5 border border-white/10 text-xs text-slate-300">
                <span className="font-semibold text-brand-gold">Benchmark Methodology:</span> Based on historical client engagements across industrial manufacturing and high-tech supply chains.
              </div>
            </div>

            {/* Right Column: Sliders & Output */}
            <div className="lg:col-span-7 bg-brand-navy-dark/90 p-6 sm:p-8 rounded-sm border border-brand-gold/20">
              <div className="space-y-6 mb-8">
                {/* Revenue Slider */}
                <div>
                  <div className="flex justify-between items-center text-sm font-medium mb-2">
                    <span className="text-slate-200">Annual Enterprise Revenue ($M)</span>
                    <span className="text-brand-gold font-bold font-mono text-base">${revenue}M</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="25"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                </div>

                {/* Plants Slider */}
                <div>
                  <div className="flex justify-between items-center text-sm font-medium mb-2">
                    <span className="text-slate-200">Active Plant / Distribution Facilities</span>
                    <span className="text-brand-gold font-bold font-mono text-base">{plants} Sites</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={plants}
                    onChange={(e) => setPlants(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                </div>
              </div>

              {/* Calculated Outputs Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-6">
                <div className="bg-brand-navy/80 p-4 rounded-sm border border-brand-gold/30">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Est. Working Capital Released
                  </span>
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold">
                    ${estimatedInventoryUnlock}M
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">Inventory & buffer stock rationalization</span>
                </div>

                <div className="bg-brand-navy/80 p-4 rounded-sm border border-white/10">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Est. Annual EBITDA Capacity Lift
                  </span>
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-white">
                    ${estimatedOeeValue}M
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">OEE & downtime reduction gains</span>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation('Custom Operational Yield Diagnostic')}
                className="w-full py-3.5 px-6 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Request Custom Executive Diagnostic Report</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
