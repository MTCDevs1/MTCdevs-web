"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ArrowRight } from "lucide-react";

export default function LeadMagnet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="audit" className="relative py-20 px-6 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-violet-700/10 top-0 right-0" />
      <div className="blob w-[350px] h-[350px] bg-indigo-700/10 bottom-0 left-0" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-3xl border border-indigo-500/25 bg-gradient-to-br from-indigo-500/[0.07] to-violet-500/[0.07] p-10 md:p-16 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
              <Search size={26} className="text-indigo-400" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                Free offer
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Free Website Audit
              </h2>
              <p className="text-slate-400 leading-relaxed max-w-lg">
                We analyze your current digital presence and show you exactly
                how your business can improve online — no strings attached.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-105"
              >
                Get your free audit
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
