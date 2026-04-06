import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    description: "React, Livewire, Tailwind CSS",
    color: "blue",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 7-5 5 5 5" /><path d="m15 7 5 5-5 5" /></svg>
    ),
  },
  {
    title: "Backend",
    description: "Laravel, Livewire, PHP, MySQL",
    color: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
    ),
  },
  {
    title: "Desenvolvimento Web",
    description: "HTML, CSS, JavaScript",
    color: "purple",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
    ),
  },
  {
    title: "Manutenção de Hardware",
    description: "Computadores e Notebooks",
    color: "slate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    ),
  },
  {
    title: "Edição de Imagem",
    description: "Photoshop, Canva",
    color: "amber",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
    ),
  },
  {
    title: "Aprendizado Contínuo",
    description: "Domínio de novas ferramentas",
    color: "orange",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
    ),
  },
];

const colorVariants: Record<string, string> = {
  blue: "text-blue-500 bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white",
  green: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white",
  purple: "text-purple-500 bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white",
  slate: "text-slate-400 bg-slate-400/10 border-slate-400/20 group-hover:bg-slate-500 group-hover:text-white",
  amber: "text-amber-500 bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white",
  orange: "text-orange-500 bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full scroll-mt-[4rem] bg-[#0F0F0F] px-[4%] py-24 lg:scroll-mt-[5rem] lg:px-[12%] lg:py-32"
    >
      <div className="flex flex-col items-center">
        <h4 className="text-4xl font-bold tracking-tight text-white uppercase">Habilidades</h4>
        <span className="z-10 mt-4 mb-6 block h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
        <p className="mb-16 max-w-2xl text-center text-xl text-gray-400 leading-relaxed">
          Tecnologias e ferramentas que domino para transformar ideias em experiências digitais completas e funcionais.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-8 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all duration-300 hover:bg-zinc-900/60 hover:border-white/10"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 }}
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${colorVariants[skill.color]}`}
              >
                {skill.icon}
              </motion.div>

              {/* Text Content */}
              <div className="space-y-3">
                <h5 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skill.title}
                </h5>
                <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                  {skill.description}
                </p>
              </div>

              {/* Hover Effect Light */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
