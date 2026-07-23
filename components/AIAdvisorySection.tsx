'use client';

import { Cpu, ShieldCheck, FileText, Download, CheckCircle, Lock } from 'lucide-react';

interface AIAdvisorySectionProps {
  onOpenRoadmapModal: () => void;
  onOpenConsultation: (topic?: string) => void;
}

const aiFrameworkPillars = [
  {
    title: 'Enterprise AI Governance Framework',
    desc: 'Establish clear oversight, risk controls, IP protection, and regulatory compliance for enterprise LLMs and machine learning assets.',
    icon: ShieldCheck,
  },
  {
    title: 'Data Infrastructure Readiness',
    desc: 'Audit ERP, CRM, and OT data pipelines to create clean, structured contextual data for AI agents and automated workflows.',
    icon: Lock,
  },
  {
    title: 'High-ROI Agentic Use Cases',
    desc: 'Prioritize automation in demand forecasting, automated invoice reconciliation, and predictive maintenance telemetry.',
    icon: Cpu,
  },
];

export default function AIAdvisorySection({
  onOpenRoadmapModal,
  onOpenConsultation,
}: AIAdvisorySectionProps) {
  return (
    <section id="ai-advisory" className="py-24 bg-brand-cream border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span>SPECIALIZED PRACTICE AREA</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-6">
              Pragmatic AI Governance & Executive Roadmaps
            </h2>

            <p className="text-base text-brand-text/90 leading-relaxed mb-8">
              Generative AI and agentic automation present immense operational potential—and equal enterprise risk. Catalix Global provides C-suite leadership with independent, secure AI frameworks that turn experimentation into quantifiable balance-sheet returns.
            </p>

            {/* Pillars */}
            <div className="space-y-6 mb-8">
              {aiFrameworkPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-brand-navy mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-brand-text/80 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenRoadmapModal}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-brand-navy bg-brand-gold hover:bg-brand-gold-hover rounded-sm transition-all shadow-md group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Executive AI Roadmap (PDF)</span>
              </button>

              <button
                onClick={() => onOpenConsultation('AI Readiness Audit')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-brand-navy bg-white hover:bg-brand-slate-light border border-brand-navy/20 rounded-sm transition-all"
              >
                <span>Schedule AI Security Audit</span>
              </button>
            </div>
          </div>

          {/* Right Column: AI Roadmap Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-sm p-8 border border-brand-gold/40 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-brand-navy/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-brand-navy/10 text-brand-navy flex items-center justify-center">
                    <FileText className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block">
                      Executive Briefing
                    </span>
                    <h3 className="font-serif font-bold text-lg text-brand-navy">
                      2026 Enterprise AI Governance Blueprint
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-medium">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>The 5-Stage Enterprise AI Maturity Framework</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-medium">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Data Security & LLM Governance Checklist</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-medium">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Top 10 High-ROI Manufacturing AI Use Cases</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-brand-navy font-medium">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>CFO Guide to AI Capex & ROI Metrics</span>
                </div>
              </div>

              <div className="bg-brand-cream/80 p-4 rounded-sm border border-brand-navy/10 text-center">
                <span className="text-xs text-brand-text/80 block mb-3 font-medium">
                  Available for verified corporate & C-suite executives.
                </span>
                <button
                  onClick={onOpenRoadmapModal}
                  className="w-full py-2.5 bg-brand-navy hover:bg-brand-navy-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Access Briefing Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
