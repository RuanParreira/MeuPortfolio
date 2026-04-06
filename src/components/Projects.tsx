import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";

const projectsData = [
  {
    image: "./SGAC.png",
    title: "SGAC",
    description:
      "Sistema de voluntariado para organizar eventos e doações de maneira eficaz. Foco em gestão e impacto social.",
    languages: ["HTML", "TailwindCSS", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/oCrazyoff/sgac",
    site: "https://yellowgreen-meerkat-908084.hostingersite.com/",
  },
  {
    image: "./siteEtec.webp",
    title: "Etec Igarapava",
    description:
      "Portal institucional desenvolvido para otimizar o acesso à informação para a comunidade acadêmica da Etec Igarapava.",
    languages: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EtecIgarapava/site-etec",
    site: "https://etecigarapava.github.io/site-etec/",
  },
  {
    image: "./bannerOrganizaLab.webp",
    title: "OrganizaLab",
    description:
      "Solução inteligente para gestão de laboratórios, facilitando o controle de inventário e agendamentos de equipamentos.",
    languages: ["HTML", "CSS", "PHP", "Laravel"],
    github: "https://github.com/RuanParreira/OrganizaLAB",
    site: "https://organizalab.site/",
  },
  {
    image: "./portfolioAndre.webp",
    title: "Portfólio Andre",
    description:
      "Web design moderno e responsivo focado em branding pessoal, explorando animações avançadas com Tailwind CSS.",
    languages: ["HTML", "TailwindCSS", "Motion"],
    github: "https://github.com/RuanParreira/PortfolioAndre",
    site: "https://ruanparreira.github.io/PortfolioAndre/",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-[4rem] bg-[#0F0F0F] px-[6%] py-24 lg:scroll-mt-[5rem] lg:px-[12%]"
    >
      <div className="mb-16 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase italic">Portfolio</h2>
          <h3 className="mt-2 text-4xl font-extrabold text-white lg:text-5xl">PROJETOS EM DESTAQUE</h3>
          <span className="mx-auto mt-6 block h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Navegação Customizada */}
        <div className="absolute -top-16 right-0 hidden space-x-4 lg:flex">
          <button
            ref={prevRef}
            className="cursor-pointer group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-blue-500 hover:bg-blue-500/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-blue-500 transition-colors">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="cursor-pointer group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-blue-500 hover:bg-blue-500/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-blue-500 transition-colors">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="pb-16!"
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide key={idx} className="py-8">
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#161616] p-4 transition-all hover:border-blue-500/30 shadow-2xl h-[520px]"
              >
                {/* Imagem com Overlay */}
                <div className="relative h-56 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col justify-between pt-6">
                  <div className="space-y-4">
                    <h5 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors underline underline-offset-8 decoration-blue-500/0 group-hover:decoration-blue-500/50">
                      {project.title}
                    </h5>
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.languages.map((lang, i) => (
                        <span 
                          key={i}
                          className="rounded-lg bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/10 group-hover:border-blue-500/30"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links de Ação */}
                  <div className="flex items-center space-x-6 pt-6 border-t border-white/5 mt-auto">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Código
                    </a>
                    <a
                      href={project.site}
                      className="group/btn flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visualizar</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover/btn:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
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
