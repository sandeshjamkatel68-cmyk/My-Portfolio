import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechStack from "@/components/sections/TechStack";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const GitHubActivity = dynamic(
  () => import("@/components/sections/GitHubActivity"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Sandesh Jamkatel — Developer & Builder",
  description:
    "BCA student and developer from Nepal. I build practical web products with care, craft, and a focus on real user value.",
};

const featuredProjects = [
  {
    slug: "shrinkbox",
    title: "ShrinkBox",
    tagline: "File compression made simple",
    description:
      "A web-based platform for image and PDF compression. Focused on speed, simplicity, and clean UI. My first real product deployed publicly.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://shrink-box.com",
    type: "Product",
  },
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    tagline: "This site, built from scratch",
    description:
      "Designed and built with Next.js, Three.js, Framer Motion, and Tailwind. No templates — every section was thought through carefully.",
    tech: ["Next.js", "Three.js", "Framer Motion"],
    link: "/projects",
    type: "Design & Dev",
  },
  {
    slug: "resume-builder",
    title: "Resume Builder",
    tagline: "Smart resume generation tool",
    description:
      "A concept project for generating clean, formatted resumes with live preview. Exploring the space of developer productivity tools.",
    tech: ["React", "PDF Generation", "Tailwind"],
    link: "/projects",
    type: "Tool",
  },
];

const skills = [
  { label: "HTML & CSS", level: 90 },
  { label: "JavaScript", level: 80 },
  { label: "Next.js", level: 75 },
  { label: "Tailwind CSS", level: 85 },
  { label: "Java", level: 70 },
  { label: "Git & GitHub", level: 78 },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0e0e0e 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container-main w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <AnimatedSection delay={0}>
                <span className="tag mb-6 inline-block">
                  Based in Nepal · Open to work
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.05] tracking-tight mb-6">
                  Sandesh
                  <br />
                  <span className="text-sage">Jamkatel</span>
                  <span className="text-warm">.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="font-body text-lg text-ink/60 leading-relaxed max-w-md mb-8">
                  BCA student and developer from Nepal. I build practical web
                  products — things that are useful, well-crafted, and easy to
                  trust.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/projects"
                    className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 bg-ink text-bone rounded-full hover:bg-sage transition-all duration-300 group"
                  >
                    View Projects
                    <FiArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-ink/20 text-ink rounded-full hover:border-sage hover:text-sage transition-all duration-300"
                  >
                    Let&apos;s talk
                  </Link>
                </div>
              </AnimatedSection>

              {/* Social links */}
              <AnimatedSection delay={0.4}>
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/sandeshjamkatel68-cmyk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/40 hover:text-ink transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sandesh-jamkatel-a77099346/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/40 hover:text-ink transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href="https://shrink-box.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/40 hover:text-ink transition-colors duration-200"
                    aria-label="ShrinkBox"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <span className="text-ink/20 text-sm">·</span>
                  <span className="font-mono text-xs text-ink/30">
                    sandeshjamkatel@gmail.com
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* 3D Scene */}
            <AnimatedSection delay={0.2} className="h-[420px] md:h-[520px]">
              <HeroScene />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Marquee ─────────────────────────────────────── */}
      <div className="border-y border-ink/10 py-4 overflow-hidden bg-ink/[0.02]">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Three.js",
            "Framer Motion",
            "Java",
            "HTML & CSS",
            "JavaScript",
            "Vercel",
            "Git",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Three.js",
            "Framer Motion",
            "Java",
          ].map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs text-ink/30 uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Featured Projects ───────────────────────────── */}
      <section className="section-pad">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">
                  Selected work
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink heading-line">
                  Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 font-body text-sm text-ink/50 hover:text-ink transition-colors duration-200 group"
              >
                All projects
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.1}>
                <Link href={project.link} className="group block h-full">
                  <div className="h-full border border-ink/10 rounded-2xl p-6 hover:border-sage/40 hover:bg-sage/[0.02] transition-all duration-300 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="tag">{project.type}</span>
                      <FiArrowRight
                        size={14}
                        className="text-ink/20 group-hover:text-sage group-hover:translate-x-1 transition-all duration-200 mt-1"
                      />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink mb-1">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-ink/50 mb-3">
                      {project.tagline}
                    </p>
                    <p className="font-body text-sm text-ink/60 leading-relaxed flex-1 mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-ink/40 bg-ink/5 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Snippet ───────────────────────────────── */}
      <section className="section-pad bg-ink text-bone">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="font-mono text-xs text-bone/30 uppercase tracking-widest mb-4">
                A bit about me
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                Serious about craft.
                <br />
                <span className="text-sage">Still growing</span> — fast.
              </h2>
              <p className="font-body text-bone/60 leading-relaxed mb-6">
                I&apos;m a BCA student at Hetauda School of Management &amp; Social
                Science, Nepal. Beyond lectures and exams, I spend time building
                real products, exploring new tools, and thinking about how the
                web can be both functional and beautiful.
              </p>
              <p className="font-body text-bone/60 leading-relaxed mb-8">
                My goal isn&apos;t just to write good code — it&apos;s to build
                things people can trust and actually use. That requires both
                technical skill and clear product thinking.
              </p>
              <Link
                href="/about"
                className="flex items-center gap-2 font-body text-sm font-medium text-bone hover:text-sage transition-colors duration-200 group w-fit"
              >
                Read more about me
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-body text-sm text-bone/70">
                        {skill.label}
                      </span>
                      <span className="font-mono text-xs text-bone/30">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-bone/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sage rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${i * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Blog Teaser ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">
                  Thinking out loud
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink heading-line">
                  Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:flex items-center gap-2 font-body text-sm text-ink/50 hover:text-ink transition-colors duration-200 group"
              >
                All posts
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "How I built ShrinkBox and what I learned",
                date: "July 2024",
                category: "Project",
                excerpt:
                  "From idea to deployed product — the process, the mistakes, and what I would do differently.",
              },
              {
                title: "Why I take personal branding seriously as a student",
                date: "August 2024",
                category: "Career",
                excerpt:
                  "Building sandeshjamkatel.me was not just about making a portfolio. It was about building credibility early.",
              },
            ].map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link href="/blog" className="group block">
                  <div className="border border-ink/10 rounded-2xl p-6 hover:border-sage/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="tag">{post.category}</span>
                      <span className="font-mono text-xs text-ink/30">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-sage transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-ink/55 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ───────────────────────────────────── */}
      <TechStack />

      {/* ─── GitHub Activity ──────────────────────────────── */}
      <GitHubActivity />

      {/* ─── Contact CTA ──────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-main">
          <AnimatedSection>
            <div className="rounded-3xl bg-sage/10 border border-sage/20 p-10 md:p-16 text-center">
              <p className="font-mono text-xs text-sage/60 uppercase tracking-widest mb-4">
                Get in touch
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-4">
                Let&apos;s build something
                <br />
                <span className="text-sage">real together.</span>
              </h2>
              <p className="font-body text-ink/55 max-w-md mx-auto mb-8">
                Whether you have an idea, a project, or just want to connect — I
                am always open to a good conversation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-6 py-3 bg-ink text-bone rounded-full hover:bg-sage transition-all duration-300 group"
              >
                Contact me
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
