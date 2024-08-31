## I'm a frame starter, twisted frame starter

Template for creating multi-function Farcaster frames on top of Next.js, Frames.js, Supabase and much more.

## Getting Started

Open [Supabase Dashboard](https://supabase.com/dashboard/project) to create new database or use existing one.
Create `.env` file and copy the keys

```bash
SUPABASE_URL=`
SUPABASE_ANON_KEY=
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Visit [http://localhost:3010](http://localhost:3010) to debug your frame.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

This `starter-template` is packed with:

- 🎉 Next.js 14 (with [App Directory](https://nextjs.org/docs/app)).
- 💾 Supabase on client and server
- 🔥 Modular app structure & full of customization
- ⚛️ React 18.
- ✨ TypeScript.
- 💨 Tailwind CSS 3 - Pre-setup with PostCSS Nesting and Import.
- 👀 SVGR - Pre-Configured import SVG directly transform to React Component with type definitions
- 📈 Path Alias - Import your module in `src` using `@/` prefix, and in `public` using `#/`.
- 📏 ESLint - Find and fix problems in your code.
- 🧩 Pre-built ***components*** to handle dynamic Lazyload, Image and SVG in `packages/components/base`.
- ⚡️ Pre-setup ***backend things*** in `packages/server/` folders.
- 🪄 Pre-built ***utilities*** to handle common things in backend and frontend.
