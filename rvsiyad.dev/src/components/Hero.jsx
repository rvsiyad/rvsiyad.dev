import { portfolio } from "@/data/portfolio";

/**
 * Landing hero: terminal-style eyebrow, name, tagline with blinking cursor,
 * and a call-to-action into the projects section.
 */
export default function Hero() {
  return (
    <section id="home" className="py-28 sm:py-36">
      <p className="font-mono text-sm text-accent">{portfolio.prompt}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {portfolio.name}.
      </h1>
      <p className="mt-3 text-2xl font-medium tracking-tight text-muted sm:text-4xl">
        {portfolio.tagline}
        <span aria-hidden="true" className="cursor-blink ml-1 text-accent">
          ▍
        </span>
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-muted">
        {portfolio.intro}
      </p>
      <div className="mt-10 flex items-center gap-4">
        <a
          href="#projects"
          className="rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-2 py-3 font-mono text-sm text-muted transition-colors hover:text-foreground"
        >
          contact →
        </a>
      </div>
    </section>
  );
}
