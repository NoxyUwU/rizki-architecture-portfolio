import MotionSection from '@/components/ui/MotionSection';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <MotionSection className="px-6 py-20 md:px-12 md:py-24" delay={0.1}>
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-stone-200/15 bg-stone-900/30 p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">About Me</p>
          <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight text-stone-100 md:text-5xl">Architecture student exploring contextual spaces and visual storytelling.</h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-stone-300">
            I am Rizki Ferdiansyah, an architecture student at Sriwijaya University with interests in spatial design, technical drawing, 3D modelling, rendering, and model making.
          </p>
          <Link href="/about" className="mt-6 inline-flex rounded-full border border-stone-400/45 px-6 py-3 text-xs uppercase tracking-[0.14em] text-stone-100 transition hover:border-stone-100">
            About Me
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
