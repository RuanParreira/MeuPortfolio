import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Particles from "./Particles";
import { motion } from "motion/react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [successMsg, setSuccessMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // @ts-ignore
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 3000);
        form.current?.reset();
        setLoading(false);
      },
      (error) => {
        alert("Erro ao enviar mensagem: " + error.text);
        console.error("Erro EmailJS:", error);
        setLoading(false);
      },
    );
  };

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden py-10 lg:scroll-mt-20 lg:py-20"
    >
      {successMsg && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-8 left-1/2 z-[9999] -translate-x-1/2 px-4 w-full max-w-md pointer-events-none"
        >
          <div className="relative overflow-hidden rounded-2xl bg-blue-600 px-6 py-4 text-center text-white shadow-2xl backdrop-blur-md pointer-events-auto">
            <div className="flex items-center justify-center space-x-3 text-sm sm:text-base font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Mensagem enviada com sucesso!</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 3, ease: "linear" }}
                className="h-full bg-white"
              />
            </div>
          </div>
        </motion.div>
      )}

      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          particleColors={["#3b82f6", "#ffffff"]}
          particleCount={150}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-[1] flex w-full flex-col items-center justify-center px-[4%] py-10 lg:h-full lg:px-[15%] lg:py-0">
        <div className="mb-10 flex flex-col items-center">
          <h6 className="text-4xl font-bold text-white uppercase tracking-tight text-center">CONTATO</h6>
          <span className="z-10 mt-4 mb-5 block h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
          <p className="text-center text-xl text-gray-400">
            Vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="flex w-full flex-col justify-between space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20">
          <div className="flex flex-col space-y-8 lg:w-1/3 text-center lg:text-left items-center lg:items-start">
            <p className="text-2xl font-bold text-white">Vamos trabalhar juntos!</p>
            <p className="text-justify text-lg text-gray-400 leading-relaxed max-w-md lg:max-w-none">
              Estou sempre aberto a novos desafios e oportunidades. Se você tem
              um projeto em mente ou quer apenas bater um papo sobre tecnologia,
              não hesite em entrar em contato.
            </p>
            
            <div className="space-y-6 w-full max-w-sm lg:max-w-none">
              <div className="group flex items-center gap-5 justify-center lg:justify-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 transition-all group-hover:bg-blue-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">Email</span>
                  <a href="mailto:ruanparreira22@gmail.com" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                    ruanparreira22@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5 justify-center lg:justify-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 transition-all group-hover:bg-blue-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 transition-colors group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">Telefone / WhatsApp</span>
                  <a href="tel:+5516991771565" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                    +55 (16) 99177-1565
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="group relative flex w-full flex-col space-y-8 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-2xl lg:w-[60%] lg:p-12"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-[60px] transition-all group-hover:bg-blue-500/20" />

            <div className="flex flex-col space-y-6">
              <div className="relative space-y-2">
                <label htmlFor="nome" className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/80">
                  Nome Completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Ex: João Silva"
                  className="w-full rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/50 placeholder:text-gray-700"
                />
              </div>

              <div className="relative space-y-2">
                <label htmlFor="email" className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/80">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="joao@exemplo.com"
                  className="w-full rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/50 placeholder:text-gray-700"
                />
              </div>

              <div className="relative space-y-2">
                <label htmlFor="mensagem" className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/80">
                  Sua Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-white outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/50 placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={!loading ? { scale: 1.01, y: -2 } : {}}
                whileTap={!loading ? { scale: 0.99 } : {}}
                disabled={loading}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-5 font-bold text-white shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.5)] disabled:opacity-70"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {loading ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                ) : (
                  <>
                    <span className="tracking-wider uppercase text-sm">Enviar Mensagem</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="22" y1="2" x2="11" y2="13" /><polyline points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
