import Link from "next/link";
// import Image from "next/image"; // uncomment if you have thumbnails

type Project = {
  title: string;
  blurb: string;
  tech: string[];
  href?: string;
  // img?: string; // e.g. "/projects/my-thumb.webp"
};

const projects: Project[] = [
  {
    title: "SmarterChatbots",
    blurb: "No-code AI chatbots with FastAPI backend, pgvector, and website crawling.",
    tech: ["Python", "FastAPI", "Postgres", "LLMs", "AWS"],
    href: "https://smarterchatbots.com",
  },
  {
    title: "AI Video Pipeline",
    blurb: "Script → voice clone → image gen → timeline render for short-form content.",
    tech: ["Python", "FFmpeg", "ElevenLabs", "Next.js"],
  },
  {
    title: "Data Agent",
    blurb: "Automated data ingestion + embeddings + retrieval for internal docs.",
    tech: ["Python", "AWS Lambda", "DynamoDB", "OpenAI"],
  },
  {
    title: "Portfolio",
    blurb: "This site — responsive, dark mode, animated skill marquee.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    href: "/",
  },
  {
    title: "APIs Toolkit",
    blurb: "Reusable auth, rate-limit, tracing, and error patterns for services.",
    tech: ["Node", "FastAPI", "Redis", "OpenTelemetry"],
  },
];

export default function Projects() {
  return (
    <section aria-label="Projects" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Projects<span className="text-orange-500">.</span>
        </h2>

        {/* Square bubbles grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <li key={p.title}>
              <Card project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ project }: { project: Project }) {
  const content = (
    <div
      className={[
        // square bubble
        "aspect-square",
        "rounded-2xl",
        "bg-white/5 dark:bg-white/5",
        "border border-white/10",
        "p-5",
        "flex flex-col",
        "transition",
        "hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
      ].join(" ")}
      tabIndex={0}
    >
      {/* Thumbnail area – gradient placeholder; swap with <Image> if you have one */}
      <div className="relative mb-4 flex-1 rounded-xl bg-gradient-to-br from-zinc-800/60 to-zinc-900/40 ring-1 ring-white/10 overflow-hidden">
        {/* If you have an image: 
        <Image
          src={project.img!}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        */}
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_70%_30%,black,transparent)] bg-orange-500/10" />
        <div className="absolute bottom-3 left-3 text-sm font-medium text-white/70">
          {project.tech.slice(0, 2).join(" • ")}
        </div>
      </div>

      {/* Text */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.blurb}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.href ? (
    <Link href={project.href} className="block group" target={project.href.startsWith("http") ? "_blank" : undefined}>
      {content}
    </Link>
  ) : (
    content
  );
}
