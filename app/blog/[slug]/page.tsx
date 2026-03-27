import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MDXContent from "@/components/ui/MDXContent";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-32 pb-6">
        <div className="container-main max-w-2xl">
          <AnimatedSection>
            <Link href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm text-ink/40 hover:text-ink transition-colors duration-200 mb-10 group">
              <FiArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              All posts
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="tag">{post!.category}</span>
              <span className="font-mono text-xs text-ink/30">{formatDate(post!.date)}</span>
              <span className="font-mono text-xs text-ink/25">{post!.readTime}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight mb-5">
              {post!.title}
            </h1>
            <p className="font-body text-lg text-ink/55 leading-relaxed border-l-2 border-sage pl-4 mb-2">
              {post!.excerpt}
            </p>
            {post!.tags && post!.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {post!.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-ink/35 bg-ink/5 px-2.5 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main max-w-2xl" />

      <section className="section-pad">
        <div className="container-main max-w-2xl">
          <AnimatedSection>
            <MDXContent source={post!.content} />
          </AnimatedSection>
          <div className="mt-16 pt-8 border-t border-ink/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center">
                <span className="font-display text-sm font-bold text-sage">S</span>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-ink">Sandesh Jamkatel</p>
                <p className="font-mono text-xs text-ink/30">BCA student · Developer · Nepal</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/blog"
                className="font-body text-sm text-ink/50 hover:text-ink transition-colors flex items-center gap-2 group">
                <FiArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                All posts
              </Link>
              <Link href="/contact" className="font-body text-sm text-sage hover:underline">
                Send me a message →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
