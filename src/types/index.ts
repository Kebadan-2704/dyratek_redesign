export type PillarId = 'build' | 'automate' | 'create-grow';

export interface Service {
  id: string;
  slug: string;
  index: string; // "01".."11" (internal ordering)
  name: string;
  shortName: string;
  pillarId: PillarId;
  pillarName: string;
  tagline: string;
  description: string;
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
  description: string;
  focus: string;
  deliverables: string[];
}

export interface FAQItem {
  id: string;
  category: 'Working With Us' | 'Technology & Code' | 'Timelines & Pricing' | 'Support & Security';
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

