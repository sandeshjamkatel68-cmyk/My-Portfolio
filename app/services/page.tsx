import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What Sandesh Jamkatel can build for you — websites, web apps, landing pages, and developer tools.",
};

const services = [
  {
    number: "01",
    title: "Personal Portfolio & Developer Sites",
    tagline: "Your online presence, done properly",
    description:
      "A clean, fast, and trustworthy personal website that showcases who you are and what you build. Designed to make a strong first impression with recruiters, clients, and collaborators.",
    deliverables: [
      "Custom design, no templates",
      "Next.js with full SEO",
      "Blog / writing section",
      "Contact form with email delivery",
      "Deployed on Vercel with your domain",
      "Mobile-first and accessible",
    ],
    ideal: "Students, developers, freelancers",
  },
  {
    number: "02",
    title: "Landing Pages & Product Sites",
    tagline: "First impressions that convert",
    description:
      "A focused, high-quality landing page for your product, tool, or service. Built to communicate value clearly, load fast, and look premium on every device.",
    deliverables: [
      "Clear, focused single-page design",
      "Strong hero, features, CTA sections",
      "Performance-optimized",
      "Animated and interactive where appropriate",
      "SEO-ready metadata",
      "Vercel deployment included",
    ],
    ideal: "SaaS products, tools, small businesses",
  },
  {
    number: "03",
    title: "Web Application UI",
    tagline: "Interfaces that feel right to use",
    description:
      "Frontend UI development for web applications — dashboards, admin panels, user-facing product interfaces. Built with React and Next.js with clean, reusable component architecture.",
    deliverables: [
      "Component-based architecture",
      "TypeScript for reliability",
      "Tailwind CSS styling system",
      "Responsive across all screen sizes",
      "Framer Motion animations",
      "Clean, documented code",
    ],
    ideal: "Startups, indie developers, small teams",
  },
  {
    number: "04",
    title: "Utility Tools & Developer Micro-Products",
    tagline: "Small tools with real value",
    description:
      "Simple web-based tools that solve one problem well — file processors, converters, generators, calculators. Like ShrinkBox, but for your idea.",
    deliverables: [
      "Focused, frictionless UX",
      "Built and deployed end-to-end",
      "Works on mobile",
      "Fast and reliable",
      "Domain + Vercel hosting guidance",
    ],
    ideal: "Developers, indie hackers, side project founders",
  },
];

const process = [
  { step: "01", label: "Understand", desc: "We talk about your goal, audience, and what success looks like." },
  { step: "02", label: "Plan", desc: "I outline the structure, stack, and timeline. No surprises." },
  { step: "03", label: "Build", desc: "I develop the project with regular updates and clear communication." },
  { step: "04", label: "Deliver", desc: "Deployed, tested, and handed over cleanly with documentation." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
              What I build
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              Services
            </h1>
            <p className="font-body text-lg text-ink/55 max-w-lg leading-relaxed">
              I build focused, well-crafted web products. No bloated agencies, no
              template shortcuts — just clean, purposeful work delivered with care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <hr className="divider container-main" />

      {/* Services */}
      <section className="section-pad">
        <div className="container-main space-y-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.08}>
              <div className="border border-ink/10 rounded-3xl p-8 md:p-10 hover:border-sage/30 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-ink/25">
                        {service.number}
                      </span>
                      <span className="tag">{service.ideal}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-ink mb-1">
                      {service.title}
                    </h2>
                    <p className="font-body text-sm text-sage mb-4">
                      {service.tagline}
                    </p>
                    <p className="font-body text-ink/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-3">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-body text-sm text-ink/65"
                        >
                          <FiCheck
                            size={13}
                            className="text-sage mt-0.5 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-ink text-bone">
        <div className="container-main">
          <AnimatedSection>
            <p className="font-mono text-xs text-bone/30 uppercase tracking-widest mb-2">
              How it works
            </p>
            <h2 className="font-display text-3xl font-bold mb-12 heading-line">
              My process
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-full w-full h-px bg-bone/10 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="font-mono text-xs text-bone/25 mb-3">
                      {p.step}
                    </div>
                    <h3 className="font-display text-lg font-bold text-bone mb-2">
                      {p.label}
                    </h3>
                    <p className="font-body text-sm text-bone/55 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-main max-w-xl text-center mx-auto">
          <AnimatedSection>
            <p className="font-display text-3xl font-bold text-ink mb-4">
              Have a project in mind?
            </p>
            <p className="font-body text-ink/55 mb-8">
              Tell me what you&apos;re building and I&apos;ll tell you honestly
              whether I can help — and how.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-6 py-3 bg-ink text-bone rounded-full hover:bg-sage transition-all duration-300 group"
            >
              Get in touch
              <FiArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
