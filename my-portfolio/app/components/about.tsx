import Image from "next/image";
import { ButtonLink } from "./ui";

export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-heading">About Zachary</h2>
            <p>
              I&apos;m an AI engineer based in the Pacific Northwest. I build AI
              products, attend local startup and AI events, interview founders,
              and document the people shaping the region&apos;s tech ecosystem.
            </p>
            <div className="about-cta">
              <ButtonLink
                href="https://www.linkedin.com/in/zacharybjeffreys/"
                variant="ghost"
              >
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href="#contact" variant="primary">
                Get in touch
              </ButtonLink>
            </div>
          </div>
          <div className="about-portrait">
            <Image
              src="/images/zachary-headshot.png"
              alt="Zachary Jeffreys"
              width={429}
              height={431}
              className="about-portrait__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
