"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const before = [
  "Manual, time-consuming work",
  "Little or no online presence",
  "Disorganized internal processes",
  "Missed opportunities and leads",
  "Disconnected tools and systems",
];

const after = [
  "Automated, efficient workflows",
  "Strong digital presence",
  "Clear and organized operations",
  "More visibility, more clients",
  "Everything connected and working together",
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="transformation" className="relative py-28 px-6 overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-violet-700/10 top-0 left-0" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          The transformation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Before vs{" "}
          <span className="gradient-text">After MTCDevs</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-slate-800/80 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </div>
              <h3 className="text-slate-400 font-semibold text-lg">Before</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3 text-slate-400 text-sm"
                >
                  <X size={14} className="text-red-400/60 flex-shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.04] p-8 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                  <Check size={14} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  After MTCDevs
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {after.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <Check size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
