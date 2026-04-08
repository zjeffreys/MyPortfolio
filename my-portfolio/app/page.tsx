import Hero from "./components/hero";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="page-shell">
      <Hero />
      <Banner />
      <Projects />
      <Contact />
    </main>
  );
}
