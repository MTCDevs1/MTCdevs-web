import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service — GoDev",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07070f] text-slate-300 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Logo size="md" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-8">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-6 text-slate-400 leading-relaxed text-sm">
          <p>
            By accessing or using the GoDev website, you agree to be bound by
            these Terms of Service.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">Use of the Website</h2>
          <p>
            You agree to use this website only for lawful purposes. You may not
            use our website in any way that breaches applicable local, national,
            or international laws or regulations.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and logos, is
            the property of GoDev and is protected by applicable intellectual
            property laws.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">Disclaimer</h2>
          <p>
            This website is provided on an &quot;as is&quot; basis. GoDev makes no
            warranties, expressed or implied, regarding the accuracy or
            completeness of any information on this site.
          </p>

          <h2 className="text-white text-lg font-semibold mt-8 mb-3">Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:contact@godev.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              contact@godev.com
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
