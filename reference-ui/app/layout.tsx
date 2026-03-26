import './globals.css';
import { Footer, Header } from '@/components/site';
import type { Metadata } from 'next';
import { siteName, siteUrl } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Executive Digital Growth Partner`,
    template: `%s | ${siteName}`,
  },
  description:
    'IR Agency helps brands launch, position, and scale through integrated creative direction, performance-focused marketing, and controlled technical execution.',
  applicationName: siteName,
  keywords: [
    'executive digital growth partner',
    'creative and content agency',
    'marketing and growth services',
    'website design and development',
    'premium digital agency',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} | Executive Digital Growth Partner`,
    description:
      'Connected brand, growth, and technology services designed to create commercial clarity and measurable business outcomes.',
    type: 'website',
    url: siteUrl,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Executive Digital Growth Partner`,
    description:
      'Connected brand, growth, and technology services designed to create commercial clarity and measurable business outcomes.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="skipLink">
          Skip to content
        </a>
        <Header />
        <div className="pageShell">
          <main id="content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
