"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Focused on real results",
    description:
      "We measure success by the impact on your business — not just by what we shipped.",
  },
  {
    icon: Users,
    title: "Personalized approach",
    description:
      "Every project is different. We take the time to understand your business before we build anything.",
  },
  {
    icon: TrendingUp,
    title: "Accessible solutions",
    description:
      "Premium digital work doesn't have to cost a fortune. We make it accessible for growing businesses.",
  },
];

export default function WhyGoDev() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-28 px-6 overflow-hidden">
      <div className="blob w-[450px] h-[450px] bg-violet-700/10 bottom-0 right-0" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Our approach
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 max-w-lg"
        >
          Why <span className="gradient-text">MTCDevs?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
              className="flex flex-col"
            >
              {/* Icon */}
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20">
                <r.icon size={24} className="text-indigo-400" />
              </div>

              {/* Number accent */}
              <span className="text-xs font-mono text-slate-600 mb-2">
                0{i + 1}
              </span>

              <h3 className="text-white font-semibold text-xl mb-3">
                {r.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
