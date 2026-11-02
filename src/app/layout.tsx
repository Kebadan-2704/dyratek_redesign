import type { Metadata, Viewport } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#123D32'
};

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dyratek.com'),
  title: {
    default: 'DYRATEK — Digital Experiences. Engineered to Perform.',
    template: '%s | DYRATEK'
  },
  description:
    'DYRATEK designs and engineers digital products, business automation systems, and creative growth solutions across 3 pillars and 11 focused services.',
  applicationName: 'DYRATEK',
  authors: [{ name: 'DYRATEK Product Team' }],
  keywords: [
    'Digital Product Engineering',
    'Web Development',
    'App Development',
    'E-commerce Solutions',
    'Business Automation',
    'UI/UX Design Systems',
    'Performance Marketing'
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
    title: 'DYRATEK — Digital Experiences. Engineered to Perform.',
    description:
      'Digital products, business automation systems, and creative growth solutions built with architectural precision.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYRATEK — Digital Experiences. Engineered to Perform.',
    description:
      'Digital products, business automation systems, and creative growth solutions built with architectural precision.'
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
      'Digital product foundry and engineering practice delivering high-performance platforms, business automation, and growth solutions.'
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
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
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
      <body className="min-h-screen flex flex-col bg-[#F4F1E9] text-[#2A2A2A]">
        {/* Skip to Main Content Link for Accessibility (WCAG 2.2 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#123D32] focus:text-[#F4F1E9] focus:font-mono focus:text-xs"
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
