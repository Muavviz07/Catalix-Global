'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, ArrowRight } from 'lucide-react';
import { LogoIcon } from './Logo';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  cta?: {
    text: string;
    action: string;
  };
}

interface ChatbotWidgetProps {
  onOpenConsultation: (topic?: string) => void;
  onOpenRoadmapModal: () => void;
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Hello! I'm the Catalix AI Assistant. How can I help guide your enterprise transformation today?",
    timestamp: 'Just now',
  },
];

const quickPrompts = [
  'What services do you offer?',
  'Tell me about ERP Advisory',
  'How do you handle AI Governance?',
  'What ROI can we expect?',
];

export default function ChatbotWidget({
  onOpenConsultation,
  onOpenRoadmapModal,
}: ChatbotWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  if (!mounted) return null;

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Catalix Global provides executive advisory across CIO/CDO leadership, ERP governance, and AI transformation to maximize balance-sheet yield.";
      let cta: ChatMessage['cta'] = undefined;

      const lower = text.toLowerCase();
      if (lower.includes('service') || lower.includes('do you offer') || lower.includes('what do you do')) {
        botResponse = "We specialize in 4 core practice lines:\n1. CIO & CDO Advisory\n2. ERP Advisory & Implementation Steering\n3. Digital Transformation & Process Modernization\n4. Pragmatic AI Governance & Strategy.";
        cta = { text: 'Explore All Practices', action: 'consultation' };
      } else if (lower.includes('erp')) {
        botResponse = "Our ERP Advisory provides independent steering for SAP, Oracle, and Microsoft Dynamics lifecycles—covering vendor selection, contract negotiations, implementation risk auditing, and post-go-live value realization.";
        cta = { text: 'Schedule ERP Advisory Session', action: 'consultation_erp' };
      } else if (lower.includes('ai') || lower.includes('governance')) {
        botResponse = "Our AI Governance framework equips C-suite leaders with secure data architecture, LLM risk controls, and high-ROI agentic workflows tailored for industrial enterprise operations.";
        cta = { text: 'Download Executive AI Roadmap', action: 'roadmap' };
      } else if (lower.includes('roi') || lower.includes('yield') || lower.includes('result') || lower.includes('expect')) {
        botResponse = "Engagements typically unlock 18-28% tied-up inventory capital, deliver +8-14% OEE lifts across plant networks, and cut scrap/rework by up to 35%. You can test our interactive yield estimator on the homepage!";
        cta = { text: 'Book Operational Diagnostic', action: 'consultation_diagnostic' };
      } else {
        botResponse = "I would be delighted to connect you directly with a Catalix Managing Partner for a confidential executive consultation regarding your enterprise priorities.";
        cta = { text: 'Schedule Consultation', action: 'consultation' };
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        cta,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleCtaClick = (action?: string) => {
    setIsOpen(false);
    if (action === 'roadmap') {
      onOpenRoadmapModal();
    } else if (action === 'consultation_erp') {
      onOpenConsultation('ERP Advisory & Steering');
    } else if (action === 'consultation_diagnostic') {
      onOpenConsultation('Custom Operational Yield Diagnostic');
    } else {
      onOpenConsultation('Executive Consultation');
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button at Right Bottom */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-brand-navy border-2 border-brand-gold text-brand-gold shadow-2xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-gold group"
          aria-label="Open Catalix AI Assistant"
        >
          <span className="absolute -inset-1 rounded-full bg-brand-gold/30 animate-ping pointer-events-none opacity-50" />

          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-6 h-6 text-brand-gold group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-navy" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 25 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-brand-navy/15 overflow-hidden flex flex-col font-sans"
          >
            {/* Top Bar */}
            <div className="bg-brand-navy text-white px-4 py-3.5 flex items-center justify-between border-b border-brand-gold/30">
              <div className="flex items-center gap-3">
                <LogoIcon className="w-7 h-7" />
                <div>
                  <h4 className="font-serif font-bold text-base text-white leading-none">
                    Catalix AI Assistant
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">
                      Online • B2B Strategic Advisory
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto bg-brand-cream/40 space-y-3.5 text-xs">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[82%] space-y-2`}>
                    <div
                      className={`p-3 rounded-lg leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-brand-navy text-white rounded-tr-none shadow-xs'
                          : 'bg-white text-brand-navy border border-brand-navy/10 rounded-tl-none shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.cta && (
                      <button
                        onClick={() => handleCtaClick(msg.cta?.action)}
                        className="w-full py-2 px-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-semibold text-xs rounded-md transition-all flex items-center justify-center gap-1.5 shadow-xs group"
                      >
                        <span>{msg.cta.text}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    <span
                      className={`text-[9px] text-brand-text/50 block ${
                        msg.sender === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs font-bold text-[10px]">
                      YOU
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-brand-navy/10 p-2.5 rounded-lg rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Pills */}
            <div className="px-3 py-2 bg-white border-t border-brand-navy/10 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-brand-cream border border-brand-navy/15 hover:border-brand-gold hover:bg-brand-gold-light text-[10px] font-semibold text-brand-navy transition-all"
                >
                  ⚡ {prompt}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-white border-t border-brand-navy/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about CIO advisory, ERP, AI..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 text-xs px-3 py-2 rounded-md border border-brand-navy/20 focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2 rounded-md bg-brand-navy text-brand-gold hover:bg-brand-navy-dark transition-colors"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
