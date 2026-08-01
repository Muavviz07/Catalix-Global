'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: string;
  publishedAt?: string | null;
}

export default function PublicBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Executive Consultation');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setSelectedTopic(topic);
    setConsultationOpen(true);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs/published?page=${page}&limit=9`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data.blogs || []);
          setTotalPages(data.totalPages || 1);
          setTotal(data.total || 0);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  const getReadingTime = (excerpt: string) => {
    const words = excerpt.split(/\s+/).length + 400;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-28 pb-0">
        {/* 1. Header Hero (Section 1: Brand Cream Shade) */}
        <section className="bg-brand-cream border-b border-brand-navy/10 pt-4 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-mono text-brand-navy/60 flex-wrap">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-navy font-semibold">Blogs</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
                <span>THOUGHT LEADERSHIP & EXECUTIVE PERSPECTIVES</span>
              </div>

              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight">
                Insights & Resources
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                Strategic perspectives on enterprise transformation, technology leadership, and operational excellence.
              </p>

              {/* Trust Indicators Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-navy/10 text-xs font-mono font-bold text-brand-navy">
                <div>
                  <span className="text-brand-gold text-base block font-serif">Executive</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">B2B Advisory</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">100%</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Vendor Neutral</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">Actionable</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Frameworks</span>
                </div>
                <div>
                  <span className="text-brand-gold text-base block font-serif">C-Suite</span>
                  <span className="text-brand-navy/60 font-sans text-[11px]">Focus Area</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Blog Grid Section (Section 2: White Background Shade) */}
        <section className="bg-white border-b border-brand-navy/10 py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="bg-brand-cream/40 p-8 rounded-lg border border-slate-200 shadow-xs animate-pulse space-y-4 h-64"
                  >
                    <div className="w-24 h-4 bg-slate-200 rounded" />
                    <div className="w-full h-6 bg-slate-200 rounded" />
                    <div className="w-3/4 h-6 bg-slate-200 rounded" />
                    <div className="w-full h-12 bg-slate-100 rounded" />
                  </div>
                ))}
              </div>
            ) : blogs.length === 0 ? (
              <div className="bg-brand-cream/40 p-16 rounded-xl border border-slate-200 text-center space-y-4 shadow-sm my-8">
                <h2 className="text-2xl font-serif font-bold text-brand-navy">No articles found</h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Articles are currently being prepared by our enterprise consulting team. Check back shortly.
                </p>
              </div>
            ) : (
              <>
                {/* 3-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.map((b) => (
                    <article
                      key={b.id}
                      className="bg-brand-cream/40 rounded-lg p-8 border border-slate-200/90 shadow-sm hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        {/* Category Badge */}
                        <div>
                          <span className="inline-block px-3 py-1 bg-brand-gold/15 text-brand-navy border border-brand-gold/40 rounded text-xs font-bold uppercase tracking-wider">
                            {b.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy group-hover:text-brand-gold transition-colors leading-snug line-clamp-2">
                          <Link href={`/blogs/${b.slug}`}>{b.title}</Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-brand-navy/80 text-sm leading-relaxed line-clamp-3 font-sans">
                          {b.excerpt}
                        </p>
                      </div>

                      {/* Footer Meta & Read Link */}
                      <div className="pt-6 mt-6 border-t border-slate-200/80 space-y-4">
                        <div className="flex items-center justify-between text-xs text-brand-navy/60 font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                            {new Date(b.publishedAt || b.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {getReadingTime(b.excerpt)}
                          </span>
                        </div>

                        <div>
                          <Link
                            href={`/blogs/${b.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-gold group-hover:translate-x-1 transition-all duration-200"
                          >
                            <span>Read Full Article</span>
                            <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-6">
                    <button
                      disabled={page <= 1}
                      onClick={() => setPage(page - 1)}
                      className="p-2.5 rounded bg-brand-cream text-brand-navy border border-slate-300 disabled:opacity-40 hover:border-brand-gold transition-all"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-10 h-10 rounded font-bold text-xs transition-all ${
                          page === p
                            ? 'bg-brand-gold text-brand-navy shadow-md font-extrabold scale-105'
                            : 'bg-brand-cream text-brand-navy border border-slate-300 hover:border-brand-gold'
                        }`}
                      >
                        {p}
                      </button>
                    ))}

                    <button
                      disabled={page >= totalPages}
                      onClick={() => setPage(page + 1)}
                      className="p-2.5 rounded bg-brand-cream text-brand-navy border border-slate-300 disabled:opacity-40 hover:border-brand-gold transition-all"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialTopic={selectedTopic}
      />
    </div>
  );
}
