/**
 * Single source of truth for all portfolio content. Components render from
 * this object, so updating copy, jobs, or projects only ever touches this
 * file.
 */
export const portfolio = {
  name: "Roble Siyad",
  role: "Software Engineer",
  prompt: "$ whoami",
  tagline: "I build things for the web.",
  intro:
    "Software engineer focused on building clean, reliable web applications from front to back.",
  bio: [
    "Hi, I'm Roble. I'm a software engineer who enjoys taking ideas from a rough sketch to something real people can use. I care about readable code, fast feedback loops, and interfaces that stay out of the user's way.",
    "When I'm not writing code, I'm usually digging into how things work under the hood, or tinkering with side projects that let me try new tools.",
  ],
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "Tailwind CSS",
    "Git",
  ],
  experience: [
    {
      company: "Expedia Group",
      url: "https://www.expediagroup.com",
      role: "Software Development Engineer",
      start: "Mar 2026",
      end: "Present",
      highlights: [
        "Build pricing components in Java and Scala that apply taxes, fees, and currency exchange across Expedia Group brands.",
        "Led delivery of QuoteEdit 2.0, a fee-adjustment service, driving a 42% increase in client usage.",
        "Shipped tax components in the central pricing response, validated by replaying production traffic.",
      ],
    },
  ],
  projects: [
    {
      title: "Project One",
      description:
        "A full-stack web app placeholder. Swap this with a real project: what it does, who it's for, and what makes it interesting.",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/rvsiyad",
      live: "https://example.com",
    },
    {
      title: "Project Two",
      description:
        "An API or tooling placeholder. A sentence on the problem it solves and one on the implementation.",
      tech: ["Node.js", "Express", "Redis"],
      github: "https://github.com/rvsiyad",
    },
    {
      title: "Project Three",
      description:
        "A smaller experiment or learning project. Even little builds are worth showing when they demonstrate curiosity.",
      tech: ["Python", "FastAPI"],
      github: "https://github.com/rvsiyad",
    },
    {
      title: "rvsiyad.dev",
      description:
        "This site: a one-page portfolio built with the Next.js App Router, Tailwind CSS v4, and zero client-side JavaScript.",
      tech: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/rvsiyad/rvsiyad.dev",
    },
  ],
  contact: {
    heading: "Get in touch",
    blurb:
      "My inbox is always open — whether it's about an opportunity, a project, or just to say hello.",
    email: "roblesiyad123@gmail.com",
  },
  socials: [
    { label: "GitHub", url: "https://github.com/rvsiyad" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/roble-siyad" },
  ],
};

/** Anchor links rendered by the navbar, in display order. */
export const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
