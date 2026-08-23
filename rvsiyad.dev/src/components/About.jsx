import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

/**
 * About section: bio paragraphs and the current skill set rendered as mono
 * tags.
 */
export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading number="01" title="about" />
      <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
        {portfolio.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {portfolio.skills.map((skill) => (
          <li
            key={skill}
            className="rounded border border-border-subtle px-2.5 py-1 font-mono text-xs text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
