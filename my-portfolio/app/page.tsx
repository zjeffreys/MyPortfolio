import Hero from "./components/hero";
import Events from "./components/events";
import About from "./components/about";
import Contact from "./components/contact";
import SiteFooter from "./components/site-footer";

export default function Home() {
  return (
    <main className="page-shell">
      <Hero />
      <Events />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
