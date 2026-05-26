'use client';

import { useEffect, useState } from 'react';

const categories = ['Residential', 'Commercial', 'Interior', 'Urban Design', 'Competition', 'Academic Project', 'Visualization'];
const storageBucket = 'project-media';
const maxImageSize = 10 * 1024 * 1024;
const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function arrayToText(value) {
  return Array.isArray(value) ? value.join('\n') : '';
}

function textToArray(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getFileExtension(fileName) {
  const extension = fileName.split('.').pop();
  return extension ? extension.toLowerCase() : 'jpg';
}

function validateImage(file) {
  if (!allowedImageTypes.includes(file.type)) {
    return 'Only JPG, PNG, WEBP, and GIF images are allowed.';
  }

  if (file.size > maxImageSize) {
    return 'Images must be 10MB or smaller.';
  }

  return '';
}

export default function ProjectForm({ supabase, mode, project, isSaving, onSubmit }) {
  const [form, setForm] = useState({
    title: project.title || '',
    slug: project.slug || '',
    category: project.category || 'Residential',
    year: project.year || '',
    location: project.location || '',
    description: project.description || '',
    concept: project.concept || '',
    cover_image: project.cover_image || '/images/project-placeholder.svg',
    gallery_images: arrayToText(project.gallery_images),
    software_used: Array.isArray(project.software_used) ? project.software_used.join(', ') : '',
    project_type: project.project_type || '',
  });
  const [isSlugEdited, setIsSlugEdited] = useState(Boolean(project.slug));
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    if (!isSlugEdited) {
      setForm((current) => ({ ...current, slug: slugify(current.title) }));
    }
  }, [form.title, isSlugEdited]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      ...form,
      slug: form.slug || slugify(form.title),
      gallery_images: textToArray(form.gallery_images),
      software_used: textToArray(form.software_used),
    });
  }

  async function uploadImage(file, imageRole) {
    const validationError = validateImage(file);

    if (validationError) {
      throw new Error(validationError);
    }

    const slug = form.slug || slugify(form.title) || 'untitled-project';
    const filePath = `${slug}/${imageRole}-${Date.now()}-${Math.random().toString(36).slice(2)}.${getFileExtension(file.name)}`;
    const { error } = await supabase.storage.from(storageBucket).upload(filePath, file, {
      cacheControl: '31536000',
      upsert: false,
    });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage.from(storageBucket).getPublicUrl(filePath);
    return data.publicUrl;
  }

  async function handleCoverUpload(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setIsUploadingCover(true);
    setUploadError('');

    try {
      const publicUrl = await uploadImage(file, 'cover');
      updateField('cover_image', publicUrl);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploadingCover(false);
      event.target.value = '';
    }
  }

  async function handleGalleryUpload(event) {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
      return;
    }

    setIsUploadingGallery(true);
    setUploadError('');

    try {
      const uploadedUrls = [];

      for (const file of files) {
        uploadedUrls.push(await uploadImage(file, 'gallery'));
      }

      const currentImages = textToArray(form.gallery_images);
      updateField('gallery_images', [...currentImages, ...uploadedUrls].join('\n'));

      if (!form.cover_image || form.cover_image === '/images/project-placeholder.svg') {
        updateField('cover_image', uploadedUrls[0]);
      }
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploadingGallery(false);
      event.target.value = '';
    }
  }

  function removeGalleryImage(imageUrl) {
    const nextImages = textToArray(form.gallery_images).filter((url) => url !== imageUrl);
    updateField('gallery_images', nextImages.join('\n'));
  }

  const galleryImages = textToArray(form.gallery_images);

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-6">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{mode === 'edit' ? 'Edit Project' : 'Add Project'}</p>
        <h2 className="mt-2 text-3xl font-light text-stone-100">{mode === 'edit' ? form.title || 'Untitled project' : 'New portfolio project'}</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Title" id="project-title">
          <input id="project-title" value={form.title} onChange={(event) => updateField('title', event.target.value)} required className="admin-input" />
        </Field>

        <Field label="Slug" id="project-slug">
          <input
            id="project-slug"
            value={form.slug}
            onChange={(event) => {
              setIsSlugEdited(true);
              updateField('slug', slugify(event.target.value));
            }}
            required
            className="admin-input"
          />
        </Field>

        <Field label="Category" id="project-category">
          <select id="project-category" value={form.category} onChange={(event) => updateField('category', event.target.value)} className="admin-input">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Year" id="project-year">
          <input id="project-year" value={form.year} onChange={(event) => updateField('year', event.target.value)} className="admin-input" />
        </Field>

        <Field label="Location" id="project-location">
          <input id="project-location" value={form.location} onChange={(event) => updateField('location', event.target.value)} className="admin-input" />
        </Field>

        <Field label="Project Type" id="project-type">
          <input id="project-type" value={form.project_type} onChange={(event) => updateField('project_type', event.target.value)} className="admin-input" />
        </Field>
      </div>

      <div className="mt-5 grid gap-5">
        <Field label="Description" id="project-description">
          <textarea id="project-description" value={form.description} onChange={(event) => updateField('description', event.target.value)} rows={4} className="admin-input resize-y" />
        </Field>

        <Field label="Concept" id="project-concept">
          <textarea id="project-concept" value={form.concept} onChange={(event) => updateField('concept', event.target.value)} rows={4} className="admin-input resize-y" />
        </Field>

        <Field label="Software Used" id="project-software" hint="Separate items with commas.">
          <input id="project-software" value={form.software_used} onChange={(event) => updateField('software_used', event.target.value)} className="admin-input" />
        </Field>

        <Field label="Cover Image" id="project-cover" hint="Used as the hero image, project card image, and featured preview.">
          <input id="project-cover" value={form.cover_image} onChange={(event) => updateField('cover_image', event.target.value)} className="admin-input" placeholder="Upload an image or paste a public URL" />
          <div className="mt-4 overflow-hidden rounded-xl border border-stone-200/15 bg-stone-950/70">
            {form.cover_image ? <img src={form.cover_image} alt="Selected project cover preview" className="h-56 w-full object-cover" /> : <div className="flex h-56 items-center justify-center text-sm text-stone-500">No cover selected.</div>}
          </div>
          <div className="mt-4">
            <input id="project-cover-upload" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleCoverUpload} className="block w-full text-sm text-stone-300 file:mr-4 file:rounded-full file:border-0 file:bg-stone-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-stone-950 hover:file:bg-white" />
            {isUploadingCover ? <p className="mt-2 text-xs text-stone-400">Uploading cover...</p> : null}
          </div>
        </Field>

        <Field label="Project Gallery" id="project-gallery" hint="Upload all project images here. Pick one as the cover when it should lead the project.">
          <input id="project-gallery-upload" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={handleGalleryUpload} className="block w-full text-sm text-stone-300 file:mr-4 file:rounded-full file:border-0 file:bg-stone-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-stone-950 hover:file:bg-white" />
          {isUploadingGallery ? <p className="mt-2 text-xs text-stone-400">Uploading gallery images...</p> : null}
          {uploadError ? <p className="mt-3 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{uploadError}</p> : null}

          {galleryImages.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {galleryImages.map((imageUrl) => (
                <div key={imageUrl} className="overflow-hidden rounded-xl border border-stone-200/15 bg-stone-950/70">
                  <img src={imageUrl} alt="Project gallery preview" className="h-40 w-full object-cover" />
                  <div className="flex flex-wrap gap-2 p-3">
                    <button type="button" onClick={() => updateField('cover_image', imageUrl)} className="rounded-full border border-stone-200/20 px-3 py-2 text-xs text-stone-100 transition hover:border-stone-100/45">
                      Set as Cover
                    </button>
                    <button type="button" onClick={() => removeGalleryImage(imageUrl)} className="rounded-full border border-red-300/25 px-3 py-2 text-xs text-red-100 transition hover:border-red-100/45">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <textarea id="project-gallery" value={form.gallery_images} onChange={(event) => updateField('gallery_images', event.target.value)} rows={4} className="admin-input resize-y" aria-label="Gallery image URLs" />
        </Field>
      </div>

      <div className="mt-8 flex justify-end">
        <button type="submit" disabled={isSaving} className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">
          {isSaving ? 'Saving...' : mode === 'edit' ? 'Save Changes' : 'Create Project'}
        </button>
      </div>
    </form>
  );
}

function Field({ label, id, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.16em] text-stone-400">
        {label}
      </label>
      <div className="mt-3">{children}</div>
      {hint ? <p className="mt-2 text-xs leading-relaxed text-stone-500">{hint}</p> : null}
    </div>
  );
}
