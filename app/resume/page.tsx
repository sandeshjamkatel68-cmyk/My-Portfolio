import type { Metadata } from "next";
import Link from "next/link";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Sandesh Jamkatel — BCA student, frontend developer, and builder from Nepal.",
};

const skills = {
  "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Design"],
  "Frameworks": ["Next.js", "React (basics)", "Framer Motion"],
  "Languages": ["JavaScript", "TypeScript", "Java"],
  "Tools": ["Git", "GitHub", "VS Code", "Vercel", "Figma (basics)"],
  "Other": ["SEO basics", "Networking concepts", "Linux basics", "Product thinking"],
};

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Hetauda School of Management & Social Science",
    affiliation: "Tribhuvan University",
    period: "2022 – Present",
    location: "Hetauda, Nepal",
    notes: [
      "Core subjects: Programming, Networking, Database, Software Engineering",
      "Active in building projects alongside academic studies",
    ],
  },
];

const experience = [
  {
    title: "Founder & Developer",
    company: "ShrinkBox",
    link: "https://shrink-box.com",
    period: "2024 – Present",
    type: "Independent Project",
    points: [
      "Built and deployed a file compression web platform from scratch",
      "Designed the UI, implemented the compression logic, and handled Vercel deployment",
      "Focused on clean UX, fast performance, and mobile-first design",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Personal Portfolio (sandeshjamkatel.me)",
    link: "https://sandeshjamkatel.me",
    period: "2024",
    type: "Personal Project",
    points: [
      "Designed and built a production-grade personal website with Next.js 14 App Router",
      "Integrated Three.js for interactive 3D hero section, Framer Motion for animations",
      "Implemented MDX blog, contact form with Resend, full SEO and accessibility",
    ],
  },
];

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
                  Resume
                </p>
                <h1 className="font-display text-5xl font-bold text-ink mb-2">
                  Sandesh Jamkatel
                </h1>
                <p className="font-body text-ink/55 text-lg">
                  BCA Student · Frontend Developer · Builder
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 bg-ink text-bone rounded-full hover:bg-sage transition-all duration-300"
                >
                  <FiDownload size={14} />
                  Download PDF
                </a>
                <a
                  href="mailto:sandeshjamkatel68@gmail.com"
                  className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-ink/20 rounded-full hover:border-sage hover:text-sage transition-all duration-300"
                >
                  Contact me
                </a>
              </div>
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap gap-5 text-sm font-body text-ink/40">
              <span>sandeshjamkatel68@gmail.com</span>
              <span>·</span>
              <a
                href="https://sandeshjamkatel.me"
                className="hover:text-sage transition-colors"
              >
                sandeshjamkatel.me
              </a>
              <span>·</span>
              <a
                href="https://github.com/sandeshjamkatel68-cmyk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/sandesh-jamkatel-a77099346/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sage transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <span>Hetauda, Nepal</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      <div className="container-main section-pad">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: main content */}
          <div className="md:col-span-2 space-y-12">
            {/* Summary */}
            <AnimatedSection>
              <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-4 heading-line">
                Summary
              </h2>
              <p className="font-body text-ink/65 leading-relaxed">
                BCA student and self-taught frontend developer with a strong
                interest in building practical, trustworthy web products.
                Experienced in modern web technologies including Next.js,
                TypeScript, Tailwind CSS, and Three.js. I approach development
                with product thinking — focusing on user value, clean
                architecture, and attention to detail. Currently seeking
                internships, collaborative projects, and development
                opportunities.
              </p>
            </AnimatedSection>

            <hr className="divider" />

            {/* Experience */}
            <AnimatedSection>
              <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
                Projects & Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.title}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-display font-bold text-ink">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-sage hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <FiExternalLink size={11} />
                          </a>
                          <span className="tag text-xs">{exp.type}</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-ink/30">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-body text-sm text-ink/60"
                        >
                          <span className="text-sage mt-1 text-xs">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <hr className="divider" />

            {/* Education */}
            <AnimatedSection>
              <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-ink">
                        {edu.degree}
                      </h3>
                      <p className="font-body text-sm text-ink/60">
                        {edu.institution}
                      </p>
                      <p className="font-body text-xs text-ink/40">
                        {edu.affiliation} · {edu.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink/30">
                      {edu.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {edu.notes.map((note, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 font-body text-sm text-ink/55"
                      >
                        <span className="text-sage mt-1 text-xs">→</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedSection>
          </div>

          {/* Right: skills sidebar */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-5 heading-line">
                Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="font-body text-xs text-ink/70 bg-ink/5 border border-ink/8 px-2.5 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <hr className="divider" />

            <AnimatedSection delay={0.15}>
              <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-4 heading-line">
                Currently learning
              </h2>
              <div className="space-y-2">
                {[
                  "Advanced TypeScript patterns",
                  "Backend with Node.js",
                  "Database design",
                  "SaaS product architecture",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-body text-sm text-ink/55"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <hr className="divider" />

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-4 heading-line">
                Languages
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-body text-sm text-ink/60">Nepali</span>
                  <span className="font-mono text-xs text-ink/30">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-sm text-ink/60">English</span>
                  <span className="font-mono text-xs text-ink/30">
                    Professional
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-sm text-ink/60">Hindi</span>
                  <span className="font-mono text-xs text-ink/30">
                    Conversational
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
}
