"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    const parallax = document.getElementById("heroParallax");
    if (!parallax || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const hero = parallax.closest(".hero-wrap");
    let ticking = false;
    let animationId = 0;
    let active = false;

    function update() {
      animationId = 0;
      if (!active) {
        parallax!.style.willChange = "";
        return;
      }

      const rate = window.innerWidth < 768 ? 0.18 : 0.3;
      const y = window.scrollY * rate;
      parallax!.style.transform = `translate3d(0, ${y}px, 0)`;
      ticking = false;
    }

    function onScroll() {
      if (!active) return;
      if (!ticking) {
        ticking = true;
        parallax!.style.willChange = "transform";
        animationId = requestAnimationFrame(update);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (!active) {
          parallax!.style.transform = "";
          parallax!.style.willChange = "";
        } else {
          update();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    if (hero) observer.observe(hero);
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      id="heroParallax"
      className="hero-parallax"
      role="img"
      aria-label="Seattle skyline with Space Needle"
    />
  );
}
