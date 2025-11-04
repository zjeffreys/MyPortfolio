import Image from "next/image";
import Hero from "./components/hero";
import Banner from "./components/banner"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <Hero/>
      <Banner/>
      {/* <About/> */}
      <Projects/>
      <Contact/>
    </main>
  );
}
