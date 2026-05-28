import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import CurrentFocus from "./components/CurrentFocus";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function Divider() {
  return <div className="section-divider" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        {/* Alternating subtle background for visual rhythm */}
        <div className="bg-white/[0.015]">
          <Skills />
        </div>
        <Divider />
        <Experience />
        <Divider />
        <div className="bg-white/[0.015]">
          <Education />
        </div>
        <Divider />
        <Projects />
        <Divider />
        <div className="bg-white/[0.015]">
          <CurrentFocus />
        </div>
        <Divider />
        <Posts />
      </main>
      <Footer />
    </>
  );
}
