'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import ConsultationModal from '@/components/ConsultationModal';
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  publishedAt?: string | null;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Executive Consultation');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setSelectedTopic(topic);
    setConsultationOpen(true);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (data.blog) {
          setBlog(data.blog);

          // Fetch related posts
          const relRes = await fetch(`/api/blogs/${data.blog.id}/related?limit=3`);
          if (relRes.ok) {
            const relData = await relRes.json();
            setRelated(relData.blogs || []);
          }
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogData();
    }
  }, [slug]);

  const getReadingTime = (text: string) => {
    const words = text.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-cream text-brand-navy">
        <Navbar onOpenConsultation={handleOpenConsultation} />
        <main className="pt-28 pb-0">
          <div className="py-24 px-4 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-8 h-8 border-3 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-semibold text-brand-navy/70">Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Handle "Blog not found" page
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-brand-cream text-brand-navy">
        <Navbar onOpenConsultation={handleOpenConsultation} />
        <main className="pt-28 pb-0">
          <div className="py-24 px-4 max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-brand-gold/15 border border-brand-gold/40 rounded-full flex items-center justify-center mx-auto text-brand-navy">
              <BookOpen className="w-8 h-8 text-brand-gold" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy">Blog not found</h1>
            <p className="text-brand-navy/80 text-base">
              This article doesn't exist or has been archived.
            </p>
            <div className="pt-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded shadow-md border border-brand-gold/40 transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-brand-gold" />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="pt-28 pb-0">
        {/* 1. Page Hero Header (Section 1: Brand Cream Shade, Left-Aligned Standard Layout) */}
        <section className="bg-brand-cream border-b border-brand-navy/10 pt-4 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy/60 flex-wrap">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-brand-gold transition-colors">
                Blogs
              </Link>
              <span>/</span>
              <span>{blog.category}</span>
              <span>/</span>
              <span className="text-brand-navy font-semibold truncate max-w-xs">{blog.title}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-brand-navy text-brand-gold flex items-center justify-center shadow-md shrink-0">
                  <BookOpen className="w-4.5 h-4.5 text-brand-gold" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                  {blog.category} — EXECUTIVE PERSPECTIVES
                </span>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight">
                {blog.title}
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
                {blog.excerpt}
              </p>

              {/* Meta Info Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-brand-navy/10 text-xs font-mono text-brand-navy/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  <span>
                    Published:{' '}
                    {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{getReadingTime(blog.content)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Article Body Section (Section 2: White Background Shade, Left-Aligned Standard Layout) */}
        <section className="bg-white border-b border-brand-navy/10 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Article Body Content (8 Cols) */}
              <div className="lg:col-span-8 space-y-8">
                <article className="prose prose-lg text-brand-navy font-sans leading-[1.8] text-[17px] w-full max-w-none">
                  <style jsx global>{`
                    .blog-content > *:first-child,
                    .blog-content h1:first-child,
                    .blog-content h2:first-child,
                    .blog-content h3:first-child,
                    .blog-content p:first-child {
                      margin-top: 0 !important;
                      padding-top: 0 !important;
                    }
                    .blog-content h1,
                    .blog-content h2,
                    .blog-content h3,
                    .blog-content h4 {
                      font-family: var(--font-crimson), Georgia, serif;
                      color: #1a3a52;
                      font-weight: 700;
                      margin-top: 1.6em;
                      margin-bottom: 0.6em;
                      line-height: 1.3;
                    }
                    .blog-content h2 {
                      font-size: 1.875rem;
                      border-bottom: 1px solid rgba(212, 175, 55, 0.3);
                      padding-bottom: 0.4rem;
                    }
                    .blog-content h3 {
                      font-size: 1.5rem;
                    }
                    .blog-content p {
                      margin-bottom: 1.25em;
                      color: #1a3a52;
                    }
                    .blog-content ul,
                    .blog-content ol {
                      margin-bottom: 1.25em;
                      padding-left: 1.5rem;
                    }
                    .blog-content ul {
                      list-style-type: disc;
                    }
                    .blog-content ol {
                      list-style-type: decimal;
                    }
                    .blog-content li {
                      margin-bottom: 0.4em;
                    }
                    .blog-content blockquote {
                      border-left: 4px solid #d4af37;
                      padding-left: 1.25rem;
                      margin: 1.5em 0;
                      font-style: italic;
                      color: #112738;
                      background-color: rgba(212, 175, 55, 0.06);
                      padding-top: 0.75rem;
                      padding-bottom: 0.75rem;
                      border-radius: 0 0.375rem 0.375rem 0;
                    }
                    .blog-content pre,
                    .blog-content code {
                      font-family: monospace;
                      background-color: #112738;
                      color: #f7f5f0;
                      border-radius: 0.375rem;
                    }
                    .blog-content pre {
                      padding: 1.25rem;
                      overflow-x: auto;
                      border: 1px solid rgba(212, 175, 55, 0.3);
                      margin: 1.5em 0;
                    }
                    .blog-content code {
                      padding: 0.2em 0.4em;
                    }
                    .blog-content pre code {
                      padding: 0;
                      background: transparent;
                    }
                    .blog-content img {
                      max-width: 100%;
                      height: auto;
                      border-radius: 0.5rem;
                      margin: 1.5em 0;
                    }
                  `}</style>

                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </article>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="pt-6 border-t border-brand-navy/10 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-navy/60 mr-2">
                      Tags:
                    </span>
                    {blog.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1 bg-brand-cream/60 border border-slate-300 text-brand-navy rounded-full text-xs font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Share Buttons */}
                <ShareButtons title={blog.title} slug={blog.slug} />

                {/* Newsletter Subscription CTA */}
                <NewsletterCTA />
              </div>

              {/* Right Column: Executive Advisory Sidebar & Related Articles (4 Cols) */}
              <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
                <div className="bg-brand-cream/60 p-6 rounded-lg border border-brand-navy/10 space-y-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold">
                    Executive Advisory Practice
                  </span>
                  <h3 className="font-serif font-bold text-xl text-brand-navy">
                    Need Advisory on {blog.category}?
                  </h3>
                  <p className="text-xs text-brand-navy/80 leading-relaxed font-sans">
                    Schedule a confidential consultation with our senior consulting team to evaluate your enterprise strategy.
                  </p>
                  <button
                    onClick={() => handleOpenConsultation(`${blog.category} Advisory Inquiry`)}
                    className="w-full py-3 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2 border border-brand-gold/40"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                  </button>
                </div>

                {/* Related Articles Sidebar */}
                {related.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-lg text-brand-navy border-b border-brand-navy/15 pb-2">
                      Related Articles
                    </h4>
                    <div className="space-y-3">
                      {related.map((rel) => (
                        <div
                          key={rel.id}
                          className="bg-brand-cream/40 p-4 rounded-md border border-slate-200 hover:border-brand-gold/50 transition-all space-y-2 group"
                        >
                          <span className="text-[10px] font-bold font-mono text-brand-gold uppercase">
                            {rel.category}
                          </span>
                          <h5 className="font-serif font-bold text-sm text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-2">
                            <Link href={`/blogs/${rel.slug}`}>{rel.title}</Link>
                          </h5>
                          <Link
                            href={`/blogs/${rel.slug}`}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-navy hover:text-brand-gold pt-1"
                          >
                            <span>Read Article</span>
                            <ArrowRight className="w-3 h-3 text-brand-gold" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Back to All Blogs Link */}
            <div className="pt-12 text-left border-t border-brand-navy/10 mt-12">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-gold uppercase tracking-wider py-2.5 px-5 rounded border border-slate-300 hover:border-brand-gold bg-brand-cream/50 transition-all shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 text-brand-gold" />
                <span>Back to All Articles</span>
              </Link>
            </div>
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
