'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { LogoIcon } from './Logo';

interface AIRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIRoadmapModal({ isOpen, onClose }: AIRoadmapModalProps) {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/80 backdrop-blur-md"
          />

          {/* Animated Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-md shadow-2xl border border-brand-gold/40 overflow-hidden z-10 text-brand-navy my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gold Accent Line */}
            <div className="h-1.5 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy" />

            {/* Header */}
            <div className="bg-brand-navy text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-brand-gold/30">
              <div className="flex items-center gap-3">
                <LogoIcon className="w-8 h-8" />
                <div>
                  <h3 className="font-serif font-bold text-xl text-white leading-none">
                    2026 Enterprise AI Roadmap
                  </h3>
                  <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block mt-1">
                    Executive Briefing Document
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {downloaded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold flex items-center justify-center mx-auto shadow-md">
                    <Download className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-brand-navy">
                    Document Access Granted
                  </h4>
                  <p className="text-sm text-brand-text/80 leading-relaxed max-w-sm mx-auto">
                    The <span className="font-semibold text-brand-navy">2026 Enterprise AI Governance & Implementation Roadmap</span> has been dispatched to <span className="font-semibold text-brand-navy">{email}</span>.
                  </p>

                  <div className="p-4 bg-brand-cream/80 border border-brand-navy/10 rounded-sm text-left text-xs text-brand-navy space-y-2 max-w-sm mx-auto">
                    <span className="font-bold block text-brand-gold uppercase tracking-wider text-[11px]">
                      Included Briefing Modules:
                    </span>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                      <span>C-Suite Risk & Security Framework for Agentic AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                      <span>Top 10 High-ROI Manufacturing & Supply Chain Use Cases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                      <span>ERP & Contextual Data Architecture Readiness Checklist</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onClose}
                      className="px-8 py-3 bg-brand-navy text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-brand-navy-dark transition-all shadow-md"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-5">
                  <div className="p-4 bg-brand-cream/50 rounded-sm border border-brand-navy/10">
                    <p className="text-xs sm:text-sm text-brand-text/90 leading-relaxed font-medium">
                      Request instant access to Catalix Global&apos;s executive guide on deploying secure, ROI-driven AI frameworks in enterprise operations.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Corporate Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-brand-navy/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. exec@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm pl-9 pr-3 py-3 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-brand-text/70">
                    <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Strict confidentiality. Instant PDF download.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group shadow-md"
                  >
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Executive Briefing (PDF)</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
