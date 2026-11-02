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
    code: '01 // BUILD',
    name: 'BUILD FOUNDRY',
    tagline: 'Digital Foundations & Software Architecture',
    description: 'Engineering digital foundations, websites, applications and commerce platforms.',
    metric: '4 Production Services',
    href: '/services#build',
    color: '#123D32',
    accentColor: '#C83B35'
  },
  automate: {
    id: 'automate',
    index: '02',
    code: '02 // AUTOMATE',
    name: 'AUTOMATION MATRIX',
    tagline: 'Workflow Connectivity & Efficiency',
    description: 'Connecting business operations through structured automation and marketing workflows.',
    metric: '2 Systems Practices',
    href: '/services#automate',
    color: '#ECE8DF',
    accentColor: '#C83B35'
  },
  grow: {
    id: 'grow',
    index: '03',
    code: '03 // CREATE & GROW',
    name: 'CREATE & GROW',
    tagline: 'Brand Architecture & Commercial Scalability',
    description: 'Building digital identities, creative experiences and measurable marketing growth.',
    metric: '5 Growth Disciplines',
    href: '/services#create-grow',
    color: '#123D32',
    accentColor: '#C83B35'
  }
};

