import './globals.css';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components/site';
import { siteName, siteUrl } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteName} | Executive Digital Growth Partner`, template: `%s | ${siteName}` },
  description: 'Final deployable iR Agency web runtime for premium positioning, structured service presentation, and controlled project intake.',
  applicationName: siteName,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteName} | Executive Digital Growth Partner`,
    description: 'Connected brand, growth, and technology services designed to create executive clarity and measurable business outcomes.',
    type: 'website',
    url: siteUrl,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Executive Digital Growth Partner`,
    description: 'Connected brand, growth, and technology services designed to create executive clarity and measurable business outcomes.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="skipLink">Skip to content</a>
        <Header />
        <div className="pageShell"><main id="content">{children}</main></div>
        <Footer />
      </body>
    </html>
  );
}
