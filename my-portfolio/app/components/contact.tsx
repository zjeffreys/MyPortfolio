"use client";

import { useState } from "react";
import { ButtonLink, SectionHeading } from "./ui";

type ContactStatus = "idle" | "sending" | "ok" | "err";

export default function ContactSection() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (typeof data._hp === "string" && data._hp.length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus(res.ok ? "ok" : "err");

      if (res.ok) {
        form.reset();
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact" className="section-shell pb-24 pt-8 sm:pb-28">
      <div className="section-inner">
        <div className="surface-panel-strong overflow-hidden px-5 py-6 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something useful"
                description="Open to AI, platform, and product engineering work where strong systems thinking and clean execution both matter."
              />

              <div className="rounded-[26px] border border-[var(--border-subtle)] bg-[rgba(10,25,47,0.64)] p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  Direct email
                </p>
                <a
                  href="mailto:zachary.jeffreys.programming@gmail.com"
                  className="mt-3 block break-all text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]"
                >
                  zachary.jeffreys.programming@gmail.com
                </a>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Email is the fastest way to reach me for full-time roles,
                  contract work, or product conversations around AI systems and
                  developer tooling.
                </p>
                <div className="mt-5">
                  <ButtonLink
                    href="mailto:zachary.jeffreys.programming@gmail.com"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Email Me
                  </ButtonLink>
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-[26px] border border-[var(--border-subtle)] bg-[rgba(10,25,47,0.56)] p-4 sm:p-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="_hp"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="field-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="field-input"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={6}
                  required
                  className="field-input md:col-span-2"
                />

                <button
                  disabled={status === "sending"}
                  className="ui-button ui-button--secondary mt-2 w-full md:col-span-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "ok" ? (
                  <p className="md:col-span-2 text-sm text-emerald-300">
                    Thanks. I&apos;ll get back to you soon.
                  </p>
                ) : null}

                {status === "err" ? (
                  <p className="md:col-span-2 text-sm text-red-300">
                    Something went wrong. Try again or email me directly.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
