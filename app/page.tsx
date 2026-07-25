'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ImpactHighlights from '@/components/ImpactHighlights';
import GeneralEstimator from '@/components/GeneralEstimator';
import WhyChooseCatalyx from '@/components/WhyChooseCatalyx';
import AIAdvisorySection from '@/components/AIAdvisorySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import ConsultationModal from '@/components/ConsultationModal';
import AIRoadmapModal from '@/components/AIRoadmapModal';

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Executive Consultation');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setSelectedTopic(topic);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy selection:bg-brand-gold selection:text-brand-navy">
      {/* Sticky Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Homepage Flow */}
      <main>
        <Hero onOpenConsultation={() => handleOpenConsultation('Executive Consultation')} />
        <Services onOpenConsultation={handleOpenConsultation} />
        <ImpactHighlights />
        <GeneralEstimator onOpenConsultation={handleOpenConsultation} />
        <WhyChooseCatalyx onOpenConsultation={handleOpenConsultation} />
        <AIAdvisorySection
          onOpenConsultation={handleOpenConsultation}
          onOpenRoadmap={() => setRoadmapOpen(true)}
        />
        <CTASection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <ChatbotWidget onOpenConsultation={handleOpenConsultation} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={selectedTopic}
      />
      <AIRoadmapModal isOpen={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </div>
  );
}
