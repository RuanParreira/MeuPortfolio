import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
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
          <li>
            <a href="#hero">INÍCIO</a>
          </li>
          <li>
            <a href="#about">SOBRE</a>
          </li>
          <li>
            <a href="#skills">HABILIDADES</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
