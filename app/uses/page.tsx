import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools, software, hardware, and resources Sandesh Jamkatel uses daily for development and learning.",
};

const categories = [
  {
    title: "Editor & Terminal",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "My main editor. Clean, fast, and has everything I need. I keep extensions minimal — only what I actually use.",
        link: "https://code.visualstudio.com",
      },
      {
        name: "GitHub Copilot",
        description:
          "AI autocomplete for code. Useful for boilerplate and repetitive patterns — but I always read what it suggests before accepting.",
        link: "https://github.com/features/copilot",
      },
      {
        name: "Git + GitHub",
        description:
          "Version control for everything I build. Every project starts with a repo — even personal experiments.",
        link: "https://github.com",
      },
    ],
  },
  {
    title: "Development Stack",
    items: [
      {
        name: "Next.js",
        description:
          "My go-to framework for anything that goes to production. App Router, server components, built-in SEO — it handles the hard parts well.",
        link: "https://nextjs.org",
      },
      {
        name: "Tailwind CSS",
        description:
          "The only CSS approach that actually stays clean as projects grow. I use it for everything — utility-first just makes sense.",
        link: "https://tailwindcss.com",
      },
      {
        name: "TypeScript",
        description:
          "Makes me think more clearly about data structures and catches errors before they become problems. Worth the extra setup time.",
        link: "https://www.typescriptlang.org",
      },
      {
        name: "Framer Motion",
        description:
          "Animation library for React. Tasteful, smooth, and easy to keep performant when used with discipline.",
        link: "https://www.framer.com/motion",
      },
      {
        name: "Three.js + React Three Fiber",
        description:
          "For 3D scenes in the browser. The learning curve is real but the results are worth it when used with purpose.",
        link: "https://threejs.org",
      },
    ],
  },
  {
    title: "Deployment & Hosting",
    items: [
      {
        name: "Vercel",
        description:
          "My default deployment platform. Push to GitHub, it deploys. Preview URLs for every branch. Zero config for Next.js.",
        link: "https://vercel.com",
      },
      {
        name: "Resend",
        description:
          "Email delivery for contact forms. Developer-friendly, clean dashboard, and the free tier is genuinely useful.",
        link: "https://resend.com",
      },
    ],
  },
  {
    title: "Design & UI",
    items: [
      {
        name: "Figma",
        description:
          "For wireframing and layout planning before I write code. I keep it simple — I do not spend more time designing than building.",
        link: "https://figma.com",
      },
      {
        name: "Google Fonts",
        description:
          "Syne and DM Sans are my current favourite pairing. Good typography makes everything feel more premium.",
        link: "https://fonts.google.com",
      },
      {
        name: "Lucide Icons / React Icons",
        description:
          "Clean, consistent icon sets. I prefer minimal icon use — only where it genuinely adds clarity.",
        link: "https://lucide.dev",
      },
    ],
  },
  {
    title: "Learning Resources",
    items: [
      {
        name: "Next.js Documentation",
        description:
          "Genuinely one of the best framework docs out there. I check it regularly even for things I think I know.",
        link: "https://nextjs.org/docs",
      },
      {
        name: "MDN Web Docs",
        description:
          "My first stop for anything HTML, CSS, or JS-related. More reliable than any tutorial.",
        link: "https://developer.mozilla.org",
      },
      {
        name: "YouTube — Fireship, Theo, Kevin Powell",
        description:
          "Short, dense, high-signal videos. These channels explain things the way experienced developers actually think.",
      },
      {
        name: "GitHub Explore",
        description:
          "I browse open-source repos to understand how real projects are structured. More useful than most courses.",
        link: "https://github.com/explore",
      },
    ],
  },
  {
    title: "Hardware",
    items: [
      {
        name: "Laptop",
        description:
          "What I write all my code on. Nepal-based, working with what I have — and making the most of it.",
      },
      {
        name: "Phone",
        description:
          "I test every project on mobile before calling it done. Real device testing matters — emulators miss things.",
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              My setup
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Uses
            </h1>
            <p className="font-body text-lg text-ink/55 max-w-md leading-relaxed">
              The tools, software, and resources I use daily for development,
              design, and learning. Updated when things change.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      {/* Categories */}
      <section className="section-pad">
        <div className="container-main max-w-2xl space-y-14">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 0.05}>
              <div>
                <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
                  {cat.title}
                </h2>
                <div className="space-y-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-ink/8 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display font-bold text-ink">
                          {item.name}
                        </h3>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-ink/30 hover:text-sage transition-colors flex-shrink-0"
                          >
                            ↗
                          </a>
                        )}
                      </div>
                      <p className="font-body text-sm text-ink/55 leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
