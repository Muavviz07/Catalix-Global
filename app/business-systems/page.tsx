'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { businessSystemsData } from '@/data/siteData';
import {
  Database,
  Server,
  Users,
  BarChart,
  Boxes,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Layers,
  ShieldCheck,
} from 'lucide-react';

const iconMap = { Database, Server, Users, BarChart, Boxes };

export default function BusinessSystemsHubPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState('Systems Hub Inquiry');

  const handleOpenConsultation = (t?: string) => {
    if (t) setTopic(t);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-24 pb-12">
        {/* 1. Header Hero */}
        <section className="bg-brand-cream pb-16 border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-brand-gold" />
                <span>ENTERPRISE PLATFORM SPECTRUM</span>
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight">
                Business Systems Advisory
              </h1>
              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                Independent architecture governance, SI vendor contract steering, and implementation oversight for tier-1 ERP, CRM, and analytics platforms.
              </p>

              {/* Trust Indicators Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-navy/10 text-xs font-mono font-bold text-brand-navy">
                <div>
                  <span className="text-brand-gold text-base block font-serif">5 Major</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Platform Specs</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Zero</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Vendor Referral Fees</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">System</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Integrator Audit</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">100%</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Client P&L Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Unique Platform Spectrum Cards (Full Horizontal Platform Showcase) */}
        <section className="py-8 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-brand-navy/10">
              <div>
                <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider mb-1">
                  PLATFORM ECOSYSTEM
                </div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-navy">
                  Tier-1 Enterprise Systems Advisory
                </h2>
              </div>
              <p className="text-xs text-brand-text/80 max-w-md mt-2 md:mt-0">
                Explore platform architecture steering, module scope, and sector alignment.
              </p>
            </div>

            {/* List of 5 Detailed Horizontal Platform Cards */}
            <div className="space-y-10">
              {businessSystemsData.map((sys, idx) => {
                const Icon = iconMap[sys.iconName];
                const sysNum = String(idx + 1).padStart(2, '0');

                return (
                  <div
                    key={sys.id}
                    className="bg-brand-cream/30 p-8 sm:p-12 rounded-sm border border-brand-navy/15 hover:border-brand-gold transition-all duration-300 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden group"
                  >
                    {/* Top Gold Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy group-hover:bg-brand-gold transition-colors" />

                    {/* Left Details (7-cols) */}
                    <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block">
                              PLATFORM {sysNum} • {sys.subtitle}
                            </span>
                            <h2 className="font-serif font-bold text-3xl text-brand-navy">
                              {sys.title}
                            </h2>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm text-brand-text/90 leading-relaxed">
                          {sys.overview.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>

                        {/* Executive Verdict Pill */}
                        {sys.keyFeatures && sys.keyFeatures.length > 0 && (
                          <div className="bg-white p-4 rounded-sm border border-brand-navy/10 space-y-1">
                            <span className="text-[10px] font-mono font-bold text-brand-gold uppercase block">
                              KEY PLATFORM ADVISORY CAPABILITY:
                            </span>
                            <p className="text-xs text-brand-navy font-semibold">
                              &quot;{sys.keyFeatures[0]}&quot;
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap gap-4 items-center justify-between">
                        <Link
                          href={`/business-systems/${sys.slug}`}
                          className="inline-flex items-center px-7 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group/btn"
                        >
                          <span>Explore {sys.title} Steering</span>
                          <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Side Platform Strengths & Sector Alignment (5-cols) */}
                    <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-sm border border-brand-navy/10 flex flex-col justify-between space-y-6 shadow-xs">
                      <div className="space-y-4">
                        <h3 className="font-serif font-bold text-lg text-brand-navy pb-2 border-b border-brand-navy/10 flex items-center justify-between">
                          <span>Core Advisory Scope</span>
                          <span className="text-xs font-mono text-brand-gold font-bold">
                            TIER-1 ARCHITECTURE
                          </span>
                        </h3>

                        <div className="space-y-2">
                          <span className="text-[10px] font-mono font-bold text-brand-navy/70 uppercase block">
                            MODULE & CAPABILITY COVERAGE:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {sys.keyFeatures.map((st, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-mono font-semibold bg-brand-cream text-brand-navy px-2.5 py-1 rounded-xs border border-brand-navy/10"
                              >
                                {st}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-brand-navy/10">
                          <span className="text-[10px] font-mono font-bold text-brand-navy/70 uppercase block">
                            RELEVANT SECTORS LEVERAGING {sys.title.toUpperCase()}:
                          </span>
                          <div className="space-y-1.5 text-xs text-brand-navy">
                            {sys.relevantSectors.map((sec, i) => (
                              <Link
                                key={i}
                                href={`/sectors/${sec.slug}`}
                                className="flex items-center justify-between p-2 rounded-xs hover:bg-brand-cream/60 transition-colors border border-transparent hover:border-brand-navy/10 group/link"
                              >
                                <span className="font-semibold group-hover/link:text-brand-gold transition-colors">
                                  {sec.name}
                                </span>
                                <span className="text-[10px] font-mono text-brand-navy/60">
                                  View Strategy →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenConsultation(`${sys.title} System Steering`)}
                        className="w-full py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xs flex items-center justify-center gap-2"
                      >
                        <span>Schedule {sys.title} Audit</span>
                        <ArrowRight className="w-4 h-4 text-brand-navy" />
                      </button>
                    </div>
                  </div>
                );
              })}
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
