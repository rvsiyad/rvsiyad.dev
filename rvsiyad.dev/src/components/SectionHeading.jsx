/**
 * Shared section heading: mono accent number, title, and a subtle rule,
 * e.g. "01. about ————".
 */
export default function SectionHeading({ number, title }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-foreground">
        <span aria-hidden="true" className="font-mono text-base text-accent">
          {number}.
        </span>
        {title}
      </h2>
      <div aria-hidden="true" className="h-px flex-1 bg-border-subtle" />
    </div>
  );
}
