'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight } from 'lucide-react';

interface ChatbotWidgetProps {
  onOpenConsultation: (topic?: string) => void;
  onOpenRoadmapModal?: () => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const promptChips = [
  'Virtual CIO / CDO Services',
  'ERP Vendor Selection & QA',
  'Digital Transformation Roadmap',
  '2026 AI Governance Blueprint',
];

export default function ChatbotWidget({
  onOpenConsultation,
  onOpenRoadmapModal,
}: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I am Catalix AI Assistant. How can I assist your executive team today?",
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
      let botReply =
        "Thank you for reaching out. Our Managing Partners specialize in CIO/CDO governance, ERP advisory, digital transformation, and AI roadmaps. Would you like to schedule a direct executive consultation?";

      const lower = text.toLowerCase();
      if (lower.includes('erp')) {
        botReply =
          "Catalix Global provides independent ERP advisory across SAP, Infor LN, and MS Dynamics 365—from vendor selection to project recovery and go-live QA.";
      } else if (lower.includes('ai') || lower.includes('governance')) {
        botReply =
          "Our AI Advisory practice provides secure enterprise AI governance frameworks, data readiness audits, and high-ROI agentic automation use cases.";
      } else if (lower.includes('cio') || lower.includes('cdo')) {
        botReply =
          "We offer fractional and virtual CIO/CDO services to align technology investments directly with business EBITDA and capital efficiency.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-brand-navy hover:bg-brand-navy-dark text-brand-gold rounded-full shadow-2xl transition-all duration-300 border-2 border-brand-gold/40 hover:scale-105 group"
        aria-label="Toggle AI Assistant Chat"
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

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-white rounded-md border border-brand-navy/20 shadow-2xl overflow-hidden flex flex-col h-[480px]"
          >
            {/* Chat Header */}
            <div className="bg-brand-navy text-white p-4 border-b border-brand-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-white">
                    Catalix Assistant
                  </h3>
                  <span className="text-[10px] text-brand-gold block font-mono">
                    ONLINE • EXECUTIVE ADVISORY
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
                    className={`max-w-[82%] p-3 rounded-md leading-relaxed ${
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
                  className="flex-shrink-0 text-[10px] font-semibold text-brand-navy bg-brand-cream hover:bg-brand-gold hover:text-brand-navy border border-brand-navy/10 rounded-full px-2.5 py-1 transition-all"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Schedule Call Fast CTA */}
            <div className="px-3 py-2 bg-brand-navy/5 border-t border-brand-navy/10 flex items-center justify-between text-xs">
              <span className="text-[11px] font-medium text-brand-navy">Need partner advice?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation('Chatbot Referral Consultation');
                }}
                className="font-bold text-brand-navy hover:text-brand-gold transition-colors inline-flex items-center gap-1 text-[11px]"
              >
                <span>Schedule Call</span>
                <ArrowRight className="w-3 h-3 text-brand-gold" />
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-brand-navy/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about ERP, AI, or CIO services..."
                className="flex-1 text-xs text-brand-navy px-3 py-2 bg-brand-cream/50 rounded-sm border border-brand-navy/15 focus:outline-none focus:border-brand-gold"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 bg-brand-navy text-brand-gold rounded-sm hover:bg-brand-navy-dark transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
