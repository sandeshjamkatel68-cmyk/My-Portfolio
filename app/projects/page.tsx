import type { Metadata } from "next";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Detailed case studies of projects built by Sandesh Jamkatel — ShrinkBox, portfolio, resume builder, and more.",
};

const projects = [
  {
    title: "ShrinkBox",
    tagline: "File compression, simplified",
    description:
      "ShrinkBox is a web-based file compression platform built to make image and PDF optimization accessible without complexity. Users can drop files, get compressed results instantly, and download them — no accounts, no friction.",
    problem:
      "Most compression tools online are cluttered with ads, require sign-ups, or produce inconsistent results. I wanted something clean, fast, and trustworthy.",
    approach:
      "Built a minimal UI-first. Focused on one core action: upload → compress → download. Used client-side compression for images and server-side handling for PDFs. Optimized for mobile.",
    outcome:
      "Deployed publicly at shrink-box.com. My first real product shipped end-to-end.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveLink: "https://shrink-box.com",
    githubLink: "https://github.com/sandeshjamkatel68-cmyk",
    type: "Product",
    status: "Live",
    year: "2024",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    tagline: "This site — built from scratch",
    description:
      "A premium personal portfolio and developer identity website. Designed to communicate credibility, showcase work, and serve as the central hub for my online presence.",
    problem:
      "Generic portfolio templates all look the same. I needed something that felt handcrafted and reflected how I actually think about design and development.",
    approach:
      "Built with Next.js 14 App Router, TypeScript, Tailwind, Framer Motion, and Three.js. Every component custom. No templates. Designed around trust, not flash.",
    outcome:
      "A complete multi-page site with SEO, blog, contact form, resume, and 3D interactive hero — deployed on Vercel.",
    tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveLink: "https://sandeshjamkatel.me",
    githubLink: "https://github.com/sandeshjamkatel68-cmyk",
    type: "Design & Dev",
    status: "Live",
    year: "2024",
    featured: true,
  },
  {
    title: "Resume Builder (Concept)",
    tagline: "Generate clean resumes instantly",
    description:
      "A tool concept for generating well-formatted, professional resumes from a structured form. Supports live preview and PDF download. Aimed at students and early-career developers.",
    problem:
      "Most resume builders either produce ugly output, lock features behind paywall, or generate generic designs.",
    approach:
      "Designed a form-first approach with live preview. PDF generation via print CSS. Minimal templates, focused on clarity and recruiter readability.",
    outcome:
      "Concept project in progress — exploring the space of developer productivity tools.",
    tech: ["React", "Tailwind CSS", "Print CSS", "PDF Generation"],
    liveLink: "#",
    githubLink: "https://github.com/sandeshjamkatel68-cmyk",
    type: "Tool",
    status: "In progress",
    year: "2024",
    featured: false,
  },
  {
    title: "Networking Lab Projects",
    tagline: "Academic computing and networking",
    description:
      "A collection of networking and computing projects from BCA coursework — covering socket programming, data communication concepts, and Java-based applications.",
    problem:
      "Translating theoretical networking concepts into working implementations for academic and practical understanding.",
    approach:
      "Implemented Java-based socket communication programs, explored TCP/UDP protocols hands-on, and documented the learning process clearly.",
    outcome:
      "Strong foundation in networking fundamentals, Java programming, and problem-solving under academic constraints.",
    tech: ["Java", "Networking", "Socket Programming", "TCP/UDP"],
    liveLink: "#",
    githubLink: "https://github.com/sandeshjamkatel68-cmyk",
    type: "Academic",
    status: "Completed",
    year: "2023–2024",
    featured: false,
  },
];

const statusColor: Record<string, string> = {
  Live: "bg-sage/15 text-sage",
  "In progress": "bg-warm/20 text-rust",
  Completed: "bg-ink/8 text-ink/50",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              My work
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Projects &amp; <span className="text-sage">Case Studies</span>
            </h1>
            <p className="font-body text-lg text-ink/55 max-w-lg leading-relaxed">
              I approach each project as a product — thinking through the
              problem, the user, the outcome, and the craft behind it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      {/* Featured */}
      <section className="section-pad">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-10">
              Featured projects
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {featured.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className="border border-ink/10 rounded-3xl p-8 md:p-10 hover:border-sage/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                          {project.title}
                        </h2>
                        <span
                          className={`font-mono text-xs px-2.5 py-1 rounded-full ${statusColor[project.status]}`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="font-body text-ink/50">{project.tagline}</p>
                    </div>
                    <div className="flex gap-3">
                      {project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-body text-xs font-medium px-4 py-2 bg-ink text-bone rounded-full hover:bg-sage transition-colors duration-300"
                        >
                          <FiExternalLink size={12} />
                          Live site
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-body text-xs font-medium px-4 py-2 border border-ink/20 text-ink rounded-full hover:border-sage hover:text-sage transition-colors duration-300"
                      >
                        <FiGithub size={12} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <p className="font-body text-ink/65 leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Problem", content: project.problem },
                      { label: "Approach", content: project.approach },
                      { label: "Outcome", content: project.outcome },
                    ].map(({ label, content }) => (
                      <div key={label}>
                        <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">
                          {label}
                        </p>
                        <p className="font-body text-sm text-ink/60 leading-relaxed">
                          {content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-ink/40 bg-ink/5 px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="tag">{project.type}</span>
                      <span className="font-mono text-xs text-ink/30">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="section-pad bg-ink/[0.02]">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-8">
              Other work
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {others.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div className="border border-ink/10 rounded-2xl p-6 hover:border-sage/40 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="tag">{project.type}</span>
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded-full ${statusColor[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-ink/30">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-1">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-ink/50 mb-3">
                    {project.tagline}
                  </p>
                  <p className="font-body text-sm text-ink/60 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-ink/35 bg-ink/5 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Future CTA */}
      <section className="section-pad">
        <div className="container-main max-w-xl text-center mx-auto">
          <AnimatedSection>
            <p className="font-display text-2xl font-bold text-ink mb-3">
              More coming soon.
            </p>
            <p className="font-body text-ink/55 mb-6">
              I am always working on something new. Check back, or watch my
              GitHub for the latest activity.
            </p>
            <a
              href="https://github.com/sandeshjamkatel68-cmyk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-ink/20 rounded-full hover:border-sage hover:text-sage transition-all duration-300"
            >
              <FiGithub size={14} />
              Follow on GitHub
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
