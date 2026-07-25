'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { SectorData, ServiceData } from '@/data/siteData';
import { Package, Zap, Cpu, Flame, Truck, AlertTriangle, ArrowRight } from 'lucide-react';

const iconMap = { Package, Zap, Cpu, Flame, Truck };

interface SectorDetailClientProps {
  sector: SectorData;
  relevantServicesList: ServiceData[];
}

export default function SectorDetailClient({
  sector,
  relevantServicesList,
}: SectorDetailClientProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState(`${sector.title} Sector Inquiry`);

  const IconComponent = iconMap[sector.iconName];

  const handleOpenConsultation = (t?: string) => {
    setTopic(t || `${sector.title} Sector Inquiry`);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-24">
        {/* 1. Sector Hero */}
        <section className="bg-brand-cream border-b border-brand-navy/10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy/60 mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/sectors" className="hover:text-brand-gold transition-colors">
                Sectors
              </Link>
              <span>/</span>
              <span className="text-brand-navy font-semibold">{sector.title}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  {sector.subtitle}
                </span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
                {sector.title} — Strategic Advisory
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                {sector.heroSubheading}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenConsultation(`${sector.title} Sector Session`)}
                  className="inline-flex items-center px-7 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                >
                  <span>Schedule {sector.title} Strategy Session</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Industry Challenges */}
        <section className="py-20 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                SECTOR OPERATIONAL PAIN POINTS
              </div>
              <h2 className="font-serif font-bold text-3xl text-brand-navy">
                Key Industry Challenges
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sector.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-brand-cream/40 p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-sm bg-brand-navy/10 text-brand-navy flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-navy">
                    {c.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-brand-navy bg-brand-gold/30 px-2.5 py-1 rounded-xs inline-block">
                    Impact: {c.impact}
                  </span>
                  <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed pt-1">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Catalix Approach for Sector */}
        <section className="py-20 bg-brand-cream/40 border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  TAILORED METHODOLOGY
                </div>
                <h2 className="font-serif font-bold text-3xl text-brand-navy">
                  How Catalix Transforms {sector.title} Operations
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-brand-text/90 leading-relaxed">
                  {sector.approachText.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-8 rounded-sm border border-brand-navy/10 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-lg text-brand-navy pb-2 border-b border-brand-navy/10">
                  Recommended Advisory Practices
                </h3>
                <div className="space-y-3">
                  {relevantServicesList.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className="block p-3 rounded-sm bg-brand-cream/50 hover:bg-brand-cream border border-brand-navy/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-gold">
                        <span>{s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] text-brand-text/70 block mt-0.5">
                        {s.subtitle}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Enterprise Systems Used */}
        <section className="py-20 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                PLATFORM ALIGNMENT
              </div>
              <h2 className="font-serif font-bold text-3xl text-brand-navy">
                Enterprise Systems in {sector.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sector.systemsUsed.map((sys, idx) => (
                <Link
                  key={idx}
                  href={`/business-systems/${sys.slug}`}
                  className="bg-brand-cream/40 p-6 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-xs group"
                >
                  <h3 className="font-serif font-bold text-xl text-brand-navy group-hover:text-brand-gold transition-colors">
                    {sys.name}
                  </h3>
                  <p className="text-xs text-brand-text/80 mt-2 leading-relaxed">
                    {sys.useCase}
                  </p>
                  <span className="text-[11px] font-bold text-brand-gold block mt-3 group-hover:underline">
                    Explore Platform Expertise →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Sector CTA */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Transform {sector.title} Operations
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule a confidential discovery session to align your sector-specific ERP, supply chain, or AI goals.
            </p>

            <div>
              <button
                onClick={() => handleOpenConsultation(`${sector.title} Sector Audit`)}
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                Schedule {sector.title} Consultation
              </button>
            </div>
          </div>
        </section>
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
