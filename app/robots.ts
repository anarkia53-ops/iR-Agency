import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/services', '/about', '/contact'],
      disallow: ['/dashboard', '/agents', '/case-studies'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
