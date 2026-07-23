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
    subtitle: 'Smart Factory & Shop-Floor Digitization',
    icon: Compass,
    tagline: 'Build pragmatic Industry 4.0 roadmaps connecting plant floor to C-suite.',
    description:
      'We design digital transformation roadmaps and lifecycle execution services that digitize factory floors, automate processes, and track real-time KPIs.',
    deliverables: [
      'Industry 4.0 Transformation Roadmap',
      'Smart Factory & Automation Assessments',
      'MES Strategy & AI Opportunity Audits',
      'Shop-Floor Digitization & Telemetry',
      'Real-Time KPI & Operations Frameworks',
    ],
    impact: 'Drives end-to-end operational visibility and agility.',
  },
  {
    id: 'operational-excellence',
    number: '04',
    title: 'Operational Excellence',
    subtitle: 'Technology-Driven Productivity',
    icon: TrendingUp,
    tagline: 'Leverage IT and digital tools to unlock plant capacity and EBITDA yield.',
    description:
      'We guide clients on how to deploy digital tools to eliminate inventory buffers, boost machine throughput, and stabilize production scheduling.',
    deliverables: [
      'Reduce Inventory & Holding Overhead',
      'Improve OEE & Machine Utilization',
      'Optimize S&OP & Production Scheduling',
      'Improve Inline Quality Management',
      'Reduce Downtime & Unplanned Outages',
    ],
    impact: 'Unlocks cash flow and boosts overall plant OEE by 8-14%.',
  },
  {
    id: 'ai-advisory',
    number: '05',
    title: 'AI Advisory',
    subtitle: 'Pragmatic & Secure AI Integration',
    icon: Cpu,
    tagline: 'Use AI as a business value driver, not an expensive tech experiment.',
    description:
      'We guide leadership on integrating artificial intelligence as a practical business tool—prioritizing high-ROI use cases, data security, and governance.',
    deliverables: [
      'Enterprise AI Strategy & Roadmap',
      'C-Suite AI Use-Case Prioritization',
      'Manufacturing AI Pilots & Workflow Automation',
      'AI Data Security & Governance Frameworks',
    ],
    impact: 'Transforms AI experimentation into bottom-line returns.',
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
    <section id="services" className="py-24 bg-white border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-brand-navy/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              <span>STRATEGIC PRACTICE AREAS</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              What We Do
            </h2>
          </div>
          <p className="text-base text-brand-text/80 font-normal max-w-md mt-4 md:mt-0">
            Independent, executive-level consulting designed to steer high-stakes digital and technology evolutions.
          </p>
        </div>

        {/* 1. Practice Selector: Desktop vs Mobile UX */}
        
        {/* Desktop Selector Bar (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-sm text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md'
                    : 'bg-brand-cream/60 text-brand-navy border-brand-navy/10 hover:border-brand-gold/60 hover:bg-white'
                }`}
              >
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-xs ${
                    isActive ? 'bg-brand-gold text-brand-navy font-bold' : 'text-brand-gold'
                  }`}
                >
                  {service.number}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-brand-navy'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Premium Mobile Practice Controller (Mobile Only: < md) */}
        <div className="block md:hidden mb-8 space-y-3">
          {/* Mobile Controller Bar: Counter + Prev/Next Taps */}
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
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors active:bg-brand-gold active:text-brand-navy"
                aria-label="Previous practice"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-brand-gold text-brand-navy text-xs font-bold transition-colors active:bg-brand-gold-hover shadow-xs"
                aria-label="Next practice"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5-Node Segmented Touch Matrix */}
          <div className="grid grid-cols-5 gap-1.5 p-1 bg-brand-cream/80 rounded-md border border-brand-navy/10">
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
                  <span className="text-[9px] font-mono tracking-tight">{service.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Spotlight Stage Showcase Card */}
        <div className="bg-brand-cream/50 rounded-sm border border-brand-gold/30 p-6 sm:p-12 mb-10 shadow-lg relative overflow-hidden">
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
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6" />
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

                <p className="text-sm sm:text-base text-brand-text/90 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="p-3.5 sm:p-4 bg-white/80 rounded-sm border border-brand-navy/10 text-xs text-brand-navy flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>
                    <strong className="text-brand-navy">Business Impact:</strong> {activeService.impact}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(activeService.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                  >
                    <span>Request {activeService.title} Overview</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Key Deliverables List Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-sm border border-brand-navy/10 shadow-sm space-y-4">
                <div className="pb-3 border-b border-brand-navy/10 flex items-center justify-between">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-brand-navy">
                    Key Practice Deliverables
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-brand-gold uppercase bg-brand-cream px-2 py-1 rounded-xs border border-brand-gold/30">
                    EXECUTIVE AUDIT
                  </span>
                </div>

                <ul className="space-y-2.5 sm:space-y-3">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-navy/90">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Executive Guarantee Note */}
        <div className="bg-brand-cream/30 rounded-sm p-5 sm:p-6 border border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-text/80">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
            <span>
              All advisory practice engagements are led directly by <strong>Catalix Global Managing Partners</strong> with zero vendor bias and full NDA protected confidentiality.
            </span>
          </div>
          <button
            onClick={() => onOpenConsultation('General Advisory Inquiry')}
            className="flex-shrink-0 font-semibold text-brand-navy hover:text-brand-gold transition-colors underline underline-offset-4"
          >
            Schedule Partner Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
