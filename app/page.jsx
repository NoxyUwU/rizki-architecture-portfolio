import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutPreview from '@/components/home/AboutPreview';
import ContactCTA from '@/components/home/ContactCTA';
import { getProjects } from '@/lib/projects';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const { data: projects } = await getProjects();

  return (
    <>
      <Hero projects={projects} />
      <FeaturedProjects />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
