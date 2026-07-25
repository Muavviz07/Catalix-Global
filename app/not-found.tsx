'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy flex flex-col justify-between">
      <Navbar onOpenConsultation={() => {}} />

      <main className="pt-40 pb-28 flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center mx-auto shadow-md">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block">
            ERROR 404 • PAGE NOT FOUND
          </span>

          <h1 className="font-serif font-bold text-4xl text-brand-navy">
            Resource Relocated
          </h1>

          <p className="text-xs sm:text-sm text-brand-text/80 leading-relaxed">
            The requested advisory route does not exist or has been relocated. Explore our practices, industry sectors, or return to the main entry point.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2 text-brand-gold" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
