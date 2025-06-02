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
      className={`flex w-full justify-between h-[5rem] px-[15%] items-center sticky z-100 top-0 transition-colors duration-300 ${
        scrolled ? "bg-zinc-950" : ""
      }`}
    >
      <a href="">
        <h1 className="text-2xl">
          RUAN PARREIRA <span className="text-blue-500">.</span>
        </h1>
      </a>
      <nav className="flex">
        <ul className="flex space-x-10 text-md items-center">
          <li>
            <a href="">INÍCIO</a>
          </li>
          <li>
            <a href="">SOBRE</a>
          </li>
          <li>
            <a href="">HABILIDADES</a>
          </li>
          <li>
            <a href="">PROJETOS</a>
          </li>
          <li>
            <a href="">CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
