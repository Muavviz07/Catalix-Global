'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Outcomes from '@/components/Outcomes';
import WhyUs from '@/components/WhyUs';
import AIAdvisorySection from '@/components/AIAdvisorySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import AIRoadmapModal from '@/components/AIRoadmapModal';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('Executive Consultation');
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setConsultationTopic(topic);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleOpenRoadmap = () => {
    setIsRoadmapOpen(true);
  };

  const handleCloseRoadmap = () => {
    setIsRoadmapOpen(false);
  };

  return (
    <main className="min-h-screen bg-brand-cream text-brand-text flex flex-col font-sans selection:bg-brand-gold/30 selection:text-brand-navy relative">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero
        onOpenConsultation={handleOpenConsultation}
        onOpenRoadmapModal={handleOpenRoadmap}
      />

      {/* 1. Services Overview Section */}
      <Services onOpenConsultation={handleOpenConsultation} />

      {/* 2. Business Outcomes Section */}
      <Outcomes onOpenConsultation={handleOpenConsultation} />

      {/* 3. Why Catalix Section */}
      <WhyUs onOpenConsultation={handleOpenConsultation} />

      {/* Dedicated AI Governance Section */}
      <AIAdvisorySection
        onOpenConsultation={handleOpenConsultation}
        onOpenRoadmapModal={handleOpenRoadmap}
      />

      {/* 4. Call-to-Action / Contact Section */}
      <CTASection
        onOpenConsultation={handleOpenConsultation}
        onOpenRoadmapModal={handleOpenRoadmap}
      />

      {/* 5. Footer Section */}
      <Footer />

      {/* Chatbot Widget (Floating at Right Bottom) */}
      <ChatbotWidget
        onOpenConsultation={handleOpenConsultation}
        onOpenRoadmapModal={handleOpenRoadmap}
      />

      {/* Consultation Modal Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialTopic={consultationTopic}
      />

      {/* AI Roadmap Briefing Download Modal */}
      <AIRoadmapModal
        isOpen={isRoadmapOpen}
        onClose={handleCloseRoadmap}
      />
    </main>
  );
}
