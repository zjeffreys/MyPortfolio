export type EventItem = {
  title: string;
  when: string;
  location: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  tag: string;
  tagVariant?: "default" | "waitlist";
};

export const upcomingEvents: EventItem[] = [
  {
    title: "The Shipyard Vol. 2: Brewing After Dark x Lovable",
    when: "Tue, Jun 23 · Seattle",
    location: "SURF Incubator",
    description: "6:00–9:30 PM · Women & allies build night with Lovable",
    href: "https://luma.com/i48tcltr",
    image: "/images/events/shipyard-vol2.jpg",
    imageAlt: "The Shipyard Vol. 2: Brewing After Dark x Lovable",
    tag: "Waitlist open",
    tagVariant: "waitlist",
  },
  {
    title: "AI Bootcamp Level 2: Automate Your Life, Work, and Business",
    when: "Sat, Jun 27 · Tacoma",
    location: "Bryant Neighborhood Center",
    description: "2:30–5:30 PM · Hands-on AI workflows",
    href: "https://www.aiili.org/events/ai-bootcamp/level-2/2026/june-27",
    image: "/images/events/ai-bootcamp-level2.jpg",
    imageAlt: "AI Bootcamp Level 2: Automate Your Life, Work, and Business",
    tag: "Register open",
  },
];
