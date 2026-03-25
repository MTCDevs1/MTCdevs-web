import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy — MTCDevs",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#07070f] text-slate-300 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Logo size="md" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-8">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-slate-400 leading-relaxed">
          <p>
            MTCDevs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website or contact us.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">Information We Collect</h2>
          <p>
            We may collect information you provide directly to us, such as your
            name, email address, business type, and any messages you send through
            our contact form.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our services, and improve our website. We do not sell or
            share your personal information with third parties for marketing
            purposes.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:mctdevs2026@gmail.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              mctdevs2026@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <a href="/" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
