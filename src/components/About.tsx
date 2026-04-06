import { motion } from "motion/react";
import Tecs from "./Tecs";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full scroll-mt-[4rem] flex-col items-center justify-between bg-[#0f0f0f] px-[6%] py-24 lg:scroll-mt-[5rem] lg:flex-row lg:space-x-16 lg:px-[12%]"
    >
      {/* Card de Código Interativo */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group w-full lg:w-[45%]"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative flex flex-col h-[400px] w-full rounded-2xl bg-[#161616] border border-white/10 overflow-hidden shadow-2xl font-mono text-sm">
          {/* Header da Janela */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-white/30 text-xs">developer.ts</span>
          </div>

          {/* Conteúdo do Código */}
          <div className="p-6 space-y-2 overflow-hidden">
            <p className="text-purple-400">const <span className="text-blue-400">ruan</span>: <span className="text-yellow-400">Developer</span> = {"{"}</p>
            <div className="pl-4 space-y-1">
              <p><span className="text-gray-400">role:</span> <span className="text-green-400">"Full Stack Specialist"</span>,</p>
              <p><span className="text-gray-400">skills:</span> [</p>
              <div className="pl-4">
                <p><span className="text-green-400">"React"</span>, <span className="text-green-400">"Laravel"</span>, <span className="text-green-400">"Livewire"</span>,</p>
                <p><span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"Node.js"</span>,</p>
                <p><span className="text-green-400">"Photoshop"</span>, <span className="text-green-400">"UI/UX"</span></p>
              </div>
              <p>],</p>
              <p><span className="text-gray-400">currently:</span> <span className="text-green-400">"Improving User Experiences"</span>,</p>
              <p><span className="text-gray-400">passion:</span> <span className="text-green-400">"Clean Code & Modern Design"</span>,</p>
              <p className="text-blue-300 italic">// Constantly exploring new horizons</p>
            </div>
            <p className="text-purple-400">{"}"};</p>

            {/* Elemento Visual Extra */}
            <div className="mt-8 p-4 bg-blue-500/5 rounded-lg border border-blue-500/10">
              <div className="flex items-center space-x-3 text-xs text-blue-400">
                <div className="animate-pulse w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Status: Resolvendo bugs criativos...</span>
              </div>
            </div>
          </div>
          
          {/* Decoração de fundo */}
          <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="white">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Conteúdo Textual */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 mt-12 flex w-full flex-col items-start lg:mt-0 lg:w-[55%]"
      >
        <div className="space-y-2">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase">Apresentação</h2>
          <h3 className="text-4xl font-extrabold text-white lg:text-5xl">SOBRE MIM</h3>
        </div>
        
        <span className="mt-4 mb-8 block h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed lg:text-justify">
            Sou <span className="font-semibold text-white">Ruan Gonçalves Parreira</span>, Desenvolvedor Full Stack 
            e acadêmico de <span className="text-blue-400">Sistemas de Informação</span> (Uniube). 
            Minha missão é construir pontes entre o código e a experiência humana, criando soluções web que não apenas funcionam, mas encantam.
          </p>
          
          <p className="text-lg leading-relaxed lg:text-justify">
            Com um olhar apurado para o design (consolidado por anos de Photoshop) e uma base técnica sólida em infraestrutura, 
            entrego interfaces modernas sustentadas por uma arquitetura robusta. Sou movido pelo desafio de transformar ideias complexas 
            em produtos digitais intuitivos.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mt-10 grid w-full grid-cols-1 gap-6 border-t border-gray-800 pt-8 sm:grid-cols-2">
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Localização</span>
            <span className="text-white font-medium">Uberaba, MG</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Formação</span>
            <span className="text-white font-medium">Sistemas de Informação</span>
          </div>
          <div className="flex flex-col space-y-1 sm:col-span-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Contato Profissional</span>
            <span className="text-white font-medium hover:text-blue-400 transition-colors">ruanparreira22@gmail.com</span>
          </div>
        </div>

        <div className="mt-12 w-full">
          <h4 className="mb-6 text-sm font-bold tracking-widest text-gray-500 uppercase">Tecnologias de Domínio</h4>
          <div className="w-full overflow-x-hidden mask-fade-edges">
            <Tecs />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
