import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { createBlogInDb } from '@/lib/blogs-store';

function checkAuth(request: NextRequest) {
  const token =
    request.cookies.get('admin_token')?.value ||
    request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return false;
  return verifyToken(token) !== null;
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      tags = [],
      metaTitle,
      metaDescription,
      metaKeywords,
      published = false,
      relatedPostIds = [],
    } = body;

    // Validations
    if (!title || title.length < 5 || title.length > 200) {
      return NextResponse.json({ error: 'Title is required (5-200 chars)' }, { status: 400 });
    }
    if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: 'Slug is required and must contain lowercase letters, numbers, and hyphens only' },
        { status: 400 }
      );
    }
    if (!excerpt || excerpt.length > 250) {
      return NextResponse.json({ error: 'Excerpt is required (max 250 chars)' }, { status: 400 });
    }
    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }
    if (!content || content.length < 50) {
      return NextResponse.json({ error: 'Content is required (min 50 chars)' }, { status: 400 });
    }

    const created = await createBlogInDb({
      title,
      slug,
      excerpt,
      content,
      category,
      tags: Array.isArray(tags) ? tags : String(tags).split(',').map((t) => t.trim()).filter(Boolean),
      metaTitle,
      metaDescription,
      metaKeywords,
      published: Boolean(published),
      relatedPostIds: Array.isArray(relatedPostIds) ? relatedPostIds : [],
    });

    return NextResponse.json({ message: 'Blog created successfully', id: created.id, slug: created.slug, blog: created }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create blog' }, { status: 500 });
  }
}
