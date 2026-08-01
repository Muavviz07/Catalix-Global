import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getAdminBlogs } from '@/lib/blogs-store';

function checkAuth(request: NextRequest) {
  const token =
    request.cookies.get('admin_token')?.value ||
    request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return false;
  return verifyToken(token) !== null;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const status = searchParams.get('status') || 'all';
  const search = searchParams.get('search') || '';

  const data = await getAdminBlogs(page, limit, status, search);
  return NextResponse.json(data, { status: 200 });
}
