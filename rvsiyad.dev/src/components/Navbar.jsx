import { navLinks } from "@/data/portfolio";

/**
 * Sticky top navigation with in-page anchor links. Smooth scrolling is
 * handled purely in CSS, so this stays a server component.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-mono text-sm text-accent">
          ~/rsiyad
        </a>
        <ul className="flex items-center gap-4 font-mono text-xs text-muted sm:gap-6 sm:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
