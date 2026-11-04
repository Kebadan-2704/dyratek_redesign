import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full bg-[#FBFBF9] py-20 lg:py-32 border-b border-[#E1E4E0]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center space-y-8">
        <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
          Page Not Found
        </div>

        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#123D32] leading-tight max-w-2xl mx-auto">
          We couldn&apos;t find that page.
        </h1>

        <p className="text-lg text-[#555B57] max-w-lg mx-auto leading-relaxed">
          The link you followed doesn&apos;t exist or may have moved. You can return to our homepage or explore our services below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="h-12 px-7 rounded-xl bg-[#123D32] text-[#FBFBF9] text-base font-medium flex items-center justify-center shadow-xs hover:bg-[#0B2720] transition-colors"
          >
            Go to homepage
          </Link>
          <Link
            href="/services"
            aria-label="See services we offer"
            className="h-12 px-7 rounded-xl bg-white border border-[#E1E4E0] text-[#123D32] text-base font-medium flex items-center justify-center hover:bg-[#F3F4F1] transition-colors"
          >
            See services
          </Link>
        </div>

        <div className="pt-8 text-xs text-[#555B57]">
          Error 404 • Page does not exist
        </div>
      </div>
    </div>
  );
}
