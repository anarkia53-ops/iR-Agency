import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iR Agency',
    short_name: 'iR Agency',
    description: 'Executive Digital Growth Partner',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111f',
    theme_color: '#0A1128',
  };
}
