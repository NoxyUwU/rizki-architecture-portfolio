create or replace function public.is_project_admin()
returns boolean
set search_path = ''
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = 'theenderimg@gmail.com';
$$ language sql stable;

drop policy if exists "Authenticated admins can create projects." on public.projects;
create policy "Authenticated admins can create projects."
on public.projects
for insert
to authenticated
with check (public.is_project_admin());

drop policy if exists "Authenticated admins can update projects." on public.projects;
create policy "Authenticated admins can update projects."
on public.projects
for update
to authenticated
using (public.is_project_admin())
with check (public.is_project_admin());

drop policy if exists "Authenticated admins can delete projects." on public.projects;
create policy "Authenticated admins can delete projects."
on public.projects
for delete
to authenticated
using (public.is_project_admin());
