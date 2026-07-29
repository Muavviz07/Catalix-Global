'use client';

import { ShieldCheck } from 'lucide-react';

interface WhyChooseCatalyxProps {
  onOpenConsultation: (topic: string) => void;
}

const pillars = [
  {
    number: '01',
    title: 'Independent & Vendor-Neutral',
    description:
      'Every recommendation is driven by your business strategy and operational priorities, not software vendors or system integrators.',
  },
  {
    number: '02',
    title: 'From Shop Floor to Boardroom',
    description:
      'We combine deep manufacturing expertise with executive leadership, translating operational realities into board-level strategy and investment decisions.',
  },
  {
    number: '03',
    title: 'Executive Expertise, On Demand',
    description:
      'Gain the experience of a seasoned CIO/CDO and transformation leader without the cost and commitment of a full-time executive.',
  },
  {
    number: '04',
    title: 'Focused on Operational Excellence',
    description:
      'Our advisory focuses on improving productivity, inventory velocity, asset utilisation, and operational efficiency to deliver sustainable EBITDA',
  },
];

export default function WhyChooseCatalyx({ onOpenConsultation }: WhyChooseCatalyxProps) {
  return (
    <section id="why-us" className="py-8 bg-brand-cream/60 text-brand-navy border-b border-brand-navy/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 pb-3 border-b border-brand-navy/10">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono font-bold tracking-widest text-brand-navy uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>THE CATALIX DIFFERENCE</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              Why Choose Catalix
            </h2>
          </div>
          <p className="text-sm sm:text-base text-brand-navy/90 max-w-md mt-3 md:mt-0 leading-relaxed font-medium">
            Independent strategic advisory for executive leaders who demand objective guidance, strong governance, and measurable business outcomes.
          </p>
        </div>

        {/* 4 Equal Columns with Top/Bottom Horizontal Borders & Vertical Divides */}
        <div className="border-y border-brand-navy/15 divide-y md:divide-y-0 md:divide-x divide-brand-navy/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-5 sm:p-6 group hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number Square Outline Box */}
                <div className="w-7 h-7 flex items-center justify-center border border-brand-gold/60 text-brand-gold font-mono text-xs font-bold mb-3 rounded-xs group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  {pillar.number}
                </div>

                {/* Bold Title */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-navy group-hover:text-brand-gold transition-colors mb-2 leading-snug">
                  {pillar.title}
                </h3>

                {/* Description Copy */}
                <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-sm border border-brand-gold/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-gold flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                100% Client P&L Aligned Advisory
              </h4>
              <p className="text-sm sm:text-base text-slate-200">
                Zero software reseller bias. Direct Managing Partner oversight for every client engagement.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenConsultation('Why Choose Catalix - Executive Briefing')}
            className="px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm flex-shrink-0"
          >
            Schedule Partner Briefing
          </button>
        </div>
      </div>
    </section>
  );
}
