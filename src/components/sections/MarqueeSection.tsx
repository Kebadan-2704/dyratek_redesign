import React from 'react';

const TECH_ITEMS = [
  'FAST WEBSITES',
  'MOBILE APPS',
  'ONLINE STORES',
  'AUTOMATED WORKFLOWS',
  'CLEAN INTERFACES',
  'SEARCH OPTIMIZATION',
  'ONLINE ADVERTISING',
  'PLAIN-LANGUAGE COPY',
  'RELIABLE SOFTWARE',
  'DIRECT MESSAGING',
  'CUSTOM DASHBOARDS'
];

export function MarqueeSection() {
  return (
    <div className="w-full bg-[#ECE8DF] border-b border-[#E5E2DA] overflow-hidden py-3.5">
      <div className="animate-marquee">
        {/* First strip */}
        <div className="flex items-center gap-8 font-mono text-xs text-[#2A2A2A] font-medium tracking-wider uppercase mx-4">
          {TECH_ITEMS.map((item, idx) => (
            <React.Fragment key={`strip1-${idx}`}>
              <span className={idx % 2 === 0 ? 'text-[#123D32] font-bold' : ''}>
                {item}
              </span>
              <span className="text-[#C83B35]" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate strip for seamless infinite loop */}
        <div className="flex items-center gap-8 font-mono text-xs text-[#2A2A2A] font-medium tracking-wider uppercase mx-4" aria-hidden="true">
          {TECH_ITEMS.map((item, idx) => (
            <React.Fragment key={`strip2-${idx}`}>
              <span className={idx % 2 === 0 ? 'text-[#123D32] font-bold' : ''}>
                {item}
              </span>
              <span className="text-[#C83B35]">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

