import React from 'react';

export interface SectionHeadingProps {
  index?: string;
  label: string;
  heading: string;
  description?: string;
  rightElement?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  index,
  label,
  heading,
  description,
  rightElement,
  align = 'left',
  className = ''
}: SectionHeadingProps) {
  return (
    <div className={`w-full pb-6 mb-12 border-b border-[#E5E2DA] ${className}`}>
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${align === 'center' ? 'md:items-center text-center' : ''}`}>
        <div className="max-w-3xl">
          {/* Index & Label */}
          <div className={`inline-flex items-center gap-2 mb-3 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32] ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block flex-shrink-0" aria-hidden="true" />
            <span>
              {index ? `${index} // ` : ''}
              {label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] tracking-[-0.025em] text-[#123D32] uppercase">
            {heading}
          </h2>
        </div>

        {/* Right Element or Description */}
        {rightElement ? (
          <div className="flex-shrink-0">{rightElement}</div>
        ) : description ? (
          <p className="font-body text-sm sm:text-[15px] leading-relaxed text-[#2A2A2A] max-w-md mt-2 md:mt-0 opacity-90">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

