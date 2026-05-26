import AdminAuthGate from '@/components/admin/AdminAuthGate';

export const metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminAuthGate />;
}
