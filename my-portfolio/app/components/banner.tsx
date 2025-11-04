"use client";

const skills = [
  "Python",
  "Machine Learning / AI",
  "AWS / Cloud Infrastructure",
  "Data Engineering / APIs",
  "Full-Stack Development",
];

export default function SkillsBanner() {
  return (
    <section
      className="relative w-full border-t border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
      aria-label="Skills"
    >
      {/* Centered content width, but the mask+overflow apply to the full section */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <ul className="marquee">
          {[...skills, ...skills].map((skill, i) => (
            <li key={`${skill}-${i}`} className="marquee-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <style jsx global>{`
        /* Smooth infinite loop (two copies of content) */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* The moving track (no padding here to avoid the seam) */
        .marquee {
          display: flex;
          gap: 3rem;              /* ~gap-12 */
          width: max-content;     /* shrink-wrap to content */
          white-space: nowrap;
          will-change: transform;
          animation: marquee 28s linear infinite;
          color: rgba(156, 163, 175, 0.9); /* text-gray-400/90 */
        }

        .marquee-item {
          font-size: 1.125rem;    /* text-lg */
          font-weight: 500;       /* font-medium */
          letter-spacing: 0.02em; /* tracking-wide-ish */
          white-space: nowrap;
          transition: color 150ms ease;
        }
        .marquee-item:hover { color: rgb(249, 115, 22); } /* orange-500 */

        /* Edge fade WITHOUT overlay boxes:
           use a mask so no visible hard bars appear at either side */
        section[aria-label="Skills"] {
          /* fade in/out the edges of the whole section */
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,1) 8%,
            rgba(0,0,0,1) 92%,
            rgba(0,0,0,0) 100%
          );
                  mask-image: linear-gradient(
            to right,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,1) 8%,
            rgba(0,0,0,1) 92%,
            rgba(0,0,0,0) 100%
          );
        }
      `}</style>
    </section>
  );
}
