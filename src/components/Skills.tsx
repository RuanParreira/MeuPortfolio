import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-[5rem] px-[15%] py-[5rem]">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-4xl">HABILIDADES</h4>
        <span className="mt-4 mb-10 block h-1 w-24 bg-blue-500"></span>
        <div className="grid grid-cols-3 gap-10">
          <SkillCard
            title="Frontend"
            description="React, NextJs, Tailwind CSS"
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B7FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevrons-left-right-icon lucide-chevrons-left-right mb-2"
              >
                <path d="m9 7-5 5 5 5" />
                <path d="m15 7 5 5-5 5" />
              </motion.svg>
            }
          />
          <SkillCard
            title="Backend"
            description="PHP, MySql"
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16A34A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-database-icon lucide-database"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </motion.svg>
            }
          />
          <SkillCard
            title="Desenvolvimento Web"
            description="HTML, CSS, JavaScript"
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9333EA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-globe-icon lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </motion.svg>
            }
          />
          <SkillCard
            title="Manutençao de Hardware"
            description="Computadores, Notebook"
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#62748E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-wrench-icon lucide-wrench"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </motion.svg>
            }
          />
          <SkillCard
            title="Edição de Imagem"
            description="Photoshop, Canva"
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CA8A04"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-image-icon lucide-image"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </motion.svg>
            }
          />
          <SkillCard
            title="Aprendizado Contínuo"
            description="Evolução e domínio de novas ferramentas"
            icon={
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EA580C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </motion.svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="skillCards"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mb-2"
      >
        {icon}
      </motion.div>
      <div className="space-y-2 text-xl">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
