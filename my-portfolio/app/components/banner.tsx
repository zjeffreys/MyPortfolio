import { Badge } from "./ui";

const skills = [
  "AI Systems",
  "Python",
  "FastAPI",
  "AWS",
  "Postgres",
  "Vector Search",
  "Data Pipelines",
  "API Design",
  "Next.js",
  "Full-Stack Delivery",
];

export default function SkillsBanner() {
  return (
    <section className="section-shell pb-8 sm:pb-10" aria-label="Core skills">
      <div className="section-inner">
        <div className="surface-panel flex flex-col gap-6 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <p className="section-eyebrow">Core stack</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl">
              Building across product, data, and AI infrastructure.
            </h2>
          </div>

          <ul className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <li key={skill}>
                <Badge tone={index % 4 === 0 ? "highlight" : "default"}>
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
