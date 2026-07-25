'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import ServiceEstimator from '@/components/ServiceEstimator';
import { ServiceData, SectorData } from '@/data/siteData';
import { Shield, Layers, Compass, TrendingUp, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = { Shield, Layers, Compass, TrendingUp, Cpu };

interface ServiceDetailClientProps {
  service: ServiceData;
  relatedSectorsList: SectorData[];
}

export default function ServiceDetailClient({
  service,
  relatedSectorsList,
}: ServiceDetailClientProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [topic, setTopic] = useState(`${service.title} Consultation`);

  const IconComponent = iconMap[service.iconName];

  const handleOpenConsultation = (t?: string) => {
    setTopic(t || `${service.title} Consultation`);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-32 pb-24">
        {/* 1. Page Hero */}
        <section className="bg-brand-cream border-b border-brand-navy/10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy/60 mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-gold transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-brand-navy font-semibold">{service.title}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  {service.subtitle}
                </span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
                {service.title} — Strategic Advisory
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                {service.heroSubheading}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenConsultation(`${service.title} Inquiry`)}
                  className="inline-flex items-center px-7 py-3.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md group"
                >
                  <span>Schedule {service.title} Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Service Overview & Benefits */}
        <section className="py-20 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Overview Column */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-serif font-bold text-3xl text-brand-navy">
                  {service.overview.headline}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-brand-text/90 leading-relaxed">
                  {service.overview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Right Benefits Column */}
              <div className="lg:col-span-5 bg-brand-cream/60 p-8 rounded-sm border border-brand-navy/10 space-y-4">
                <h3 className="font-serif font-bold text-xl text-brand-navy pb-2 border-b border-brand-navy/10">
                  Key Strategic Benefits
                </h3>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Service Scope (Deliverables) */}
        <section className="py-20 bg-brand-cream/40 border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                STRUCTURED PRACTICE DELIVERABLES
              </div>
              <h2 className="font-serif font-bold text-3xl text-brand-navy">
                What We Deliver
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-sm border-l-4 border-brand-gold border-y border-r border-brand-navy/10 shadow-xs space-y-1.5"
                >
                  <h3 className="font-serif font-bold text-lg text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Service-Specific Estimator */}
        <section className="py-20 bg-white border-b border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceEstimator
              estimator={service.estimator}
              serviceTitle={service.title}
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        </section>

        {/* 5. Related Sectors */}
        {relatedSectorsList.length > 0 && (
          <section className="py-20 bg-brand-cream/40 border-b border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10 space-y-2">
                <div className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  INDUSTRY APPLICABILITY
                </div>
                <h2 className="font-serif font-bold text-3xl text-brand-navy">
                  Sectors We Serve With {service.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSectorsList.map((sec) => (
                  <Link
                    key={sec.id}
                    href={`/sectors/${sec.slug}`}
                    className="bg-white p-6 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all shadow-xs group"
                  >
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                      {sec.subtitle}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-brand-navy group-hover:text-brand-gold transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-brand-text/70 mt-2 line-clamp-2">
                      {sec.context}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Service CTA Banner */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Ready to Explore {service.title}?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule a confidential discovery session with a Catalix Managing Partner to assess your {service.title} priorities.
            </p>

            <div>
              <button
                onClick={() => handleOpenConsultation(`${service.title} Executive Audit`)}
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                Schedule {service.title} Consultation
              </button>
            </div>
          </div>
        </section>
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
