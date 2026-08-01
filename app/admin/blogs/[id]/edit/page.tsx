'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id as string;

  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/admin?limit=100`);
        if (res.ok) {
          const data = await res.json();
          const found = (data.blogs || []).find((b: any) => b.id === id || b.slug === id);
          if (found) {
            setBlogData(found);
          } else {
            setError('Article not found');
          }
        }
      } catch {
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-sm text-center text-slate-500 font-medium">
        Loading article details...
      </div>
    );
  }

  if (error || !blogData) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-sm text-center text-red-600 font-semibold space-y-2">
        <p>{error || 'Article not found.'}</p>
        <a href="/admin/blogs" className="text-xs text-brand-gold hover:underline block font-bold">
          ← Back to Blogs List
        </a>
      </div>
    );
  }

  return <BlogForm initialData={blogData} isEdit={true} />;
}
