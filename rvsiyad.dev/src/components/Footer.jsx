import { portfolio } from "@/data/portfolio";

/**
 * Site footer with copyright line.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <p className="text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {portfolio.name}
      </p>
    </footer>
  );
}
