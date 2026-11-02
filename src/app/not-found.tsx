import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="w-full bg-[#F4F1E9] py-24 lg:py-36">
      <div className="max-w-3xl mx-auto px-5 lg:px-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[#C83B35] font-bold">
          <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" />
          <span>HTTP 404 // RESOURCE NOT LOCATED</span>
        </div>

        <h1 className="font-heading font-extrabold text-5xl sm:text-7xl text-[#123D32] uppercase tracking-tight mb-6">
          Architectural Routing Fault
        </h1>

        <p className="font-body text-base text-[#2A2A2A]/80 max-w-lg mx-auto mb-10 leading-relaxed">
          The requested route does not correspond to an approved DYRATEK system specification. Verify the URL or return to our primary navigation index.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" showArrow>
            Return to Homepage
          </Button>
          <Button href="/services" variant="secondary" size="md">
            View All Services
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E2DA] font-mono text-xs text-[#2A2A2A]/50">
          SYSTEM ERROR CODE: 404_ROUTE_UNDEFINED • DYRATEK RUNTIME
        </div>
      </div>
    </div>
  );
}
