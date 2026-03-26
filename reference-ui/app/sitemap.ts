import type { MetadataRoute } from 'next';
import { services, siteUrl } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = ['', '/services', '/about', '/contact'];

  return [
    ...publicRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, lastModified: new Date() })),
  ];
}
