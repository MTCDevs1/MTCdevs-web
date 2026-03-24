"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  ShoppingBag,
  Cpu,
  Zap,
  Bot,
  Link2,
} from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, fast websites that represent your brand and attract more clients.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Sell your products or services online with a clean, conversion-focused store.",
  },
  {
    icon: Cpu,
    title: "Custom Systems",
    description:
      "Internal tools and management systems built specifically around how your business works.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Eliminate repetitive manual work and let your team focus on what matters.",
  },
  {
    icon: Bot,
    title: "Chatbots",
    description:
      "AI-powered assistants that handle customer queries and leads 24/7.",
  },
  {
    icon: Link2,
    title: "Tool Integrations",
    description:
      "Connect your existing tools so data flows smoothly and nothing falls through the cracks.",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="relative py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="blob w-[500px] h-[500px] bg-indigo-700/10 top-1/2 -translate-y-1/2 left-[-100px]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          What we do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-xl"
        >
          How we <span className="gradient-text">help</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-lg"
        >
          We don&apos;t do everything. We focus on the digital solutions that
          actually move your business forward.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="group relative rounded-2xl border border-slate-800/80 bg-white/[0.025] p-7 hover:border-indigo-500/40 hover:bg-white/[0.045] transition-all duration-300 overflow-hidden"
            >
              {/* Corner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <s.icon size={22} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
