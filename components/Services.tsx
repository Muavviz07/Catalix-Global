'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

const services = [
  {
    id: 'cio-cdo',
    number: '01',
    title: 'CIO / CDO Services',
    subtitle: 'Virtual CIO / CDO Leadership',
    icon: Shield,
    tagline: 'Strategic IT leadership and governance built for digital transformation.',
    description:
      'We offer fractional and virtual CIO/CDO services to align technology investments directly with business growth, capital efficiency, and digital risk management.',
    deliverables: [
      'Virtual CIO / CDO Executive Services',
      'IT Strategy & Digital Transformation',
      'Budget Planning & Technology Roadmap',
      'Vendor Management & IT Governance',
      'Cybersecurity & Compliance Oversight',
    ],
    impact: 'Maximizes IT ROI & aligns tech strategy with P&L objectives.',
  },
  {
    id: 'erp-advisory',
    number: '02',
    title: 'ERP Advisory',
    subtitle: 'End-to-End Project Steering',
    icon: Layers,
    tagline: 'Independent advisory across SAP, Oracle, and Microsoft ERP lifecycles.',
    description:
      'Independent advisory services throughout the complete lifecycle of ERP projects—from software selection and contract negotiations to go-live readiness.',
    deliverables: [
      'ERP Vendor Selection & RFP Management',
      'ERP Health Checks & Project Recovery',
      'Business Process Redesign (BPR)',
      'Go-Live Readiness Assessment',
      'Vendor Negotiations & Independent QA',
    ],
    impact: 'Eliminates cost overruns & mitigates implementation risks.',
  },
  {
    id: 'digital-transformation',
    number: '03',
    title: 'Digital Transformation',
    subtitle: 'Modernizing Business Operations',
    icon: Compass,
    tagline: 'End-to-end digital evolution connecting shop floor to boardroom.',
    description:
      'Aligning cloud infrastructure, legacy system modernization, and enterprise data architecture to drive operational agility.',
    deliverables: [
      'Enterprise Digital Maturity Assessment',
      'Cloud Architecture & Migration Strategy',
      'Data Governance & Analytics Strategy',
      'Legacy System Modernization Roadmap',
      'Change Management & User Adoption',
    ],
    impact: 'Accelerates time-to-market & improves customer engagement.',
  },
  {
    id: 'operational-excellence',
    number: '04',
    title: 'Operational Excellence',
    subtitle: 'Process & Yield Optimization',
    icon: TrendingUp,
    tagline: 'Maximizing capacity, OEE yield, and working capital velocity.',
    description:
      'Deep operational diagnostics across supply chain, shop-floor MES, and warehouse management to eliminate waste and boost margin performance.',
    deliverables: [
      'Supply Chain & WMS Optimization',
      'Shop Floor MES & OEE Improvement',
      'Inventory Reduction & Working Capital',
      'S&OP Planning Process Redesign',
      'Quality Management Systems (QMS)',
    ],
    impact: 'Reduces operating costs & improves throughput margins.',
  },
  {
    id: 'ai-advisory',
    number: '05',
    title: 'AI Advisory',
    subtitle: 'Practical Enterprise AI Adoption',
    icon: Cpu,
    tagline: 'Pragmatic AI governance, agentic automation, and LLM deployment.',
    description:
      'Navigating enterprise AI adoption with secure frameworks, high-ROI use cases, and robust data pipelines for manufacturing and B2B enterprises.',
    deliverables: [
      'Enterprise AI Readiness & Opportunity Audit',
      'Secure LLM Architecture & IP Protection',
      'Agentic Process Automation Workflows',
      'AI Governance, Policy & Risk Frameworks',
      'Custom Generative AI Proof of Concepts',
    ],
    impact: 'Unlocks high-ROI automation while maintaining IP security.',
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
    <section id="services" className="py-10 lg:py-14 bg-white border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-brand-navy/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-brand-gold/15 border border-brand-gold/30 text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-navy uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>STRATEGIC PRACTICE AREAS</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              What We Do
            </h2>
          </div>
          <p className="text-base sm:text-lg text-brand-navy/90 font-medium max-w-md mt-4 md:mt-0 leading-relaxed">
            Independent, executive-level consulting designed to steer high-stakes digital and technology evolutions.
          </p>
        </div>

        {/* 1. Practice Selector: 5-Column Non-Scrolling Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-2 mb-8">
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
                Practice {activeService.number} of 05
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

          {/* 5-Node Segmented Touch Matrix */}
          <div className="grid grid-cols-5 gap-1.5 p-1.5 bg-brand-cream/80 rounded-md border border-brand-navy/10">
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
                      {activeService.subtitle}
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

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(activeService.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                  >
                    <span>Request {activeService.title} Overview</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </button>
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
