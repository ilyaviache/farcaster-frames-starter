import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/configs/env';
import { withSupabaseMiddleware } from '@/packages/server/middlewares/withSupabase';

export async function middleware(request: NextRequest) {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    return await withSupabaseMiddleware(request);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*'
};
