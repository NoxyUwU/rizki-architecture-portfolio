import MotionSection from '@/components/ui/MotionSection';
import FeaturedProjectCards from '@/components/home/FeaturedProjectCards';
import { getProjects } from '@/lib/projects';

export default async function FeaturedProjects() {
  const { data: projects } = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <MotionSection className="px-6 py-20 md:px-12 md:py-24" delay={0.05}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <h2 className="text-3xl font-light tracking-tight text-stone-100 md:text-5xl">Featured Projects</h2>
          <p className="max-w-md text-sm leading-relaxed text-stone-400">Selected works exploring minimalist material palettes, daylight strategy, and contextual massing.</p>
        </div>
        {featuredProjects.length > 0 ? (
          <FeaturedProjectCards projects={featuredProjects} />
        ) : (
          <div className="rounded-2xl border border-stone-200/15 bg-stone-900/30 px-6 py-10 text-center text-stone-300">
            No featured projects are published yet.
          </div>
        )}
      </div>
    </MotionSection>
  );
}
