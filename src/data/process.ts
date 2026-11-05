import { ProcessStage } from '@/types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Discover',
    description: 'We learn about your business goals and what you need built.',
    focus: 'Understand your project requirements and priorities.',
    deliverables: [
      'Summary of business goals',
      'Feature checklist',
      'Initial discussion notes'
    ]
  },
  {
    step: '02',
    name: 'Plan',
    description: 'We outline the project details, milestones, and timeline.',
    focus: 'Define pages, milestones, and project steps clearly.',
    deliverables: [
      'Project milestones outline',
      'Page and feature plan',
      'Timeline schedule'
    ]
  },
  {
    step: '03',
    name: 'Design & Build',
    description: 'We design your layouts and build responsive, working pages.',
    focus: 'Create layouts and build responsive, working pages.',
    deliverables: [
      'Visual screen layouts',
      'Responsive page layouts',
      'Connected forms and tools'
    ]
  },
  {
    step: '04',
    name: 'Review',
    description: 'You test a working preview and share feedback before launch.',
    focus: 'Review the preview on phones and computers to confirm details.',
    deliverables: [
      'Working private preview',
      'Feedback review notes',
      'Adjustments and refinements'
    ]
  },
  {
    step: '05',
    name: 'Launch',
    description: 'We launch your site and walk you through how it works.',
    focus: 'Publish your pages live and explain everyday management.',
    deliverables: [
      'Live website release',
      'System walkthrough session',
      'Handover notes'
    ]
  }
];
