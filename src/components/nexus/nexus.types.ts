export type PillarId = 'build' | 'automate' | 'grow';

export interface PillarData {
  id: PillarId;
  index: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  metric: string;
  href: string;
  color: string;
  accentColor: string;
}

export interface NexusState {
  activePillar: PillarId | null;
  setActivePillar: (pillar: PillarId | null) => void;
  isReducedMotion: boolean;
}

export const PILLARS_CONFIG: Record<PillarId, PillarData> = {
  build: {
    id: 'build',
    index: '01',
    code: 'BUILD',
    name: 'BUILD',
    tagline: 'Websites & Mobile Apps',
    description: 'We build custom websites, mobile apps, and online stores that load quickly and work everywhere.',
    metric: '4 Services',
    href: '/services#build',
    color: '#123D32',
    accentColor: '#C83B35'
  },
  automate: {
    id: 'automate',
    index: '02',
    code: 'AUTOMATE',
    name: 'AUTOMATE',
    tagline: 'Connect Your Business Tools',
    description: 'We link your business software together so routine tasks and messaging happen on their own.',
    metric: '2 Services',
    href: '/services#automate',
    color: '#ECE8DF',
    accentColor: '#C83B35'
  },
  grow: {
    id: 'grow',
    index: '03',
    code: 'GROW',
    name: 'GROW',
    tagline: 'Design, Video & Online Ads',
    description: 'We create clean designs, visual clips, and targeted ads that make your business easy to understand.',
    metric: '5 Services',
    href: '/services#create-grow',
    color: '#123D32',
    accentColor: '#C83B35'
  }
};
