import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

/**
 * Experience section: stacked work history entries with role, company,
 * mono date range, and highlight bullets.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <SectionHeading number="02" title="experience" />
      <div className="space-y-12">
        {portfolio.experience.map((job) => (
          <article
            key={`${job.company}-${job.start}`}
            className="border-l border-border-subtle pl-6"
          >
            <h3 className="text-lg font-medium text-foreground">
              {job.role}{" "}
              <span className="text-muted">
                @{" "}
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition-colors hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </span>
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {job.start} – {job.end}
            </p>
            <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-muted">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="font-mono text-accent">
                    ▹
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
