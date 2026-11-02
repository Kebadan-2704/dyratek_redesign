export type PillarId = 'build' | 'automate' | 'create-grow';

export interface Service {
  id: string;
  slug: string;
  index: string; // e.g. "01", "02", ... "11"
  pillarIndex: string; // e.g. "01.1", "02.1"
  name: string;
  shortName: string;
  pillarId: PillarId;
  pillarName: string;
  tagline: string;
  description: string;
  strategicObjective: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  methodology: {
    step: string;
    title: string;
    detail: string;
  }[];
  techStack: string[];
  metricsOrOutcomes: string[];
  relatedServiceSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
}

export interface Pillar {
  id: PillarId;
  index: string; // "01", "02", "03"
  code: string; // "01 // BUILD", etc.
  name: string;
  tagline: string;
  description: string;
  services: Service[];
}

export interface ProjectDeliverable {
  label: string;
  specification: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  pillar: string;
  clientType: string;
  year: string;
  heroHeadline: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  technologies: string[];
  deliverables: ProjectDeliverable[];
  servicesInvolved: string[]; // service names
  isConcept: boolean; // always true per business integrity rules
  conceptDisclaimer: string;
}

export interface ProcessStage {
  step: string; // "01", "02", etc.
  name: string;
  phase: string;
  duration: string;
  description: string;
  focus: string;
  deliverables: string[];
  governance: string;
}

export interface FAQItem {
  id: string;
  category: 'Engagement & Scope' | 'Engineering & Architecture' | 'Delivery & Commercial' | 'Operations & Support';
  question: string;
  answer: string;
}

export interface NavPillarGroup {
  pillar: string;
  items: {
    label: string;
    href: string;
    index: string;
    tagline: string;
  }[];
}

