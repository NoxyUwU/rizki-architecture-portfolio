export default function LoadingProjectsPage() {
  return (
    <section className="px-6 pb-20 pt-36 md:px-12">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="mb-10">
          <div className="h-3 w-24 rounded bg-stone-700" />
          <div className="mt-4 h-12 w-72 rounded bg-stone-700" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-stone-200/10 bg-stone-900/30 p-5">
              <div className="h-56 rounded-xl bg-stone-800" />
              <div className="mt-5 h-3 w-24 rounded bg-stone-700" />
              <div className="mt-3 h-7 w-4/5 rounded bg-stone-700" />
              <div className="mt-3 h-4 w-2/3 rounded bg-stone-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
