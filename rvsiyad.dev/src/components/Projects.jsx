import FeaturedProject from "@/components/FeaturedProject";
import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

/**
 * Projects section: projects with demo media render as full-width featured
 * rows with the clip beside the write-up; the rest fall into a compact
 * two-column card grid underneath.
 */
export default function Projects() {
  const featured = portfolio.projects.filter((project) => project.media);
  const others = portfolio.projects.filter((project) => !project.media);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeading number="03" title="projects" />
      <div className="flex flex-col gap-16 sm:gap-20">
        {featured.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            flip={index % 2 === 1}
          />
        ))}
      </div>
      {others.length > 0 && (
        <>
          <p className="mt-16 mb-4 font-mono text-xs text-muted">
            other projects
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-lg border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 font-mono text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:underline"
                    >
                      [github]
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:underline"
                    >
                      [live]
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
