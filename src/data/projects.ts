import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    slug: 'omnichannel-commerce-architecture',
    title: 'Online Store & Inventory Updates',
    category: 'Store & Inventory',
    pillar: 'BUILD',
    clientType: 'Demonstration Project',
    year: 'CONCEPT',
    heroHeadline: 'Clean online store with automatic inventory updates.',
    summary:
      'A sample online store that loads quickly, supports multiple currencies, and updates warehouse stock automatically.',
    challenge:
      'Older online stores can be slow to browse and show inaccurate inventory numbers across multiple storage locations.',
    solution:
      'We built a sample store with fast search, clear product cards, and automatic inventory updates.',
    architectureDetails: [
      'Product catalog with easy-to-use search and filters',
      'Shopping cart drawer that saves selected items',
      'Inventory updates between warehouses to reduce stock errors',
      'Clear design elements that work on phones and computers'
    ],
    technologies: ['Web Storefront', 'Payment Gateway', 'Inventory Sync', 'Cloud Cache'],
    deliverables: [
      { label: 'Fast Storefront', specification: 'Quick-loading catalog with filters' },
      { label: 'Shopping Cart', specification: 'Cart drawer that saves selected items' },
      { label: 'Inventory Link', specification: 'Link between inventory records and online stock' },
      { label: 'Reusable Layouts', specification: 'Product cards, buttons, and checkout blocks' }
    ],
    servicesInvolved: ['Web Development', 'Online Stores', 'Website & App Design'],
    isConcept: true,
    conceptDisclaimer: 'These are sample projects to show how we design and build. They are not work for real clients.'
  },
  {
    slug: 'automated-crm-workflow-engine',
    title: 'Automated Inquiry Follow-Up',
    category: 'Workflow Automation',
    pillar: 'AUTOMATE',
    clientType: 'Demonstration Project',
    year: 'CONCEPT',
    heroHeadline: 'Route customer inquiries and send confirmations automatically.',
    summary:
      'A connected system that takes new customer inquiries from web forms and messaging apps and routes them to your team.',
    challenge:
      'Businesses can lose inquiries when customer messages get scattered across email and chat without a central system.',
    solution:
      'We built an automated system that checks new messages, creates customer records, and notifies team members.',
    architectureDetails: [
      'Catches form submissions and filters out spam',
      'Sends confirmation messages to new inquiries',
      'Updates customer records and notifies the team',
      'Sends alerts if any app connection pauses'
    ],
    technologies: ['Automated Workflows', 'Messaging Service', 'Customer Records', 'Email Delivery'],
    deliverables: [
      { label: 'Flow Map', specification: 'Visual map showing how messages move to your team' },
      { label: 'Inquiry Links', specification: 'Cloud connections that send website inquiries to your customer list' },
      { label: 'Message Drafts', specification: 'Standard text templates for customer confirmations' },
      { label: 'Connection Alerts', specification: 'Notifications that alert your team if an app connection pauses' }
    ],
    servicesInvolved: ['Business Automation', 'Email & WhatsApp Messaging', 'Custom Software'],
    isConcept: true,
    conceptDisclaimer: 'These are sample projects to show how we design and build. They are not work for real clients.'
  },
  {
    slug: 'unified-brand-digital-design-system',
    title: 'Design Kit for Web & Mobile',
    category: 'Design System',
    pillar: 'GROW',
    clientType: 'Demonstration Project',
    year: 'CONCEPT',
    heroHeadline: 'Consistent colors, typography, and buttons across every screen.',
    summary:
      'A complete design system that links visual designs to website layouts, keeping pages consistent and easy to update.',
    challenge:
      'Growing companies often have inconsistent websites where buttons, colors, and fonts differ across pages.',
    solution:
      'We built a clean design kit with coordinated colors, typography, and spacing rules ready for website pages.',
    architectureDetails: [
      'High-contrast color palette that meets readability standards',
      'Design settings that keep layouts consistent across screens',
      'Pre-built buttons, dropdowns, and cards for pages',
      'Typography sizing that adjusts smoothly from mobile to desktop'
    ],
    technologies: ['Design System', 'Style Guides', 'Component Blocks', 'Design Tokens'],
    deliverables: [
      { label: 'Design Library', specification: 'Design files with ready-to-use buttons and screen layouts' },
      { label: 'Style Settings', specification: 'Color, font, and spacing settings for code' },
      { label: 'Ready-Made Blocks', specification: 'Pre-built website sections that can be added to pages' },
      { label: 'Contrast Review', specification: 'Checklist confirming readable text and clear contrast' }
    ],
    servicesInvolved: ['Website & App Design', 'Web Development', 'Content Strategy & Copywriting'],
    isConcept: true,
    conceptDisclaimer: 'These are sample projects to show how we design and build. They are not work for real clients.'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
