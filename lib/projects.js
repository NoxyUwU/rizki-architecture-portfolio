import { dummyProjects } from '@/data/dummyProjects';
import { getSupabaseClient } from '@/lib/supabase';

const PROJECT_COLUMNS = [
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
].join(', ');

function normalizeProject(project) {
  return {
    title: project.title,
    slug: project.slug,
    category: project.category,
    year: String(project.year ?? ''),
    location: project.location,
    description: project.description,
    concept: project.concept,
    coverImage: project.cover_image,
    galleryImages: Array.isArray(project.gallery_images) ? project.gallery_images : [],
    softwareUsed: Array.isArray(project.software_used) ? project.software_used : [],
    projectType: project.project_type,
  };
}

export async function getProjects() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return {
      status: 'fallback',
      data: dummyProjects,
      message: 'Supabase environment variables are missing. Showing local dummy projects.',
    };
  }

  const { data, error } = await supabase.from('projects').select(PROJECT_COLUMNS).order('year', { ascending: false });

  if (error) {
    return {
      status: 'error',
      data: dummyProjects,
      message: `Could not fetch projects from Supabase. Showing fallback data. (${error.message})`,
    };
  }

  const normalized = Array.isArray(data) ? data.map(normalizeProject) : [];

  if (normalized.length === 0) {
    return {
      status: 'empty',
      data: [],
      message: 'No projects available yet in Supabase.',
    };
  }

  return {
    status: 'success',
    data: normalized,
    message: '',
  };
}

export async function getProjectBySlug(slug) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return dummyProjects.find((project) => project.slug === slug) || null;
  }

  const { data, error } = await supabase.from('projects').select(PROJECT_COLUMNS).eq('slug', slug).maybeSingle();

  if (error || !data) {
    return dummyProjects.find((project) => project.slug === slug) || null;
  }

  return normalizeProject(data);
}
