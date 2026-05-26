import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const siteTitle = 'Rizki Ferdiansyah — Architecture Portfolio';
const siteDescription =
  'Architecture portfolio of Rizki Ferdiansyah, featuring spatial design, visualization, and contextual architecture projects.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Rizki Ferdiansyah',
  },
  description: siteDescription,
  keywords: [
    'Rizki Ferdiansyah',
    'architecture portfolio',
    'architecture student',
    'Sriwijaya University',
    'architectural design',
    '3D rendering',
    'spatial design',
  ],
  authors: [{ name: 'Rizki Ferdiansyah' }],
  creator: 'Rizki Ferdiansyah',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Rizki Ferdiansyah Architecture Portfolio',
    type: 'website',
    images: [
      {
        url: '/images/rizki-ferdiansyah-profile.png',
        width: 1200,
        height: 1200,
        alt: 'Rizki Ferdiansyah architecture portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/rizki-ferdiansyah-profile.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
