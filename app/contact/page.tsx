"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiSend,
} from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    value: "sandeshjamkatel68-cmyk",
    href: "https://github.com/sandeshjamkatel68-cmyk",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "sandesh-jamkatel",
    href: "https://www.linkedin.com/in/sandesh-jamkatel-a77099346/",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "sandeshjamkatel68@gmail.com",
    href: "mailto:sandeshjamkatel68@gmail.com",
  },
  {
    icon: FiExternalLink,
    label: "ShrinkBox",
    value: "shrink-box.com",
    href: "https://shrink-box.com",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Let&apos;s talk about
              <br />
              <span className="text-sage">something real.</span>
            </h1>
            <p className="font-body text-lg text-ink/55 max-w-lg">
              Whether you have a project idea, want to collaborate, or just want
              to say hello — I am always happy to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      <section className="section-pad">
        <div className="container-main grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-xs text-ink/40 uppercase tracking-widest block mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full font-body text-sm text-ink bg-transparent border border-ink/15 rounded-xl px-4 py-3 placeholder:text-ink/25 focus:outline-none focus:border-sage transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-xs text-ink/40 uppercase tracking-widest block mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full font-body text-sm text-ink bg-transparent border border-ink/15 rounded-xl px-4 py-3 placeholder:text-ink/25 focus:outline-none focus:border-sage transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="font-mono text-xs text-ink/40 uppercase tracking-widest block mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full font-body text-sm text-ink bg-bone border border-ink/15 rounded-xl px-4 py-3 focus:outline-none focus:border-sage transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Project collaboration</option>
                    <option value="internship">Internship / Job opportunity</option>
                    <option value="freelance">Freelance work</option>
                    <option value="feedback">Feedback on my work</option>
                    <option value="other">Just saying hello</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs text-ink/40 uppercase tracking-widest block mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what's on your mind..."
                    className="w-full font-body text-sm text-ink bg-transparent border border-ink/15 rounded-xl px-4 py-3 placeholder:text-ink/25 focus:outline-none focus:border-sage transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 font-body text-sm font-medium px-6 py-3 bg-ink text-bone rounded-full hover:bg-sage transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send message
                      <FiSend
                        size={13}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-sm text-sage"
                  >
                    Message sent! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-sm text-rust"
                  >
                    Something went wrong. Please email me directly at
                    sandeshjamkatel68@gmail.com
                  </motion.p>
                )}
              </form>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            <AnimatedSection delay={0.15}>
              <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-5">
                Find me online
              </p>
              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-ink/40 group-hover:border-sage group-hover:text-sage transition-all duration-200">
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-ink/35">{label}</p>
                      <p className="font-body text-sm text-ink group-hover:text-sage transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <hr className="divider" />

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl bg-ink/[0.03] border border-ink/8 p-5">
                <p className="font-display font-bold text-ink mb-2">
                  Response time
                </p>
                <p className="font-body text-sm text-ink/55 leading-relaxed">
                  I usually respond within 24–48 hours. For urgent matters,
                  email is the fastest way to reach me.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
