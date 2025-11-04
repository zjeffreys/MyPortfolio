"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if ((data as any)._hp) return; // honeypot field

    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "ok" : "err");
    if (res.ok) form.reset();
  }

  return (
    <section className="mx-auto max-w-5xl px-8 py-20">
      <h2 className="mb-8 text-3xl font-bold">
        Contact<span className="text-orange-500">.</span>
      </h2>

      {/* Email Button */}
      <a
        href="mailto:zachary.jeffreys.programming@gmail.com"
        className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-base font-medium text-white hover:bg-orange-500 transition-colors"
      >
        Email Me
      </a>

      {/* Divider */}
      <div className="my-10 h-px w-full bg-white/10" />

      {/* Contact Form */}
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Honeypot (hidden anti-bot field) */}
        <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

        <input
          name="name"
          placeholder="Your name"
          required
          className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          className="md:col-span-2 rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          disabled={status === "sending"}
          className="md:col-span-2 mt-2 inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-white/10 hover:bg-white/20 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "ok" && (
          <p className="md:col-span-2 text-sm text-green-400">Thanks! I’ll get back to you soon.</p>
        )}
        {status === "err" && (
          <p className="md:col-span-2 text-sm text-red-400">Something went wrong. Try again or email me directly.</p>
        )}
      </form>
    </section>
  );
}
