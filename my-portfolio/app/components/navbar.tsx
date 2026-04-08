"use client";

import { useState } from "react";
import { ButtonLink } from "./ui";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto w-full max-w-[1120px]">
        <nav className="surface-panel px-4 py-3 sm:px-5" aria-label="Primary">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[rgba(10,25,47,0.58)] text-sm font-semibold tracking-[0.08em] text-[var(--text-primary)] sm:h-11 sm:w-11">
                ZJ
              </span>

              <div className="min-w-0">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[var(--text-muted)] sm:text-[0.68rem] sm:tracking-[0.28em]">
                  AI Systems
                </p>
                <p className="truncate text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                  Zachary Jeffreys
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-3 sm:gap-4 md:flex">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ButtonLink href="#contact" variant="secondary" className="px-4 py-2.5 text-sm">
                Contact
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[rgba(10,25,47,0.58)] text-[var(--text-primary)] transition-colors hover:bg-[rgba(17,34,64,0.88)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(251,146,60,0.45)] md:hidden"
              aria-controls="mobile-nav-panel"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                    isOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                    isOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {isOpen ? (
            <div
              id="mobile-nav-panel"
              className="mt-4 border-t border-[var(--border-subtle)] pt-4 md:hidden"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-subtle)] hover:bg-[rgba(10,25,47,0.42)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(251,146,60,0.45)]"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    className="ui-button ui-button--primary w-full"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
