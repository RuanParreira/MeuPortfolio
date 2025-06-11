import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";

const projectsData = [
  {
    image: "./print1.png",
    title: "Organiza Lab",
    description: "texo",
    languages: ["React", "Laravel", "Next"],
    github: "",
    site: "",
  },
  {
    image: "./print1.png",
    title: "Organiza Lab",
    description: "texo",
    languages: ["React", "Laravel", "Next"],
    github: "",
    site: "",
  },
  {
    image: "./print1.png",
    title: "Organiza Lab",
    description: "texo",
    languages: ["React", "Laravel", "Next"],
    github: "",
    site: "",
  },
  {
    image: "./print1.png",
    title: "Organiza Lab",
    description: "texo",
    languages: ["React", "Laravel", "Next"],
    github: "",
    site: "",
  },
  {
    image: "./print1.png",
    title: "Organiza Lab",
    description: "texo",
    languages: ["React", "Laravel", "Next"],
    github: "",
    site: "",
  },

  // Adicione outros projetos aqui
];

// Defina os variants fora do componente
const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.07, boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)" },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      className="flex w-full scroll-mt-[4rem] flex-col items-center justify-center bg-[#0F0F0F] px-[4%] py-10 lg:scroll-mt-[5rem] lg:px-[15%] lg:py-20"
    >
      <div className="flex flex-col items-center">
        <h5 className="text-4xl">PROJETOS</h5>
        <span className="mt-4 block h-1 w-24 bg-blue-500"></span>
        <p className="mt-4 mb-4 text-center text-xl lg:mb-0 lg:text-left">
          Alguns dos projetos que desenvolvi recentemente
        </p>
      </div>
      <div className="relative w-full">
        {/* Setas personalizadas */}
        <motion.button
          ref={prevRef}
          whileHover={{ scale: 1.4 }} // aumenta e muda cor ao passar o mouse
          transition={{ type: "spring", stiffness: 300 }}
          whileTap={{ scale: 0.9 }} // efeito ao clicar
          className="transitio absolute top-1/2 -left-[1rem] z-10 -translate-y-1/2 cursor-pointer text-white lg:left-[-2.5rem]"
        >
          {/* Ícone de seta para a esquerda */}
          <svg
            width="50"
            height="50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="hover:stroke-blue-500"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
        <motion.button
          ref={nextRef}
          whileHover={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 300 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-1/2 -right-[1rem] z-10 -translate-y-1/2 cursor-pointer text-white lg:right-[-2.5rem]"
        >
          {/* Ícone de seta para a direita */}
          <svg
            width="50"
            height="50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="hover:stroke-blue-500"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // até 640px: 1 card
            640: { slidesPerView: 1 }, // até 768px: 1 card
            768: { slidesPerView: 2 }, // até 1024px: 2 cards
            1024: { slidesPerView: 3 }, // acima de 1024px: 3 cards
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{ clickable: true }}
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide key={idx} className="px-[1rem] py-6">
              <motion.div
                className="projectCards"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-80 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full rounded-t-xl object-cover"
                    variants={imageVariants}
                    transition={{ type: "tween", duration: 0.2 }}
                  />
                </div>
                <div className="flex flex-col space-y-5 px-5">
                  <div className="space-y-5">
                    <h5 className="text-xl font-bold">{project.title}</h5>
                    <p className="h-[6rem] overflow-auto text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {project.languages.map((lang, i) => (
                      <span className="linguagens" key={i}>
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github-icon lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Git
                    </a>
                    <a href={project.site} className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link-icon lucide-external-link"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      Site
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
