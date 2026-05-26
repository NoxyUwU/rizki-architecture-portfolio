import Image from 'next/image';

export default function ProjectDetail({ project }) {
  const coverImage = project.coverImage || '/images/project-placeholder.svg';
  const galleryImages = project.galleryImages.filter((imageSrc) => imageSrc && imageSrc !== project.coverImage);
  const metaItems = [
    ['Location', project.location],
    ['Year', project.year],
    ['Type', project.projectType],
    ['Software', project.softwareUsed.join(', ')],
  ].filter(([, value]) => value);

  return (
    <section className="px-6 pb-20 pt-36 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{project.category}</p>
        <h1 className="mt-4 text-4xl font-light tracking-tight text-stone-100 md:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">{project.description}</p>

        {coverImage ? (
          <div className="relative mt-10 h-[72vh] min-h-80 overflow-hidden rounded-2xl border border-stone-200/15 bg-stone-900">
            <Image
              src={coverImage}
              alt={`${project.title} hero image`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        ) : null}

        {metaItems.length > 0 ? (
          <div className="mt-8 grid gap-4 text-sm text-stone-300 md:grid-cols-2">
            {metaItems.map(([label, value]) => (
              <p key={label}>
                <span className="text-stone-500">{label}:</span> {value}
              </p>
            ))}
          </div>
        ) : null}

        {project.concept ? (
          <div className="mt-10 rounded-2xl border border-stone-200/15 bg-stone-900/30 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-stone-400">Concept</p>
            <p className="mt-4 text-base leading-relaxed text-stone-300">{project.concept}</p>
          </div>
        ) : null}

        {galleryImages.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {galleryImages.map((imageSrc, index) => (
              <div key={`${project.slug}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200/15 bg-stone-900">
                <Image
                  src={imageSrc}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
