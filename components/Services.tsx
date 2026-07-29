'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Layers,
  Compass,
  TrendingUp,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

const services = [
  {
    id: 'cio-cdo',
    number: '01',
    slug: 'cio-cdo-services',
    title: 'Fractional CIO / CDO Services',
    subtitle: 'Fractional CIO / CDO Services',
    icon: Shield,
    tagline: 'Executive IT & Digital Leadership Without Overhead',
    description:
      'Catalix Global provides fractional and virtual CIO/CDO leadership to help manufacturing and industrial enterprises align technology strategy, digital investments, governance, and innovation with business objectives.',
    deliverables: [
      'Fractional CIO / CDO Leadership',
      'IT Strategy & Digital Transformation Roadmaps',
      'Technology Investment & Capex Optimisation',
      'ERP, Architecture & Vendor Governance',
      'Cybersecurity, Risk & Compliance Oversight',
    ],
    impact: 'Ensures every investment drives measurable value through improved performance, reduced risk, and sustainable growth.',
  },
  {
    id: 'erp-advisory',
    number: '02',
    slug: 'erp-advisory',
    title: 'ERP Advisory',
    subtitle: 'ERP Advisory',
    icon: Layers,
    tagline: 'Independent ERP Advisory from Strategy to Value Realisation',
    description:
      'Catalix Global provides independent ERP advisory across the entire transformation lifecycle, from ERP strategy, vendor selection, and contract negotiations to implementation governance, business process optimisation, and post-go-live value realisation.',
    deliverables: [
      'ERP Strategy & Transformation Roadmaps',
      'Independent Vendor & System Integrator Selection',
      'Implementation Governance & Executive PMO Oversight',
      'Business Process Optimisation & Digital Operating Model Design',
      'Go-Live Readiness & Transformation Assurance',
    ],
    impact: 'Ensures ERP programmes remain aligned with business objectives, implementation partners are accountable, and technology investments deliver measurable outcomes.',
  },
  {
    id: 'digital-transformation',
    number: '03',
    slug: 'digital-transformation',
    title: 'Digital Transformation Advisory',
    subtitle: 'Digital Transformation Advisory',
    icon: Compass,
    tagline: 'Building Intelligent, Connected, and Data-Driven Enterprises',
    description:
      'Catalix Global helps manufacturing and industrial enterprises develop pragmatic Industry 4.0 strategies that connect shop-floor operations, enterprise systems, and executive decision-making.',
    deliverables: [
      'Industry 4.0 Transformation Strategy & Roadmaps',
      'Smart Factory Maturity Assessments',
      'MES, IoT & ERP Integration Strategy',
      'Shop-Floor Digitisation & Real-Time Data Enablement',
      'Manufacturing Analytics & Performance Dashboards',
    ],
    impact: 'Integrates MES, IoT, automation, analytics, and digital workflows to improve operational visibility, enhance productivity, and enable data-driven performance management.',
  },
  {
    id: 'operational-excellence',
    number: '04',
    slug: 'operational-excellence',
    title: 'Operational Excellence Advisory',
    subtitle: 'Operational Excellence Advisory',
    icon: TrendingUp,
    tagline: 'Driving Manufacturing Performance Through Data, Process, and Technology',
    description:
      'Catalix Global helps manufacturing and industrial enterprises identify and unlock operational value by improving inventory efficiency, asset utilisation, production performance, and supply chain execution.',
    deliverables: [
      'Working Capital & Inventory Optimisation',
      'OEE Improvement & Manufacturing Productivity',
      'Multi-Site S&OP and Production Planning Excellence',
      'Capacity Optimisation & Production Scheduling',
      'Quality Improvement & Root-Cause Analysis',
    ],
    impact: 'Optimises S&OP, production planning, manufacturing processes, and performance analytics to enable faster decisions, reduced waste, and improved operational outcomes.',
  },
  {
    id: 'ai-advisory',
    number: '05',
    slug: 'ai-advisory',
    title: 'AI Advisory',
    subtitle: 'AI Advisory',
    icon: Cpu,
    tagline: 'Turning AI Ambition into Measurable Business Value',
    description:
      'Catalix Global helps executive leaders develop practical AI strategies that align with business objectives, strengthen governance, and deliver measurable operational and financial outcomes.',
    deliverables: [
      'Enterprise AI Strategy & Governance',
      'AI Readiness & Data Maturity Assessments',
      'Responsible AI, Security & Risk Management',
      'High-Value AI Use Case Identification & Prioritisation',
      'Manufacturing & Supply Chain AI Strategy',
    ],
    impact: 'Unlocks value from intelligent forecasting, predictive maintenance, supply chain optimisation, and executive decision support with responsible frameworks.',
  },
  {
    id: 'ipo-readiness',
    number: '06',
    slug: 'ipo-readiness',
    title: 'IPO Readiness & Compliance Assessment',
    subtitle: 'IPO Readiness & Compliance Assessment',
    icon: FileCheck2,
    tagline: 'Building Investor Confidence Through Strong Technology Governance',
    description:
      'Catalix Global helps organisations prepare for public market expectations by strengthening IT governance, cybersecurity, enterprise controls, data integrity, and regulatory compliance.',
    deliverables: [
      'IPO Technology Readiness & Governance Assessment',
      'IT Governance, Risk & Compliance (IT GRC)',
      'IT General Controls (ITGC) & SOX Readiness',
      'Cybersecurity, Data Integrity & Technology Risk Assessments',
      'Executive & Board Advisory for Technology Governance',
    ],
    impact: 'Ensures your technology environment is aligned with governance, audit, and compliance requirements, enabling a smoother IPO journey while protecting enterprise value.',
  },
];

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeService = services[activeTab];
  const ActiveIcon = activeService.icon;

  const handlePrev = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="services" className="py-[72px] bg-white border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-brand-navy/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand-gold/15 border border-brand-gold/30 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-navy uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>STRATEGIC PRACTICE AREAS</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              Our Services
            </h2>
          </div>
          <p className="text-base sm:text-lg text-brand-navy/90 font-medium max-w-md mt-4 md:mt-0 leading-relaxed">
            Independent, executive-level consulting designed to steer high-stakes digital and technology evolutions.
          </p>
        </div>

        {/* 1. Practice Selector: 6-Column Non-Scrolling Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-2 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center gap-2 px-3 py-3.5 rounded-sm text-xs xl:text-sm font-bold transition-all duration-300 border text-center ${
                  isActive
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md scale-[1.02]'
                    : 'bg-brand-cream/60 text-brand-navy border-brand-navy/15 hover:border-brand-gold hover:bg-white'
                }`}
              >
                <span
                  className={`text-xs font-mono px-1.5 py-0.5 rounded-xs flex-shrink-0 ${
                    isActive ? 'bg-brand-gold text-brand-navy font-bold' : 'text-brand-gold'
                  }`}
                >
                  {service.number}
                </span>
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-brand-gold' : 'text-brand-navy'}`} />
                <span className="truncate">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Premium Mobile Practice Controller */}
        <div className="block md:hidden mb-6 space-y-3">
          <div className="flex items-center justify-between bg-brand-navy p-3 rounded-md text-white shadow-sm border border-brand-gold/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                Practice {activeService.number} of 06
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                aria-label="Previous practice"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-brand-gold text-brand-navy text-xs font-bold transition-colors shadow-xs"
                aria-label="Next practice"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 6-Node Segmented Touch Matrix */}
          <div className="grid grid-cols-6 gap-1.5 p-1.5 bg-brand-cream/80 rounded-md border border-brand-navy/10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-sm text-center transition-all ${
                    isActive
                      ? 'bg-brand-navy text-white font-bold shadow-sm'
                      : 'text-brand-navy hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-brand-gold' : 'text-brand-navy/60'}`} />
                  <span className="text-[10px] font-mono tracking-tight font-bold">{service.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Spotlight Stage Showcase Card */}
        <div className="bg-brand-cream/50 rounded-sm border border-brand-gold/30 p-6 sm:p-10 mb-8 shadow-lg relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              {/* Left Column: Practice Overview */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                      {activeService.title}
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-4xl text-brand-navy">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-brand-navy/90 border-l-2 border-brand-gold pl-4 py-1">
                  &ldquo;{activeService.tagline}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-brand-navy/90 leading-relaxed font-normal">
                  {activeService.description}
                </p>

                <div className="p-4 bg-white/90 rounded-sm border border-brand-navy/10 text-xs text-brand-navy flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>
                    <strong className="text-brand-navy font-bold">Business Impact:</strong> {activeService.impact}
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenConsultation(activeService.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                  >
                    <span>Request {activeService.title} Overview</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-brand-cream text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md border border-brand-navy/20"
                  >
                    <span>Explore Practice Details</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Deliverables List Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-brand-navy/10 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <h4 className="font-serif font-bold text-base text-brand-navy">
                      Core Strategic Deliverables
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-navy/70 uppercase">
                    P&L ALIGNED
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-brand-navy font-medium">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="leading-snug text-brand-navy/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-brand-navy/10 flex items-center justify-between text-[11px] text-brand-navy/80">
                  <span>Executive Engagement Model</span>
                  <span className="font-bold text-brand-gold">Managing Partner Oversight</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
