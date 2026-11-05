'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Service } from '@/types';
import { AppDevelopmentGraphic } from './graphics/AppDevelopmentGraphic';
import { WebDevelopmentGraphic } from './graphics/WebDevelopmentGraphic';
import { EcommerceSolutionsGraphic } from './graphics/EcommerceSolutionsGraphic';
import { UiUxDesignGraphic } from './graphics/UiUxDesignGraphic';
import { BusinessAutomationGraphic } from './graphics/BusinessAutomationGraphic';
import { WorkflowOptimizationGraphic } from './graphics/WorkflowOptimizationGraphic';
import { ApiIntegrationsGraphic } from './graphics/ApiIntegrationsGraphic';
import { DatabaseDesignGraphic } from './graphics/DatabaseDesignGraphic';
import { AnalyticsReportingGraphic } from './graphics/AnalyticsReportingGraphic';
import { TechnicalConsultingGraphic } from './graphics/TechnicalConsultingGraphic';
import { PerformanceTuningGraphic } from './graphics/PerformanceTuningGraphic';
import { MaintenanceSupportGraphic } from './graphics/MaintenanceSupportGraphic';
import { EmailWhatsappGraphic } from './graphics/EmailWhatsappGraphic';
import { DigitalSolutionsGraphic } from './graphics/DigitalSolutionsGraphic';
import { CreativeVideoGraphic } from './graphics/CreativeVideoGraphic';
import { DigitalMarketingGraphic } from './graphics/DigitalMarketingGraphic';
import { PerformanceMarketingGraphic } from './graphics/PerformanceMarketingGraphic';
import { ContentStrategyGraphic } from './graphics/ContentStrategyGraphic';

interface ServiceVisualHeaderProps {
  service: Service;
}

export function ServiceVisualHeader({ service }: ServiceVisualHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  const renderServiceGraphic = () => {
    switch (service.slug) {
      // 11 Core Production Services in DYRATEK
      case 'app-development':
        return <AppDevelopmentGraphic />;
      case 'web-development':
        return <WebDevelopmentGraphic />;
      case 'ecommerce-solutions':
        return <EcommerceSolutionsGraphic />;
      case 'digital-solutions':
        return <DigitalSolutionsGraphic />;
      case 'business-automation':
        return <BusinessAutomationGraphic />;
      case 'email-whatsapp-marketing':
        return <EmailWhatsappGraphic />;
      case 'ui-ux-design':
        return <UiUxDesignGraphic />;
      case 'creative-video':
        return <CreativeVideoGraphic />;
      case 'digital-marketing':
        return <DigitalMarketingGraphic />;
      case 'performance-marketing':
        return <PerformanceMarketingGraphic />;
      case 'content-strategy-copywriting':
        return <ContentStrategyGraphic />;

      // Additional Capability Modules
      case 'workflow-optimization':
        return <WorkflowOptimizationGraphic />;
      case 'api-integrations':
        return <ApiIntegrationsGraphic />;
      case 'database-design':
        return <DatabaseDesignGraphic />;
      case 'analytics-reporting':
        return <AnalyticsReportingGraphic />;
      case 'technical-consulting':
        return <TechnicalConsultingGraphic />;
      case 'performance-tuning':
        return <PerformanceTuningGraphic />;
      case 'maintenance-support':
        return <MaintenanceSupportGraphic />;
      default:
        return <WebDevelopmentGraphic />;
    }
  };

  return (
    <div className="relative rounded-3xl bg-white border border-[#E1E4E0] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xs">
      {/* Background radial accent in Forest Green */}
      <div
        className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#123D32]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        {/* Left Column: Headline and Context */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32] uppercase tracking-wide">
              {service.pillarName}
            </span>
            <span className="text-xs text-[#555B57] font-mono">• Production Service</span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#123D32] leading-tight tracking-tight">
            {service.name}
          </h1>

          <p className="text-base sm:text-lg text-[#555B57] leading-relaxed pt-1">
            {service.description}
          </p>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E1E4E0] text-xs text-[#1E2221]">
            <div>
              <span className="text-[#555B57] block">Standard</span>
              <span className="font-semibold text-[#123D32]">WCAG 2.2 AA</span>
            </div>
            <div>
              <span className="text-[#555B57] block">Delivery</span>
              <span className="font-semibold text-[#123D32]">5-Stage Process</span>
            </div>
            <div>
              <span className="text-[#555B57] block">Deliverables</span>
              <span className="font-semibold text-[#123D32]">{service.deliverables.length} Checkpoints</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tailored Interactive Visual Graphic */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full max-w-[640px]"
          >
            {renderServiceGraphic()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
