'use client';

import { useEffect, useMemo, useState } from 'react';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminLogin from '@/components/admin/AdminLogin';
import { getSupabaseBrowserClient } from '@/lib/supabase';

export default function AdminAuthGate() {
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false);
      return undefined;
    }

    let isMounted = true;

    async function loadSession() {
      const { data, error } = await supabase.auth.getSession();

      if (!isMounted) {
        return;
      }

      if (error) {
        setAuthError(error.message);
      }

      setSession(data.session);
      setIsLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setAuthError('');
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleLogout() {
    if (!supabase) {
      return;
    }

    setAuthError('');
    const { error } = await supabase.auth.signOut();

    if (error) {
      setAuthError(error.message);
    }
  }

  if (!supabase) {
    return (
      <main className="px-6 pb-20 pt-36 md:px-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-amber-300/30 bg-amber-500/10 px-6 py-5 text-sm text-amber-100">
          Supabase environment variables are missing. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` before using admin login.
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="px-6 pb-20 pt-36 md:px-12">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="h-3 w-24 rounded bg-stone-700" />
          <div className="mt-5 h-12 w-72 rounded bg-stone-700" />
          <div className="mt-8 h-48 rounded-2xl border border-stone-200/10 bg-stone-900/30" />
        </div>
      </main>
    );
  }

  if (!session) {
    return <AdminLogin supabase={supabase} authError={authError} onAuthError={setAuthError} />;
  }

  return <AdminDashboard supabase={supabase} user={session.user} authError={authError} onLogout={handleLogout} />;
}
