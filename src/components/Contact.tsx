"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";

const businessTypes = [
  "Retail / Physical store",
  "Restaurant / Food & Beverage",
  "Professional Services",
  "Healthcare / Wellness",
  "E-commerce / Online Business",
  "Real Estate",
  "Education",
  "Technology / Startup",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up to your backend / email service
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-700/80 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200";

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-indigo-700/10 top-0 left-1/2 -translate-x-1/2" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-5"
        >
          Let&apos;s talk about{" "}
          <span className="gradient-text">your project</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-400 text-lg mb-14 max-w-lg"
        >
          Fill out the form and we&apos;ll get back to you shortly. Or reach
          out directly — we&apos;re easy to talk to.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2
                    size={56}
                    className="text-indigo-400 mb-5 mx-auto"
                  />
                </motion.div>
                <h3 className="text-white text-2xl font-semibold mb-3">
                  Message sent!
                </h3>
                <p className="text-slate-400 max-w-xs">
                  Thanks, we&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                    Business type
                  </label>
                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {businessTypes.map((t) => (
                      <option
                        key={t}
                        value={t}
                        className="bg-[#0d0d1a] text-slate-200"
                      >
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business and what you need..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 glow-blue hover:scale-[1.02] mt-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Email */}
            <a
              href="mailto:contact@godev.com"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-white/[0.025] p-5 hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-slate-200 text-sm font-medium">
                  contact@godev.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/59895694578"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-white/[0.025] p-5 hover:border-green-500/40 hover:bg-white/[0.04] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle size={18} className="text-green-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                <p className="text-slate-200 text-sm font-medium">
                  +598 95 694 578
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Available for quick questions
                </p>
              </div>
            </a>

            {/* Availability note */}
            <div className="rounded-2xl border border-slate-800/40 bg-white/[0.015] p-5">
              <p className="text-slate-500 text-xs leading-relaxed">
                We typically respond within{" "}
                <span className="text-slate-300">24 hours</span>. For urgent
                matters, WhatsApp is the fastest way to reach us.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
