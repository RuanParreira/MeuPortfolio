import { motion } from "framer-motion";
import Curriculo from "./Curriculo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full scroll-mt-20 items-center overflow-hidden px-[4%] lg:px-[12%]"
    >
      {/* Background Image - Adjusted to fill the section height accurately */}
      <div className="absolute inset-0 z-0">
        <img
          src="./hero.webp"
          alt="Foto de Perfil"
          className="absolute right-0 bottom-0 h-full w-auto object-contain object-right opacity-80 transition-all duration-700 hover:opacity-100"
        />
        {/* Gradients to blend the image with the background seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase lg:text-base"
            >
              SOFTWARE DEVELOPER
            </motion.h2>
            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl ">
              Olá, eu sou o <span className="text-blue-500">Ruan</span>, <br />
              Desenvolvedor <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">FullStack</span>
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
            Transformo ideias em experiências digitais excepcionais — Unindo a precisão da 
            <span className="text-white font-medium"> programação</span>, a estética do 
            <span className="text-white font-medium"> design</span> e a paixão pela inovação.
          </p>

          <div className="mt-4 flex flex-col items-start gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group relative flex h-14 w-44 items-center justify-center overflow-hidden rounded-xl bg-blue-600 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <span className="relative z-10">VAMOS CONVERSAR</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
              </motion.a>

              <Curriculo />
            </div>

            <div className="flex items-center gap-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Siga-me</p>
              <div className="h-px w-12 bg-zinc-800"></div>
              <div className="flex gap-4">
                {[
                  { id: 'github', href: "https://github.com/RuanParreira", icon: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></> },
                  { id: 'linkedin', href: "https://www.linkedin.com/in/ruan-gon%C3%A7alves-parreira-042214397/", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
                  { id: 'instagram', href: "https://www.instagram.com/ruan.parreira/", icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> }
                ].map((social) => (
                  <motion.a
                    key={social.id}
                    whileHover={{ y: -3, color: '#3b82f6' }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {social.icon}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-blue-500">Scroll</span>
          <div className="relative h-10 w-6 rounded-full border-2 border-zinc-800 group-hover:border-blue-500/50">
            <motion.div 
              animate={{ y: [4, 16, 4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-blue-500"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
