'use client';

import { Target, RefreshCw, Cpu, ArrowRight } from 'lucide-react';

interface WhyChooseCatalyxProps {
  onOpenConsultation: (topic: string) => void;
}

export default function WhyChooseCatalyx({ onOpenConsultation }: WhyChooseCatalyxProps) {
  return (
    <section id="why-us" className="py-24 bg-brand-cream/40 border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>THE CATALIX DIFFERENCE</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Why Catalix
          </h2>
          <p className="text-base text-brand-text/80">
            Independent advisory built for executive leaders who demand strategic clarity, objective governance, and measurable EBITDA returns.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white/80 p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all duration-300 shadow-sm relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-sm bg-brand-navy text-white group-hover:text-brand-gold flex items-center justify-center transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <span className="font-mono font-bold text-3xl text-brand-navy/10 group-hover:text-brand-gold/30 transition-colors">
                01
              </span>
            </div>

            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Beyond Tech Implementation
            </span>
            <h3 className="font-serif font-bold text-2xl text-brand-navy mb-3">
              P&L-Driven Strategic Focus
            </h3>

            <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
              We do not sell software licenses or push generic implementations. Every initiative begins with your balance sheet—tying architecture directly to EBITDA, working capital velocity, and enterprise risk reduction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all duration-300 shadow-sm relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-sm bg-brand-navy text-white group-hover:text-brand-gold flex items-center justify-center transition-colors">
                <RefreshCw className="w-6 h-6" />
              </div>
              <span className="font-mono font-bold text-3xl text-brand-navy/10 group-hover:text-brand-gold/30 transition-colors">
                02
              </span>
            </div>

            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Blueprint to Sustainment
            </span>
            <h3 className="font-serif font-bold text-2xl text-brand-navy mb-3">
              End-to-End Lifecycle Steering
            </h3>

            <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
              From initial diagnostic discovery and vendor contract negotiation to active program steering and post-go-live optimization, we sit on your side of the table throughout the transformation cycle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all duration-300 shadow-sm relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-sm bg-brand-navy text-white group-hover:text-brand-gold flex items-center justify-center transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono font-bold text-3xl text-brand-navy/10 group-hover:text-brand-gold/30 transition-colors">
                03
              </span>
            </div>

            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
              Pragmatic & Secure Integration
            </span>
            <h3 className="font-serif font-bold text-2xl text-brand-navy mb-3">
              AI-First Governance Mentality
            </h3>

            <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
              We eliminate hype. Our AI advisory establishes secure data architecture, enterprise compliance frameworks, and high-ROI agentic workflows that enhance operational decision-making securely.
            </p>
          </div>
        </div>

        {/* Representative Case Study Brief Box */}
        <div className="bg-brand-navy text-white p-8 sm:p-10 rounded-sm border border-brand-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-gold uppercase">
              <span>REPRESENTATIVE EXECUTIVE CASE BRIEF</span>
            </div>
            <h4 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Industrial Equipment Manufacturer: $14.2M Working Capital Unlocked
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Catalix guided an enterprise ERP rationalization and supply-chain S&OP alignment across 8 manufacturing plants, reducing safety stock by 22% while boosting OTIF delivery to 97.4%.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Case Study Brief Request')}
            className="flex-shrink-0 inline-flex items-center px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
          >
            <span>Request Case Brief</span>
            <ArrowRight className="w-4 h-4 ml-2 text-brand-navy group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
