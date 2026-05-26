'use client';

import { useEffect, useMemo, useState } from 'react';
import ProjectForm from '@/components/admin/ProjectForm';

const PROJECT_COLUMNS = [
  'id',
  'title',
  'slug',
  'category',
  'year',
  'location',
  'description',
  'concept',
  'cover_image',
  'gallery_images',
  'software_used',
  'project_type',
  'created_at',
  'updated_at',
].join(', ');

const emptyProject = {
  title: '',
  slug: '',
  category: 'Residential',
  year: '',
  location: '',
  description: '',
  concept: '',
  cover_image: '/images/project-placeholder.svg',
  gallery_images: [],
  software_used: [],
  project_type: '',
};

export default function ProjectManager({ supabase }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mode, setMode] = useState('create');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const formProject = useMemo(() => selectedProject || emptyProject, [selectedProject]);

  async function loadProjects() {
    setIsLoading(true);
    setError('');

    const { data, error: loadError } = await supabase
      .from('projects')
      .select(PROJECT_COLUMNS)
      .order('year', { ascending: false })
      .order('created_at', { ascending: false });

    if (loadError) {
      setError(loadError.message);
      setProjects([]);
    } else {
      setProjects(data || []);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function handleCreateMode() {
    setMode('create');
    setSelectedProject(null);
    setError('');
    setMessage('');
  }

  function handleEdit(project) {
    setMode('edit');
    setSelectedProject(project);
    setError('');
    setMessage('');
  }

  async function handleSubmit(projectPayload) {
    setIsSaving(true);
    setError('');
    setMessage('');

    const payload = {
      title: projectPayload.title,
      slug: projectPayload.slug,
      category: projectPayload.category,
      year: projectPayload.year,
      location: projectPayload.location,
      description: projectPayload.description,
      concept: projectPayload.concept,
      cover_image: projectPayload.cover_image || '/images/project-placeholder.svg',
      gallery_images: projectPayload.gallery_images,
      software_used: projectPayload.software_used,
      project_type: projectPayload.project_type,
    };

    const response =
      mode === 'edit' && selectedProject?.id
        ? await supabase.from('projects').update(payload).eq('id', selectedProject.id).select(PROJECT_COLUMNS).single()
        : await supabase.from('projects').insert(payload).select(PROJECT_COLUMNS).single();

    if (response.error) {
      setError(response.error.message);
    } else {
      setMessage(mode === 'edit' ? 'Project updated.' : 'Project created.');
      setMode('edit');
      setSelectedProject(response.data);
      await loadProjects();
    }

    setIsSaving(false);
  }

  async function handleDelete(project) {
    const shouldDelete = window.confirm(`Delete "${project.title}"? This cannot be undone.`);

    if (!shouldDelete) {
      return;
    }

    setError('');
    setMessage('');

    const { error: deleteError } = await supabase.from('projects').delete().eq('id', project.id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setMessage('Project deleted.');

    if (selectedProject?.id === project.id) {
      handleCreateMode();
    }

    await loadProjects();
  }

  return (
    <div className="mt-10 grid gap-8 xl:grid-cols-[380px_1fr]">
      <aside className="xl:sticky xl:top-28 xl:self-start">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Projects</p>
            <h2 className="mt-2 text-2xl font-light text-stone-100">Manage Portfolio</h2>
          </div>
          <button
            type="button"
            onClick={handleCreateMode}
            className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-950 transition hover:bg-white"
          >
            Add Project
          </button>
        </div>

        {isLoading ? (
          <div className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-5 text-sm text-stone-400">Loading projects...</div>
        ) : projects.length > 0 ? (
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-4">
                <button type="button" onClick={() => handleEdit(project)} className="block w-full text-left">
                  <p className="text-xs uppercase tracking-[0.16em] text-stone-500">{project.category}</p>
                  <h3 className="mt-2 text-lg font-light text-stone-100">{project.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">
                    {project.location} {project.year ? `- ${project.year}` : ''}
                  </p>
                </button>
                <button type="button" onClick={() => handleDelete(project)} className="mt-4 text-sm text-red-200 transition hover:text-red-100">
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-5 text-sm text-stone-400">No projects yet.</div>
        )}
      </aside>

      <section>
        {message ? <p className="mb-5 rounded-xl border border-emerald-300/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">{message}</p> : null}
        {error ? <p className="mb-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p> : null}

        <ProjectForm key={selectedProject?.id || 'create'} supabase={supabase} mode={mode} project={formProject} isSaving={isSaving} onSubmit={handleSubmit} />
      </section>
    </div>
  );
}
