'use client';

import { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 600);
  };

  return (
    <section className="bg-brand-navy dark:bg-brand-navy-dark text-white rounded-lg overflow-hidden shadow-2xl p-8 sm:p-12 md:p-16 my-16 border border-brand-gold/30 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-gold-hover to-brand-gold/20" />
      
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Executive Intelligence Briefing</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-bold leading-tight">
          Get the latest insights delivered to your inbox
        </h2>

        <p className="text-brand-cream/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Strategic enterprise advice, transformation frameworks, and operational excellence tips—direct to your inbox.
        </p>

        {subscribed ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-md p-6 max-w-md mx-auto flex items-center justify-center gap-3 text-emerald-200 animate-fadeIn">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <span className="text-sm font-semibold">
              Thank you for subscribing! You are now on our executive distribution list.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your executive email..."
                required
                className="flex-1 h-[48px] px-4 rounded bg-white text-brand-navy placeholder:text-slate-400 text-sm font-medium border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button
                type="submit"
                disabled={loading}
                className="h-[48px] px-6 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-sm uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg shrink-0 w-full sm:w-auto"
              >
                <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-brand-cream/60">
              We'll never spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
