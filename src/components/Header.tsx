import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Adicione esta linha

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);

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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-100 flex h-[4rem] w-full items-center justify-between px-[4%] transition-colors duration-300 lg:h-[5rem] lg:px-[15%] ${
          scrolled || menuOpen ? "bg-zinc-950" : ""
        }`}
      >
        <a href="#hero">
          <h1 className="flex items-center gap-1 text-2xl">
            RUAN PARREIRA
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2B7FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code-xml-icon lucide-code-xml"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </h1>
        </a>
        <nav className="lg:flex">
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              // Ícone X
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Ícone menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            )}
          </button>
          {/* Menu desktop */}
          <ul className="text-md hidden items-center space-x-10 lg:flex">
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

      {/* Sidebar animada abaixo do header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[4rem] right-0 left-0 z-50 flex w-full flex-col gap-6 rounded-b-xl bg-zinc-950 p-6 text-center shadow-lg lg:hidden"
          >
            <ul className="flex w-full flex-col gap-4 text-lg">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={handleLinkClick}
                    className={`transition-colors duration-300 hover:text-blue-500 ${
                      activeSection === section.id ? "text-blue-500" : ""
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
