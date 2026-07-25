'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Gauge, Boxes, CalendarCheck } from 'lucide-react';
import InteractiveEstimator, { estimatorConfigs } from './InteractiveEstimator';

interface InteractiveToolsProps {
  onOpenConsultation: (topic?: string) => void;
}

export default function InteractiveTools({ onOpenConsultation }: InteractiveToolsProps) {
  const [activeTab, setActiveTab] = useState<'oee' | 'inventory' | 'planning'>('oee');

  const currentConfig = estimatorConfigs.find((c) => c.id === activeTab) || estimatorConfigs[0];

  return (
    <section id="interactive-tools" className="py-24 bg-brand-cream border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE ROI DIAGNOSTICS</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-4">
            Estimate Your Operational Gains
          </h2>
          <p className="text-base text-brand-text/80 leading-relaxed font-normal">
            Run real-time diagnostics to quantify financial yield, working capital release, and throughput potential tailored to your enterprise scale.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('oee')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-sm font-semibold transition-all duration-200 border ${
              activeTab === 'oee'
                ? 'bg-brand-navy text-brand-gold border-brand-navy shadow-md scale-105'
                : 'bg-white text-brand-navy border-brand-navy/15 hover:border-brand-gold hover:bg-brand-gold-light'
            }`}
          >
            <Gauge className={`w-4 h-4 ${activeTab === 'oee' ? 'text-brand-gold' : 'text-brand-navy/70'}`} />
            <span>1. Improve OEE</span>
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-sm font-semibold transition-all duration-200 border ${
              activeTab === 'inventory'
                ? 'bg-brand-navy text-brand-gold border-brand-navy shadow-md scale-105'
                : 'bg-white text-brand-navy border-brand-navy/15 hover:border-brand-gold hover:bg-brand-gold-light'
            }`}
          >
            <Boxes className={`w-4 h-4 ${activeTab === 'inventory' ? 'text-brand-gold' : 'text-brand-navy/70'}`} />
            <span>2. Reduce Inventory</span>
          </button>

          <button
            onClick={() => setActiveTab('planning')}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-sm font-semibold transition-all duration-200 border ${
              activeTab === 'planning'
                ? 'bg-brand-navy text-brand-gold border-brand-navy shadow-md scale-105'
                : 'bg-white text-brand-navy border-brand-navy/15 hover:border-brand-gold hover:bg-brand-gold-light'
            }`}
          >
            <CalendarCheck className={`w-4 h-4 ${activeTab === 'planning' ? 'text-brand-gold' : 'text-brand-navy/70'}`} />
            <span>3. Optimize Planning & Scheduling</span>
          </button>
        </div>

        {/* Active Estimator Display with Framer Motion Fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <InteractiveEstimator
              config={currentConfig}
              onOpenConsultation={onOpenConsultation}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
