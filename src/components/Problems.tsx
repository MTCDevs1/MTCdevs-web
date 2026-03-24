"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WifiOff, Clock, ShoppingCartIcon, LayoutDashboard } from "lucide-react";

const problems = [
  {
    icon: WifiOff,
    text: "Losing clients because your business isn't online?",
  },
  {
    icon: Clock,
    text: "Spending too much time on manual, repetitive tasks?",
  },
  {
    icon: ShoppingCartIcon,
    text: "Missing revenue because you don't sell online?",
  },
  {
    icon: LayoutDashboard,
    text: "Managing your business without the right systems?",
  },
];

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problems" className="relative py-28 px-6 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-violet-700/10 top-0 right-0" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Sound familiar?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 max-w-xl"
        >
          Are you facing{" "}
          <span className="gradient-text">these problems?</span>
        </motion.h2>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="group flex items-start gap-5 rounded-2xl border border-slate-800/80 bg-white/[0.025] p-6 backdrop-blur-sm hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <problem.icon size={20} className="text-indigo-400" />
              </div>
              <p className="text-slate-300 text-base leading-relaxed pt-1.5">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connective statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-slate-400 text-lg"
        >
          If any of these sound familiar,{" "}
          <span className="text-white font-medium">GoDev was built for you.</span>
        </motion.p>
      </div>
    </section>
  );
}
