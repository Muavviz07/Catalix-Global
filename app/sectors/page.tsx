'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { sectorsData } from '@/data/siteData';
import { Package, Zap, Cpu, Flame, Truck, ArrowRight } from 'lucide-react';

const iconMap = { Package, Zap, Cpu, Flame, Truck };

export default function SectorsHubPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState('Sector Hub Inquiry');

  const handleOpenConsultation = (t?: string) => {
    if (t) setTopic(t);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider mb-2">
            INDUSTRY ADVISORY FOCUS
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy">
            Sectors We Serve
          </h1>
          <p className="text-base sm:text-lg text-brand-text/80 mt-4 max-w-2xl">
            Tailored digital transformation and ERP advisory built specifically for industrial manufacturing, process chemicals, and high-volume distribution.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectorsData.map((sec) => {
            const Icon = iconMap[sec.iconName];
            return (
              <div
                key={sec.id}
                className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block">
                      {sec.subtitle}
                    </span>
                    <h2 className="font-serif font-bold text-2xl text-brand-navy group-hover:text-brand-gold transition-colors">
                      {sec.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                    {sec.context}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-brand-navy block uppercase mb-1">
                      Key Sector Challenges:
                    </span>
                    <ul className="space-y-1 text-xs text-brand-text/70">
                      {sec.challenges.slice(0, 2).map((c, i) => (
                        <li key={i}>• {c.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-navy/10 mt-6">
                  <Link
                    href={`/sectors/${sec.slug}`}
                    className="inline-flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
                  >
                    <span>View Sector Guidance</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
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
