import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing by Sandesh Jamkatel — development, projects, student life, and growing as a developer.",
};

const categoryColors: Record<string, string> = {
  Development: "text-sage bg-sage/10",
  Project: "text-rust bg-rust/10",
  Career: "text-ink/60 bg-ink/8",
  Growth: "text-warm bg-warm/20",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              Writing
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-4">
              Thinking out loud
            </h1>
            <p className="font-body text-lg text-ink/55 max-w-lg">
              I write about development, projects, learning, and growing as a
              developer. Honest, practical, and from experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      <section className="section-pad">
        <div className="container-main">
          {featured.length > 0 && (
            <>
              <AnimatedSection>
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-8">
                  Featured posts
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {featured.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="h-full border border-ink/10 rounded-2xl p-7 hover:border-sage/40 hover:bg-sage/[0.015] transition-all duration-300 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`font-mono text-xs px-2.5 py-1 rounded-full ${
                              categoryColors[post.category] || "text-ink/50 bg-ink/5"
                            }`}
                          >
                            {post.category}
                          </span>
                          <span className="font-mono text-xs text-ink/25">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="font-display text-xl font-bold text-ink mb-3 group-hover:text-sage transition-colors duration-200 flex-1">
                          {post.title}
                        </h2>
                        <p className="font-body text-sm text-ink/55 leading-relaxed mb-5">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-ink/30">
                            {formatDate(post.date)}
                          </span>
                          <FiArrowRight
                            size={14}
                            className="text-ink/25 group-hover:text-sage group-hover:translate-x-1 transition-all duration-200"
                          />
                        </div>
                      </article>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}

          {rest.length > 0 && (
            <>
              <AnimatedSection>
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-6">
                  All posts
                </p>
              </AnimatedSection>

              <div className="space-y-0">
                {rest.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.05}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <article className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-5 border-b border-ink/8 hover:bg-sage/[0.015] px-2 rounded-lg transition-all duration-200">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span
                              className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                                categoryColors[post.category] || "text-ink/50 bg-ink/5"
                              }`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-ink group-hover:text-sage transition-colors duration-200">
                            {post.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-5 flex-shrink-0">
                          <span className="font-mono text-xs text-ink/30">
                            {formatDate(post.date)}
                          </span>
                          <span className="font-mono text-xs text-ink/25">
                            {post.readTime}
                          </span>
                          <FiArrowRight
                            size={13}
                            className="text-ink/20 group-hover:text-sage group-hover:translate-x-1 transition-all duration-200"
                          />
                        </div>
                      </article>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}

          {posts.length === 0 && (
            <AnimatedSection>
              <p className="font-body text-ink/40 text-center py-12">
                Posts coming soon.
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      <section className="section-pad bg-ink/[0.02]">
        <div className="container-main max-w-lg">
          <AnimatedSection>
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-ink mb-3">
                More writing coming soon.
              </p>
              <p className="font-body text-ink/55 mb-6">
                I write when I have something real to say — not for the sake of
                content. Keep an eye on this space.
              </p>
              <a
                href="mailto:sandeshjamkatel68@gmail.com"
                className="font-body text-sm text-sage hover:underline"
              >
                Send me a topic you want me to write about →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
