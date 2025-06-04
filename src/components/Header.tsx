import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "INÍCIO" },
  { id: "about", label: "SOBRE" },
  { id: "skills", label: "HABILIDADES" },
  { id: "projects", label: "PROJETOS" },
  { id: "contact", label: "CONTATO" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);

      // Detecta a seção ativa
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offset = el.offsetTop - 80;
          if (window.scrollY >= offset) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-100 flex h-[5rem] w-full items-center justify-between px-[15%] transition-colors duration-300 ${
        scrolled ? "bg-zinc-950" : ""
      }`}
    >
      <a href="#hero">
        <h1 className="text-2xl">
          RUAN PARREIRA <span className="text-blue-500">.</span>
        </h1>
      </a>
      <nav className="flex">
        <ul className="text-md flex items-center space-x-10">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-full ${
                  activeSection === section.id ? "after:w-full" : "after:w-0"
                } `}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
