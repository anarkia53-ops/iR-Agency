import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/dashboard', '/agents', '/case-studies'] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
