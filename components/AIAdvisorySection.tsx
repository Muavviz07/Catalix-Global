'use client';

import { ShieldCheck, Lock, Cpu, ArrowRight, FileText } from 'lucide-react';

interface AIAdvisorySectionProps {
  onOpenConsultation: (topic: string) => void;
  onOpenRoadmap?: () => void;
}

export default function AIAdvisorySection({
  onOpenConsultation,
  onOpenRoadmap,
}: AIAdvisorySectionProps) {
  return (
    <section id="ai-advisory" className="py-24 bg-brand-cream border-b border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>SPECIALIZED PRACTICE AREA</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Pragmatic AI Governance & Executive Roadmaps
          </h2>
          <p className="text-base text-brand-text/80 leading-relaxed">
            Generative AI and agentic automation present immense operational potential—and equal enterprise risk. We guide C-suite leadership with independent, secure AI frameworks that turn experimentation into quantifiable EBITDA returns.
          </p>
        </div>

        {/* 2-Column Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3 Framework Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-brand-navy">
                  Enterprise AI Governance Framework
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                  Establish clear oversight, risk controls, IP protection, and regulatory compliance for enterprise LLMs and machine learning assets.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 shadow-md">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-brand-navy">
                  Data Infrastructure Readiness
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                  Audit ERP, CRM, and OT data pipelines to create clean, structured contextual data for AI agents and automated workflows.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 shadow-md">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-brand-navy">
                  High-ROI Agentic Use Cases
                </h3>
                <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                  Prioritize automation in demand forecasting, automated invoice reconciliation, and predictive maintenance telemetry.
                </p>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenRoadmap || (() => onOpenConsultation('AI Roadmap Download'))}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
              >
                <span>Download Executive AI Roadmap (PDF)</span>
                <ArrowRight className="w-4 h-4 ml-2 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenConsultation('AI Security Audit')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-brand-cream text-brand-navy font-semibold text-xs uppercase tracking-wider rounded-sm border border-brand-navy/30 hover:border-brand-navy transition-all"
              >
                <span>Schedule AI Security Audit</span>
              </button>
            </div>
          </div>

          {/* Right Column: AI Roadmap Preview Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-sm border border-brand-gold/40 shadow-xl space-y-6">
            <div className="pb-4 border-b border-brand-navy/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif font-bold text-lg text-brand-navy">
                  2026 Executive AI Blueprint
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold text-brand-gold uppercase bg-brand-cream px-2 py-1 rounded-xs border border-brand-gold/30">
                PDF BRIEFING
              </span>
            </div>

            <p className="text-xs text-brand-text/80 leading-relaxed">
              Comprehensive 18-page executive guidance document outlining risk mitigation, data security, and high-ROI AI use cases for enterprise operations.
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-brand-navy font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>The 5-Stage Enterprise AI Maturity Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Data Security & LLM Governance Checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Top 10 High-ROI Manufacturing AI Use Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>CFO Guide to AI Capex & Return Metrics</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRoadmap || (() => onOpenConsultation('AI Briefing Document'))}
                className="w-full py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Access Briefing Document</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
