import { Service, Pillar } from '@/types';

export const SERVICES: Service[] = [
  // ==========================================
  // PILLAR BUILD (4 Services)
  // ==========================================
  {
    id: 'web-development',
    slug: 'web-development',
    index: '01',
    pillarIndex: '01.1',
    name: 'Web Development',
    shortName: 'Web Dev',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'Clean websites and web tools that load quickly.',
    description:
      'We design and build clean websites and web applications. Every page loads quickly and works across phones, tablets, and computers.',
    strategicObjective:
      'Give your business a dependable website that makes it easy for visitors to find what they need and reach out.',
    capabilities: [
      {
        title: 'Responsive Layouts',
        description: 'Pages that adjust smoothly to look clear on phones, tablets, and computers.'
      },
      {
        title: 'Clear Structure',
        description: 'Logical page hierarchy and easy-to-navigate layouts for your visitors.'
      },
      {
        title: 'Page Performance',
        description: 'Efficient page assets structured to load reliably across devices.'
      },
      {
        title: 'Form Connections',
        description: 'Contact forms that route visitor inquiries directly to your team.'
      }
    ],
    deliverables: [
      'Responsive layouts for mobile and desktop screens',
      'Navigation structure and page hierarchy',
      'Contact forms and inquiry routing',
      'Domain connection and hosting setup'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We learn about your business goals and page requirements.' },
      { step: '02', title: 'Plan', detail: 'We outline the page structure and project milestones.' },
      { step: '03', title: 'Design & Build', detail: 'We design your layouts and build your website pages.' },
      { step: '04', title: 'Review', detail: 'You test a working preview and share feedback.' },
      { step: '05', title: 'Launch', detail: 'We launch your site and walk you through how it operates.' }
    ],
    techStack: ['TypeScript', 'Node.js'],
    metricsOrOutcomes: [
      'Reliable page loading',
      'Clear layouts on all screens',
      'Tested forms and navigation'
    ],
    relatedServiceSlugs: ['app-development', 'ecommerce-solutions', 'ui-ux-design'],
    meta: {
      title: 'Web Development — Fast Websites & Web Apps | DYRATEK',
      description: 'We build clean, fast-loading websites and web applications that work smoothly on every screen.'
    }
  },
  {
    id: 'app-development',
    slug: 'app-development',
    index: '02',
    pillarIndex: '01.2',
    name: 'Mobile App Development',
    shortName: 'App Dev',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'Mobile apps for phones and tablets.',
    description:
      'We build mobile applications for iPhone and Android devices. Your users get a smooth, reliable experience designed for everyday use.',
    strategicObjective:
      'Give your customers a reliable mobile app that keeps them connected to your services.',
    capabilities: [
      {
        title: 'Apple and Android Ready',
        description: 'One application build that runs smoothly on both iPhone and Android devices.'
      },
      {
        title: 'Device Features',
        description: 'Connects to notifications, camera, and location when needed.'
      },
      {
        title: 'Store Preparation',
        description: 'Assistance preparing your app for store review and release.'
      },
      {
        title: 'Device Testing',
        description: 'Tested on physical phone hardware before release.'
      }
    ],
    deliverables: [
      'One application build that runs on both iOS and Android',
      'Device features such as camera, location, and push notifications',
      'App store preparation and submission files',
      'Testing on physical phone hardware'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We review user flows and required app features.' },
      { step: '02', title: 'Plan', detail: 'We define the technical plan and screen list.' },
      { step: '03', title: 'Design & Build', detail: 'We design the interface and build the application.' },
      { step: '04', title: 'Review', detail: 'You test the app on real devices and suggest adjustments.' },
      { step: '05', title: 'Launch', detail: 'We prepare store files and walk you through deployment.' }
    ],
    techStack: ['TypeScript', 'Node.js'],
    metricsOrOutcomes: [
      'Smooth performance on phones',
      'Store-ready submission files',
      'Tested on real devices'
    ],
    relatedServiceSlugs: ['web-development', 'ui-ux-design', 'digital-solutions'],
    meta: {
      title: 'Mobile App Development — iOS & Android Apps | DYRATEK',
      description: 'We build reliable mobile apps for iPhone and Android devices with clean navigation and smooth performance.'
    }
  },
  {
    id: 'ecommerce-solutions',
    slug: 'ecommerce-solutions',
    index: '03',
    pillarIndex: '01.3',
    name: 'Online Stores',
    shortName: 'Commerce',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'Online stores that make buying simple.',
    description:
      'We build online stores that make finding and purchasing products simple. Every store includes clear product organization and reliable checkout flows.',
    strategicObjective:
      'Help your business sell products online with a clear shopping catalog and straightforward checkout.',
    capabilities: [
      {
        title: 'Product Catalog',
        description: 'Fast product search and organized categories for easy browsing.'
      },
      {
        title: 'Shopping Cart',
        description: 'Clear cart drawer and step-by-step checkout.'
      },
      {
        title: 'Payment Integration',
        description: 'Connects to standard card processors and checkout methods.'
      },
      {
        title: 'Inventory Link',
        description: 'Connects your product stock counts to your online store.'
      }
    ],
    deliverables: [
      'Product catalog with search and filtering',
      'Shopping cart drawer and checkout flow',
      'Payment processor setup for cards and standard payment options',
      'Inventory link between product stock and your catalog'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We review your product catalog and payment requirements.' },
      { step: '02', title: 'Plan', detail: 'We map category filters, product options, and checkout steps.' },
      { step: '03', title: 'Design & Build', detail: 'We build the store layout, cart, and payment links.' },
      { step: '04', title: 'Review', detail: 'You test product purchases and review the store.' },
      { step: '05', title: 'Launch', detail: 'We launch the store and walk you through order management.' }
    ],
    techStack: ['TypeScript', 'Node.js'],
    metricsOrOutcomes: [
      'Clear shopping experience',
      'Direct payment connections',
      'Inventory tracking link'
    ],
    relatedServiceSlugs: ['web-development', 'ui-ux-design', 'business-automation'],
    meta: {
      title: 'Online Stores — E-Commerce Development | DYRATEK',
      description: 'We build online stores with fast browsing, organized product catalogs, and straightforward checkout.'
    }
  },
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    index: '04',
    pillarIndex: '01.4',
    name: 'Custom Software',
    shortName: 'Software',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'Software built around your business needs.',
    description:
      'We build custom web software to manage your internal business operations. Your team gets tools designed around your specific workflow.',
    strategicObjective:
      'Replace manual spreadsheets with custom software tools built specifically for your staff.',
    capabilities: [
      {
        title: 'Customer Portals',
        description: 'Private dashboards where customers or partners can log in and view records.'
      },
      {
        title: 'User Roles',
        description: 'Separate logins and permissions for team members and managers.'
      },
      {
        title: 'Data Organization',
        description: 'Clean database structure that keeps your records organized.'
      },
      {
        title: 'Admin Tools',
        description: 'Management consoles to review activity and export data.'
      }
    ],
    deliverables: [
      'Customer portals and internal operational dashboards',
      'Role-based accounts with separate staff and manager access',
      'Database structure and data organization',
      'Admin guide explaining system operation'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We learn about your team workflow and daily operational tasks.' },
      { step: '02', title: 'Plan', detail: 'We map data records, access permissions, and screens.' },
      { step: '03', title: 'Design & Build', detail: 'We build the portal, databases, and admin controls.' },
      { step: '04', title: 'Review', detail: 'Your team tests the portal with real operational scenarios.' },
      { step: '05', title: 'Launch', detail: 'We deploy the software and walk your team through daily use.' }
    ],
    techStack: ['TypeScript', 'Node.js'],
    metricsOrOutcomes: [
      'Custom workflow management',
      'Organized data records',
      'Role-based team access'
    ],
    relatedServiceSlugs: ['web-development', 'business-automation', 'app-development'],
    meta: {
      title: 'Custom Software — Client Portals & Operations Tools | DYRATEK',
      description: 'We build custom web portals and software tools that match your specific business operations.'
    }
  },

  // ==========================================
  // PILLAR AUTOMATE (2 Services)
  // ==========================================
  {
    id: 'business-automation',
    slug: 'business-automation',
    index: '05',
    pillarIndex: '02.1',
    name: 'Business Automation',
    shortName: 'Automation',
    pillarId: 'automate',
    pillarName: 'Automate',
    tagline: 'Put routine tasks on autopilot.',
    description:
      'We connect your business software so routine tasks happen on their own. Passing data automatically between your apps saves time and prevents manual errors.',
    strategicObjective:
      'Save hours of manual data entry by routing inquiries and information between your apps automatically.',
    capabilities: [
      {
        title: 'Inquiry Routing',
        description: 'Sends website form inquiries directly to the right team member.'
      },
      {
        title: 'App Handoffs',
        description: 'Passes details between your customer list, spreadsheets, and chat apps.'
      },
      {
        title: 'Workflow Mapping',
        description: 'Clear visual diagram of how your business information moves.'
      },
      {
        title: 'Connection Alerts',
        description: 'Sends a notice if an app connection ever pauses.'
      }
    ],
    deliverables: [
      'Inquiry routing from website forms to your team',
      'Automated handoffs between your customer records and team apps',
      'Workflow map showing how data moves across services',
      'Connection alert setup if any connected app pauses'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We identify repetitive tasks and app connections you need.' },
      { step: '02', title: 'Plan', detail: 'We map the trigger events and data paths.' },
      { step: '03', title: 'Design & Build', detail: 'We set up the automated links and test data transfers.' },
      { step: '04', title: 'Review', detail: 'You run test submissions and confirm notifications.' },
      { step: '05', title: 'Launch', detail: 'We activate the automations and provide a workflow guide.' }
    ],
    techStack: ['Node.js', 'Cloud Functions'],
    metricsOrOutcomes: [
      'Automated routine tasks',
      'Connected business software',
      'Fast team alerts'
    ],
    relatedServiceSlugs: ['email-whatsapp-marketing', 'digital-solutions', 'web-development'],
    meta: {
      title: 'Business Automation — Connected Workflows & App Links | DYRATEK',
      description: 'We connect your everyday business software so routine inquiries and data updates happen automatically.'
    }
  },
  {
    id: 'email-whatsapp-marketing',
    slug: 'email-whatsapp-marketing',
    index: '06',
    pillarIndex: '02.2',
    name: 'Email & WhatsApp Messaging',
    shortName: 'Messaging',
    pillarId: 'automate',
    pillarName: 'Automate',
    tagline: 'Direct updates via messaging channels.',
    description:
      'We set up direct email and WhatsApp message flows to keep your customers informed. You can send order updates, confirmations, and announcements from one place.',
    strategicObjective:
      'Keep your customers informed with clear, timely messages delivered straight to their inboxes and chat.',
    capabilities: [
      {
        title: 'Message Templates',
        description: 'Pre-formatted templates for receipts, notifications, and updates.'
      },
      {
        title: 'Automated Replies',
        description: 'Sends confirmation messages as soon as a customer completes an action.'
      },
      {
        title: 'Contact Lists',
        description: 'Organizes customer contacts for easy and relevant communication.'
      },
      {
        title: 'Domain Setup',
        description: 'Configures email records so your messages reach inboxes reliably.'
      }
    ],
    deliverables: [
      'Message templates formatted for emails and WhatsApp',
      'Automated confirmation flows triggered by customer actions',
      'Audience contact list organization',
      'Domain records setup for reliable email delivery'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We review your customer messaging scenarios and channels.' },
      { step: '02', title: 'Plan', detail: 'We draft message templates and define sending triggers.' },
      { step: '03', title: 'Design & Build', detail: 'We configure the message flows and verify email records.' },
      { step: '04', title: 'Review', detail: 'You review test messages on real devices.' },
      { step: '05', title: 'Launch', detail: 'We turn on live messaging and walk you through sending updates.' }
    ],
    techStack: ['Node.js'],
    metricsOrOutcomes: [
      'Direct customer messaging',
      'Pre-approved message templates',
      'Organized contact lists'
    ],
    relatedServiceSlugs: ['business-automation', 'content-strategy-copywriting', 'ecommerce-solutions'],
    meta: {
      title: 'Email & WhatsApp Messaging — Customer Updates | DYRATEK',
      description: 'Set up clear email and WhatsApp messaging to send confirmations, order updates, and announcements.'
    }
  },

  // ==========================================
  // PILLAR GROW (5 Services)
  // ==========================================
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    index: '07',
    pillarIndex: '03.1',
    name: 'Website & App Design',
    shortName: 'UI/UX',
    pillarId: 'create-grow',
    pillarName: 'Grow',
    tagline: 'Clean design that visitors understand right away.',
    description:
      'We design clear, easy-to-use interfaces for websites and mobile applications. Every screen is organized so visitors can navigate naturally.',
    strategicObjective:
      'Create clean, modern screens that make your business easy to understand and pleasant to use.',
    capabilities: [
      {
        title: 'Page Wireframes',
        description: 'Visual blueprints of each screen to test layout and content.'
      },
      {
        title: 'Interactive Previews',
        description: 'Clickable design models that show how pages flow together.'
      },
      {
        title: 'Brand Style Guide',
        description: 'Coordinated colors, typography, and button styles for your brand.'
      },
      {
        title: 'Contrast & Readability',
        description: 'Careful text sizing and colors so every screen is easy to read.'
      }
    ],
    deliverables: [
      'Screen layouts and wireframes mapped to user tasks',
      'Clickable design preview to review before building',
      'Coordinated style guide for colors, fonts, and buttons',
      'Contrast and readability review for all viewports'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We learn about your brand, users, and page goals.' },
      { step: '02', title: 'Plan', detail: 'We map the user navigation and screen flow.' },
      { step: '03', title: 'Design & Build', detail: 'We create high-clarity layouts and interactive previews.' },
      { step: '04', title: 'Review', detail: 'You click through the preview and share revision notes.' },
      { step: '05', title: 'Launch', detail: 'We finalize design assets and provide developer guidelines.' }
    ],
    techStack: ['Figma'],
    metricsOrOutcomes: [
      'Clean visual layouts',
      'Clickable preview before coding',
      'Readable text and colors'
    ],
    relatedServiceSlugs: ['web-development', 'app-development', 'content-strategy-copywriting'],
    meta: {
      title: 'Website & App Design — UI/UX Interfaces | DYRATEK',
      description: 'We design simple, modern interfaces for websites and mobile apps with clean navigation and high readability.'
    }
  },
  {
    id: 'creative-video',
    slug: 'creative-video',
    index: '08',
    pillarIndex: '03.2',
    name: 'Video & Motion',
    shortName: 'Video',
    pillarId: 'create-grow',
    pillarName: 'Grow',
    tagline: 'Visuals that explain your product.',
    description:
      'We create short product walkthroughs, animations, and video clips for your business. Visuals help explain what your company offers in a few seconds.',
    strategicObjective:
      'Explain your products and services with engaging videos and clear motion graphics.',
    capabilities: [
      {
        title: 'Product Walkthroughs',
        description: 'Short videos showing how your product or service works.'
      },
      {
        title: 'Social Video Formats',
        description: 'Videos sized for website hero sections and mobile feeds.'
      },
      {
        title: 'Captions & Titles',
        description: 'Clear on-screen text for viewers watching without sound.'
      },
      {
        title: 'Storyboards',
        description: 'Step-by-step visual plans before video production begins.'
      }
    ],
    deliverables: [
      'Product walkthrough videos demonstrating how your service works',
      'Video formats sized for desktop websites and mobile feeds',
      'Captions and title graphics for social viewing',
      'Storyboards and script outlines'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We define the main message and audience for your video.' },
      { step: '02', title: 'Plan', detail: 'We create a storyboard and write the script outline.' },
      { step: '03', title: 'Design & Build', detail: 'We produce the video clips, animation, and titles.' },
      { step: '04', title: 'Review', detail: 'You watch the initial video cut and request adjustments.' },
      { step: '05', title: 'Launch', detail: 'We export final video files ready for your website and social feeds.' }
    ],
    techStack: ['Motion Graphics Tools'],
    metricsOrOutcomes: [
      'Clear visual storytelling',
      'Multiple video formats',
      'On-screen captions included'
    ],
    relatedServiceSlugs: ['ui-ux-design', 'online-advertising', 'content-strategy-copywriting'],
    meta: {
      title: 'Video & Motion — Product Walkthroughs & Clips | DYRATEK',
      description: 'We produce short product videos and motion graphics that explain your services in seconds.'
    }
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    index: '09',
    pillarIndex: '03.3',
    name: 'Search Engine Optimization (SEO)',
    shortName: 'SEO',
    pillarId: 'create-grow',
    pillarName: 'Grow',
    tagline: 'Help customers find your business on Google.',
    description:
      'Search engine optimization (SEO) helps your website show up higher when people search on Google. We improve your site structure, page speed, and keywords so searchers can find you.',
    strategicObjective:
      'Help your business show up when prospective customers search for the services you provide.',
    capabilities: [
      {
        title: 'Site Structure Review',
        description: 'Checks page headings, links, and speed so search engines can read your site.'
      },
      {
        title: 'Keyword Planning',
        description: 'Finds the exact terms potential customers type into Google.'
      },
      {
        title: 'Page Titles & Descriptions',
        description: 'Updates page meta tags to clearly describe what each page offers.'
      },
      {
        title: 'Search Index Review',
        description: 'Verifies that Google finds and indexes your important pages.'
      }
    ],
    deliverables: [
      'Website structure and page speed review for search engines',
      'Keyword plan based on the terms your customers search',
      'Page title and description updates across your key pages',
      'Overview of search performance and indexed pages'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We research your target audience and common search queries.' },
      { step: '02', title: 'Plan', detail: 'We build a list of target search phrases and page priorities.' },
      { step: '03', title: 'Design & Build', detail: 'We update page titles, descriptions, and site structure.' },
      { step: '04', title: 'Review', detail: 'We verify indexing and inspect pages in search tools.' },
      { step: '05', title: 'Launch', detail: 'We provide an overview of your updated search presence.' }
    ],
    techStack: ['Search Console'],
    metricsOrOutcomes: [
      'Clear search keywords',
      'Updated page titles',
      'Clean website structure'
    ],
    relatedServiceSlugs: ['performance-marketing', 'content-strategy-copywriting', 'web-development'],
    meta: {
      title: 'Search Engine Optimization (SEO) — Google Search Setup | DYRATEK',
      description: 'Search engine optimization (SEO) helps your website rank on Google. We optimize page titles, speed, and keywords.'
    }
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    index: '10',
    pillarIndex: '03.4',
    name: 'Online Advertising',
    shortName: 'Ads',
    pillarId: 'create-grow',
    pillarName: 'Grow',
    tagline: 'Targeted advertising campaigns that attract customers.',
    description:
      'We set up and manage targeted ad campaigns on search engines and social platforms. Every campaign is organized to bring qualified visitors to your site.',
    strategicObjective:
      'Direct interested prospective customers to your website through organized search and social ads.',
    capabilities: [
      {
        title: 'Ad Campaign Setup',
        description: 'Structures advertising accounts on search and social channels.'
      },
      {
        title: 'Audience Targeting',
        description: 'Sets locations, demographics, and interests to reach relevant visitors.'
      },
      {
        title: 'Ad Text Variations',
        description: 'Writes clear, direct ad headlines and descriptions.'
      },
      {
        title: 'Inquiry Tracking',
        description: 'Tracks which ads generate form submissions or calls.'
      }
    ],
    deliverables: [
      'Ad campaign setup across search and social channels',
      'Audience targeting based on location and interests',
      'Ad text and headline variations to test performance',
      'Conversion tracking to verify inquiry numbers'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We review your target customer and advertising budget.' },
      { step: '02', title: 'Plan', detail: 'We select advertising channels and audience criteria.' },
      { step: '03', title: 'Design & Build', detail: 'We write ad copy and configure account targeting.' },
      { step: '04', title: 'Review', detail: 'You review the proposed ads and settings before launch.' },
      { step: '05', title: 'Launch', detail: 'We activate the campaigns and verify inquiry tracking.' }
    ],
    techStack: ['Ad Platforms'],
    metricsOrOutcomes: [
      'Organized ad campaigns',
      'Specific audience targeting',
      'Inquiry tracking setup'
    ],
    relatedServiceSlugs: ['digital-marketing', 'content-strategy-copywriting', 'creative-video'],
    meta: {
      title: 'Online Advertising — Search & Social Ad Campaigns | DYRATEK',
      description: 'We set up and manage targeted search and social ad campaigns that bring qualified visitors to your business.'
    }
  },
  {
    id: 'content-strategy-copywriting',
    slug: 'content-strategy-copywriting',
    index: '11',
    pillarIndex: '03.5',
    name: 'Content Strategy & Copywriting',
    shortName: 'Copywriting',
    pillarId: 'create-grow',
    pillarName: 'Grow',
    tagline: 'Clear words that explain your business.',
    description:
      'We write clear, simple website copy that non-technical visitors understand right away. Plain words build trust and make your business easy to understand.',
    strategicObjective:
      'Explain your business in simple, everyday language so visitors quickly understand what you offer.',
    capabilities: [
      {
        title: 'Website Copy',
        description: 'Clear text for your homepage, service pages, and about section.'
      },
      {
        title: 'Product Descriptions',
        description: 'Short, plain-language explanations of your services.'
      },
      {
        title: 'Style Guidelines',
        description: 'Practical rules to help your team keep writing consistent.'
      },
      {
        title: 'Customer FAQs',
        description: 'Answers to common customer questions written in everyday words.'
      }
    ],
    deliverables: [
      'Website copy for your homepage, services, and about pages',
      'Clear headlines and short explanations for your products',
      'Tone and style guidelines to keep your team\'s writing consistent',
      'Question and answer text for customer support and FAQs'
    ],
    methodology: [
      { step: '01', title: 'Discover', detail: 'We learn about your customers and typical questions they ask.' },
      { step: '02', title: 'Plan', detail: 'We outline the page hierarchy and key points for each section.' },
      { step: '03', title: 'Design & Build', detail: 'We draft clear headlines and straightforward paragraph text.' },
      { step: '04', title: 'Review', detail: 'You review the draft text and suggest adjustments.' },
      { step: '05', title: 'Launch', detail: 'We format the finalized text directly for your website pages.' }
    ],
    techStack: ['Editorial Tools'],
    metricsOrOutcomes: [
      'Plain, simple language',
      'Clear page headlines',
      'Practical writing guide'
    ],
    relatedServiceSlugs: ['ui-ux-design', 'digital-marketing', 'creative-video'],
    meta: {
      title: 'Content Strategy & Copywriting — Clear Website Text | DYRATEK',
      description: 'We write simple, clear website text that explains what your company offers without technical jargon.'
    }
  }
];

