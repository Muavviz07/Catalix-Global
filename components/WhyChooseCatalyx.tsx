'use client';

import { useState } from 'react';
import { Target, RefreshCw, Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface WhyChooseCatalyxProps {
  onOpenConsultation: (topic: string) => void;
}

const pillars = [
  {
    id: 'pl-focus',
    number: '01',
    title: 'P&L-Driven Strategic Focus',
    subtitle: 'BEYOND TECH IMPLEMENTATION',
    icon: Target,
    tagline: 'Tying architecture directly to EBITDA, working capital velocity, and risk reduction.',
    description:
      'We do not sell software licenses or push generic implementations. Every initiative begins with your balance sheet—evaluating how technology spend accelerates inventory turn rates, machine capacity, and net margin expansion.',
    highlights: [
      'Direct alignment with CFO & CEO balance sheet objectives',
      'Zero vendor kickbacks or licensing commissions',
      'Rigorous ROI justification for all technology capex',
    ],
    metricLabel: 'DIRECT EBITDA IMPACT',
  },
  {
    id: 'lifecycle-steering',
    number: '02',
    title: 'End-to-End Lifecycle Steering',
    subtitle: 'BLUEPRINT TO SUSTAINMENT',
    icon: RefreshCw,
    tagline: 'Sitting on your side of the table from RFP discovery to post-go-live optimization.',
    description:
      'From initial diagnostic discovery and vendor contract negotiation to active program steering and post-go-live optimization, we sit on your side of the table throughout the entire transformation lifecycle.',
    highlights: [
      'Independent system integrator SOW & deliverable auditing',
      'Business Process Redesign (BPR) to prevent code bloat',
      'Cutover risk mitigation and go-live readiness sign-off',
    ],
    metricLabel: '100% UNBIASED STEERING',
  },
  {
    id: 'ai-governance',
    number: '03',
    title: 'AI-First Governance Mentality',
    subtitle: 'PRAGMATIC & SECURE INTEGRATION',
    icon: Cpu,
    tagline: 'Establishing secure data pipelines and high-ROI agentic workflows.',
    description:
      'We eliminate hype. Our AI advisory establishes secure data architecture, enterprise compliance frameworks, and high-ROI agentic workflows that enhance operational decision-making securely.',
    highlights: [
      'Enterprise LLM data privacy & IP protection controls',
      'Clean contextual data pipelines from ERP & SCADA',
      'CFO guide to AI software licensing vs EBITDA returns',
    ],
    metricLabel: 'SECURE AGENTIC AI',
  },
];

export default function WhyChooseCatalyx({ onOpenConsultation }: WhyChooseCatalyxProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab];
  const ActiveIcon = activePillar.icon;

  return (
    <section id="why-us" className="py-24 bg-brand-cream/50 border-b border-brand-navy/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-brand-navy/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>THE CATALIX DIFFERENCE</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              Why Catalix
            </h2>
          </div>
          <p className="text-base text-brand-text/80 font-normal max-w-md mt-4 md:mt-0">
            Independent advisory built for executive leaders who demand strategic clarity, objective governance, and measurable EBITDA returns.
          </p>
        </div>

        {/* Creative Split Layout: Left Accordion Controller + Right Feature Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Interactive Differentiator Selector (40%) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block mb-1">
                SELECT STRATEGIC PILLAR:
              </span>
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-5 rounded-sm transition-all duration-300 border flex items-center justify-between group ${
                      isActive
                        ? 'bg-brand-navy text-white border-brand-navy shadow-md'
                        : 'bg-white text-brand-navy border-brand-navy/10 hover:border-brand-gold hover:bg-brand-cream/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-brand-gold text-brand-navy'
                            : 'bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                            isActive ? 'text-brand-gold' : 'text-brand-gold'
                          }`}
                        >
                          PILLAR {pillar.number}
                        </span>
                        <h3 className="font-serif font-bold text-lg sm:text-xl leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold font-mono px-2 py-1 rounded-xs transition-colors ${
                        isActive ? 'bg-white/10 text-brand-gold' : 'text-brand-navy/40'
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Executive Assurance Mini Card */}
            <div className="p-5 bg-white rounded-sm border border-brand-navy/10 text-xs text-brand-navy flex items-center gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>
                <strong>100% Managing Partner Led:</strong> Zero junior staff delegation and full NDA confidentiality protection.
              </span>
            </div>
          </div>

          {/* Right Column: Feature Spotlight Stage (60%) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-sm border border-brand-gold/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div key={activePillar.id} className="space-y-6 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-navy/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block">
                      {activePillar.subtitle}
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-navy">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-brand-navy bg-brand-gold px-2.5 py-1 rounded-xs uppercase">
                  {activePillar.metricLabel}
                </span>
              </div>

              {/* Tagline & Body */}
              <p className="font-serif italic text-base sm:text-lg text-brand-navy/90 border-l-2 border-brand-gold pl-4 py-1">
                &ldquo;{activePillar.tagline}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-brand-text/90 leading-relaxed">
                {activePillar.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wider block">
                  Strategic Commitments:
                </span>
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action CTA */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation(activePillar.title)}
                  className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                >
                  <span>Schedule Partner Session on {activePillar.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Case Study Result Banner */}
        <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-sm border border-brand-gold/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-brand-gold uppercase">
              <span>FEATURED CLIENT ENGAGEMENT</span>
            </div>
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Industrial Equipment Manufacturer: $14.2M Working Capital Unlocked
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              ERP rationalization and supply-chain S&OP alignment across 8 manufacturing plants reduced safety stock by 22% while boosting OTIF to 97.4%.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Case Brief Request')}
            className="flex-shrink-0 inline-flex items-center px-5 py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm group"
          >
            <span>Request Case Brief</span>
            <ArrowRight className="w-4 h-4 ml-1.5 text-brand-navy group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
