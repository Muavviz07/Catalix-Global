import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getBlogBySlug, getBlogById, updateBlogInDb, deleteBlogInDb } from '@/lib/blogs-store';

function checkAuth(request: NextRequest) {
  const token =
    request.cookies.get('admin_token')?.value ||
    request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return false;
  return verifyToken(token) !== null;
}

// GET /api/blogs/[slug] (Get single blog by slug or ID)
export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const identifier = params.slug;
  let blog = await getBlogBySlug(identifier);
  if (!blog) {
    blog = await getBlogById(identifier);
  }

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json({ blog }, { status: 200 });
}

// PUT /api/blogs/[slug] (Update blog by slug or ID)
export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const identifier = params.slug;
    const body = await request.json();

    let existing = await getBlogById(identifier);
    if (!existing) {
      existing = await getBlogBySlug(identifier);
    }

    if (!existing) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const updated = await updateBlogInDb(existing.id, body);
    return NextResponse.json({ message: 'Blog updated successfully', id: existing.id, blog: updated }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE /api/blogs/[slug] (Delete blog by slug or ID)
export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const identifier = params.slug;
    await deleteBlogInDb(identifier);
    return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete blog' }, { status: 500 });
  }
}
