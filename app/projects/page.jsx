import ProjectGrid from '@/components/projects/ProjectGrid';
import { getProjects } from '@/lib/projects';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Projects',
  description: 'Architecture projects, visualizations, and spatial design works by Rizki Ferdiansyah.',
};

export default async function ProjectsPage() {
  const { data: projects, message } = await getProjects();

  return (
    <>
      {message ? (
        <section className="px-6 pt-32 md:px-12">
          <div className="mx-auto max-w-6xl rounded-2xl border border-amber-300/30 bg-amber-500/10 px-5 py-4 text-sm text-amber-100">
            {message}
          </div>
        </section>
      ) : null}
      <ProjectGrid projects={projects} />
    </>
  );
}
