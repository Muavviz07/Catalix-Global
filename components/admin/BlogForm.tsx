'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuillEditor from './QuillEditor';
import {
  ArrowLeft,
  Save,
  Send,
  Trash2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

interface BlogFormData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  published: boolean;
  relatedPostIds: string[];
}

interface BlogFormProps {
  initialData?: Partial<BlogFormData>;
  isEdit?: boolean;
}

const CATEGORY_OPTIONS = [
  'CIO/CDO',
  'ERP',
  'Digital Transformation',
  'Operational Excellence',
  'AI Advisory',
  'IPO Readiness',
];

export default function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<BlogFormData>({
    id: initialData?.id || '',
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    category: initialData?.category || CATEGORY_OPTIONS[0],
    tags: Array.isArray(initialData?.tags)
      ? (initialData.tags as any).join(', ')
      : initialData?.tags || '',
    metaTitle: initialData?.metaTitle || '',
    metaDescription: initialData?.metaDescription || '',
    metaKeywords: initialData?.metaKeywords || '',
    published: initialData?.published ?? false,
    relatedPostIds: initialData?.relatedPostIds || [],
  });

  const [customCategory, setCustomCategory] = useState('');
  const [useCustomCategory, setUseCustomCategory] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [availableBlogs, setAvailableBlogs] = useState<{ id: string; title: string }[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch available published blogs for related post selection
  useEffect(() => {
    const fetchPublished = async () => {
      try {
        const res = await fetch('/api/blogs/published?limit=50');
        if (res.ok) {
          const data = await res.json();
          setAvailableBlogs(
            (data.blogs || []).filter((b: any) => b.id !== formData.id && b.slug !== formData.slug)
          );
        }
      } catch {
        // ignore
      }
    };
    fetchPublished();
  }, [formData.id, formData.slug]);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setFormData((prev) => {
      const generatedSlug = isEdit
        ? prev.slug
        : val
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
      return {
        ...prev,
        title: val,
        slug: generatedSlug,
        metaTitle: prev.metaTitle || val.slice(0, 70),
      };
    });
  };

  const handleSlugChange = (val: string) => {
    const formatted = val
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');
    setFormData((prev) => ({ ...prev, slug: formatted }));
  };

  const handleSubmit = async (publishState?: boolean) => {
    setError('');
    setSuccess('');
    setLoading(true);

    const isPublish = publishState !== undefined ? publishState : formData.published;
    const categoryToUse = useCustomCategory ? customCategory : formData.category;

    // Validation
    if (!formData.title || formData.title.length < 5) {
      setError('Title must be at least 5 characters');
      setLoading(false);
      return;
    }
    if (!formData.slug) {
      setError('Slug is required');
      setLoading(false);
      return;
    }
    if (!formData.excerpt) {
      setError('Excerpt is required');
      setLoading(false);
      return;
    }
    if (!categoryToUse) {
      setError('Category is required');
      setLoading(false);
      return;
    }
    if (!formData.content || formData.content.length < 50) {
      setError('Content must be at least 50 characters');
      setLoading(false);
      return;
    }

    const payload = {
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      category: categoryToUse,
      tags: formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      metaTitle: formData.metaTitle || null,
      metaDescription: formData.metaDescription || null,
      metaKeywords: formData.metaKeywords || null,
      published: isPublish,
      relatedPostIds: formData.relatedPostIds,
    };

    try {
      const url = isEdit ? `/api/blogs/${formData.id}` : '/api/blogs';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save blog post');
      }

      setSuccess(
        isEdit
          ? 'Article updated successfully!'
          : isPublish
          ? 'Article published successfully!'
          : 'Draft saved successfully!'
      );

      setTimeout(() => {
        router.push('/admin/blogs');
      }, 800);
    } catch (err: any) {
      setError(err.message || 'An error occurred while saving.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!formData.id || !confirm('Are you sure you want to delete this article?')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${formData.id}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/admin/blogs');
      }
    } catch {
      setError('Failed to delete blog');
    } finally {
      setLoading(false);
    }
  };

  const toggleRelatedPost = (id: string) => {
    setFormData((prev) => {
      const exists = prev.relatedPostIds.includes(id);
      if (exists) {
        return { ...prev, relatedPostIds: prev.relatedPostIds.filter((item) => item !== id) };
      } else {
        if (prev.relatedPostIds.length >= 3) return prev;
        return { ...prev, relatedPostIds: [...prev.relatedPostIds, id] };
      }
    });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.push('/admin/blogs')}
            className="p-2 rounded hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-serif font-bold text-brand-navy">
              {isEdit ? 'Edit Article' : 'Create New Article'}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {isEdit ? `Editing ID: ${formData.id}` : 'Draft or publish executive thought leadership'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isEdit && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={loading}
              className="px-3.5 py-2 text-red-600 hover:bg-red-50 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors border border-red-200"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => handleSubmit(false)}
            disabled={loading}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded border border-slate-300 transition-all flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={loading}
            className="px-5 py-2 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 border border-brand-gold/40"
          >
            <Send className="w-3.5 h-3.5 text-brand-gold" />
            <span>Publish Now</span>
          </button>
        </div>
      </div>

      {/* Error & Success Messages */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-xs font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3 text-emerald-700 text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Main Form Fields */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        {/* 1. Article Title */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
            Article Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="e.g., The CIO Governance Blueprint for Enterprise ERP Alignment"
            className="w-full h-11 px-4 text-sm bg-slate-50 border border-slate-300 rounded font-serif font-semibold text-brand-navy focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
          />
        </div>

        {/* 2. URL Slug */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
            URL Slug <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <span className="h-9 px-3 bg-slate-100 border border-r-0 border-slate-300 text-slate-500 text-xs font-mono rounded-l flex items-center">
              /blogs/
            </span>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="cio-governance-blueprint-enterprise-erp-alignment"
              className="w-full h-9 px-3 text-xs bg-slate-50 border border-slate-300 rounded-r font-mono text-slate-700 focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
            />
          </div>
        </div>

        {/* 3. Category & Tags Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
              Category <span className="text-red-500">*</span>
            </label>
            {!useCustomCategory ? (
              <div className="space-y-2">
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-300 rounded text-brand-navy font-semibold focus:bg-white focus:border-brand-gold"
                >
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setUseCustomCategory(true)}
                  className="text-[11px] text-brand-gold hover:underline font-semibold"
                >
                  + Add Custom Category
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  placeholder="Enter custom category"
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-300 rounded text-brand-navy focus:bg-white focus:border-brand-gold"
                />
                <button
                  type="button"
                  onClick={() => setUseCustomCategory(false)}
                  className="text-[11px] text-slate-500 hover:underline font-semibold"
                >
                  ← Select from standard categories
                </button>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
              Tags (Comma Separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="e.g. ERP Advisory, CIO Strategy, Risk Management"
              className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-300 rounded text-brand-navy focus:bg-white focus:border-brand-gold"
            />
          </div>
        </div>

        {/* 4. Excerpt Summary */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
            Executive Summary / Excerpt <span className="text-red-500">*</span>
            <span className="text-[10px] font-normal text-slate-400 normal-case ml-2">
              (Max 250 characters — displayed on cards and search summaries)
            </span>
          </label>
          <textarea
            required
            maxLength={250}
            rows={3}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Provide a concise 2-3 sentence executive summary of this article..."
            className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded text-brand-navy focus:bg-white focus:border-brand-gold font-sans leading-relaxed"
          />
          <div className="text-right text-[10px] text-slate-400">
            {formData.excerpt.length}/250 chars
          </div>
        </div>

        {/* 5. Rich Text Content Editor */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
            Article Content <span className="text-red-500">*</span>
          </label>
          <QuillEditor
            value={formData.content}
            onChange={(content) => setFormData((prev) => ({ ...prev, content }))}
          />
        </div>

        {/* 6. Collapsible SEO Metadata */}
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setSeoOpen(!seoOpen)}
            className="w-full px-4 py-3 bg-slate-50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-navy hover:bg-slate-100 transition-colors"
          >
            <span>SEO & Social Share Metadata (Optional)</span>
            {seoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {seoOpen && (
            <div className="p-4 space-y-4 bg-white border-t border-slate-200">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700">Meta Title</label>
                <input
                  type="text"
                  maxLength={70}
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  placeholder="Custom Meta Title for Search Engines"
                  className="w-full h-9 px-3 text-xs bg-slate-50 rounded border border-slate-300"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700">Meta Description</label>
                <textarea
                  rows={2}
                  maxLength={160}
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  placeholder="Custom Meta Description for Search Engine Snippets"
                  className="w-full p-2 text-xs bg-slate-50 rounded border border-slate-300"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700">Meta Keywords</label>
                <input
                  type="text"
                  value={formData.metaKeywords}
                  onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                  placeholder="CIO Advisory, ERP Implementation, Enterprise Risk"
                  className="w-full h-9 px-3 text-xs bg-slate-50 rounded border border-slate-300"
                />
              </div>
            </div>
          )}
        </div>

        {/* 7. Related Posts Selection */}
        {availableBlogs.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy">
              Related Articles (Select up to 3)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableBlogs.map((b) => {
                const selected = formData.relatedPostIds.includes(b.id);
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => toggleRelatedPost(b.id)}
                    className={`p-3 rounded text-left text-xs transition-all flex items-center justify-between border ${
                      selected
                        ? 'bg-brand-navy/5 border-brand-gold font-bold text-brand-navy'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate pr-2">{b.title}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 text-[10px] ${
                        selected ? 'bg-brand-gold border-brand-gold text-brand-navy' : 'border-slate-400'
                      }`}
                    >
                      {selected && '✓'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 8. Publishing Status & Action Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Publish Status:
            </span>
            <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="radio"
                name="status"
                checked={!formData.published}
                onChange={() => setFormData({ ...formData, published: false })}
                className="text-brand-navy focus:ring-brand-gold"
              />
              <span>Save as Draft</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="radio"
                name="status"
                checked={formData.published}
                onChange={() => setFormData({ ...formData, published: true })}
                className="text-brand-navy focus:ring-brand-gold"
              />
              <span>Published (Live)</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.push('/admin/blogs')}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleSubmit(false)}
              disabled={loading}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded border border-slate-300 transition-all flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Draft</span>
            </button>
            <button
              type="button"
              onClick={() => handleSubmit(true)}
              disabled={loading}
              className="px-5 py-2 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 border border-brand-gold/40"
            >
              <Send className="w-3.5 h-3.5 text-brand-gold" />
              <span>Publish Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
