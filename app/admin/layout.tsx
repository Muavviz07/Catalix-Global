'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { LayoutDashboard, FileText, PlusCircle, LogOut, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  // If on /admin/login page, render without sidebar layout
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    if (isLoginPage) {
      setAuthenticated(true);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch('/api/blogs/admin');
        if (!res.ok) {
          throw new Error('Not authenticated');
        }
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [pathname, isLoginPage, router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      localStorage.removeItem('admin_token');
    } catch {
      // ignore
    }
    router.push('/admin/login');
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="flex items-center gap-3 text-brand-navy font-semibold">
          <div className="w-5 h-5 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
          <span>Verifying Admin Authorization...</span>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  const navLinks = [
    { name: 'Blogs Management', href: '/admin/blogs', icon: FileText },
    { name: 'Create New Blog', href: '/admin/blogs/new', icon: PlusCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-brand-navy-dark text-white flex-shrink-0 border-r border-brand-gold/20 flex flex-col justify-between">
        <div>
          {/* Brand Header with Compact Logo & Clean Admin Badge */}
          <div className="p-4 border-b border-brand-gold/20 flex items-center justify-between gap-2">
            <Link href="/admin/blogs" className="block shrink-0">
              <Logo size="sm" variant="light" />
            </Link>
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-brand-gold bg-brand-gold/15 px-2 py-0.5 rounded border border-brand-gold/30 shrink-0">
              <ShieldCheck className="w-3 h-3 text-brand-gold" /> Admin
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1">
            <span className="px-3 text-[10px] font-bold text-brand-gold uppercase tracking-wider block mb-2">
              Main Menu
            </span>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-brand-navy text-brand-gold border-l-4 border-brand-gold font-bold shadow-sm'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-brand-gold" />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-4 mt-4 border-t border-white/10">
              <span className="px-3 text-[10px] font-bold text-brand-gold uppercase tracking-wider block mb-2">
                Public Website
              </span>
              <Link
                href="/blogs"
                target="_blank"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-md text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4 text-brand-gold" />
                  <span>View Public Blogs</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </Link>
            </div>
          </nav>
        </div>

        {/* Sidebar Footer / Logout */}
        <div className="p-4 border-t border-brand-gold/20 bg-brand-navy/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-200 bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 rounded-md transition-all duration-200"
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span>Logout Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
