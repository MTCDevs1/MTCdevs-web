"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers } from "lucide-react";

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-28 px-6 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Our work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-5"
        >
          Projects &{" "}
          <span className="gradient-text">Clients</span>
        </motion.h2>

        {/* Placeholder state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-dashed border-slate-700/60 bg-white/[0.015] p-16 flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
            <Layers size={28} className="text-indigo-400/60" />
          </div>
          <p className="text-slate-300 font-medium text-lg mb-2">
            Portfolio coming soon
          </p>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            We&apos;re currently building our portfolio. Soon you&apos;ll see
            our work, client projects, and case studies right here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