// ==========================================
// APPROVED 3-PILLAR STRUCTURE (NO NUMBERS, NO //)
// ==========================================
export const PILLARS: Pillar[] = [
  {
    id: 'build',
    index: '01',
    code: 'BUILD',
    name: 'Build',
    tagline: 'Websites, mobile apps, and custom web tools.',
    description:
      'We build fast websites, mobile apps, and custom web tools that work smoothly on phones and computers.',
    services: SERVICES.filter((s) => s.pillarId === 'build')
  },
  {
    id: 'automate',
    index: '02',
    code: 'AUTOMATE',
    name: 'Automate',
    tagline: 'Connected tools and routine tasks on autopilot.',
    description:
      'We connect your everyday business software so routine tasks and inquiries happen on their own.',
    services: SERVICES.filter((s) => s.pillarId === 'automate')
  },
  {
    id: 'create-grow',
    index: '03',
    code: 'GROW',
    name: 'Grow',
    tagline: 'Clean design, plain writing, and targeted campaigns.',
    description:
      'Clean design, plain writing, and targeted advertising that make your brand easy to understand.',
    services: SERVICES.filter((s) => s.pillarId === 'create-grow')
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillarId: Pillar['id']): Service[] {
  return SERVICES.filter((s) => s.pillarId === pillarId);
}

export function getPillarById(pillarId: Pillar['id']): Pillar | undefined {
  return PILLARS.find((p) => p.id === pillarId);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
