'use client';

import { useState } from 'react';
import { Gauge, Boxes, CalendarCheck, ArrowRight, Calculator } from 'lucide-react';

interface SliderConfig {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit: string;
  prefix?: string;
}

interface OutputCard {
  label: string;
  value: string;
  subtitle: string;
  highlightGold?: boolean;
}

export interface EstimatorType {
  id: 'oee' | 'inventory' | 'planning';
  title: string;
  badge: string;
  icon: any;
  description: string;
  benchmark: string;
  sliders: SliderConfig[];
  calculateOutputs: (values: Record<string, number>) => OutputCard[];
  ctaText: string;
  ctaTopic: string;
}

export const estimatorConfigs: EstimatorType[] = [
  {
    id: 'oee',
    title: 'Improve OEE Calculator',
    badge: 'OPERATIONAL THROUGHPUT',
    icon: Gauge,
    description:
      'Quantify throughput gains, bottleneck elimination, and EBITDA impact by unlocking hidden plant capacity.',
    benchmark: 'Based on industrial manufacturing benchmarks and OT-ERP telemetry integration.',
    sliders: [
      {
        id: 'oee',
        label: 'Current OEE (%)',
        min: 40,
        max: 90,
        step: 1,
        defaultValue: 65,
        unit: '%',
      },
      {
        id: 'machines',
        label: 'Number of Production Machines',
        min: 5,
        max: 200,
        step: 5,
        defaultValue: 25,
        unit: ' machines',
      },
      {
        id: 'capacity',
        label: 'Current Production Capacity (units/day)',
        min: 100,
        max: 10000,
        step: 100,
        defaultValue: 500,
        unit: ' units/day',
      },
      {
        id: 'ebitda',
        label: 'Current EBITDA ($M)',
        min: 5,
        max: 500,
        step: 5,
        defaultValue: 50,
        unit: 'M',
        prefix: '$',
      },
    ],
    calculateOutputs: (v) => {
      const oeeLift = (v.oee * 0.12).toFixed(1);
      const ebitdaGain = ((v.ebitda * 0.15) * (v.machines * 0.08)).toFixed(1);
      const capacityGain = Math.round((v.capacity * 0.14) * (1 + v.machines / 100));

      return [
        {
          label: 'Est. OEE Improvement',
          value: `+${oeeLift}%`,
          subtitle: 'Throughput gain & loss recovery',
          highlightGold: true,
        },
        {
          label: 'Potential EBITDA Uplift',
          value: `$${ebitdaGain}M`,
          subtitle: 'Capacity & margin expansion',
        },
        {
          label: 'Additional Productive Capacity',
          value: `${capacityGain.toLocaleString()} units/day`,
          subtitle: 'Unlocked daily production volume',
        },
      ];
    },
    ctaText: 'Schedule OEE Diagnostic Consultation',
    ctaTopic: 'OEE Optimization Diagnostic',
  },
  {
    id: 'inventory',
    title: 'Reduce Inventory Calculator',
    badge: 'WORKING CAPITAL OPTIMIZATION',
    icon: Boxes,
    description:
      'Estimate working capital release and annual holding cost reduction through safety stock buffer rationalization.',
    benchmark: 'Based on enterprise supply chain & multi-echelon inventory optimization models.',
    sliders: [
      {
        id: 'days',
        label: 'Current Inventory Days',
        min: 10,
        max: 120,
        step: 1,
        defaultValue: 45,
        unit: ' days',
      },
      {
        id: 'cogs',
        label: 'Annual COGS ($M)',
        min: 10,
        max: 500,
        step: 5,
        defaultValue: 100,
        unit: 'M',
        prefix: '$',
      },
      {
        id: 'buffer',
        label: 'Safety Stock Buffer (%)',
        min: 5,
        max: 40,
        step: 1,
        defaultValue: 20,
        unit: '%',
      },
    ],
    calculateOutputs: (v) => {
      const workingCapitalReleaseNum = (v.cogs * v.days / 365) * 0.22;
      const workingCapitalRelease = workingCapitalReleaseNum.toFixed(1);
      const holdingCostSavings = (workingCapitalReleaseNum * 0.12).toFixed(2);
      const newDays = Math.round(v.days * 0.78);

      return [
        {
          label: 'Working Capital Release',
          value: `$${workingCapitalRelease}M`,
          subtitle: 'Freed-up cash flow',
          highlightGold: true,
        },
        {
          label: 'Annual Holding Cost Savings',
          value: `$${holdingCostSavings}M`,
          subtitle: 'Reduced inventory overhead',
        },
        {
          label: 'Target Inventory Cycle',
          value: `${newDays} Days`,
          subtitle: 'Streamlined stock coverage',
        },
      ];
    },
    ctaText: 'Request Inventory Optimization Audit',
    ctaTopic: 'Inventory Optimization Audit',
  },
  {
    id: 'planning',
    title: 'Optimize Planning & Scheduling Calculator',
    badge: 'S&OP & LINE PREDICTABILITY',
    icon: CalendarCheck,
    description:
      'Calculate demand forecasting accuracy gains, changeover speed improvements, and additional productive line hours.',
    benchmark: 'Based on S&OP synchronization and finite-capacity shop floor scheduling benchmarks.',
    sliders: [
      {
        id: 'accuracy',
        label: 'Current S&OP Forecast Accuracy (%)',
        min: 60,
        max: 95,
        step: 1,
        defaultValue: 78,
        unit: '%',
      },
      {
        id: 'lines',
        label: 'Number of Production Lines',
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 8,
        unit: ' lines',
      },
      {
        id: 'changeover',
        label: 'Average Line Changeover Time (hours)',
        min: 1,
        max: 12,
        step: 0.5,
        defaultValue: 4,
        unit: ' hrs',
      },
    ],
    calculateOutputs: (v) => {
      const changeoverReduction = v.changeover * 0.35;
      const productiveHours = Math.round(v.lines * 250 * changeoverReduction);

      return [
        {
          label: 'S&OP Accuracy Improvement',
          value: '+12%',
          subtitle: 'Enhanced demand visibility',
          highlightGold: true,
        },
        {
          label: 'Changeover Speed Reduction',
          value: `${changeoverReduction.toFixed(1)} hrs`,
          subtitle: 'Line availability boost',
        },
        {
          label: 'Additional Productive Hours',
          value: `${productiveHours.toLocaleString()} hrs/yr`,
          subtitle: 'Annual shift capacity gain',
        },
      ];
    },
    ctaText: 'Request S&OP & Scheduling Diagnostic',
    ctaTopic: 'S&OP & Scheduling Diagnostic',
  },
];

