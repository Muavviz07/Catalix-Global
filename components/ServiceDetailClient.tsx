'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import ServiceEstimator from '@/components/ServiceEstimator';
import { ServiceData, SectorData } from '@/data/siteData';
import {
  Shield,
  Layers,
  Compass,
  TrendingUp,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Check,
  FileCheck2,
} from 'lucide-react';

const iconMap = { Shield, Layers, Compass, TrendingUp, Cpu, FileCheck2 };

interface ServiceDetailClientProps {
  service: ServiceData;
  relatedSectorsList: SectorData[];
}

export default function ServiceDetailClient({
  service,
  relatedSectorsList,
}: ServiceDetailClientProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState(`${service.title} Consultation`);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const IconComponent = iconMap[service.iconName];

  const handleOpenConsultation = (t?: string) => {
    setTopic(t || `${service.title} Consultation`);
    setConsultationOpen(true);
  };

  const stageSubtitles = [
    'FOUNDATIONAL DIAGNOSTIC',
    'STRATEGY & ARCHITECTURE',
    'GOVERNANCE & PMO STEERING',
    'CUTOVER & RISK AUDIT',
    'POST-GO-LIVE SUSTAINMENT',
  ];

  const displaySectors = relatedSectorsList.slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-0">
        {/* 1. Page Hero */}
        <section className="bg-brand-cream border-b border-brand-navy/10 pt-4 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy/60 mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-gold transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-brand-navy font-semibold">{service.title}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  {service.subtitle}
                </span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
                {service.title} — Strategic Advisory
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                {service.heroSubheading}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenConsultation(`${service.title} Inquiry`)}
                  className="inline-flex items-center px-7 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                >
                  <span>Schedule {service.title} Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Service Overview & Benefits */}
        <section className="py-8 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Overview Column */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-serif font-bold text-3xl text-brand-navy">
                  {service.overview.headline}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-brand-text/90 leading-relaxed">
                  {service.overview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Right Benefits Column */}
              <div className="lg:col-span-5 bg-brand-cream/60 p-8 rounded-sm border border-brand-navy/10 space-y-4">
                <h3 className="font-serif font-bold text-xl text-brand-navy pb-2 border-b border-brand-navy/10">
                  Key Strategic Benefits
                </h3>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Service Scope — Horizontal Expandable Accordion Strip */}
        <section className="py-8 bg-brand-cream/40 border-b border-brand-navy/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 pb-2.5 border-b border-brand-navy/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-1">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  <span>INTERACTIVE SCOPE BLUEPRINT</span>
                </div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-navy">
                  What We Deliver
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-brand-text/80 max-w-md mt-2 md:mt-0">
                Hover or select any column to explore the {service.deliverables.length} core practice deliverables.
              </p>
            </div>

            {/* Horizontal Accordion Container */}
            <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[270px] mb-4">
              {service.deliverables.map((item, idx) => {
                const stageNum = String(idx + 1).padStart(2, '0');
                const isExpanded = expandedIndex === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setExpandedIndex(idx)}
                    onClick={() => setExpandedIndex(idx)}
                    className={`rounded-sm transition-all duration-500 ease-out cursor-pointer relative overflow-hidden h-auto min-h-[270px] lg:h-full flex flex-col justify-between ${
                      isExpanded
                        ? 'lg:flex-[3.5] bg-brand-navy text-white border-2 border-brand-gold shadow-2xl p-4 sm:p-5'
                        : 'lg:flex-[1] bg-white text-brand-navy border border-brand-navy/10 hover:border-brand-gold/60 hover:bg-brand-cream/30 p-3.5 sm:p-4'
                    }`}
                  >
                    {/* Top Accent Line */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 transition-colors duration-300 ${
                        isExpanded ? 'bg-brand-gold' : 'bg-brand-navy/20'
                      }`}
                    />

                    {/* EXPANDED CONTENT VIEW */}
                    <div
                      className={`transition-opacity duration-300 ease-in-out h-full flex flex-col justify-between space-y-2 ${
                        isExpanded
                          ? 'opacity-100 delay-100 pointer-events-auto relative z-10'
                          : 'opacity-0 delay-0 pointer-events-none absolute inset-4 overflow-hidden'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-gold text-brand-navy px-2.5 py-0.5 rounded-xs">
                            STAGE {stageNum} — {stageSubtitles[idx]}
                          </span>
                          <span className="text-[10px] font-mono text-slate-300">
                            {idx + 1}/05 ACTIVE
                          </span>
                        </div>

                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-tight">
                          {stageNum}. {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-200 leading-snug max-w-xl">
                          {item.description}
                        </p>

                        <div className="space-y-1 pt-0.5 text-xs text-slate-200 font-medium">
                          <div className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                            <span>Independent Managing Partner audit & milestone review</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                            <span>Zero vendor commission bias — 100% P&L aligned</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1.5 text-xs text-brand-gold font-bold">
                          <FileCheck2 className="w-4 h-4" />
                          <span>Partner Validated Scope</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenConsultation(`${service.title} - Stage ${stageNum}: ${item.title}`);
                          }}
                          className="px-4 py-1.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xs flex items-center gap-1"
                        >
                          <span>Schedule Stage {stageNum}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* COLLAPSED CONTENT VIEW */}
                    <div
                      className={`transition-opacity duration-200 ease-in-out h-full flex flex-col justify-between ${
                        isExpanded
                          ? 'opacity-0 pointer-events-none absolute inset-4 overflow-hidden'
                          : 'opacity-100 pointer-events-auto relative z-10'
                      }`}
                    >
                      <div>
                        <span className="font-serif font-bold text-2xl text-brand-gold block mb-0.5">
                          {stageNum}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-brand-navy/60 uppercase tracking-wider block mb-1">
                          STAGE {stageNum}
                        </span>
                        <h4 className="font-serif font-bold text-xs text-brand-navy leading-snug line-clamp-3">
                          {item.title}
                        </h4>
                      </div>

                      <div className="pt-2 border-t border-brand-navy/10 flex items-center justify-between text-[10px] font-mono font-bold text-brand-gold mt-auto">
                        <span>EXPAND</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact Bottom Governance Strip */}
            <div className="bg-brand-navy text-white p-4 rounded-sm border border-brand-gold/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-slate-200">
                  All 5 practice deliverables are backed by <strong>Catalix Global&apos;s Partner Governance Model</strong> with zero vendor commissions.
                </span>
              </div>
              <button
                onClick={() => handleOpenConsultation(`${service.title} Scope Customization`)}
                className="flex-shrink-0 font-bold text-brand-gold hover:underline transition-all"
              >
                Customize Full 5-Stage Scope →
              </button>
            </div>
          </div>
        </section>

        {/* 4. Service-Specific Estimator (Commented Out) */}
        {/* <section className="py-8 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceEstimator
              estimator={service.estimator}
              serviceTitle={service.title}
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        </section> */}

        {/* 5. Industry Applicability (Commented Out) */}
        {/* {displaySectors.length > 0 && (
          <section className="py-8 bg-white border-b border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12 space-y-2">
                <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  TARGET SECTORS & DOMAIN RELEVANCE
                </div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-navy">
                  Industry Applicability
                </h2>
                <p className="text-xs sm:text-sm text-brand-text/80">
                  Tailored {service.title} frameworks engineered specifically for key industrial sectors.
                </p>
              </div>

              <div className="border-y border-brand-navy/15 divide-y md:divide-y-0 md:divide-x divide-brand-navy/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {displaySectors.map((sec, idx) => {
                  const cardNum = String(idx + 1).padStart(2, '0');
                  return (
                    <Link
                      key={sec.id}
                      href={`/sectors/${sec.slug}`}
                      className="p-8 sm:p-10 group hover:bg-brand-cream/30 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 flex items-center justify-center border border-brand-gold/60 text-brand-gold font-mono text-xs font-bold mb-6 rounded-xs group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                          {cardNum}
                        </div>

                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-brand-navy group-hover:text-brand-gold transition-colors mb-3 leading-snug">
                          {sec.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed line-clamp-4">
                          {sec.context}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 flex items-center text-xs font-bold text-brand-gold group-hover:underline">
                        <span>Explore Sector Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )} */}

        {/* 6. Creative & Professional Executive CTA Banner */}
        <section className="py-8 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white border-t border-brand-gold/30 relative overflow-hidden">
          {/* Subtle Radial Glow & Background Grid */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column (7-cols): Title, Scope & Assurances */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brand-gold/30 text-xs font-mono font-bold text-brand-gold uppercase tracking-wider shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  <span>EXECUTIVE DISCOVERY SESSION • MANAGING PARTNER LED</span>
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  Accelerate Your {service.title} Strategy
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Schedule a confidential 45-minute discovery briefing directly with a Catalix Managing Partner to audit your current {service.title} architecture, vendor contracts, and P&L targets.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>100% Partner Oversight</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Zero Vendor Bias</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Diagnostic Report Included</span>
                  </div>
                </div>
              </div>

              {/* Right Column (5-cols): Floating Action Card */}
              <div className="lg:col-span-5">
                <div className="bg-brand-navy/90 p-8 sm:p-10 rounded-sm border border-brand-gold/40 shadow-2xl backdrop-blur-md space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block">
                      CONFIDENTIAL CONSULTATION
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white">
                      Request Executive Audit
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Select your preferred briefing timeframe to connect with our senior practice leads.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => handleOpenConsultation(`${service.title} Executive Audit`)}
                      className="w-full py-4 px-6 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Schedule {service.title} Consultation</span>
                      <ArrowRight className="w-4 h-4 text-brand-navy group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Protected under mutual enterprise NDA</span>
                    </div>
                  </div>
                </div>
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
