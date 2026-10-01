create table if not exists public.movies (
  id text primary key,
  title text not null,
  genre text not null,
  duration_minutes integer not null check (duration_minutes > 0),
  rating text not null default 'PG-13',
  image_url text,
  description text
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  movie_id text not null references public.movies(id),
  customer_name text not null default 'Guest',
  seats integer not null check (seats between 1 and 8),
  showtime text not null,
  created_at timestamptz not null default now()
);

alter table public.movies enable row level security;
alter table public.bookings enable row level security;

drop policy if exists "Anyone can view movies" on public.movies;
create policy "Anyone can view movies" on public.movies
  for select to anon, authenticated using (true);

drop policy if exists "Anyone can create bookings" on public.bookings;
create policy "Anyone can create bookings" on public.bookings
  for insert to anon, authenticated with check (true);

grant usage on schema public to anon, authenticated;
grant select on public.movies to anon, authenticated;
grant insert on public.bookings to anon, authenticated;

insert into public.movies (id, title, genre, duration_minutes, rating, image_url, description)
values
  ('last-light', 'The Last Light', 'SCI-FI · ADVENTURE', 128, 'PG-13', 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=85', 'When the stars go quiet, one signal changes everything.'),
  ('velvet-hour', 'A Velvet Hour', 'DRAMA · ROMANCE', 106, 'PG-13', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85', 'Two strangers. One city. A night that feels like forever.'),
  ('wild-country', 'Wild Country', 'THRILLER · MYSTERY', 114, 'R', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85', 'Some places keep their secrets. This one keeps its guests.')
on conflict (id) do nothing;