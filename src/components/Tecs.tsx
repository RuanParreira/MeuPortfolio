import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const icons = [
  <img src="html5.svg" alt="HTML5" className="h-15 w-15" />,
  <img src="css.svg" alt="CSS" className="h-15 w-15" />,
  <img src="php.svg" alt="PHP" className="h-15 w-15" />,
  <img src="tailwindcss.svg" alt="Tailwind CSS" className="h-15 w-15" />,
  <img src="react.svg" alt="React" className="h-15 w-15" />,
  <img src="nextdotjs.svg" alt="Next.js" className="h-15 w-15" />,
  <img src="vite.svg" alt="Vite" className="h-15 w-15" />,
  <img src="linux.svg" alt="Linux" className="h-15 w-15" />,
  <img src="nodedotjs.svg" alt="Node.js" className="h-15 w-15" />,
  <img src="typescript.svg" alt="TypeScript" className="h-15 w-15" />,
  <img src="javascript.svg" alt="JavaScript" className="h-15 w-15" />,
  <img src="git.svg" alt="Git" className="h-15 w-15" />,
  <img src="github.svg" alt="GitHub" className="h-15 w-15" />,
];

export default function Tecs() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="relative overflow-x-hidden w-full bg-transparent py-4">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={controls}
        style={{ width: "max-content" }}
      >
        {icons.concat(icons).map((icon, idx) => (
          <div key={idx} className="tecnologias flex-shrink-0">
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
