import { createFrames } from 'frames.js/next';

import { NEXT_PUBLIC_URL, NODE_ENV } from '@/configs/env';

export const frames = createFrames({
  basePath: '/frames',
  baseUrl: NEXT_PUBLIC_URL,
  debug: NODE_ENV === 'development'
});
