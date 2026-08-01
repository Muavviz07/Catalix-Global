'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
  publishedAt?: string | null;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Delete modal state
  const [deleteBlogId, setDeleteBlogId] = useState<string | null>(null);
  const [deleteBlogTitle, setDeleteBlogTitle] = useState('');
  const [deleting, setDeleting] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/blogs/admin?page=${page}&limit=10&status=${statusFilter}&search=${encodeURIComponent(
          search
        )}`
      );
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

  useEffect(() => {
    fetchBlogs();
  }, [page, statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchBlogs();
  };

  const confirmDelete = (id: string, title: string) => {
    setDeleteBlogId(id);
    setDeleteBlogTitle(title);
  };

  const handleDelete = async () => {
    if (!deleteBlogId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/blogs/${deleteBlogId}`, { method: 'DELETE' });
      if (res.ok) {
        setDeleteBlogId(null);
        fetchBlogs();
      }
    } catch {
      // ignore
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-serif font-bold text-brand-navy">Blog Content Management</h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Manage published enterprise articles, draft insights, and content schedules.
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg border border-brand-gold/30 shrink-0"
        >
          <Plus className="w-4 h-4 text-brand-gold" />
          <span>Create New Blog</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md w-full md:w-auto">
          {['all', 'published', 'draft'].map((st) => (
            <button
              key={st}
              onClick={() => {
                setStatusFilter(st);
                setPage(1);
              }}
              className={`flex-1 md:flex-none px-4 py-1.5 rounded text-xs font-bold capitalize transition-all ${
                statusFilter === st
                  ? 'bg-white text-brand-navy shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="w-full md:w-72 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles by title..."
            className="w-full h-9 pl-9 pr-4 bg-slate-50 text-slate-900 text-xs rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
        </form>
      </div>

      {/* Blog List Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-medium">
            Loading articles table...
          </div>
        ) : blogs.length === 0 ? (
          <div className="p-12 text-center text-slate-500 space-y-3">
            <p className="text-sm font-semibold">No articles found matching criteria.</p>
            <Link
              href="/admin/blogs/new"
              className="inline-block text-xs text-brand-gold hover:underline font-bold"
            >
              + Create your first article
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-navy-dark text-white text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold">Title</th>
                  <th className="py-3.5 px-4 font-bold">Category</th>
                  <th className="py-3.5 px-4 font-bold">Status</th>
                  <th className="py-3.5 px-4 font-bold">Date Created</th>
                  <th className="py-3.5 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {blogs.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-brand-navy max-w-xs truncate">
                      {b.title}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold/15 text-brand-navy border border-brand-gold/30 font-semibold text-[10px]">
                        {b.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {b.published ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded font-bold text-[10px]">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded font-bold text-[10px]">
                          <Clock className="w-3 h-3 text-amber-600" /> Draft
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium">
                      {new Date(b.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {b.published && (
                          <Link
                            href={`/blogs/${b.slug}`}
                            target="_blank"
                            className="p-1.5 text-slate-400 hover:text-brand-navy hover:bg-slate-100 rounded transition-colors"
                            title="View Public Article"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                        )}
                        <Link
                          href={`/admin/blogs/${b.id}/edit`}
                          className="p-1.5 text-slate-400 hover:text-brand-gold hover:bg-slate-100 rounded transition-colors"
                          title="Edit Article"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => confirmDelete(b.id, b.title)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
            <span>
              Showing page {page} of {totalPages} ({total} articles total)
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1.5 rounded bg-white border border-slate-300 disabled:opacity-40 hover:bg-slate-100 flex items-center gap-1 font-semibold"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </button>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1.5 rounded bg-white border border-slate-300 disabled:opacity-40 hover:bg-slate-100 flex items-center gap-1 font-semibold"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteBlogId && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <div className="flex items-center gap-3 text-red-600">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-navy">Delete Article</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to delete <strong className="text-brand-navy">"{deleteBlogTitle}"</strong>?
              This action is permanent and cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteBlogId(null)}
                disabled={deleting}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded shadow-xs"
              >
                {deleting ? 'Deleting...' : 'Delete Article'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
