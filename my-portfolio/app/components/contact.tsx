import { ButtonLink } from "./ui";

export default function Contact() {
  return (
    <div className="section-inner">
      <div className="hire-banner" id="contact">
        <p>
          <strong>Hiring?</strong> I bring AI systems experience plus an audience
          in the local ecosystem.
        </p>
        <ButtonLink
          href="mailto:zachary.jeffreys.programming@gmail.com"
          variant="ghost"
        >
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
