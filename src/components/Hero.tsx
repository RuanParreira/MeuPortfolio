import Button from "./Button";
import { motion } from "framer-motion";
import Curriculo from "./Curriculo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mb-5 scroll-mt-[4rem] px-[4%] py-10 lg:mb-0 lg:h-[calc(100vh-5rem)] lg:scroll-mt-[5rem] lg:px-0 lg:py-0"
    >
      <div className="flex h-full flex-col-reverse items-center lg:flex-row lg:space-x-[30rem]">
        <div className="flex h-full flex-col justify-center gap-4 lg:px-[15%]">
          <h2 className="lg:text-xl">SOFTWARE DEVELOPER</h2>
          <h2 className="text-4xl lg:text-5xl">
            <h2>Olá, eu sou o Ruan, Desenvolvedor FullStack</h2>
          </h2>
          <p className="text-xl lg:text-justify">
            Transformo ideias em experiências digitais — Unindo programação,
            design gráfico e paixão por tecnologias!
          </p>
          <div className="flex flex-col items-center justify-center gap-5 lg:items-start">
            <div className="flex items-center justify-center space-x-5">
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="#contact"
                className="flex h-10 w-40 cursor-pointer items-center justify-center rounded-md bg-blue-500 text-lg font-bold text-zinc-900 hover:bg-blue-800"
              >
                CONTATO
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="./curriculo.pdf"
                download="Ruan Gonçalves Parreira.pdf"
              >
                <Curriculo />
              </motion.a>
            </div>
            <div className="flex gap-5">
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
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
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
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
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
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
              </motion.a>
            </div>
          </div>
        </div>
        <img
          src="./hero.webp"
          alt="Foto de Perfil"
          className="h-80 w-70 mask-t-from-80% mask-r-from-10% mask-l-from-80% lg:absolute lg:right-0 lg:bottom-0 lg:z-0 lg:h-full lg:w-auto"
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
          className="lucide lucide-arrow-down-icon lucide-arrow-down bottom-0 left-1/2 hidden -translate-x-1/2 animate-bounce hover:animate-none hover:stroke-blue-500 lg:absolute lg:bottom-10 lg:block"
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
