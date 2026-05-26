'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 md:px-0">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border px-6 py-4 backdrop-blur transition-all duration-300 md:px-8 ${
          isScrolled
            ? 'border-stone-100/25 bg-stone-950/70 shadow-[0_10px_30px_rgba(2,6,23,0.45)]'
            : 'border-stone-200/15 bg-stone-950/35'
        }`}
      >
        <Link href="/" className="max-w-[68vw] truncate text-sm uppercase tracking-[0.18em] text-stone-100" aria-label="Rizki Ferdiansyah personal architecture portfolio homepage">
          Rizki Ferdiansyah
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-stone-400/40 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-stone-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
        >
          Menu
        </button>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-[11px] uppercase tracking-[0.14em] text-stone-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-stone-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-2xl border border-stone-200/15 bg-stone-950/90 p-4 backdrop-blur md:hidden"
          >
            <ul className="grid gap-1 text-xs uppercase tracking-[0.14em] text-stone-200">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-lg px-3 py-2 transition hover:bg-stone-800/60" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
