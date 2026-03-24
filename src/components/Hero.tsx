"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Logo from "./Logo";

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: "easeOut" as const },
});

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden grid-bg"
    >
      {/* Blobs */}
      <div className="blob w-[600px] h-[600px] bg-indigo-600/20 top-[-100px] left-[-100px]" />
      <div className="blob w-[500px] h-[500px] bg-violet-600/15 top-[200px] right-[-150px]" />
      <div className="blob w-[300px] h-[300px] bg-blue-600/10 bottom-[50px] left-[30%]" />

      {/* Nav bar — logo only */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <Logo size="md" />
        <motion.button
          onClick={scrollToContact}
          className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Contact us
          <ArrowRight size={14} />
        </motion.button>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-20">
        {/* Pill badge */}
        <motion.div
          {...anim(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs text-indigo-300 backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-indigo-400" />
          Digital solutions for real businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...anim(0.12)}
          className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-glow"
        >
          We build digital solutions that solve{" "}
          <span className="gradient-text">real business problems.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...anim(0.24)}
          className="mt-6 max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed"
        >
          Websites, systems, chatbots and automation — tailored to your
          business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...anim(0.36)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 glow-blue hover:scale-105"
          >
            Start your project
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <a
            href="mailto:contact@godev.com"
            className="flex items-center gap-2 rounded-xl border border-slate-700 hover:border-indigo-500/50 bg-transparent px-7 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/5"
          >
            <Mail size={14} />
            Email us
          </a>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          {...anim(0.48)}
          className="mt-4 text-xs text-slate-500"
        >
          Free consultation included
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-indigo-500/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
