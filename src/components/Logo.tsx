"use client";

import { motion } from "framer-motion";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { text: "text-xl", dot: "w-2 h-2" },
    md: { text: "text-2xl", dot: "w-2.5 h-2.5" },
    lg: { text: "text-4xl", dot: "w-3.5 h-3.5" },
  };

  return (
    <motion.a
      href="#top"
      className="flex items-center gap-1 cursor-pointer select-none"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span
        className={`font-bold tracking-tight gradient-text ${sizes[size].text}`}
      >
        Go
      </span>
      <span className={`font-bold tracking-tight text-white ${sizes[size].text}`}>
        Dev
      </span>
      <motion.span
        className={`${sizes[size].dot} rounded-full bg-indigo-500 ml-0.5 self-end mb-1`}
        animate={{
          opacity: [1, 0.4, 1],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
}
