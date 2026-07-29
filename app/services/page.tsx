'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import Services from '@/components/Services';
import { Building2 } from 'lucide-react';

export default function ServicesHubPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState('Service Hub Inquiry');

  const handleOpenConsultation = (t?: string) => {
    if (t) setTopic(t);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-24 pb-8">
        {/* 1. Header Hero */}
        <section className="bg-brand-cream pb-12 border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>EXECUTIVE ADVISORY PRACTICES</span>
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight">
                Catalix Global Practices
              </h1>
              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                Six specialized consulting practice lines engineered to steer complex ERP migrations, executive digital transformations, and operational EBITDA yield — with 100% vendor independence.
              </p>

              {/* Trust Indicators Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-navy/10 text-xs font-mono font-bold text-brand-navy">
                <div>
                  <span className="text-brand-gold text-base block font-serif">6 Core</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Practice Lines</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">100%</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Vendor Neutral</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Partner</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Led Execution</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Fixed</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">SOW Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Imported Services Spotlight Stage (From Homepage 2nd Section) */}
        <Services onOpenConsultation={handleOpenConsultation} />
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
