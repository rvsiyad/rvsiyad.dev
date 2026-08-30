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
    "Java",
    "Python",
    "PHP",
    "Scala",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "PostgreSQL",
    "AWS",
    "Docker",
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
    {
      company: "Meta",
      url: "https://www.meta.com",
      role: "Software Engineer Intern",
      start: "Jun 2025",
      end: "Sep 2025",
      highlights: [
        "Owned SSO, user management, and 2FA features for Managed Meta Accounts, built with Hack, React, and GraphQL.",
        "Shipped Admin Codes, an emergency 2FA flow that cut internal support queries by 82%.",
        "Integrated WhatsApp as a 2FA channel with smart SMS fallback, doubling deliveries and saving ~$1,200/day.",
      ],
    },
    {
      company: "DEFRA",
      url: "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs",
      role: "Software Developer",
      start: "Jan 2024",
      end: "Jun 2025",
      highlights: [
        "Replaced a legacy Water Abstraction system with a Node.js, Hapi, PostgreSQL, and AWS tool, boosting data workflows by 55%.",
        "Revamped unit testing with reusable seed data, cutting local test and CI times by 37.5%.",
        "Created 20+ PostgreSQL views and built 15+ GOV.UK design-compliant pages with Nunjucks.",
      ],
    },
  ],
  projects: [
    {
      title: "exchange",
      description:
        "A mini trading venue: orders enter through a REST gateway, cross in an event-sourced matching engine over Kafka, settle as two-phase transfers in TigerBeetle, and stream back to a live order-book dashboard over WebSockets.",
      tech: ["Java", "Kafka", "TigerBeetle", "WebSockets", "Docker"],
      github: "https://github.com/rvsiyad/exchange",
      live: "https://exchange.rvsiyad.dev",
      media: {
        video: "/demos/exchange.mp4",
        poster: "/demos/exchange-poster.jpg",
        alt: "exchange demo: orders resting on the book, crossing the spread, and sweeping two price levels",
      },
    },
    {
      title: "scope",
      description:
        "An OpenAI-compatible LLM gateway with an observability stack built from scratch: write-ahead log, Gorilla-compressed time-series storage, trace store, and a PromQL-lite query engine feeding live dashboards. Point any OpenAI SDK at it with one line.",
      tech: ["Go", "Docker"],
      github: "https://github.com/rvsiyad/scope",
      live: "https://scope.rvsiyad.dev/ui/",
      media: {
        video: "/demos/scope.mp4",
        poster: "/demos/scope-poster.jpg",
        alt: "scope demo: live dashboards charting gateway traffic, the request log filling, and a trace waterfall of one request's spans",
      },
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
      "My inbox is always open, whether it's about an opportunity, a project, or just to say hello.",
    email: "roblesiyad123@gmail.com",
  },
  socials: [
    { label: "GitHub", url: "https://github.com/rvsiyad" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/roble-siyad-77a479223/",
    },
  ],
};

/** Anchor links rendered by the navbar, in display order. */
export const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
