
# Book-A-Yute | Premium Talent Roster

A curated talent roster platform represented by Push-A-Yute. Built with React, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, Framer Motion
- **Database/Auth**: Supabase (PostgreSQL + Auth)
- **Deployment**: Google Cloud Run (Docker)

## Environment Variables
Create a `.env` file with the following:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (Server-side only)
```

## Database Setup
Run the following SQL in your Supabase SQL Editor:

### 1. Migrations
```sql
-- Profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  role text check (role in ('admin', 'talent', 'booker')) default 'talent',
  full_name text,
  created_at timestamptz default now()
);

-- Talents table
create table talents (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  stage_name text not null,
  bio text,
  city text,
  country text,
  categories text[],
  status text default 'draft',
  visibility boolean default false,
  featured boolean default false,
  created_at timestamptz default now()
);

-- Enable RLS
alter table talents enable row level security;

-- Policies
create policy "Public can view approved talents" on talents
  for select using (status = 'approved' and visibility = true);
```

## Docker & Google Cloud Run Deployment

### 1. Build Docker Image
```bash
docker build -t gcr.io/[PROJECT-ID]/book-a-yute .
```

### 2. Push to Google Container Registry
```bash
docker push gcr.io/[PROJECT-ID]/book-a-yute
```

### 3. Deploy to Cloud Run
```bash
gcloud run deploy book-a-yute \
  --image gcr.io/[PROJECT-ID]/book-a-yute \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Development
```bash
# Install dependencies
npm install

# Run locally
npm run dev
```
