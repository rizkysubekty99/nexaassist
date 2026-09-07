import Link from "next/link";
import { Linkedin, UpworkIcon, Github, Globe } from "@/components/Icons";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-muted-foreground max-w-md">
              Remote virtual assistance, e-commerce support, research, data management, and AI-powered automation for growing businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {siteConfig.links.upwork && (
                <a
                  href={siteConfig.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Upwork"
                >
                  <UpworkIcon className="h-5 w-5" />
                </a>
              )}
              {siteConfig.links.fiverr && (
                <a
                  href={siteConfig.links.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Fiverr"
                >
                  <Globe className="h-5 w-5" />
                </a>
              )}
              {siteConfig.links.github && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteConfig.email}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
