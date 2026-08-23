import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/data/portfolio";

/**
 * Contact section: short blurb, mailto call-to-action, and social links.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <SectionHeading number="04" title="contact" />
      <div className="max-w-xl">
        <h3 className="text-3xl font-semibold tracking-tight text-foreground">
          {portfolio.contact.heading}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">
          {portfolio.contact.blurb}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            Say hello
          </a>
          {portfolio.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              [{social.label.toLowerCase()}]
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