interface InteractiveEstimatorProps {
  config: EstimatorType;
  onOpenConsultation: (topic?: string) => void;
}

export default function InteractiveEstimator({
  config,
  onOpenConsultation,
}: InteractiveEstimatorProps) {
  // Local state for sliders based on config defaults
  const [sliderValues, setSliderValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    config.sliders.forEach((s) => {
      initial[s.id] = s.defaultValue;
    });
    return initial;
  });

  const handleSliderChange = (id: string, value: number) => {
    setSliderValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const outputs = config.calculateOutputs(sliderValues);
  const Icon = config.icon;

  return (
    <div className="bg-brand-navy text-white rounded-sm p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-brand-gold/20">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Intro Column */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
            <Icon className="w-4 h-4" />
            <span>{config.badge}</span>
          </div>

          <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4">
            {config.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {config.description}
          </p>

          <div className="p-4 rounded-sm bg-white/5 border border-white/10 text-xs text-slate-300">
            <span className="font-semibold text-brand-gold">Benchmark Methodology: </span>
            {config.benchmark}
          </div>
        </div>

        {/* Right Sliders & Results Panel */}
        <div className="lg:col-span-7 bg-brand-navy-dark/90 p-6 sm:p-8 rounded-sm border border-brand-gold/20">
          {/* Sliders List */}
          <div className="space-y-6 mb-8">
            {config.sliders.map((slider) => {
              const val = sliderValues[slider.id] ?? slider.defaultValue;

              return (
                <div key={slider.id}>
                  <div className="flex justify-between items-center text-sm font-medium mb-2">
                    <span className="text-slate-200">{slider.label}</span>
                    <span className="text-brand-gold font-bold font-mono text-base">
                      {slider.prefix || ''}
                      {val}
                      {slider.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    value={val}
                    onChange={(e) => handleSliderChange(slider.id, Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                </div>
              );
            })}
          </div>

          {/* Calculated Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 mb-6">
            {outputs.map((card, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-sm border ${
                  card.highlightGold
                    ? 'bg-brand-navy/90 border-brand-gold/50 shadow-md'
                    : 'bg-brand-navy/60 border-white/10'
                }`}
              >
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  {card.label}
                </span>
                <span
                  className={`font-serif font-bold text-2xl sm:text-3xl block ${
                    card.highlightGold ? 'text-brand-gold' : 'text-white'
                  }`}
                >
                  {card.value}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  {card.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <button
            onClick={() => onOpenConsultation(config.ctaTopic)}
            className="w-full py-3.5 px-6 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group shadow-md"
          >
            <span>{config.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
