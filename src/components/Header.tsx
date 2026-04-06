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
          const offset = el.offsetTop - 90;
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
        className={`fixed top-0 left-0 right-0 z-[100] flex h-[4rem] w-full items-center justify-between px-[4%] transition-all duration-500 lg:h-[5rem] lg:px-[12%] ${
          scrolled || menuOpen 
            ? "bg-zinc-950/80 shadow-2xl backdrop-blur-md py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <a href="#hero" className="group">
          <h1 className="flex items-center gap-2 text-xl font-black tracking-tighter text-white lg:text-2xl">
            RUAN
            <span className="text-blue-500">PARREIRA</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B7FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
            </motion.div>
          </h1>
        </a>

        <nav className="flex items-center gap-8">
          {/* Menu desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`relative px-4 py-2 text-sm font-bold tracking-widest transition-all duration-300 hover:text-blue-500 ${
                    activeSection === section.id ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Botão de Call to Action opcional ou apenas o menu mobile */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-blue-600 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
            )}
          </button>
        </nav>
      </header>

      {/* Sidebar animada Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {sections.map((section, idx) => (
                <motion.li 
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={`#${section.id}`}
                    onClick={handleLinkClick}
                    className={`text-2xl font-black tracking-tighter transition-all hover:text-blue-500 ${
                      activeSection === section.id ? "text-blue-500 scale-110" : "text-white/60"
                    }`}
                  >
                    {section.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}