import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Sandesh Jamkatel is currently focused on — projects, learning, and goals.",
};

// ⚠️ UPDATE THIS PAGE whenever your focus changes
const lastUpdated = "March 2025";

const currently = {
  building: [
    {
      title: "sandeshjamkatel.me",
      description:
        "This portfolio site — iterating on design, content, and adding new sections. Treating it as a living product, not a finished thing.",
    },
    {
      title: "ShrinkBox v2",
      description:
        "Improving the UI, adding more compression formats, and making the product more reliable under heavy use.",
    },
  ],
  learning: [
    "Node.js and backend API patterns",
    "PostgreSQL and database design fundamentals",
    "Advanced TypeScript — generics, utility types, inference",
    "Product design and UX thinking",
    "How successful indie developers structure and ship SaaS products",
  ],
  reading: [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      note: "Slowly working through this. Dense, practical, and makes you think differently about code.",
    },
    {
      title: "Shape Up",
      author: "Ryan Singer (Basecamp)",
      note: "A way of thinking about product work. More useful than most 'productivity' content.",
    },
  ],
  thinking: [
    "What the next real product after ShrinkBox should be",
    "How to balance academic work with serious personal development",
    "What kind of developer I want to be in 3 years",
    "Whether to explore freelancing or focus on building products",
  ],
  goals: [
    { goal: "Ship ShrinkBox v2 with 3+ formats", status: "in progress" },
    { goal: "Write 5 blog posts this quarter", status: "in progress" },
    { goal: "Land a development internship", status: "actively looking" },
    { goal: "Reach 100 GitHub commits this year", status: "in progress" },
    { goal: "Finish BCA with strong performance", status: "ongoing" },
  ],
};

const statusStyle: Record<string, string> = {
  "in progress": "text-sage bg-sage/10",
  "actively looking": "text-rust bg-rust/10",
  ongoing: "text-ink/50 bg-ink/6",
  done: "text-ink/30 bg-ink/5 line-through",
};

export default function NowPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              Current focus
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-4">
              Now
            </h1>
            <p className="font-body text-ink/40 text-sm">
              Last updated: {lastUpdated}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      <section className="section-pad">
        <div className="container-main max-w-2xl space-y-14">

          {/* Building */}
          <AnimatedSection>
            <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
              Building
            </h2>
            <div className="space-y-5">
              {currently.building.map((item) => (
                <div key={item.title} className="border-b border-ink/8 pb-5 last:border-0">
                  <h3 className="font-display font-bold text-ink mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-ink/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Learning */}
          <AnimatedSection delay={0.05}>
            <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
              Learning
            </h2>
            <ul className="space-y-3">
              {currently.learning.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-body text-sm text-ink/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Reading */}
          <AnimatedSection delay={0.08}>
            <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
              Reading
            </h2>
            <div className="space-y-5">
              {currently.reading.map((book) => (
                <div key={book.title} className="border-b border-ink/8 pb-5 last:border-0">
                  <p className="font-display font-bold text-ink">{book.title}</p>
                  <p className="font-mono text-xs text-ink/35 mb-2">{book.author}</p>
                  <p className="font-body text-sm text-ink/55 leading-relaxed italic">
                    &ldquo;{book.note}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Thinking about */}
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
              Thinking about
            </h2>
            <ul className="space-y-3">
              {currently.thinking.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-body text-sm text-ink/65">
                  <span className="text-warm mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Goals */}
          <AnimatedSection delay={0.12}>
            <h2 className="font-display text-sm font-bold text-ink uppercase tracking-widest mb-6 heading-line">
              Current goals
            </h2>
            <div className="space-y-3">
              {currently.goals.map((item) => (
                <div
                  key={item.goal}
                  className="flex items-center justify-between gap-4 border-b border-ink/8 pb-3 last:border-0"
                >
                  <p className="font-body text-sm text-ink/70">{item.goal}</p>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full flex-shrink-0 ${statusStyle[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Footer note */}
          <AnimatedSection delay={0.14}>
            <div className="rounded-2xl bg-ink/[0.03] border border-ink/8 p-5">
              <p className="font-body text-sm text-ink/50 leading-relaxed">
                This is a{" "}
                <a
                  href="https://nownownow.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:underline"
                >
                  /now page
                </a>
                {" "}— a public snapshot of what I&apos;m focused on at this point
                in time. I update it whenever my priorities shift significantly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
