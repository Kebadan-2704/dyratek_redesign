import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DYRATEK — Fast Websites, Apps & Business Automations',
    short_name: 'DYRATEK',
    description:
      'We build fast websites, mobile apps, and automated workflows that help your business save time and win more customers.',
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

