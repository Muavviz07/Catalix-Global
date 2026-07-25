'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { Target, ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ApproachPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState('Approach Inquiry');

  const handleOpenConsultation = (t?: string) => {
    if (t) setTopic(t);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
              OUR ENGAGEMENT PHILOSOPHY
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy">
              Independent Executive Steering & Strategic Alignment
            </h1>
            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
              Catalix Global operates on a fundamentally different model than traditional software vendors or staff-augmentation consultancies. We sit on your side of the table throughout every transformation stage.
            </p>
          </div>

          {/* 4-Stage Lifecycle Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Stage 1 */}
            <div className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-sm space-y-3">
              <span className="font-mono font-bold text-2xl text-brand-gold block">01</span>
              <h3 className="font-serif font-bold text-xl text-brand-navy">Diagnostic Discovery</h3>
              <p className="text-xs text-brand-text/80 leading-relaxed">
                Rapid audit of existing IT infrastructure, ERP licenses, vendor contracts, and shop-floor data bottlenecks.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-sm space-y-3">
              <span className="font-mono font-bold text-2xl text-brand-gold block">02</span>
              <h3 className="font-serif font-bold text-xl text-brand-navy">Architecture Blueprint</h3>
              <p className="text-xs text-brand-text/80 leading-relaxed">
                Defining target operating model, vendor RFP specifications, and multi-year capex investment roadmaps tied to EBITDA.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-sm space-y-3">
              <span className="font-mono font-bold text-2xl text-brand-gold block">03</span>
              <h3 className="font-serif font-bold text-xl text-brand-navy">Active Steering & PMO</h3>
              <p className="text-xs text-brand-text/80 leading-relaxed">
                Independent oversight enforcing system integrator deliverables, cutover quality, and business process redesign.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-sm space-y-3">
              <span className="font-mono font-bold text-2xl text-brand-gold block">04</span>
              <h3 className="font-serif font-bold text-xl text-brand-navy">Value Realization</h3>
              <p className="text-xs text-brand-text/80 leading-relaxed">
                Post-go-live optimization measuring working capital release, OEE lift, and sustained user adoption.
              </p>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="bg-brand-navy text-white p-8 sm:p-12 rounded-sm border border-brand-gold/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-gold uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>EXECUTIVE PARTNER COMMITMENT</span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
                Zero Vendor Bias. Direct Partner Leadership.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every Catalix engagement is led directly by a Managing Partner. We accept no kickbacks or commissions from software vendors—guaranteeing 100% objective advice tailored strictly to your company&apos;s financial best interests.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => handleOpenConsultation('Partner Steering Inquiry')}
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Schedule Partner Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={topic}
      />
    </div>
  );
}
