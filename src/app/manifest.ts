import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DYRATEK — Digital Experiences. Engineered to Perform.',
    short_name: 'DYRATEK',
    description:
      'Digital products, business automation systems, and creative growth solutions built with architectural precision.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1E9',
    theme_color: '#123D32',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
