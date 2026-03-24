"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "We understand your business",
    description:
      "We start with a free consultation to learn about your business, your challenges, and your goals.",
  },
  {
    number: "02",
    title: "We design the right solution",
    description:
      "We propose a tailored plan — no generic templates, no unnecessary extras.",
  },
  {
    number: "03",
    title: "We build and implement it",
    description:
      "We develop and launch your solution with full transparency along the way.",
  },
  {
    number: "04",
    title: "We support and improve it",
    description:
      "After launch, we stay involved. Your business grows, and so does your digital solution.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-28 px-6 overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-indigo-600/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          How it works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Our <span className="gradient-text">process</span>
        </motion.h2>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                className="flex items-start gap-8"
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-400 font-mono font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
