"use client";

import { Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@mtc_devs",
    href: "https://www.instagram.com/mtc_devs",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@mtcdevs",
    href: "https://www.tiktok.com/@mtcdevs",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
  },
  {
    name: "X",
    handle: "@DevsMtc95198",
    href: "https://x.com/DevsMtc95198",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.726-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 py-14 px-6 overflow-hidden">
      <div className="blob w-[300px] h-[300px] bg-indigo-700/5 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xs">
              Digital solutions for real business problems. We build websites,
              systems, chatbots, and automation — tailored to you.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:mctdevs2026@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Mail size={14} className="text-indigo-400" />
                mctdevs2026@gmail.com
              </a>
              <a
                href="https://wa.me/59895694578"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <MessageCircle size={14} className="text-green-400" />
                +598 95 694 578
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">
              Follow us
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors group"
                >
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
                    {s.icon}
                  </span>
                  <span>{s.name}</span>
                  <span className="text-slate-600 text-xs">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} MTCDevs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
