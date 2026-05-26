export const dummyProjects = [
  {
    title: 'Terrace Light House',
    slug: 'terrace-light-house',
    category: 'Residential',
    year: '2025',
    location: 'Bandung, Indonesia',
    description:
      'A compact urban residence composed around layered terraces to maximize daylight and cross ventilation on a narrow site.',
    concept:
      'The design arranges indoor and outdoor rooms in vertical sequence, creating transitions of light, shade, and privacy.',
    coverImage: '/images/project-placeholder.svg',
    galleryImages: ['/images/project-placeholder.svg', '/images/project-placeholder.svg', '/images/project-placeholder.svg'],
    softwareUsed: ['AutoCAD', 'SketchUp', 'Lumion'],
    projectType: 'Built Proposal',
  },
  {
    title: 'Folded Courtyard Offices',
    slug: 'folded-courtyard-offices',
    category: 'Commercial',
    year: '2024',
    location: 'Jakarta, Indonesia',
    description:
      'A mid-rise workplace concept centered on a shaded courtyard to improve thermal comfort and collaborative circulation.',
    concept:
      'A folded facade and recessed voids reduce heat gain while framing green communal terraces for workers.',
    coverImage: '/images/project-placeholder.svg',
    galleryImages: ['/images/project-placeholder.svg', '/images/project-placeholder.svg', '/images/project-placeholder.svg'],
    softwareUsed: ['Revit', 'Rhino', 'Enscape'],
    projectType: 'Concept Design',
  },
  {
    title: 'Riverfront Cultural Hub',
    slug: 'riverfront-cultural-hub',
    category: 'Urban Design',
    year: '2023',
    location: 'Surabaya, Indonesia',
    description:
      'A public cultural complex integrating exhibition halls, performance space, and waterfront promenades.',
    concept:
      'The masterplan uses terraced public platforms to connect city fabric to the river and activate all-day public use.',
    coverImage: '/images/project-placeholder.svg',
    galleryImages: ['/images/project-placeholder.svg', '/images/project-placeholder.svg', '/images/project-placeholder.svg'],
    softwareUsed: ['Rhino', 'Grasshopper', 'V-Ray'],
    projectType: 'Competition Entry',
  },
];

export function getProjectBySlug(slug) {
  return dummyProjects.find((project) => project.slug === slug);
}
