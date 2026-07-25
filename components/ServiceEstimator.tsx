'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceData } from '@/data/siteData';

interface ServiceEstimatorProps {
  estimator: ServiceData['estimator'];
  serviceTitle: string;
  onOpenConsultation: (topic: string) => void;
}

export default function ServiceEstimator({
  estimator,
  serviceTitle,
  onOpenConsultation,
}: ServiceEstimatorProps) {
  const [val1, setVal1] = useState(estimator.input1.default);
  const [val2, setVal2] = useState(estimator.input2.default);

  let out1 = '0.00';
  let out2 = '0.00';

  if (estimator.type === 'cio') {
    out1 = (val1 * 0.16 + val2 * 0.008).toFixed(2);
    out2 = (val1 * 0.12).toFixed(2);
  } else if (estimator.type === 'erp') {
    out1 = (val1 * 0.22 + val2 * 0.04).toFixed(2);
    out2 = (val1 * 0.14).toFixed(2);
  } else if (estimator.type === 'digital') {
    out1 = (val1 * 0.04 * (val2 * 0.15 + 0.55)).toFixed(2);
    out2 = Math.min(18, 8 + val2 * 0.8).toFixed(1);
  } else if (estimator.type === 'operational') {
    out1 = (val1 * 0.12 * 0.2 * (val2 * 0.15 + 0.5)).toFixed(2);
    out2 = (val1 * 0.035 * (val2 * 0.2 + 0.4)).toFixed(2);
  } else if (estimator.type === 'ai') {
    out1 = (val1 * 0.02 * (val2 * 0.1 + 0.6)).toFixed(2);
    out2 = Math.min(95, 35 + val2 * 6).toFixed(0);
  }

  return (
    <div className="bg-brand-navy-dark p-8 sm:p-12 rounded-sm border border-brand-gold/30 shadow-2xl space-y-8 text-white">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-gold uppercase mb-1">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span>INTERACTIVE PRACTICE CALCULATOR</span>
        </div>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
          {estimator.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          {estimator.description}
        </p>
      </div>

      {/* Input Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input 1 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="font-medium text-slate-200">
              {estimator.input1.label}
            </label>
            <span className="font-mono font-bold text-base text-brand-gold">
              {val1} {estimator.input1.unit}
            </span>
          </div>
          <input
            type="range"
            min={estimator.input1.min}
            max={estimator.input1.max}
            step={estimator.input1.step}
            value={val1}
            onChange={(e) => setVal1(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>
              {estimator.input1.min} {estimator.input1.unit}
            </span>
            <span>
              {estimator.input1.max} {estimator.input1.unit}
            </span>
          </div>
        </div>

        {/* Input 2 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="font-medium text-slate-200">
              {estimator.input2.label}
            </label>
            <span className="font-mono font-bold text-base text-brand-gold">
              {val2} {estimator.input2.unit}
            </span>
          </div>
          <input
            type="range"
            min={estimator.input2.min}
            max={estimator.input2.max}
            step={estimator.input2.step}
            value={val2}
            onChange={(e) => setVal2(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>
              {estimator.input2.min} {estimator.input2.unit}
            </span>
            <span>
              {estimator.input2.max} {estimator.input2.unit}
            </span>
          </div>
        </div>
      </div>

      {/* Output Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div className="p-5 bg-brand-navy/80 rounded-sm border border-brand-gold/40">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-300 uppercase block mb-1">
            {estimator.output1Label}
          </span>
          <div className="font-serif font-bold text-3xl sm:text-4xl text-brand-gold">
            {estimator.output1Unit === '$M' ? `$${out1}M` : `${out1}${estimator.output1Unit}`}
          </div>
        </div>

        <div className="p-5 bg-brand-navy/80 rounded-sm border border-white/20">
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-300 uppercase block mb-1">
            {estimator.output2Label}
          </span>
          <div className="font-serif font-bold text-3xl sm:text-4xl text-white">
            {estimator.output2Unit === '$M' ? `$${out2}M` : `${out2}${estimator.output2Unit}`}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <button
          onClick={() =>
            onOpenConsultation(
              `${serviceTitle} Diagnostic (${val1} ${estimator.input1.unit}, ${val2} ${estimator.input2.unit})`
            )
          }
          className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all shadow-md group"
        >
          <span>Request {serviceTitle} Audit</span>
          <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
