import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "highlight" | "accent";
  className?: string;
};

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="section-title">
          {title}
          <span className="text-[var(--accent-orange)]">.</span>
        </h2>
        {description ? <p className="body-copy">{description}</p> : null}
      </div>
    </div>
  );
}

export function Badge({
  children,
  tone = "default",
  className = "",
}: BadgeProps) {
  const toneClass =
    tone === "highlight"
      ? "ui-badge ui-badge--highlight"
      : tone === "accent"
        ? "ui-badge ui-badge--accent"
        : "ui-badge";

  return <span className={`${toneClass} ${className}`.trim()}>{children}</span>;
}

export function ButtonLink({
  children,
  href,
  variant = "secondary",
  className = "",
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary"
      ? "ui-button ui-button--primary"
      : variant === "ghost"
        ? "ui-button ui-button--ghost"
        : "ui-button ui-button--secondary";

  const classes = `${variantClass} ${className}`.trim();
  const isRoute = href.startsWith("/");
  const isExternal = href.startsWith("http");

  if (isRoute) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
