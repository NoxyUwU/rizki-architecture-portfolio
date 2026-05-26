create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  year text,
  location text,
  description text,
  concept text,
  cover_image text,
  gallery_images text[] not null default '{}',
  software_used text[] not null default '{}',
  project_type text,
  created_at timestamp with time zone not null default timezone('utc', now()),
  updated_at timestamp with time zone not null default timezone('utc', now())
);

create or replace function public.set_updated_at()
returns trigger
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at
before update on public.projects
for each row
execute function public.set_updated_at();

alter table public.projects enable row level security;

drop policy if exists "Projects are viewable by everyone." on public.projects;
create policy "Projects are viewable by everyone."
on public.projects
for select
to anon, authenticated
using (true);

insert into public.projects (
  title,
  slug,
  category,
  year,
  location,
  description,
  concept,
  cover_image,
  gallery_images,
  software_used,
  project_type
)
values
  (
    'Terrace Light House',
    'terrace-light-house',
    'Residential',
    '2025',
    'Bandung, Indonesia',
    'A compact urban residence composed around layered terraces to maximize daylight and cross ventilation on a narrow site.',
    'The design arranges indoor and outdoor rooms in vertical sequence, creating transitions of light, shade, and privacy.',
    '/images/project-placeholder.svg',
    array['/images/project-placeholder.svg', '/images/project-placeholder.svg', '/images/project-placeholder.svg'],
    array['AutoCAD', 'SketchUp', 'Lumion'],
    'Built Proposal'
  ),
  (
    'Folded Courtyard Offices',
    'folded-courtyard-offices',
    'Commercial',
    '2024',
    'Jakarta, Indonesia',
    'A mid-rise workplace concept centered on a shaded courtyard to improve thermal comfort and collaborative circulation.',
    'A folded facade and recessed voids reduce heat gain while framing green communal terraces for workers.',
    '/images/project-placeholder.svg',
    array['/images/project-placeholder.svg', '/images/project-placeholder.svg', '/images/project-placeholder.svg'],
    array['Revit', 'Rhino', 'Enscape'],
    'Concept Design'
  ),
  (
    'Riverfront Cultural Hub',
    'riverfront-cultural-hub',
    'Urban Design',
    '2023',
    'Surabaya, Indonesia',
    'A public cultural complex integrating exhibition halls, performance space, and waterfront promenades.',
    'The masterplan uses terraced public platforms to connect city fabric to the river and activate all-day public use.',
    '/images/project-placeholder.svg',
    array['/images/project-placeholder.svg', '/images/project-placeholder.svg', '/images/project-placeholder.svg'],
    array['Rhino', 'Grasshopper', 'V-Ray'],
    'Competition Entry'
  )
on conflict (slug) do nothing;
