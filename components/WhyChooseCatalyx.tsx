'use client';

import { ShieldCheck, ArrowRight } from 'lucide-react';

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
    <section id="why-us" className="py-[72px] bg-brand-navy-dark text-white border-b border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono font-bold tracking-widest text-brand-gold uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>THE CATALIX DIFFERENCE</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Why Choose Catalix
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md mt-4 md:mt-0 leading-relaxed">
            Independent strategic advisory for executive leaders who demand objective guidance, strong governance, and measurable business outcomes.
          </p>
        </div>

        {/* 4 Equal Columns with Top/Bottom Horizontal Borders & Vertical Divides */}
        <div className="border-y border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 group hover:bg-white/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number Square Outline Box */}
                <div className="w-8 h-8 flex items-center justify-center border border-brand-gold/60 text-brand-gold font-mono text-xs font-bold mb-5 rounded-xs group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  {pillar.number}
                </div>

                {/* Bold Title */}
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-brand-gold transition-colors mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Description Copy */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-brand-gold group-hover:underline">
                <span>Inquire Strategy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Executive Governance Assurance Strip */}
        <div className="bg-white/5 text-white p-6 sm:p-8 rounded-sm border border-brand-gold/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0" />
            <div className="space-y-0.5">
              <h4 className="font-serif font-bold text-base text-white">
                100% Client P&L Aligned Advisory
              </h4>
              <p className="text-xs text-slate-300">
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
