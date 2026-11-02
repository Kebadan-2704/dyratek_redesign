import { NavPillarGroup } from '@/types';

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

export const NAV_PILLARS: NavPillarGroup[] = [
  {
    pillar: '01 // BUILD',
    items: [
      {
        label: 'Web Development',
        href: '/services/web-development',
        index: '01',
        tagline: 'Websites, Web Apps, Scalable Frameworks'
      },
      {
        label: 'App Development',
        href: '/services/app-development',
        index: '02',
        tagline: 'iOS, Android & Cross-Platform'
      },
      {
        label: 'E-commerce Solutions',
        href: '/services/ecommerce-solutions',
        index: '03',
        tagline: 'Shopify Plus, Composable Commerce'
      },
      {
        label: 'Digital Solutions',
        href: '/services/digital-solutions',
        index: '04',
        tagline: 'Custom Software, Client Portals'
      }
    ]
  },
  {
    pillar: '02 // AUTOMATE',
    items: [
      {
        label: 'Business Automation',
        href: '/services/business-automation',
        index: '05',
        tagline: 'CRM Sync, Webhook Pipelines'
      },
      {
        label: 'Email & WhatsApp Marketing',
        href: '/services/email-whatsapp-marketing',
        index: '06',
        tagline: 'Lifecycle Messaging & Direct Funnels'
      }
    ]
  },
  {
    pillar: '03 // CREATE & GROW',
    items: [
      {
        label: 'UI/UX Design',
        href: '/services/ui-ux-design',
        index: '07',
        tagline: 'Design Systems, Interactive Prototypes'
      },
      {
        label: 'Creative & Video',
        href: '/services/creative-video',
        index: '08',
        tagline: 'Motion Graphics, Reels, Commercial Ads'
      },
      {
        label: 'Digital Marketing',
        href: '/services/digital-marketing',
        index: '09',
        tagline: 'Technical SEO, Brand Positioning'
      },
      {
        label: 'Performance Marketing',
        href: '/services/performance-marketing',
        index: '10',
        tagline: 'Paid Search, Meta Ads, Funnels'
      },
      {
        label: 'Content Strategy & Copywriting',
        href: '/services/content-strategy-copywriting',
        index: '11',
        tagline: 'Technical Copywriting, Messaging'
      }
    ]
  }
];

export const FOOTER_PILLARS = [
  {
    title: '01. Build',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'E-commerce Solutions', href: '/services/ecommerce-solutions' },
      { label: 'Digital Solutions', href: '/services/digital-solutions' }
    ]
  },
  {
    title: '02. Automate',
    links: [
      { label: 'Business Automation', href: '/services/business-automation' },
      { label: 'Email & WhatsApp Marketing', href: '/services/email-whatsapp-marketing' }
    ]
  },
  {
    title: '03. Create & Grow',
    links: [
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Creative & Video', href: '/services/creative-video' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Performance Marketing', href: '/services/performance-marketing' },
      { label: 'Content Strategy & Copywriting', href: '/services/content-strategy-copywriting' }
    ]
  }
];

export const FOOTER_COMPANY = [
  { label: 'About DYRATEK', href: '/about' },
  { label: 'Selected Work', href: '/work' },
  { label: 'Delivery Process', href: '/#process' },
  { label: 'Frequently Asked Questions', href: '/faq' },
  { label: 'Start a Project', href: '/contact' }
];

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

