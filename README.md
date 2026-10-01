# Midnight Cinema

A small React + Vite cinema booking demo with a Three.js auditorium and optional Supabase persistence.

## Run locally

```sh
npm install
npm run dev
```

The app runs in demo mode until Supabase is configured. Copy `.env.example` to `.env.local` and set the project URL and publishable/anon key from your Supabase project's API settings.

## Connect Supabase

In the Supabase SQL Editor, run [`supabase/schema.sql`](supabase/schema.sql). It creates and seeds the `movies` table, creates the `bookings` table, and enables row-level security. Add your URL and public client key to `.env.local`, then restart the Vite server.

Never put a Supabase `service_role` secret in this browser app. The booking form currently stores the selected film, seat count, and showtime; customer identity, payment processing, inventory locking, and real seat selection are intentionally not implemented.

## Publish on GitHub

Create an empty repository in your GitHub account, install Git, then from this folder:

```sh
git init
git add .
git commit -m "Build Midnight Cinema booking app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Do not commit `.env.local`; it contains your project configuration.