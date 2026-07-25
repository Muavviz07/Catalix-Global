'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Globe, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    area: 'CIO / CDO Services',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={() => {}} />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                CONFIDENTIAL C-SUITE CONSULTATION
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl text-brand-navy">
                Schedule a Partner Discovery Session
              </h1>
              <p className="text-sm sm:text-base text-brand-text/80 leading-relaxed">
                Connect directly with a Managing Partner to evaluate your technology architecture, ERP implementation roadmap, or AI governance priorities under strict NDA protection.
              </p>

              <div className="pt-4 space-y-3 border-t border-brand-navy/10 text-xs text-brand-navy">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-text/60 block">Direct Email</span>
                    <span className="font-bold">consulting@catalixglobal.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-text/60 block">Official Domain</span>
                    <span className="font-bold">www.catalixglobal.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-text/60 block">Confidentiality Guarantee</span>
                    <span className="font-bold">Full NDA Protection & Zero Vendor Bias</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-brand-navy/10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-brand-navy">
                    Consultation Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text/80 max-w-md mx-auto">
                    Thank you. A Catalix Global Managing Partner will review your inquiry and reach out within 24 business hours to arrange a confidential discussion.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-serif font-bold text-2xl text-brand-navy pb-3 border-b border-brand-navy/10">
                    Executive Discovery Request
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-brand-navy rounded-sm border border-brand-navy/20 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-brand-navy rounded-sm border border-brand-navy/20 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none"
                        placeholder="johndoe@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-brand-navy rounded-sm border border-brand-navy/20 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none"
                        placeholder="Acme Industrial Corp"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        Primary Advisory Area
                      </label>
                      <select
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-brand-navy bg-white rounded-sm border border-brand-navy/20 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none"
                      >
                        <option value="CIO / CDO Services">CIO / CDO Services</option>
                        <option value="ERP Advisory">ERP Advisory</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Operational Excellence">Operational Excellence</option>
                        <option value="AI Advisory">AI Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Key Transformation Priorities / Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-brand-navy rounded-sm border border-brand-navy/20 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold focus:outline-none"
                      placeholder="Briefly describe your ERP timeline, plant operations, or technology objectives..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Executive Request</span>
                    <Send className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
