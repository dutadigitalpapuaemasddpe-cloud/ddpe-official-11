-- Run once in Supabase SQL Editor for cross-device photo gallery sync.
create table if not exists public.media_albums (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  album_date date not null,
  description text not null,
  file_names jsonb not null default '[]'::jsonb,
  file_urls jsonb not null default '[]'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now()
);

grant select on public.media_albums to anon, authenticated;
grant insert, update, delete on public.media_albums to authenticated;

alter table public.media_albums enable row level security;

drop policy if exists "Public can read published media" on public.media_albums;
create policy "Public can read published media"
on public.media_albums for select
using (status = 'published');

drop policy if exists "Authenticated users can create media" on public.media_albums;
create policy "Authenticated users can create media"
on public.media_albums for insert to authenticated
with check (true);

drop policy if exists "Authenticated users can update media" on public.media_albums;
create policy "Authenticated users can update media"
on public.media_albums for update to authenticated
using (true) with check (true);

drop policy if exists "Authenticated users can delete media" on public.media_albums;
create policy "Authenticated users can delete media"
on public.media_albums for delete to authenticated
using (true);
