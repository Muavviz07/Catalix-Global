'use client';

import Link from 'next/link';
import { Shield, Layers, Compass, TrendingUp, Cpu, ArrowRight, FileCheck2 } from 'lucide-react';
import { servicesData } from '@/data/siteData';

const iconMap = {
  Shield,
  Layers,
  Compass,
  TrendingUp,
  Cpu,
  FileCheck2,
};

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-brand-cream/50 border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-brand-navy/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>STRATEGIC PRACTICE AREAS</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
              What We Do
            </h2>
          </div>
          <p className="text-base text-brand-text/80 font-normal max-w-md mt-4 md:mt-0">
            Six integrated practices for enterprise transformation and independent executive steering.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-sm border border-brand-navy/10 hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Subtitle */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-brand-gold uppercase tracking-wider bg-brand-cream px-2.5 py-1 rounded-xs border border-brand-gold/30">
                      PRACTICE {service.id.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-brand-navy group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                    {service.shortCopy}
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-navy/5 mt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3.5 bg-white hover:bg-brand-cream text-brand-navy border border-brand-navy/30 hover:border-brand-gold font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-xs"
          >
            <span>View All Practices & Deliverables →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
