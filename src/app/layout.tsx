import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#123D32'
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dyratek.com'),
  title: {
    default: 'DYRATEK — Fast Websites, Apps & Business Automations',
    template: '%s | DYRATEK'
  },
  description:
    'DYRATEK builds clean websites, mobile apps, and automated workflows that help your business work better.',
  applicationName: 'DYRATEK',
  authors: [{ name: 'DYRATEK Product Team' }],
  keywords: [
    'Web Development',
    'Mobile App Development',
    'E-commerce Stores',
    'Business Automation',
    'UI/UX Design',
    'Online Advertising'
  ],
  creator: 'DYRATEK',
  alternates: {
    canonical: './'
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dyratek.com',
    siteName: 'DYRATEK',
    title: 'DYRATEK — Fast Websites, Apps & Business Automations',
    description:
      'We design clean websites, mobile apps, and automated workflows that help your business work better.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYRATEK — Fast Websites, Apps & Business Automations',
    description:
      'We design clean websites, mobile apps, and automated workflows that help your business work better.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DYRATEK',
    url: 'https://dyratek.com',
    logo: 'https://dyratek.com/brand/dyratek-logo-transparent.png',
    description:
      'Digital studio building fast websites, mobile apps, and business workflow automations.'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DYRATEK',
    url: 'https://dyratek.com'
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} font-sans antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1E2221]">
        {/* Skip to Main Content Link for Accessibility (WCAG 2.2 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#123D32] focus:text-[#FBFBF9] focus:rounded-lg focus:text-sm font-medium shadow-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
