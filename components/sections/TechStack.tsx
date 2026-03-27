import AnimatedSection from "@/components/ui/AnimatedSection";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: "⬛", description: "React framework for production" },
      { name: "TypeScript", icon: "🔷", description: "Typed JavaScript" },
      { name: "Tailwind CSS", icon: "💨", description: "Utility-first CSS" },
      { name: "Framer Motion", icon: "🌀", description: "Animation library" },
    ],
  },
  {
    category: "3D & Creative",
    items: [
      { name: "Three.js", icon: "🔺", description: "3D graphics in the browser" },
      { name: "React Three Fiber", icon: "🧊", description: "React renderer for Three.js" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "🟨", description: "Core web language" },
      { name: "Java", icon: "☕", description: "Academic & backend basics" },
      { name: "HTML & CSS", icon: "🎨", description: "Web foundations" },
    ],
  },
  {
    category: "Tools & Platform",
    items: [
      { name: "GitHub", icon: "🐙", description: "Version control & collaboration" },
      { name: "Vercel", icon: "▲", description: "Deployment & hosting" },
      { name: "VS Code", icon: "🖊️", description: "Primary editor" },
      { name: "Figma", icon: "🖼️", description: "UI design basics" },
    ],
  },
  {
    category: "Learning now",
    items: [
      { name: "Node.js", icon: "🟢", description: "Backend development" },
      { name: "PostgreSQL", icon: "🐘", description: "Relational databases" },
      { name: "Docker", icon: "🐳", description: "Containerisation" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <AnimatedSection>
          <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">
            My toolkit
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-10 heading-line">
            Tech Stack
          </h2>
        </AnimatedSection>

        <div className="space-y-10">
          {stack.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.08}>
              <div>
                <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">
                  {group.category}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group border border-ink/8 rounded-xl p-4 hover:border-sage/40 hover:bg-sage/[0.02] transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="text-lg leading-none">{item.icon}</span>
                        <span className="font-display text-sm font-bold text-ink">
                          {item.name}
                        </span>
                      </div>
                      <p className="font-body text-xs text-ink/40 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
