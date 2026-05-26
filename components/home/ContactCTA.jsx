import Link from 'next/link';
import MotionSection from '@/components/ui/MotionSection';

export default function ContactCTA() {
  return (
    <MotionSection className="px-6 pb-24 pt-8 md:px-12" delay={0.15}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-stone-200/15 bg-stone-100 px-8 py-10 text-stone-900 md:flex-row md:items-end md:justify-between md:px-12 md:py-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight tracking-tight md:text-5xl">Let’s connect for architecture, visualization, or design collaboration.</h2>
        </div>
        <Link href="/contact" className="inline-flex rounded-full bg-stone-900 px-7 py-3 text-xs uppercase tracking-[0.14em] text-stone-100 transition hover:bg-stone-700">
          Send Inquiry
        </Link>
      </div>
    </MotionSection>
  );
}
