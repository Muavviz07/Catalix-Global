import { NextRequest, NextResponse } from 'next/server';
import { getRelatedBlogs } from '@/lib/blogs-store';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const identifier = params.slug;
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '3', 10);

  const blogs = await getRelatedBlogs(identifier, limit);
  return NextResponse.json({ blogs }, { status: 200 });
}
