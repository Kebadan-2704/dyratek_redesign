import { FAQItem } from '@/types';

export const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Engagement & Scope',
    question: 'What types of engagements does DYRATEK undertake?',
    answer:
      'We engage with modern enterprises, growth-stage companies, and discerning brands across two primary models: end-to-end project sprints (custom web platforms, mobile apps, design systems, and automation pipelines) and ongoing dedicated engineering & growth retainers.'
  },
  {
    id: 'faq-02',
    category: 'Engagement & Scope',
    question: 'How does DYRATEK define the 11 services across the 3 pillars?',
    answer:
      'Our practice is strictly organized into 3 foundational pillars: BUILD (Web Development, App Development, E-commerce Solutions, Digital Solutions), AUTOMATE (Business Automation, Email & WhatsApp Marketing), and CREATE & GROW (UI/UX Design, Creative & Video, Digital Marketing, Performance Marketing, Content Strategy & Copywriting). Every project is staffed by cross-functional specialists across these domains.'
  },
  {
    id: 'faq-03',
    category: 'Engineering & Architecture',
    question: 'What tech stack does DYRATEK specialize in for web and mobile?',
    answer:
      'Our core production stack centers on modern, maintainable frameworks: Next.js (App Router), React, TypeScript, and Tailwind CSS on edge infrastructure for web applications; React Native and Expo for mobile applications; and PostgreSQL, Node.js, and serverless edge functions for APIs and data persistence.'
  },
  {
    id: 'faq-04',
    category: 'Engineering & Architecture',
    question: 'How do you ensure web performance and Core Web Vitals compliance?',
    answer:
      'We design for sub-second performance from the initial architecture. This includes Server Components to minimize client JavaScript, edge CDN caching for static and dynamic assets, responsive image generation with Next.js Image, zero-layout-shift typography loading, and continuous automated Lighthouse audits.'
  },
  {
    id: 'faq-05',
    category: 'Engineering & Architecture',
    question: 'Who owns the intellectual property and code produced during an engagement?',
    answer:
      'You retain 100% intellectual property ownership of all custom code, design tokens, Figma libraries, schemas, and assets created for your project. We do not charge licensing fees or lock clients into proprietary hosting environments.'
  },
  {
    id: 'faq-06',
    category: 'Delivery & Commercial',
    question: 'How are projects scoped and priced?',
    answer:
      'Projects begin with a structured Discovery & Architecture phase where requirements, system boundaries, and deliverables are precisely defined. We deliver transparent, milestone-based fixed proposals for scoped builds, and structured monthly retainer agreements for continuous engineering and growth initiatives.'
  },
  {
    id: 'faq-07',
    category: 'Delivery & Commercial',
    question: 'What is the standard delivery timeline for an enterprise web or digital solution?',
    answer:
      'Typical platform builds range from 6 to 12 weeks depending on integration complexity, data migration scope, and custom feature sets. High-velocity discovery sprints and MVP scaffolds are often delivered within the first 3 to 4 weeks.'
  },
  {
    id: 'faq-08',
    category: 'Delivery & Commercial',
    question: 'How do you manage client collaboration and progress reporting?',
    answer:
      'We maintain structured, transparent communication via dedicated Slack or Teams channels, weekly sprint demonstrations, and live staging environments with branch previews. Every milestone requires written client sign-off before advancing to the subsequent phase.'
  },
  {
    id: 'faq-09',
    category: 'Operations & Support',
    question: 'What post-launch support and warranty does DYRATEK provide?',
    answer:
      'All delivered platforms include a dedicated 30-day post-launch warranty covering bug remediation, configuration adjustments, and performance stabilization. Following warranty completion, clients can transition into monthly SLA-backed maintenance and optimization retainers.'
  },
  {
    id: 'faq-10',
    category: 'Operations & Support',
    question: 'How do you handle security, credentials, and data privacy?',
    answer:
      'We adhere to industry security standards: end-to-end secret management using encrypted environment vaults, role-based access control (RBAC), principle of least privilege for API tokens, and zero transmission of sensitive client credentials over unencrypted channels.'
  }
];

