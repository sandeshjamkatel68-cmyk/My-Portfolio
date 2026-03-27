import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sandesh Jamkatel — BCA student, developer, and builder from Nepal. My story, values, and approach to development.",
};

const values = [
  {
    title: "Build with purpose",
    description:
      "Every project I work on has a reason. I do not build just to fill a portfolio — I build to solve real problems.",
  },
  {
    title: "Learn deeply",
    description:
      "Surface-level knowledge is easy to get. I prefer to understand how things actually work before moving on.",
  },
  {
    title: "Improve continuously",
    description:
      "I review my past work, notice what was weak, and try to do better. Growth is not accidental.",
  },
  {
    title: "Respect the craft",
    description:
      "Attention to detail in code, design, copy, and UX — these are not extras. They are what separate good work from great work.",
  },
];

const interests = [
  "Frontend development",
  "Product thinking",
  "SaaS ideas",
  "UI/UX improvement",
  "Developer tools",
  "Personal branding",
  "Cricket",
  "Continuous learning",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 section-pad">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              About me
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6 max-w-2xl">
              A developer who builds with{" "}
              <span className="text-sage">intention</span>.
            </h1>
            <p className="font-body text-lg text-ink/60 leading-relaxed max-w-xl">
              I am Sandesh Jamkatel — a BCA student and developer from Nepal,
              focused on building web products that are practical, trustworthy,
              and worth using.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      {/* Story */}
      <section className="section-pad">
        <div className="container-main grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-6">
            <AnimatedSection>
              <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-3">
                My story
              </p>
              <h2 className="font-display text-2xl font-bold text-ink mb-5 heading-line">
                Where I started
              </h2>
              <div className="space-y-4 font-body text-ink/65 leading-relaxed">
                <p>
                  My interest in development did not come from a single moment —
                  it grew gradually from a genuine curiosity about how things on
                  the internet work. Once I started understanding HTML, CSS, and
                  JavaScript, I realized that I was not just learning a skill. I
                  was learning a way to create.
                </p>
                <p>
                  I am currently pursuing a Bachelor of Computer Applications
                  (BCA) at Hetauda School of Management &amp; Social Science,
                  affiliated with Tribhuvan University. Alongside my academic
                  studies, I have built my own development practice through
                  projects, experimentation, and continuous learning.
                </p>
                <p>
                  One of my proudest achievements so far is building ShrinkBox
                  — a file compression tool at{" "}
                  <a
                    href="https://shrink-box.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:underline"
                  >
                    shrink-box.com
                  </a>
                  . It is my first real product — publicly deployed, designed
                  with care, and built from an idea I believed in.
                </p>
                <p>
                  I want to keep building things like that. Tools and products
                  that are simple, trustworthy, and genuinely useful to people.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="md:col-span-2 space-y-6">
            <AnimatedSection delay={0.15}>
              {/* Quick Facts */}
              <div className="rounded-2xl border border-ink/10 p-6">
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
                  Quick facts
                </p>
                <dl className="space-y-3">
                  {[
                    ["Location", "Nepal"],
                    ["Degree", "BCA (in progress)"],
                    ["College", "HSMS, Hetauda"],
                    ["Focus", "Frontend & Products"],
                    ["Status", "Open to opportunities"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="font-body text-sm text-ink/40">{label}</dt>
                      <dd className="font-body text-sm text-ink font-medium text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Interests */}
              <div className="rounded-2xl border border-ink/10 p-6">
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
                  Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-ink/[0.02]">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">
              What drives me
            </p>
            <h2 className="font-display text-3xl font-bold text-ink mb-10 heading-line">
              Values I work by
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="border border-ink/10 rounded-2xl p-6 hover:border-sage/40 transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-ink mb-2">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-ink/60 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="section-pad">
        <div className="container-main max-w-xl">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              Say hello
            </p>
            <h2 className="font-display text-3xl font-bold text-ink mb-4 heading-line">
              Connect with me
            </h2>
            <p className="font-body text-ink/60 leading-relaxed mb-8">
              Whether you want to collaborate, discuss ideas, or just say hello —
              I am always open to a genuine conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: FiGithub,
                  label: "GitHub",
                  href: "https://github.com/sandeshjamkatel68-cmyk",
                },
                {
                  icon: FiLinkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sandesh-jamkatel-a77099346/",
                },
                {
                  icon: FiMail,
                  label: "Email",
                  href: "mailto:sandeshjamkatel68@gmail.com",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-ink/20 text-ink rounded-full hover:border-sage hover:text-sage transition-all duration-300"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
