/** @see https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables */

/** Process ENV */
export const NODE_ENV = process.env.NODE_ENV || 'production';
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const SECRET_APP_KEY = process.env.SECRET_APP_KEY;

export const MONGO_URI = process.env.MONGO_URI || '';

export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

/** NEXT_PUBLIC ENV */

export const NEXT_PUBLIC_URL = NODE_ENV == 'development' ? 'http://localhost:3000' : 'http://localhost:3000';

/** Custom ENV */
export const IS_DEV = NODE_ENV !== 'production';
export const SITE_NAME = 'Fullstack Next.js Template';
