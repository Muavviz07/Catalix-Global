import { NextRequest, NextResponse } from 'next/server';
import { getPublishedBlogs } from '@/lib/blogs-store';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '9', 10);

  const data = await getPublishedBlogs(page, limit);
  return NextResponse.json(data, { status: 200 });
}
