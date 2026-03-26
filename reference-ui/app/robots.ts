import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-data';

export default function robots(): MetadataRoute.Robots {
  // Only allow crawling of the public site. Previously disallowed paths (e.g. /dashboard, /agents, /case-studies)
  // have been removed from the runtime, so no explicit disallow rules are required here.
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
