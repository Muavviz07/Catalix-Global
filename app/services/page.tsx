'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { servicesData } from '@/data/siteData';
import { Shield, Layers, Compass, TrendingUp, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = { Shield, Layers, Compass, TrendingUp, Cpu };

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

      <main className="pt-32 pb-24">
        {/* Header Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider mb-2">
            STRATEGIC CONSULTING PRACTICES
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy">
            Advisory Practices
          </h1>
          <p className="text-base sm:text-lg text-brand-text/80 mt-4 max-w-2xl">
            Five integrated advisory practices designed to steer complex technology transformations, ERP implementations, and operational EBITDA yield.
          </p>
        </div>

        {/* Practice Cards Stack */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((s, idx) => {
            const Icon = iconMap[s.iconName];
            return (
              <div
                key={s.id}
                className="bg-white p-8 sm:p-12 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                        PRACTICE 0{idx + 1} • {s.subtitle}
                      </span>
                      <h2 className="font-serif font-bold text-3xl text-brand-navy">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-brand-text/90 leading-relaxed">
                    {s.overview.paragraphs[0]}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm group"
                    >
                      <span>Explore Practice Details & Calculator</span>
                      <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-brand-cream/50 p-6 rounded-sm border border-brand-navy/10 space-y-3">
                  <h3 className="font-serif font-bold text-base text-brand-navy pb-2 border-b border-brand-navy/10">
                    Core Capabilities
                  </h3>
                  <ul className="space-y-2 text-xs text-brand-navy">
                    {s.keyBenefits.slice(0, 5).map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
