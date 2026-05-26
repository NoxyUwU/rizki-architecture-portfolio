'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const coverImage = project.coverImage || '/images/project-placeholder.svg';

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
      <Link href={`/projects/${project.slug}`} className="group block h-full rounded-2xl border border-stone-200/15 bg-stone-900/30 p-5 transition hover:border-stone-300/30 hover:bg-stone-900/45">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-900">
          <Image src={coverImage} alt={`${project.title} cover image`} fill className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-stone-400">{project.category}</p>
        <h3 className="mt-2 text-2xl font-light tracking-tight text-stone-100">{project.title}</h3>
        <p className="mt-2 text-sm text-stone-300">{[project.location, project.year].filter(Boolean).join(' · ')}</p>
      </Link>
    </motion.div>
  );
}
