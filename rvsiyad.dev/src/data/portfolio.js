/**
 * Single source of truth for all portfolio content. Components render from
 * this object, so updating copy, jobs, or projects only ever touches this
 * file.
 */
export const portfolio = {
  name: "Roble Siyad",
  role: "Software Engineer",
  prompt: "$ whoami",
  tagline: "I build systems that move money and data.",
  intro:
    "I work on pricing systems at Expedia Group, and I like building the kind of software most people only use: exchanges, time-series databases, LLM gateways. All of it runs live on this domain.",
  bio: [
    "Hi, I'm Roble. I'm a software engineer at Expedia Group, where I work on the pricing systems that apply taxes, fees, promotions, and currency exchange across the group's brands. Before that I built account-security features at Meta and replaced a legacy government data system at DEFRA, which means I've shipped code in three very different environments: big-tech scale, regulated government, and revenue-critical pricing.",
    "Outside work, I learn by building infrastructure from first principles. I've built a mini trading venue with an event-sourced matching engine and two-phase settlement, and an LLM gateway with its own write-ahead log, compressed time-series storage, and query engine. Both are live on this domain, and the demos below are real systems, not mockups.",
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
        "Build pricing components in Java and Scala that apply taxes, fees, promotions, and currency exchange across Expedia Group brands.",
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
      "If you're building something interesting, want to talk systems, or just fancy saying hi, my inbox is open.",
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
