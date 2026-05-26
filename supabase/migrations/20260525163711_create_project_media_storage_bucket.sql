insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'project-media',
  'project-media',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Project media files are publicly viewable." on storage.objects;
create policy "Project media files are publicly viewable."
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'project-media');

drop policy if exists "Project admins can upload media." on storage.objects;
create policy "Project admins can upload media."
on storage.objects
for insert
to authenticated
with check (bucket_id = 'project-media' and public.is_project_admin());

drop policy if exists "Project admins can update media." on storage.objects;
create policy "Project admins can update media."
on storage.objects
for update
to authenticated
using (bucket_id = 'project-media' and public.is_project_admin())
with check (bucket_id = 'project-media' and public.is_project_admin());

drop policy if exists "Project admins can delete media." on storage.objects;
create policy "Project admins can delete media."
on storage.objects
for delete
to authenticated
using (bucket_id = 'project-media' and public.is_project_admin());
