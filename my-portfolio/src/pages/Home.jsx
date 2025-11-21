import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ThreeScene from "../components/ThreeScene";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <ThreeScene />
      <About />
      <Experience />
      <Projects />
      <Contact/>
    </>
  );
}
