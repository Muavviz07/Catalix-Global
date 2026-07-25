'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

interface DetailClientViewProps {
  initialTopic: string;
  children: (onOpenConsultation: (topic?: string) => void) => React.ReactNode;
}

export default function DetailClientView({ initialTopic, children }: DetailClientViewProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState(initialTopic);

  const handleOpenConsultation = (t?: string) => {
    setTopic(t || initialTopic);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main className="pt-32 pb-24">
        {children(handleOpenConsultation)}
      </main>
      <Footer />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={topic}
      />
    </div>
  );
}
