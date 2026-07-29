'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyChooseCatalyx from '@/components/WhyChooseCatalyx';
import ConsultationModal from '@/components/ConsultationModal';

export default function WhyUsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState('Why Choose Catalix Inquiry');

  const handleOpenConsultation = (t?: string) => {
    if (t) setTopic(t);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-0">
        {/* Header Hero Section */}
        <section className="bg-brand-cream border-b border-brand-navy/10 pt-4 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy/60 mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold font-bold">Why Us</span>
            </div>

            {/* Header Content */}
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                THE CATALIX DIFFERENCE
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy">
                Why Choose Catalix
              </h1>
              <p className="text-base sm:text-lg text-brand-gold font-semibold uppercase tracking-wider">
                100% Client P&L Aligned. Zero Vendor Bias. Direct Managing Partner Leadership.
              </p>
              <p className="text-base sm:text-lg text-brand-navy/90 leading-relaxed font-medium">
                Independent strategic advisory engineered for executive leaders who demand objective guidance, strong governance, and measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Catalix Main Section */}
        <WhyChooseCatalyx onOpenConsultation={handleOpenConsultation} />
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
