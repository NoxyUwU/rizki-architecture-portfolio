import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectGrid({ projects }) {
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <section className="px-6 pb-20 pt-32 md:px-12 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Projects</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-stone-100 md:text-6xl">Architecture Works</h1>
          <p className="mt-5 text-sm leading-relaxed text-stone-400">
            Selected academic, competition, residential, and visualization works presented through concise project narratives.
          </p>
        </div>
        {hasProjects ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200/15 bg-stone-900/30 px-6 py-10 text-center text-stone-300">
            No projects are published yet. Please add your first project in Supabase.
          </div>
        )}
      </div>
    </section>
  );
}
