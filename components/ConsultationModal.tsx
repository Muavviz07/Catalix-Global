'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, User, Mail, Phone, Briefcase, Building2 } from 'lucide-react';
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
    fullName: '',
    email: '',
    designation: '',
    phone: '',
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
            className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm"
          />

          {/* Executive Card Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-brand-gold/40 overflow-hidden z-10 text-brand-navy my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gold Line */}
            <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy flex-shrink-0" />

            {/* Modal Header */}
            <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <LogoIcon className="w-8 h-8" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-white leading-tight">
                    Schedule Partner Briefing
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block mt-0.5">
                    CATALIX GLOBAL ADVISORY
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-brand-navy">
                    Briefing Requested
                  </h4>
                  <p className="text-xs text-brand-text/80 leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-brand-navy">{formData.fullName}</span> ({formData.designation}). A Managing Partner will reach out to you at <span className="font-semibold text-brand-navy">{formData.email}</span> / <span className="font-semibold text-brand-navy">{formData.phone}</span> within 24 hours under mutual NDA.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-navy-dark transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Advisory Area */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Advisory Area *
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 rounded-sm border border-brand-navy/20 bg-brand-cream/40 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none text-brand-navy font-medium"
                    >
                      <option value="Executive Strategy Consultation">Executive Strategy Consultation</option>
                      <option value="CIO & CDO Advisory">CIO & CDO Advisory</option>
                      <option value="ERP Advisory & Steering">ERP Advisory & Steering</option>
                      <option value="Digital Transformation">Digital Transformation Strategy</option>
                      <option value="AI Governance & Security Audit">AI Governance & Security Audit</option>
                      <option value="Operational Yield Diagnostic">Operational Yield Diagnostic</option>
                    </select>
                  </div>

                  {/* Full Name & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="Eleanor Vance"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Designation *
                      </label>
                      <div className="relative">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="CIO / VP Operations"
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="evance@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Organization Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Global Manufacturing Corp."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-xs pl-9 pr-3 py-2.5 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Key Priorities / Objectives
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly state ERP timeline, AI priorities, or diagnostic scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-sm border border-brand-navy/20 bg-brand-cream/30 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-sm bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group shadow-md"
                    >
                      <span>Submit Partner Briefing Request</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-brand-text/70 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Confidential NDA protected briefing session.</span>
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
