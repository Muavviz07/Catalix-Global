'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { sectorsData } from '@/data/siteData';
import {
  Package,
  Zap,
  Cpu,
  Flame,
  Truck,
  ArrowRight,
  Factory,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';

const iconMap = { Package, Zap, Cpu, Flame, Truck };

export default function SectorsHubPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState('Sector Hub Inquiry');

  const handleOpenConsultation = (t?: string) => {
    if (t) setTopic(t);
    setConsultationOpen(true);
  };

  const featuredSector = sectorsData[0];
  const gridSectors = sectorsData.slice(1);
  const FeaturedIcon = iconMap[featuredSector.iconName];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-[72px]">
        {/* 1. Header Hero */}
        <section className="bg-brand-cream pb-16 border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5 text-brand-gold" />
                <span>INDUSTRIAL SECTOR ADVISORY FOCUS</span>
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight">
                Sectors We Serve
              </h1>
              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                Tailored enterprise ERP advisory, shopfloor integration, and digital transformation built specifically for industrial manufacturing, process chemicals, power cables, and high-volume distribution.
              </p>

              {/* Trust Indicators Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-navy/10 text-xs font-mono font-bold text-brand-navy">
                <div>
                  <span className="text-brand-gold text-base block font-serif">5 Core</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Industrial Sectors</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Process &</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Discrete Mfg</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Shopfloor</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">To ERP Integration</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Zero Vendor</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Commission Bias</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Asymmetric Industrial Bento Grid Matrix */}
        <section className="py-[72px] bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-brand-navy/10">
              <div>
                <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider mb-1">
                  DOMAIN ARCHITECTURE MATRIX
                </div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-navy">
                  Industrial Sector Portfolio
                </h2>
              </div>
              <p className="text-xs text-brand-text/80 max-w-md mt-2 md:mt-0">
                Deep vertical expertise across complex multi-entity manufacturing and supply chain operations.
              </p>
            </div>

            {/* Asymmetric Layout: Featured Hero Bento Card + 4 Grid Cards */}
            <div className="space-y-8">
              {/* Featured 2-Column Hero Bento Card (FMCG Manufacturing) */}
              <div className="bg-brand-navy text-white p-8 sm:p-12 rounded-sm border-2 border-brand-gold shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="lg:col-span-7 space-y-5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-sm bg-brand-gold text-brand-navy flex items-center justify-center shadow-md">
                      <FeaturedIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block">
                        FEATURED VERTICAL • SECTOR 01
                      </span>
                      <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white">
                        {featuredSector.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {featuredSector.context}
                  </p>

                  {/* Key Challenges Badges */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[11px] font-mono font-bold text-brand-gold uppercase">
                      CRITICAL SECTOR CHALLENGES ADDRESSED:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                      {featuredSector.challenges.map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{c.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/sectors/${featuredSector.slug}`}
                      className="inline-flex items-center px-7 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group/btn"
                    >
                      <span>Explore FMCG Strategy & Case Studies</span>
                      <ArrowRight className="w-4 h-4 ml-2 text-brand-navy group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Side Metrics Box */}
                <div className="lg:col-span-5 bg-white/10 p-6 sm:p-8 rounded-sm border border-brand-gold/30 backdrop-blur-md space-y-4 text-xs text-slate-200">
                  <h4 className="font-serif font-bold text-lg text-white pb-2 border-b border-white/10">
                    Sector Advisory Metrics
                  </h4>
                  <div className="space-y-3 font-mono">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-300">Inventory Holding:</span>
                      <span className="font-bold text-brand-gold">-18% Optimization</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-300">OEE Improvement:</span>
                      <span className="font-bold text-brand-gold">+12% Yield Gain</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-300">Cutover Risk:</span>
                      <span className="font-bold text-brand-gold">Zero Unplanned Downtime</span>
                    </div>
                  </div>
                  <div className="pt-2 text-[10px] text-slate-400">
                    Based on Managing Partner client engagements across high-volume FMCG and distribution plants.
                  </div>
                </div>
              </div>

              {/* 4 Remaining Industrial Sector Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridSectors.map((sec, idx) => {
                  const Icon = iconMap[sec.iconName];
                  const sectorNum = String(idx + 2).padStart(2, '0');
                  return (
                    <div
                      key={sec.id}
                      className="bg-brand-cream/30 p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-xs">
                            <Icon className="w-5 h-5" />
                          </div>
                          {/* Outline Number Square Badge */}
                          <div className="w-8 h-8 flex items-center justify-center border border-brand-gold/60 text-brand-gold font-mono text-xs font-bold rounded-xs group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                            {sectorNum}
                          </div>
                        </div>

                        <div>
                          <span className="text-[11px] font-mono font-bold text-brand-gold uppercase tracking-wider block">
                            {sec.subtitle}
                          </span>
                          <h3 className="font-serif font-bold text-2xl text-brand-navy group-hover:text-brand-gold transition-colors">
                            {sec.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed line-clamp-3">
                          {sec.context}
                        </p>

                        <div className="pt-3 border-t border-brand-navy/10 space-y-1.5 text-xs text-brand-navy">
                          <span className="text-[10px] font-mono font-bold text-brand-navy/70 uppercase block mb-1">
                            KEY SECTOR CHALLENGES:
                          </span>
                          {sec.challenges.slice(0, 2).map((c, i) => (
                            <div key={i} className="flex items-center gap-2 text-brand-navy/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                              <span className="line-clamp-1">{c.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-brand-navy/10">
                        <Link
                          href={`/sectors/${sec.slug}`}
                          className="inline-flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
                        >
                          <span>Explore {sec.title} Strategy</span>
                          <ArrowRight className="w-4 h-4 ml-1.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cross-Sector Operational Benchmark Matrix */}
        <section className="py-[72px] bg-brand-cream/40 border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                CROSS-SECTOR OPERATIONAL IMPACT
              </div>
              <h2 className="font-serif font-bold text-3xl text-brand-navy">
                Sector Benchmark Matrix
              </h2>
              <p className="text-xs sm:text-sm text-brand-text/80">
                Quantitative EBITDA and operational improvements delivered across industrial sector engagements.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-brand-navy/15 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white font-mono text-[11px] uppercase tracking-wider">
                      <th className="p-4 border-b border-brand-gold/30">Industrial Sector</th>
                      <th className="p-4 border-b border-brand-gold/30">Primary ERP System</th>
                      <th className="p-4 border-b border-brand-gold/30">Primary Risk Focus</th>
                      <th className="p-4 border-b border-brand-gold/30">Target EBITDA Yield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-navy/10 text-brand-navy">
                    {sectorsData.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-brand-cream/30 transition-colors">
                        <td className="p-4 font-serif font-bold text-sm text-brand-navy">
                          <Link href={`/sectors/${s.slug}`} className="hover:text-brand-gold transition-colors">
                            {s.title}
                          </Link>
                        </td>
                        <td className="p-4 font-mono text-xs text-brand-navy/80">
                          {s.systemsUsed[0]?.name || 'SAP S/4HANA'}
                        </td>
                        <td className="p-4 text-xs text-brand-text/80">
                          {s.challenges[0]?.title || 'Supply Chain Cutover'}
                        </td>
                        <td className="p-4 font-mono font-bold text-brand-gold">
                          +{(idx + 2) * 1.5}% EBITDA Margin
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
