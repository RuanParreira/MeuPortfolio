import { motion } from "framer-motion";

const technologies = [
  { name: "HTML5", src: "html5.svg" },
  { name: "CSS3", src: "css.svg" },
  { name: "JavaScript", src: "javascript.svg" },
  { name: "TypeScript", src: "typescript.svg" },
  { name: "PHP", src: "php.svg" },
  { name: "Laravel", src: "laravel.svg" },
  { name: "Livewire", src: "livewire.svg" },
  { name: "React", src: "react.svg" },
  { name: "Next.js", src: "nextdotjs.svg" },
  { name: "Tailwind CSS", src: "tailwindcss.svg" },
  { name: "Node.js", src: "nodedotjs.svg" },
  { name: "Vite", src: "vite.svg" },
  { name: "Git", src: "git.svg" },
  { name: "GitHub", src: "github.svg" },
  { name: "Linux", src: "linux.svg" },
];

export default function Tecs() {
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-6">
      {/* Gradient Overlays for smooth fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0f0f0f] to-transparent lg:w-32"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0f0f0f] to-transparent lg:w-32"></div>

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -100 * technologies.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Ainda mais lento e elegante
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
      >
        {duplicatedTechs.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="group relative flex flex-shrink-0 items-center justify-center"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05] lg:h-14 lg:w-14">
              <img
                src={tech.src}
                alt={tech.name}
                className="h-full w-full object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
            {/* Tooltip name */}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded bg-zinc-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
