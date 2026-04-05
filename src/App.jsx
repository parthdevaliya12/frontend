import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

// 🔥 Lazy Imports
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="bg-transparent text-inherit overflow-x-hidden">
      <Navbar />

      {/* 🔥 Suspense Wrapper */}
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
