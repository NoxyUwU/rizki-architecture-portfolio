'use client';

import ProjectManager from '@/components/admin/ProjectManager';

export default function AdminDashboard({ supabase, user, authError, onLogout }) {
  return (
    <main className="px-6 pb-20 pt-36 md:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 border-b border-stone-200/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Admin Dashboard</p>
            <h1 className="mt-4 text-4xl font-light tracking-tight text-stone-100 md:text-6xl">Project Control</h1>
            <p className="mt-4 text-sm text-stone-400">Signed in as {user.email}</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="w-fit rounded-full border border-stone-200/20 px-5 py-3 text-sm text-stone-100 transition hover:border-stone-100/45 hover:bg-stone-900"
          >
            Logout
          </button>
        </div>

        {authError ? (
          <p className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{authError}</p>
        ) : null}

        <ProjectManager supabase={supabase} />
      </section>
    </main>
  );
}
