import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IR Agency',
    short_name: 'IR Agency',
    description: 'Executive digital growth partner for connected brand, growth, and technology services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111f',
    theme_color: '#070f1d',
    icons: [],
  };
}
