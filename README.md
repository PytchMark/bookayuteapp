# BookaYute — Next.js 14 App Router SaaS

Premium talent booking platform rebuilt on Next.js 14 App Router with TailwindCSS and Supabase-ready utilities.

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and supply values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, used in API route)
- `NEXT_PUBLIC_SITE_URL`

## Supabase Migrations

```bash
supabase db reset
supabase db push
```

SQL migration files live in `supabase/migrations`. Seed data placeholder is `supabase/seed.sql`.

## Docker

Build and run locally:

```bash
docker build -t bookayuteapp .
docker run -p 8080:8080 --env-file .env.local bookayuteapp
```

## Cloud Run Deployment

```bash
gcloud run deploy bookayuteapp \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The container respects the `PORT` environment variable and runs `next start` in production.
