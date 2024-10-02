import { farcasterHubContext } from 'frames.js/middleware';
import { createFrames } from 'frames.js/next';

import { NEXT_PUBLIC_URL, NODE_ENV } from '@/configs/env';

export type State = {
  fid: number;
  requesterUserData: {
    profileImage: string;
    displayName: string;
    username: string;
    bio: string;
  } | null;
};

export const frames = createFrames<State>({
  initialState: {
    fid: 0,
    requesterUserData: null
  },
  basePath: '/frames',
  baseUrl: NEXT_PUBLIC_URL,
  debug: NODE_ENV === 'development',
  middleware: [farcasterHubContext()]
});
