"use client";

import HeroParallax from "./hero-parallax";
import { ButtonLink } from "./ui";
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "./social-icons";

const navItems = [
  { label: "Videos", href: "#videos" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Watch on YouTube",
    href: "https://www.youtube.com/@ZachJeffreys",
    icon: <YouTubeIcon />,
    className: "social-chip social-chip--youtube",
  },
  {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/zacharybjeffreys/",
    icon: <LinkedInIcon />,
    className: "social-chip social-chip--linkedin",
  },
  {
    label: "Follow on Instagram",
    href: "#",
    icon: <InstagramIcon />,
    className: "social-chip social-chip--instagram",
  },
];

export default function Hero() {
  return (
    <header className="hero-wrap">
      <div className="hero-parallax-layer" aria-hidden="true">
        <HeroParallax />
        <div className="hero-scrim" />
      </div>

      <div className="section-inner">
        <nav className="site-nav" aria-label="Primary">
          <span className="site-nav__name">Zachary Jeffreys</span>
          <div className="site-nav__end">
            <ul className="site-nav__links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a className="nav-status" href="#contact">
              <span className="status-dot" />
              Open to roles
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <p className="hero-eyebrow">AI engineer · PNW tech creator</p>
              <h1 className="hero-title">
                Exploring the people and startups shaping the PNW tech scene
                <span className="text-[var(--accent-green)]">.</span>
              </h1>
              <p className="hero-bio">
                I explore the Pacific Northwest tech ecosystem through founder
                interviews, meetup recaps, startup spotlights, and conversations
                with the builders shaping what&apos;s next.
              </p>
              <div className="social-chips">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={link.className}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="hero-cta">
                <ButtonLink href="#videos" variant="primary">
                  Watch latest video
                </ButtonLink>
                <ButtonLink href="#contact" variant="ghost">
                  Get in touch
                </ButtonLink>
              </div>
            </div>

            <div className="hero-panel" id="videos">
              <h2>Latest from the channel</h2>
              <div className="latest-video">▶ Seattle AI Meetup — June recap</div>
              <div className="status-row">
                <span className="status-dot" />
                <span>Filming 2 events this month · Newsletter drops Fridays</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
