# Rizki Ferdiansyah Architecture Portfolio

Modern architecture portfolio website built with Next.js App Router, Tailwind CSS, Framer Motion, and Supabase.

## Features

- Public portfolio homepage with project-cover hero slideshow
- Projects listing and project detail pages powered by Supabase
- Admin login with Supabase Auth
- Admin project create, edit, delete
- Supabase Storage image upload for project cover and gallery images
- About Me and Contact pages with privacy-safe public information
- Sitemap, robots, metadata, and Vercel-ready configuration

## Tech Stack

- Next.js App Router
- JavaScript
- Tailwind CSS
- Framer Motion
- Supabase Database, Auth, and Storage
- Vercel deployment target

## Local Setup

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_or_publishable_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev -- -p 3000
```

Open:

```txt
http://localhost:3000
```

## Supabase Setup

Required project pieces:

- `public.projects` table
- RLS enabled on `public.projects`
- Public read policy for project display
- Admin-only insert/update/delete policies
- `project-media` public storage bucket
- Storage policies for public read and admin-only upload/update/delete
- Supabase Auth user for admin login

The SQL migration files are stored in:

```txt
supabase/migrations
```

The current admin write policies are scoped to the configured admin email in the migration. Update that email before deploying for another owner.

## Vercel Deployment

Add these environment variables in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_or_publishable_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Build command:

```bash
npm run build
```

Output is handled by Next.js automatically.

## Domain Setup

After deploying to Vercel:

1. Add your domain in the Vercel project dashboard.
2. Update DNS records where you bought the domain.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final domain.
4. Redeploy after changing environment variables.

## Privacy Notes

The public Contact page intentionally avoids exposing private phone number and exact home address. Prefer email and public social links for portfolio contact.

## Scripts

```bash
npm run dev
npm run build
npm run start
```
