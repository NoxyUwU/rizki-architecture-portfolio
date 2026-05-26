const contactItems = [
  {
    label: 'Email',
    value: 'rizkyferdiansyah3478@gmail.com',
    href: 'mailto:rizkyferdiansyah3478@gmail.com',
  },
  {
    label: 'Instagram',
    value: '@zferdiansyah_',
    href: 'https://www.instagram.com/zferdiansyah_',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rizki-ferdiansyah-b918423a9',
    href: 'https://linkedin.com/in/rizki-ferdiansyah-b918423a9',
  },
];

export const metadata = {
  title: 'Contact',
  description: 'Contact Rizki Ferdiansyah for architecture portfolio inquiries and collaborations.',
};

export default function ContactPage() {
  return (
    <section className="px-6 pb-20 pt-32 md:px-12 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Contact</p>
          <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight text-stone-100 md:text-6xl">
            Let’s talk about architecture, visualization, and spatial ideas.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300">
            For academic work, portfolio inquiries, visualization collaboration, or design conversations, you can reach me through email or public social platforms below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group rounded-2xl border border-stone-200/15 bg-stone-900/30 p-6 transition hover:border-stone-100/35 hover:bg-stone-900/45"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{item.label}</p>
                <p className="mt-3 break-words text-xl font-light text-stone-100 transition group-hover:text-white">{item.value}</p>
              </a>
            ))}
          </div>

          <aside className="rounded-2xl border border-stone-200/15 bg-stone-100 p-6 text-stone-950 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Location</p>
            <h2 className="mt-4 text-3xl font-light tracking-tight">South Sumatra, Indonesia</h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-600">
              Exact address and phone number are kept private for safety. Email and public social profiles are the preferred contact methods.
            </p>
            <a href="mailto:rizkyferdiansyah3478@gmail.com" className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs uppercase tracking-[0.14em] text-stone-100 transition hover:bg-stone-800">
              Send Email
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
