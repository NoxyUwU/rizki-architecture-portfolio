export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-stone-200/15 pt-8 text-xs uppercase tracking-[0.08em] text-stone-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Atelier Axis</p>
        <p>Architecture Studio Portfolio</p>
      </div>
    </footer>
  );
}
