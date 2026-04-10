import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Particles from "./Particles";
import { motion, AnimatePresence } from "framer-motion";

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

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 4000);
        form.current?.reset();
        setLoading(false);
      },
      (error: any) => {
        alert("Erro ao enviar mensagem: " + error.text);
        setLoading(false);
      },
    );
  };

  const contactInfo = [
    {
      title: "Email",
      value: "ruanparreira22@gmail.com",
      link: "mailto:ruanparreira22@gmail.com",
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/></svg>
      ),
    },
    {
      title: "WhatsApp",
      value: "+55 (16) 99177-1565",
      link: "https://wa.me/5516991771565",
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      ),
    },
    {
      title: "Localização",
      value: "Uberaba - MG, Brasil",
      link: "#",
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      ),
    }
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-zinc-950 py-16 lg:py-24">
      {/* Partículas de Fundo */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-30">
        <Particles
          particleColors={["#3b82f6", "#06b6d4"]}
          particleCount={60}
          particleSpread={15}
          speed={0.15}
        />
      </div>

      {/* Glows de Fundo Decorativos */}
      <div className="absolute -top-[10%] -left-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute -bottom-[10%] -right-[10%] h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[100px]" />

      <div className="relative z-10 px-[4%] lg:px-[12%]">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            </span>
            Contato
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black text-white md:text-4xl "
          >
            VAMOS <span className="text-blue-500">CONVERSAR?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-base text-zinc-400"
          >
            Tem uma ideia genial ou apenas quer dizer oi? Meu inbox está sempre aberto.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Lado Esquerdo - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-4 transition-all hover:border-blue-500/50 hover:bg-zinc-800/80 hover:shadow-xl"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-800 transition-all group-hover:scale-110 group-hover:border-blue-500 group-hover:text-blue-500`}>
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{info.title}</span>
                  <span className="text-sm font-medium text-white transition-colors group-hover:text-blue-400 md:text-base">
                    {info.value}
                  </span>
                </div>
              </motion.a>
            ))}

            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-br from-blue-600/20 to-zinc-900/50 p-6">
              <p className="text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
                "O design não é apenas como algo se parece ou se sente. <span className="text-white font-bold">Design é como funciona.</span>"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-zinc-800">
                   <img src="./hero.webp" alt="Ruan" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col text-[10px]">
                  <span className="font-bold text-white uppercase">Steve Jobs</span>
                  <span className="text-zinc-500">Influência Tecnológica</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex lg:col-span-7"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex w-full flex-col justify-between rounded-[2rem] border border-white/10 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur-md md:p-10"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="nome" className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">Nome</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="João Silva"
                      className="w-full rounded-xl border border-white/5 bg-zinc-800/50 p-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-blue-500/50 focus:bg-zinc-800 focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="exemplo@email.com"
                      className="w-full rounded-xl border border-white/5 bg-zinc-800/50 p-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-blue-500/50 focus:bg-zinc-800 focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mensagem" className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">Sua Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    placeholder="Conte-me sobre seu projeto..."
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/5 bg-zinc-800/50 p-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-blue-500/50 focus:bg-zinc-800 focus:ring-1 focus:ring-blue-500/50"
                  />
                </div>
              </div>

              <motion.button
                whileHover={!loading ? { scale: 1.01, y: -2 } : {}}
                whileTap={!loading ? { scale: 0.99 } : {}}
                disabled={loading}
                className="group relative cursor-pointer mt-6 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-500 disabled:opacity-50"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>

                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                ) : (
                  <>
                    <span className="relative z-10">Enviar Mensagem</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast de Sucesso */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 right-1/2 z-[9999] flex translate-x-1/2 items-center gap-3 rounded-2xl border border-blue-500/50 bg-zinc-900/90 px-6 py-4 text-white shadow-2xl backdrop-blur-xl lg:right-10 lg:translate-x-0"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="font-semibold tracking-wide">Mensagem enviada com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
