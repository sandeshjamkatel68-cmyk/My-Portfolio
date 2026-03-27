import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/uses", label: "Uses" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];

const social = [
  {
    href: "https://github.com/sandeshjamkatel68-cmyk",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sandesh-jamkatel-a77099346/",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:sandeshjamkatel68@gmail.com",
    icon: FiMail,
    label: "Email",
  },
  {
    href: "https://shrink-box.com",
    icon: FiExternalLink,
    label: "ShrinkBox",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone">
      <div className="container-main py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-3">
              SJ<span className="text-sage">.</span>
            </div>
            <p className="font-body text-sm text-bone/50 leading-relaxed max-w-xs">
              BCA student & developer from Nepal. Building practical web products
              with care and purpose.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="font-mono text-xs text-bone/30 uppercase tracking-widest mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-bone/60 hover:text-bone transition-colors duration-200 w-fit link-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs text-bone/30 uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {social.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-bone/60 hover:text-bone transition-colors duration-200 font-body w-fit group"
                >
                  <Icon size={14} className="group-hover:text-sage transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider mt-12 border-bone/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="font-body text-xs text-bone/30">
            © {year} Sandesh Jamkatel. All rights reserved.
          </p>
          <p className="font-mono text-xs text-bone/20">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
