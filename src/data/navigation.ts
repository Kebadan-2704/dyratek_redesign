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
    pillar: 'BUILD',
    items: [
      {
        label: 'Web Development',
        href: '/services/web-development',
        index: '01',
        tagline: 'Clean websites and web tools'
      },
      {
        label: 'Mobile App Development',
        href: '/services/app-development',
        index: '02',
        tagline: 'Apps for iPhone and Android'
      },
      {
        label: 'Online Stores',
        href: '/services/ecommerce-solutions',
        index: '03',
        tagline: 'Fast shopping catalogs and checkouts'
      },
      {
        label: 'Custom Software',
        href: '/services/digital-solutions',
        index: '04',
        tagline: 'Portals and operational tools'
      }
    ]
  },
  {
    pillar: 'AUTOMATE',
    items: [
      {
        label: 'Business Automation',
        href: '/services/business-automation',
        index: '05',
        tagline: 'Connect your business software'
      },
      {
        label: 'Email & WhatsApp Messaging',
        href: '/services/email-whatsapp-marketing',
        index: '06',
        tagline: 'Direct customer notifications'
      }
    ]
  },
  {
    pillar: 'GROW',
    items: [
      {
        label: 'Website & App Design',
        href: '/services/ui-ux-design',
        index: '07',
        tagline: 'Clear, modern screen layouts'
      },
      {
        label: 'Video & Motion',
        href: '/services/creative-video',
        index: '08',
        tagline: 'Short walkthroughs and visual clips'
      },
      {
        label: 'Search Engine Optimization (SEO)',
        href: '/services/digital-marketing',
        index: '09',
        tagline: 'Help customers find you on Google'
      },
      {
        label: 'Online Advertising',
        href: '/services/performance-marketing',
        index: '10',
        tagline: 'Targeted search and social campaigns'
      },
      {
        label: 'Content Strategy & Copywriting',
        href: '/services/content-strategy-copywriting',
        index: '11',
        tagline: 'Simple words that explain your business'
      }
    ]
  }
];

export const FOOTER_PILLARS = [
  {
    title: 'Build',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile App Development', href: '/services/app-development' },
      { label: 'Online Stores', href: '/services/ecommerce-solutions' },
      { label: 'Custom Software', href: '/services/digital-solutions' }
    ]
  },
  {
    title: 'Automate',
    links: [
      { label: 'Business Automation', href: '/services/business-automation' },
      { label: 'Email & WhatsApp Messaging', href: '/services/email-whatsapp-marketing' }
    ]
  },
  {
    title: 'Grow',
    links: [
      { label: 'Website & App Design', href: '/services/ui-ux-design' },
      { label: 'Video & Motion', href: '/services/creative-video' },
      { label: 'Search Engine Optimization (SEO)', href: '/services/digital-marketing' },
      { label: 'Online Advertising', href: '/services/performance-marketing' },
      { label: 'Content Strategy & Copywriting', href: '/services/content-strategy-copywriting' }
    ]
  }
];

export const FOOTER_COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];
