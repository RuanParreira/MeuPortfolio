import Button from "./Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-5rem)] scroll-mt-[5rem]">
      <div className="flex h-full space-x-[30rem]">
        <div className="flex h-full flex-col justify-center gap-4 px-[15%]">
          <h2 className="text-xl">SOFTWARE DEVELOPER</h2>
          <h2 className="text-5xl">
            Olá eu sou o Ruan, Desenvolvedor FullStack
          </h2>
          <p className="text-justify text-xl">
            Atualmente cursando Sistemas de Informação na Uniube (5º período),
            desenvolvo soluções web, unindo programação e design. Também tenho
            experiência em manutenção de computadores, trazendo um olhar
            completo para tecnologia.
          </p>
          <div className="flex flex-col justify-center gap-5">
            <a
              href="#contact"
              className="mt-5 flex h-10 w-60 cursor-pointer items-center justify-center rounded-md bg-blue-500 text-lg font-bold text-zinc-900 hover:bg-blue-800"
            >
              ENTRE EM CONTATO
            </a>
            <div className="flex gap-5">
              <a
                href="https://github.com/RuanParreira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github-icon lucide-github stroke-blue-500 group-hover:stroke-zinc-900"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/ruan-parreira-0a4332279/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin stroke-blue-500 group-hover:stroke-zinc-900"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
              </a>
              <a
                href="https://www.instagram.com/ruan.parreira/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram-icon lucide-instagram stroke-blue-500 group-hover:stroke-zinc-900"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <img
          src="./hero.png"
          alt="Foto de Perfil"
          className="absolute right-0 bottom-0 z-0 h-full mask-t-from-80% mask-r-from-10% mask-l-from-80% object-fill"
        />
      </div>
      <a href="#about">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-down-icon lucide-arrow-down absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hover:animate-none hover:stroke-blue-500"
          whileHover={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </motion.svg>
      </a>
    </section>
  );
}
