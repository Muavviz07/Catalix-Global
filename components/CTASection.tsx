'use client';

import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: (topic?: string) => void;
  onOpenRoadmapModal?: () => void;
}

export default function CTASection({
  onOpenConsultation,
  onOpenRoadmapModal,
}: CTASectionProps) {
  return (
    <section className="relative py-[72px] bg-brand-navy text-white overflow-hidden border-t-2 border-brand-gold">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-gold uppercase tracking-wider bg-white/5 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>START THE CONVERSATION</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Let&apos;s Catalyse Your Transformation
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Start with a confidential executive consultation to assess your technology strategy, ERP roadmap, AI initiatives, and operational transformation priorities. Discover how Catalix can help accelerate performance, strengthen governance, and deliver measurable business value.
          </p>

          {/* Dual CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('Partner Discovery Session')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-brand-cream text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenRoadmapModal || (() => onOpenConsultation('AI Advisory Overview'))}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-brand-gold font-bold text-xs uppercase tracking-wider rounded-sm border border-brand-gold transition-all duration-300"
            >
              <span>Explore AI Advisory</span>
            </button>
          </div>

          {/* Trust Guarantees Bar (Bottom) */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300 border-t border-white/10 mt-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>Direct Partner Engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>Zero Vendor Bias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>NDA Protected Confidentiality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
