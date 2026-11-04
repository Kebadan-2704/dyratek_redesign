import { ProcessStage } from '@/types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Discover',
    phase: 'GOALS & REQUIREMENTS',
    duration: 'Step 1',
    description: 'We learn about your business goals and what you need built.',
    focus: 'Understand your project requirements and priorities.',
    deliverables: [
      'Summary of business goals',
      'Feature checklist',
      'Initial discussion notes'
    ],
    governance: 'Initial Consultation'
  },
  {
    step: '02',
    name: 'Plan',
    phase: 'TIMELINE & DETAILS',
    duration: 'Step 2',
    description: 'We outline the project details, milestones, and timeline.',
    focus: 'Define pages, milestones, and project steps clearly.',
    deliverables: [
      'Project milestones outline',
      'Page and feature plan',
      'Timeline schedule'
    ],
    governance: 'Project Plan Agreement'
  },
  {
    step: '03',
    name: 'Design & Build',
    phase: 'DESIGN & CODE',
    duration: 'Step 3',
    description: 'We design your pages and write clean code.',
    focus: 'Create layouts and build responsive, working pages.',
    deliverables: [
      'Visual screen layouts',
      'Clean website code',
      'Connected forms and tools'
    ],
    governance: 'Build Verification'
  },
  {
    step: '04',
    name: 'Review',
    phase: 'PREVIEW & FEEDBACK',
    duration: 'Step 4',
    description: 'You test a working preview and share feedback before launch.',
    focus: 'Review the preview on phones and computers to confirm details.',
    deliverables: [
      'Working private preview',
      'Feedback review notes',
      'Adjustments and refinements'
    ],
    governance: 'Pre-Launch Approval'
  },
  {
    step: '05',
    name: 'Launch',
    phase: 'GO LIVE & HANDOVER',
    duration: 'Step 5',
    description: 'We launch your site and walk you through how it works.',
    focus: 'Publish your pages live and explain everyday management.',
    deliverables: [
      'Live website release',
      'System walkthrough session',
      'Handover notes'
    ],
    governance: 'Project Completion'
  }
];
