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

-- Optional article engagement tables. Existing article fields and queries remain unchanged.
create table if not exists public.article_likes (
  id uuid primary key default gen_random_uuid(),
  article_id text not null,
  device_id text not null default '',
  created_at timestamptz not null default now()
);

alter table public.article_likes add column if not exists device_id text not null default '';

create index if not exists article_likes_article_id_idx on public.article_likes (article_id);
grant select, insert on public.article_likes to anon, authenticated;
grant delete on public.article_likes to anon, authenticated;
alter table public.article_likes enable row level security;

drop policy if exists "Public can read article likes" on public.article_likes;
create policy "Public can read article likes"
on public.article_likes for select to anon, authenticated using (true);

drop policy if exists "Public can create article likes" on public.article_likes;
create policy "Public can create article likes"
on public.article_likes for insert to anon, authenticated with check (true);

drop policy if exists "Public can remove article likes" on public.article_likes;
create policy "Public can remove article likes"
on public.article_likes for delete to anon, authenticated using (true);

create table if not exists public.article_comments (
  id uuid primary key default gen_random_uuid(),
  article_id text not null,
  user_name text not null,
  comment_text text not null,
  created_at timestamptz not null default now()
);

create index if not exists article_comments_article_id_idx on public.article_comments (article_id, created_at desc);
grant select, insert on public.article_comments to anon, authenticated;
alter table public.article_comments enable row level security;

drop policy if exists "Public can read article comments" on public.article_comments;
create policy "Public can read article comments"
on public.article_comments for select to anon, authenticated using (true);

drop policy if exists "Public can create article comments" on public.article_comments;
create policy "Public can create article comments"
on public.article_comments for insert to anon, authenticated with check (char_length(user_name) between 2 and 80 and char_length(comment_text) between 1 and 2000);
