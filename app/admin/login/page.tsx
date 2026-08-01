'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store in localStorage for client-side headers fallback
      if (data.token) {
        localStorage.setItem('admin_token', data.token);
      }

      router.push('/admin/blogs');
    } catch (err: any) {
      setError(err.message || 'Invalid password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy-dark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-brand-cream text-brand-navy rounded-xl shadow-2xl p-8 sm:p-10 border border-brand-gold/30 space-y-8">
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Logo size="lg" variant="dark" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-brand-navy">Admin Access Portal</h1>
          <p className="text-xs text-brand-navy/70 uppercase tracking-widest font-semibold">
            Catalix Global Blog Management
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm rounded flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80">
              Admin Master Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                required
                className="w-full h-12 pl-10 pr-4 bg-white text-brand-navy rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm font-medium"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-brand-gold/40"
          >
            <span>{loading ? 'Authenticating...' : 'Access Dashboard'}</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </button>
        </form>

        <div className="text-center pt-2">
          <a
            href="/"
            className="text-xs font-semibold text-brand-navy/60 hover:text-brand-gold transition-colors"
          >
            ← Return to Catalix Global Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
