import Image from 'next/image';
import Link from 'next/link';

const education = [
  {
    period: '2023 - Now',
    title: 'Bachelor Degree in Architecture',
    institution: 'Sriwijaya University',
  },
  {
    period: '2020 - 2023',
    title: 'Science Major',
    institution: 'SMA Negeri 1 Indralaya',
  },
];

const skills = [
  'Architectural Design',
  'Technical Drawing',
  '3D Modelling',
  'Rendering',
  'Design Presentation',
  'Concept Development',
  'Spatial Analysis',
  'Model Making',
];

const software = ['AutoCAD', 'SketchUp', 'Photoshop', 'D5 Render', 'Lumion', 'V-Ray'];
const interests = ['Architecture', 'Model Making', 'Photography', 'Sketching'];

export const metadata = {
  title: 'About Me',
  description: 'About Rizki Ferdiansyah, an architecture student at Sriwijaya University.',
};

export default function AboutPage() {
  return (
    <section className="px-6 pb-20 pt-32 md:px-12 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-stone-200/15 bg-stone-900/30">
            <div className="relative aspect-[4/5] bg-stone-900">
              <Image
                src="/images/rizki-ferdiansyah-profile.png"
                alt="Portrait of Rizki Ferdiansyah"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Architecture Student</p>
              <h1 className="mt-4 text-4xl font-light uppercase tracking-[0.08em] text-stone-100">
                Rizki
                <span className="block text-stone-400">Ferdiansyah</span>
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-stone-300">
                Architecture student with a strong interest in spatial design and contextual architecture, focused on turning ideas into meaningful spaces that are functional, aesthetic, and responsive to the environment.
              </p>
            </div>
          </div>
        </aside>

        <div>
          <div className="border-b border-stone-200/10 pb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">About Me</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-light leading-tight tracking-tight text-stone-100 md:text-6xl">
              Designing spaces through context, clarity, and atmosphere.
            </h2>
            <div className="mt-8 grid gap-4 text-sm text-stone-300 sm:grid-cols-2">
              <p><span className="text-stone-500">Born:</span> 2004</p>
              <p><span className="text-stone-500">Nationality:</span> Indonesia</p>
              <p><span className="text-stone-500">Location:</span> South Sumatra, Indonesia</p>
              <p><span className="text-stone-500">Focus:</span> Architecture and spatial design</p>
            </div>
          </div>

          <ProfileSection title="Education">
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.period} className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-light text-stone-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-400">{item.institution}</p>
                </div>
              ))}
            </div>
          </ProfileSection>

          <ProfileSection title="Skills">
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <p key={skill} className="rounded-full border border-stone-200/15 px-4 py-3 text-sm text-stone-300">{skill}</p>
              ))}
            </div>
          </ProfileSection>

          <ProfileSection title="Experience">
            <div className="grid gap-5">
              <ExperienceItem year="2025" title="3D Drawing Album Team" detail="AVS 2025" />
              <ExperienceItem
                year="2024"
                title="Research Contributor"
                detail="Article: Characteristics of Users in Open Green Spaces in Tanjung Periang Village."
              />
            </div>
          </ProfileSection>

          <ProfileSection title="Software">
            <div className="flex flex-wrap gap-3">
              {software.map((item) => (
                <span key={item} className="rounded-full bg-stone-100 px-4 py-2 text-sm text-stone-950">{item}</span>
              ))}
            </div>
          </ProfileSection>

          <ProfileSection title="Interests">
            <div className="grid gap-3 sm:grid-cols-4">
              {interests.map((item) => (
                <p key={item} className="rounded-2xl border border-stone-200/15 bg-stone-900/30 px-4 py-5 text-center text-sm text-stone-300">{item}</p>
              ))}
            </div>
          </ProfileSection>

          <div className="mt-12 rounded-2xl border border-stone-200/15 bg-stone-100 p-6 text-stone-950 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Contact</p>
            <h2 className="mt-4 text-3xl font-light tracking-tight">Open to architecture, visualization, and collaborative design conversations.</h2>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs uppercase tracking-[0.14em] text-stone-100 transition hover:bg-stone-800">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileSection({ title, children }) {
  return (
    <section className="border-b border-stone-200/10 py-10">
      <p className="mb-6 text-xs uppercase tracking-[0.24em] text-stone-400">{title}</p>
      {children}
    </section>
  );
}

function ExperienceItem({ year, title, detail }) {
  return (
    <div className="rounded-2xl border border-stone-200/15 bg-stone-900/30 p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{year}</p>
      <h3 className="mt-3 text-2xl font-light text-stone-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-400">{detail}</p>
    </div>
  );
}
