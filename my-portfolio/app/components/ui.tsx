import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const variantClass =
    variant === "ghost" ? "ui-button ui-button--ghost" : "ui-button ui-button--primary";

  const classes = `${variantClass} ${className}`.trim();
  const isRoute = href.startsWith("/");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

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
      rel={isExternal && href.startsWith("http") ? "noopener noreferrer" : undefined}
      target={isExternal && href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
