import Image from "next/image";
import { Badge, ButtonLink } from "./ui";

const focusAreas = [
  "AI Systems",
  "Cloud Infrastructure",
  "Full-Stack Delivery",
];

export default function Hero() {
  return (
    <section id="home" className="section-shell pb-14 pt-16 sm:pb-20 sm:pt-24 lg:pt-28">
      <div className="section-inner">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-16">
          <div className="flex max-w-2xl flex-col gap-6 sm:gap-8">
            <span className="section-eyebrow">AI systems engineer / product builder</span>

            <div className="space-y-4 sm:space-y-5">
              <h1 className="display-title max-w-[12ch] text-[clamp(2.35rem,11vw,5.4rem)] leading-[0.98] sm:max-w-none">
                AI systems that
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                automate real business workflows<span className="text-[var(--accent-orange)]">.</span>
              </h1>

              <div className="space-y-3">
                <p className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-2xl">
                  Zachary Jeffreys
                </p>
                <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-xl sm:leading-8">
                  Software engineer focused on AI workflows, backend systems,
                  and product UIs that feel fast, credible, and easy to trust.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#projects" variant="secondary" className="w-full sm:w-auto">
                View Projects
              </ButtonLink>
              <ButtonLink href="#contact" variant="primary" className="w-full sm:w-auto">
                Get In Touch
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {focusAreas.map((item, index) => (
                <Badge
                  key={item}
                  tone={index === 0 ? "highlight" : "default"}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="surface-panel-strong overflow-hidden p-4 sm:p-6">
              <div className="rounded-[18px] border border-[var(--border-subtle)] bg-[rgba(10,25,47,0.62)] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  AI products, backend architecture, and web interfaces with a
                  clean, technical visual language.
                </p>
              </div>

              <div className="mt-4 overflow-hidden rounded-[22px] border border-[var(--border-subtle)] bg-[linear-gradient(180deg,rgba(17,34,64,0.78),rgba(10,25,47,0.92))] sm:mt-5">
                <Image
                  src="/images/avatar.png"
                  alt="Zachary Jeffreys"
                  width={420}
                  height={420}
                  className="mx-auto h-auto w-full max-w-[280px] object-contain pt-4 sm:max-w-[340px] sm:pt-6"
                  priority
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                <Badge tone="highlight">
                  <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  Available for engineering roles
                </Badge>
                <Badge>AI + Full Stack</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
