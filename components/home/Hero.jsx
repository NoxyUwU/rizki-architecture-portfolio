'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export default function Hero({ projects = [] }) {
  const heroProjects = useMemo(
    () => projects.filter((project) => project.coverImage).slice(0, 5),
    [projects],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = heroProjects[activeIndex];

  useEffect(() => {
    if (heroProjects.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroProjects.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [heroProjects.length]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-20">
      <div className="absolute inset-0 -z-20 bg-stone-950" />
      {activeProject ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.slug}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src={activeProject.coverImage}
              alt={`${activeProject.title} hero background`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(245,245,244,0.18),transparent_48%),radial-gradient(circle_at_75%_10%,rgba(120,113,108,0.25),transparent_42%),linear-gradient(180deg,#1c1917_0%,#0f172a_95%)]" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/90 via-stone-950/62 to-stone-950/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-stone-950/40" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <p className="mb-6 max-w-full text-xs uppercase tracking-[0.22em] text-stone-300 sm:tracking-[0.3em]">Rizki Ferdiansyah · Sriwijaya University</p>
          <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-tight text-stone-100 sm:text-5xl md:text-7xl">
            Spatial Narratives for Contemporary Living and Urban Context
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-300 md:text-lg">
            I present selected architecture projects that balance material clarity, environmental response, and human-centered experience.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/projects" aria-label="View architecture projects" className="rounded-full bg-stone-100 px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-stone-900 transition hover:bg-stone-200">
              View Projects
            </Link>
            <Link href="/contact" aria-label="Start a conversation with Rizki Ferdiansyah" className="rounded-full border border-stone-400/50 px-7 py-3 text-center text-xs uppercase tracking-[0.14em] text-stone-200 transition hover:border-stone-100 hover:text-stone-100">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="hidden rounded-3xl border border-stone-200/20 bg-stone-900/30 p-6 backdrop-blur lg:block"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{activeProject ? 'Featured Background' : 'Current Focus'}</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-200">
            {activeProject ? activeProject.title : 'Personal explorations in residential prototypes, boutique hospitality, and adaptive reuse concepts.'}
          </p>
          {activeProject ? (
            <div className="mt-5 flex gap-2">
              {heroProjects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  aria-label={`Show ${project.title} as hero background`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-stone-100' : 'w-3 bg-stone-100/35 hover:bg-stone-100/60'}`}
                />
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
