import { NextRequest } from 'next/server';

import { createMiddlewareClient } from '@/packages/server/supabase';

export async function withSupabaseMiddleware(req: NextRequest) {
  const { supabase, response } = createMiddlewareClient(req);
  req.supabase = supabase;
  return response;
}
