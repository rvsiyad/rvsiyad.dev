/**
 * Featured project row: a looping demo clip in a browser-style frame beside
 * the write-up, mirrored on alternate rows via `flip`. Users with reduced
 * motion enabled get the poster image instead of the video, handled in CSS,
 * so the page stays free of client-side JavaScript.
 */
export default function FeaturedProject({ project, flip }) {
  const liveUrl = project.live ? new URL(project.live) : null;
  const liveLabel = liveUrl
    ? liveUrl.host + liveUrl.pathname.replace(/\/$/, "")
    : null;

  return (
    <article className="grid items-center gap-7 md:grid-cols-12">
      <div
        className={`overflow-hidden rounded-lg border border-border-subtle bg-surface transition-colors hover:border-accent/50 md:col-span-7 ${
          flip ? "md:order-2" : ""
        }`}
      >
        <div className="flex items-center gap-2 border-b border-border-subtle px-3 py-2">
          <span className="size-2 rounded-full bg-border-subtle" />
          <span className="size-2 rounded-full bg-border-subtle" />
          <span className="size-2 rounded-full bg-border-subtle" />
          {liveLabel && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 truncate font-mono text-[0.68rem] text-muted transition-colors hover:text-accent"
            >
              {liveLabel}
            </a>
          )}
        </div>
        <video
          className="block w-full motion-reduce:hidden"
          src={project.media.video}
          poster={project.media.poster}
          autoPlay
          loop
          muted
          playsInline
          aria-label={project.media.alt}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- reduced-motion fallback; next/image optimization isn't worth it for a hidden-by-default poster */}
        <img
          className="hidden w-full motion-reduce:block"
          src={project.media.poster}
          alt={project.media.alt}
        />
      </div>
      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <p className="font-mono text-xs tracking-wider text-accent">
          featured project
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 rounded-lg border border-border-subtle bg-surface p-4 text-sm leading-relaxed text-muted">
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
      </div>
    </article>
  );
}
