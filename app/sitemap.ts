import type { MetadataRoute } from 'next';
import { services, siteUrl } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/services', '/about', '/contact'].map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() }));
  const serviceRoutes = services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, lastModified: new Date() }));
  return [...staticRoutes, ...serviceRoutes];
}
