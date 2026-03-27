import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-display text-3xl font-bold text-ink mt-10 mb-4 leading-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-xl font-bold text-ink mt-10 mb-3 leading-snug" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display text-lg font-bold text-ink mt-8 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-ink/70 leading-relaxed my-4 text-base" {...props} />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const url = href || "#";
    if (url.startsWith("http")) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="text-sage underline underline-offset-2 hover:opacity-80 transition-opacity"
          {...props}>{children}</a>
      );
    }
    return (
      <Link href={url} className="text-sage underline underline-offset-2 hover:opacity-80 transition-opacity" {...props}>
        {children}
      </Link>
    );
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 space-y-2 font-body text-ink/70" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 space-y-2 font-body text-ink/70 list-decimal list-inside" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-2 leading-relaxed">
      <span className="text-sage mt-1.5 text-xs flex-shrink-0">→</span>
      <span {...props} />
    </li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-sage pl-4 my-6 italic text-ink/55 font-body" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-sm bg-black/5 text-ink px-1.5 py-0.5 rounded" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="font-mono text-sm bg-ink text-bone rounded-2xl p-5 my-6 overflow-x-auto leading-relaxed" {...props} />
  ),
  hr: () => <hr className="border-t border-black/10 my-10" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-ink/65" {...props} />
  ),
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="mdx-content">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
