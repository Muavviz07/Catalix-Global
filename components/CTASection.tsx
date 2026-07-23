'use client';

import { ArrowRight, Sparkles, Compass } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: (topic?: string) => void;
  onOpenRoadmapModal: () => void;
}

export default function CTASection({
  onOpenConsultation,
  onOpenRoadmapModal,
}: CTASectionProps) {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative Gold Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brand-gold/30 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START THE CONVERSATION</span>
        </div>

        <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Let&apos;s Catalyse Your Transformation
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Schedule a confidential discovery session with a Catalix Managing Partner to evaluate your technology architecture, ERP roadmap, or AI governance priorities.
        </p>

        {/* Dual Buttons: Side-by-side Desktop, Stacked Mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Executive Transformation Session')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-navy bg-white hover:bg-brand-gold-light rounded-sm transition-all duration-300 shadow-xl hover:-translate-y-0.5 group"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 ml-2.5 text-brand-navy group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenRoadmapModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-gold bg-transparent hover:bg-white/5 border border-brand-gold rounded-sm transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <Compass className="w-4 h-4 mr-2.5 text-brand-gold group-hover:rotate-45 transition-transform" />
            <span>Explore AI Advisory</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span>Direct Partner Engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span>Zero Vendor Bias</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span>NDA Protected Confidentiality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
