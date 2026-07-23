'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { LogoIcon } from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialTopic = 'Executive Consultation',
}: ConsultationModalProps) {
  const [topic, setTopic] = useState(initialTopic);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    setTopic(initialTopic);
    setSubmitted(false);
  }, [initialTopic, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/75 backdrop-blur-sm"
          />

          {/* Compact Executive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            className="relative w-full max-w-md bg-white rounded-lg shadow-2xl border border-brand-gold/30 overflow-hidden z-10 text-brand-navy my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gold Accent Line */}
            <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy" />

            {/* Header */}
            <div className="bg-brand-navy text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LogoIcon className="w-7 h-7" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-white leading-none">
                    Schedule Consultation
                  </h3>
                  <span className="text-[10px] font-medium text-brand-gold uppercase tracking-wider block mt-0.5">
                    Catalix Global Strategic Advisory
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-brand-navy">
                    Request Received
                  </h4>
                  <p className="text-xs text-brand-text/80 leading-relaxed max-w-xs mx-auto">
                    Thank you, <span className="font-semibold text-brand-navy">{formData.name}</span>. A Managing Partner will contact you at <span className="font-semibold text-brand-navy">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onClose}
                      className="px-6 py-2 bg-brand-navy text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-brand-navy-dark transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Topic Select */}
                  <div>
                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Advisory Area *
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-md border border-brand-navy/20 bg-brand-cream/40 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none"
                    >
                      <option value="Executive Consultation">Executive Strategy Consultation</option>
                      <option value="CIO & CDO Advisory">CIO & CDO Advisory</option>
                      <option value="ERP Advisory & Steering">ERP Advisory & Steering</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="AI Governance & Security Audit">AI Governance & Security Audit</option>
                      <option value="Custom Operational Yield Diagnostic">Operational Yield Diagnostic</option>
                    </select>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-3 py-2 rounded-md border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="evance@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3 py-2 rounded-md border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Global Operations Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-md border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Brief Note */}
                  <div>
                    <label className="block text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Key Priorities / Message
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly state ERP timeline, AI priorities, or objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-md border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Footer & Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-md bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 group shadow-sm"
                    >
                      <span>Submit Executive Request</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-brand-text/60 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Confidential NDA protected engagement.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
