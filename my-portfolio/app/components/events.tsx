import Image from "next/image";
import { upcomingEvents } from "../data/events";

export default function Events() {
  return (
    <section id="events" className="page-section">
      <div className="section-inner">
        <h2 className="section-heading">Where I&apos;ll Be Next</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <a
              key={event.href}
              href={event.href}
              className="event-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="event-thumb">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="event-body">
                <p className="event-when">{event.when}</p>
                <h3>{event.title}</h3>
                <p>
                  {event.location} · {event.description}
                </p>
                <span
                  className={
                    event.tagVariant === "waitlist"
                      ? "event-tag event-tag--waitlist"
                      : "event-tag"
                  }
                >
                  {event.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
