import { SupabaseClient } from '@supabase/supabase-js';

declare module 'next/server' {
  interface NextRequest {
    supabase: SupabaseClient;
  }
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
