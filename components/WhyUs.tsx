'use client';

import { Target, RefreshCw, Cpu, Award } from 'lucide-react';

interface WhyUsProps {
  onOpenConsultation: (topic?: string) => void;
}

const differentiators = [
  {
    id: 'strategic-focus',
    number: '01',
    title: 'P&L-Driven Strategic Focus',
    icon: Target,
    subtitle: 'Beyond Tech Implementation',
    description:
      'We do not sell software licenses or push generic implementations. Every initiative begins with your balance sheet—tying architecture directly to EBITDA, working capital velocity, and enterprise risk reduction.',
  },
  {
    id: 'lifecycle-support',
    number: '02',
    title: 'End-to-End Lifecycle Steering',
    icon: RefreshCw,
    subtitle: 'Blueprint to Sustainment',
    description:
      'From initial diagnostic discovery and vendor contract negotiation to active program steering and post-go-live optimization, we sit on your side of the table throughout the transformation cycle.',
  },
  {
    id: 'ai-governance',
    number: '03',
    title: 'AI-First Governance Mentality',
    icon: Cpu,
    subtitle: 'Pragmatic & Secure Integration',
    description:
      'We eliminate hype. Our AI advisory establishes secure data architecture, enterprise compliance frameworks, and high-ROI agentic workflows that enhance operational decision-making securely.',
  },
];

export default function WhyUs({ onOpenConsultation }: WhyUsProps) {
  return (
    <section id="why-us" className="py-24 bg-white border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span>THE CATALIX ADVANTAGE</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-4">
            Why Choose Catalix
          </h2>
          <p className="text-base text-brand-text/80 leading-relaxed font-normal">
            Independent advisory built for executive leaders who demand strategic clarity, objective governance, and measurable operational returns.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-brand-cream/40 rounded-sm p-8 border border-brand-navy/10 hover:border-brand-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg relative overflow-hidden group"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 font-serif font-bold text-5xl text-brand-navy/5 group-hover:text-brand-gold/15 transition-colors pointer-events-none">
                  {item.number}
                </span>

                <div className="w-12 h-12 rounded-sm bg-brand-navy text-white flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-text/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Executive Case Brief Callout Banner */}
        <div className="bg-brand-slate-light/60 rounded-sm p-8 border border-brand-navy/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-navy flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider block mb-1">
                Representative Client Case Study
              </span>
              <h4 className="font-serif font-bold text-xl text-brand-navy mb-1">
                Industrial Equipment Manufacturer: $14.2M Working Capital Unlocked
              </h4>
              <p className="text-sm text-brand-text/80">
                Catalix guided an enterprise ERP rationalization and supply-chain S&OP alignment across 8 manufacturing plants, reducing safety stock by 22% while boosting OTIF delivery to 97.4%.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation('Case Study & Methodology Deep-Dive')}
            className="flex-shrink-0 px-6 py-3 bg-brand-navy hover:bg-brand-navy-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-xs"
          >
            Request Case Study Brief
          </button>
        </div>
      </div>
    </section>
  );
}
