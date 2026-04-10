import { lazy, Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";

// Lazy load para componentes pesados abaixo da dobra inicial
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<div className="flex h-32 items-center justify-center text-blue-500">...</div>}>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
