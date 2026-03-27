import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-4">
          Page not found
        </h1>
        <p className="font-body text-ink/55 max-w-sm mx-auto mb-8">
          This page doesn&apos;t exist — or maybe it moved. Let&apos;s get you back
          somewhere useful.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 bg-ink text-bone rounded-full hover:bg-sage transition-all duration-300 group"
          >
            Go home
            <FiArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-ink/20 rounded-full hover:border-sage hover:text-sage transition-all duration-300"
          >
            See projects
          </Link>
        </div>
      </div>
    </div>
  );
}
