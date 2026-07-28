'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const promptChips = [
  'Virtual CIO / CDO Services',
  'ERP Vendor Selection & QA',
  'Digital Transformation Roadmap',
  '2026 AI Governance Blueprint',
  'Why Catalix Vendor Neutrality',
];

const siteKnowledge = [
  {
    keywords: ['cio', 'cdo', 'leadership', 'fractional', 'interim', 'executive'],
    response:
      "Catalix Global's CIO / CDO Advisory practice provides fractional executive IT leadership. We align technology spend directly with EBITDA, working capital velocity, and digital risk management without full-time C-suite overhead.",
  },
  {
    keywords: ['erp', 'sap', 'infor', 'dynamics', 'oracle', 'vendor', 's4hana', 'cutover'],
    response:
      "Our ERP Advisory & Implementation Steering covers SAP S/4HANA, Infor LN, and Microsoft Dynamics 365. We provide independent vendor selection, SI SOW auditing, cutover risk management, and post-go-live optimization with 100% vendor neutrality.",
  },
  {
    keywords: ['ai', 'artificial intelligence', 'governance', 'roadmap', 'llm', 'agentic', 'scada'],
    response:
      "Catalix Global's AI Advisory & Governance practice establishes secure enterprise LLM data pipelines, IP protection controls, and high-ROI agentic workflows connecting shop floor SCADA/ERP data to board-level decision making.",
  },
  {
    keywords: ['digital transformation', 'modernization', 'cloud', 'legacy', 'architecture'],
    response:
      "Our Digital Transformation Strategy practice aligns legacy system modernization, cloud migration, and enterprise architecture with overall P&L goals to eliminate technical debt and drive operational EBITDA yield.",
  },
  {
    keywords: ['operational excellence', 'ebitda', 'oee', 'inventory', 'supply chain', 'bpr', 'shopfloor'],
    response:
      "Our Operational Excellence practice focuses on Business Process Redesign (BPR), shopfloor MES integration, inventory turn rate acceleration, and OEE improvement across process and discrete manufacturing.",
  },
  {
    keywords: ['fmcg', 'consumer packaged goods', 'distribution', 'warehouse', 'batch', 'retail'],
    response:
      "For FMCG & Distribution, we specialize in high-volume batch traceability, warehouse management (WMS/EWM), promotional trade management, and shelf-life inventory optimization.",
  },
  {
    keywords: ['power cables', 'cables', 'copper', 'aluminum', 'scrap', 'drum', 'wire'],
    response:
      "For Power Cables & Wire Manufacturing, we offer specialized ERP frameworks for scrap/yield tracking, copper/aluminum raw material hedging, drum inventory management, and length-based BOM routing.",
  },
  {
    keywords: ['electrical equipment', 'switchgear', 'transformer', 'panel', 'variant', 'cpq'],
    response:
      "For Electrical Equipment Manufacturing, we advise on complex Configure-Price-Quote (CPQ) integration, multi-level BOM management, and engineer-to-order (ETO) shopfloor scheduling.",
  },
  {
    keywords: ['vendor neutral', 'kickbacks', 'commissions', 'bias', 'why catalix', 'difference'],
    response:
      "Catalix Global is 100% vendor-neutral. We take zero software reseller margins, referral fees, or vendor commissions. All recommendations are driven strictly by your P&L and operational requirements.",
  },
  {
    keywords: ['ipo', 'sox', 'readiness', 'compliance', 'sec', 'controls', 'itgc', 'auditability'],
    response:
      "Catalix Global's IPO Readiness & Compliance practice prepares your IT governance, general controls (ITGC), and cybersecurity posturing to ensure investor trust, system reliability, and seamless compliance audits for a successful public listing."
  },
  {
    keywords: ['contact', 'consultation', 'book', 'schedule', 'audit', 'meeting', 'nda', 'pricing'],
    response:
      "You can schedule a confidential 45-minute executive discovery briefing directly with a Catalix Managing Partner. All sessions are protected under mutual enterprise NDA.",
  },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('Executive Discovery Session');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I am Catalix AI Executive Assistant. How can I assist your executive team with our advisory practices, sector frameworks, or ERP/AI governance today?",
    },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedReply = '';

      for (const item of siteKnowledge) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedReply = item.response;
          break;
        }
      }

      if (!matchedReply) {
        matchedReply =
          "I am trained specifically on Catalix Global's executive advisory services, industrial sector frameworks, and enterprise ERP/AI governance. For questions beyond our site offerings, please schedule a direct executive briefing with a Managing Partner.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: matchedReply }]);
    }, 450);
  };

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic || 'Executive Consultation');
    setConsultationOpen(true);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Global Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand-navy hover:bg-brand-navy-dark text-brand-gold rounded-full shadow-2xl transition-all duration-300 border-2 border-brand-gold/50 hover:scale-105 group"
        aria-label="Toggle Catalix AI Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full border-2 border-brand-navy animate-pulse" />
          </div>
        )}
      </button>

      {/* Global Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-md border border-brand-navy/20 shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-brand-navy text-white p-4 border-b border-brand-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-white">
                    Catalix Executive Assistant
                  </h3>
                  <span className="text-[10px] text-brand-gold block font-mono">
                    SITE-INFORMED • MANAGING PARTNER AI
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-brand-cream/30 text-xs">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-md leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-brand-navy text-white rounded-br-none'
                        : 'bg-white text-brand-navy border border-brand-navy/10 rounded-bl-none shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Prompt Chips */}
            <div className="px-3 py-2 bg-white border-t border-brand-navy/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {promptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="px-2.5 py-1 bg-brand-cream hover:bg-brand-gold/20 text-brand-navy font-semibold text-[10px] whitespace-nowrap rounded-xs border border-brand-navy/10 transition-colors flex-shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Action Bar & Input */}
            <div className="p-3 bg-white border-t border-brand-navy/10 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Services, ERP, or Sectors..."
                  className="flex-1 px-3 py-2 text-xs bg-brand-cream/40 border border-brand-navy/20 rounded-xs focus:outline-none focus:border-brand-gold"
                />
                <button
                  onClick={() => handleSend()}
                  className="p-2 bg-brand-navy hover:bg-brand-navy-dark text-brand-gold rounded-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 text-[10px] text-brand-navy font-medium">
                <button
                  onClick={() => handleOpenConsultation('Assistant Inquiry')}
                  className="text-brand-gold hover:underline font-bold flex items-center gap-1"
                >
                  <span>Book Partner Briefing</span>
                  <ArrowRight className="w-3 h-3 text-brand-gold" />
                </button>
                <div className="flex items-center gap-1 text-slate-400 font-mono">
                  <ShieldCheck className="w-3 h-3 text-brand-gold" />
                  <span>100% NDA Protected</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={consultationTopic}
      />
    </>
  );
}
