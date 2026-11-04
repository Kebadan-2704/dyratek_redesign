import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — DYRATEK',
  description: 'How information submitted through this website is handled.'
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#FBFBF9] py-14 sm:py-20 lg:py-24 border-b border-[#E1E4E0]">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8 space-y-12">
        {/* Header */}
        <div className="pb-8 border-b border-[#E1E4E0] space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32]">
            Legal &amp; Privacy
          </div>
          <h1 className="font-bold text-3xl sm:text-4xl text-[#123D32] leading-tight">
            Privacy Policy
          </h1>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-8 text-base text-[#555B57] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Overview
            </h2>
            <p>
              This page describes how information submitted through this website is handled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Information You Provide
            </h2>
            <p>
              When you use our contact form, we receive the details you enter, such as your name, email address, and message. We use this information solely to respond to your inquiry and discuss your project.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-xl text-[#123D32]">
              Questions
            </h2>
            <p>
              If you have questions regarding this policy, please reach out to us through our contact form.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-[#E1E4E0] flex justify-between items-center text-sm font-medium">
          <Link href="/" className="text-[#123D32] hover:underline">
            ← Return to homepage
          </Link>
          <Link href="/terms" className="text-[#123D32] hover:underline">
            View Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
