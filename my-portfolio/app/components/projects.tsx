import { Badge, ButtonLink, SectionHeading } from "./ui";

type Project = {
  title: string;
  blurb: string;
  tech: string[];
  category: string;
  status: string;
  href?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "SaferPrompt",
    category: "AI Safety Platform",
    status: "Live product",
    blurb:
      "Built an AI workflow layer for businesses that need the upside of LLMs without exposing sensitive data. SaferPrompt redacts private information before AI interactions, routes requests across multiple models to improve response quality, and adds compliance-aware safeguards around real business usage.",
    tech: ["Prompt Security", "PII Redaction", "Multi-Model Routing", "Compliance"],
    href: "https://www.saferprompt.com/",
    featured: true,
  },
  {
    title: "Vibeset",
    category: "Music Intelligence",
    status: "Early AI engineer",
    blurb:
      "As an early AI engineer at Vibeset, I worked on AI-powered music curation systems that turned metadata, prompting, and custom model logic into a more interactive listening experience. The engineering problem was real: bring order to messy catalog data, generate useful music intelligence, and help power multi-modal product experiences that go beyond passive playback.",
    tech: ["Metadata Systems", "Prompt Engineering", "Music Curation", "Multi-Modal UX"],
  },
  {
    title: "Data Agent",
    category: "Internal tooling",
    status: "Private build",
    blurb:
      "Automated data ingestion, embedding generation, and retrieval workflows for internal knowledge bases and docs.",
    tech: ["Python", "AWS Lambda", "DynamoDB", "OpenAI"],
  },
  {
    title: "APIs Toolkit",
    category: "Platform foundation",
    status: "Reusable system",
    blurb:
      "Reusable auth, rate-limit, tracing, and error-handling patterns for services that need consistency across endpoints.",
    tech: ["Node", "FastAPI", "Redis", "OpenTelemetry"],
  },
  {
    title: "Portfolio",
    category: "Frontend system",
    status: "Current build",
    blurb:
      "This site, rebuilt into a cleaner dark portfolio foundation with shared styles and more consistent hierarchy.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    href: "/",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="section-shell py-14 sm:py-24">
      <div className="section-inner">
        <div className="flex flex-col gap-8 sm:gap-10">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            description="A cleaner technical overview of product, automation, and platform work."
          />

          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <li key={project.title} className={project.featured ? "lg:col-span-2" : ""}>
                <ProjectCard project={project} index={index + 1} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={[
        "surface-panel-strong h-full p-4 sm:p-6",
        project.featured ? "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6" : "flex flex-col gap-6",
      ].join(" ")}
    >
      <div className="rounded-[20px] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,rgba(17,34,64,0.84),rgba(10,25,47,0.9))] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="highlight">{project.category}</Badge>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            0{index}
          </span>
        </div>

        <div className="mt-6 sm:mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {project.status}
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
            {project.title}
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {project.tech.join(" • ")}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-4 sm:gap-5 lg:mt-0">
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          {project.blurb}
        </p>

        <ul className="flex flex-wrap gap-2.5">
          {project.tech.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--border-subtle)] pt-4 sm:pt-5">
          {project.href ? (
            <ButtonLink href={project.href} variant="secondary" className="w-full px-4 py-2.5 text-sm sm:w-auto">
              View Project
            </ButtonLink>
          ) : (
            <span className="w-full rounded-full border border-[var(--border-subtle)] px-4 py-2 text-center text-sm text-[var(--text-secondary)] sm:w-auto">
              Private Project
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
