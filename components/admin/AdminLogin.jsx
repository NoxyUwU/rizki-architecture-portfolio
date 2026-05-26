'use client';

import { useState } from 'react';

export default function AdminLogin({ supabase, authError, onAuthError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    onAuthError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      onAuthError(error.message);
    }

    setIsSubmitting(false);
  }

  return (
    <main className="px-6 pb-20 pt-36 md:px-12">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_420px] md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Admin</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-stone-100 md:text-6xl">Content Studio</h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone-300">
            Sign in to manage architecture projects, descriptions, and future image uploads.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-stone-200/15 bg-stone-900/35 p-6">
          <div>
            <label htmlFor="admin-email" className="text-xs uppercase tracking-[0.16em] text-stone-400">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              className="mt-3 w-full rounded-xl border border-stone-200/15 bg-stone-950/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-stone-300/45"
              placeholder="admin@example.com"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="admin-password" className="text-xs uppercase tracking-[0.16em] text-stone-400">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="mt-3 w-full rounded-xl border border-stone-200/15 bg-stone-950/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-stone-300/45"
              placeholder="Your password"
            />
          </div>

          {authError ? (
            <p className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{authError}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </section>
    </main>
  );
}
