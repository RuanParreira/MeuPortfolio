import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Particles from "./Particles";
import { motion } from "motion/react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // @ts-ignore
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 3000); // Esconde após 3 segundos
        form.current?.reset();
      },
      (error) => {
        alert("Erro ao enviar mensagem: " + error.text);
        console.error("Erro EmailJS:", error);
      },
    );
  };

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden py-10 lg:scroll-mt-20 lg:py-20"
    >
      {/* Mensagem de sucesso fixa no topo */}
      {successMsg && (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] flex w-full justify-center">
          <div className="pointer-events-auto relative mt-4 overflow-hidden rounded-sm bg-blue-500 px-6 py-3 text-center text-lg text-white shadow-lg">
            Mensagem enviada com sucesso!
            {/* Barra de progresso animada */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-300">
              <div
                className="h-full bg-white transition-all duration-[4000ms]"
                style={{ animation: "progressBar 3s linear forwards" }}
              />
            </div>
            <style>
              {`
                @keyframes progressBar {
                  from { width: 100%; }
                  to { width: 0%; }
                }
              `}
            </style>
          </div>
        </div>
      )}
      {/* Particles como background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Conteúdo acima das partículas */}
      <div className="pointer-events-none relative z-[1] flex w-full flex-col items-center justify-center px-[4%] py-10 lg:h-full lg:px-[15%] lg:py-0">
        <div className="mb-10 flex flex-col items-center">
          <h6 className="text-4xl">CONTATO</h6>
          <span className="z-10 mt-4 mb-5 block h-1 w-24 bg-blue-500"></span>
          <p className="text-center text-xl lg:text-left">
            Vamos conversar sobre seu próximo projeto
          </p>
        </div>
        {/* formulario */}
        <div className="flex w-full flex-col justify-between space-y-10 lg:flex-row lg:space-y-20 lg:space-x-20">
          <div className="flex flex-col space-y-5">
            <p className="text-2xl">Vamos Trabalhar juntos!</p>
            <p className="text-justify text-lg">
              Estou sempre aberto a novos desafios e oportunidades. Se você tem
              um projeto em mente ou quer apenas bater um papo sobre tecnologia,
              não hesite em entrar em contato.
            </p>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-mail-icon lucide-mail h-10 w-10 rounded-lg border-2 border-blue-500 p-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B7FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <div>
                <a
                  href="mailto:ruanparreira22@gmail.com"
                  className="pointer-events-auto flex flex-col"
                >
                  <span className="font-bold">Email</span>

                  <span> ruanparreira22@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B7FFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone-icon lucide-phone h-10 w-10 rounded-lg border-2 border-blue-500 p-2"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <div>
                <a
                  href="tel:+5516991771565"
                  className="pointer-events-auto flex flex-col"
                >
                  <span className="font-bold">Telefone</span>
                  <span>+55 (16) 99177-1565</span>
                </a>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="pointer-events-auto flex w-full flex-col space-y-4 rounded-xl border border-zinc-700 bg-zinc-800 p-8 lg:w-[90rem]"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="nome">Nome:</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu Nome:"
                className="w-full rounded-xl border border-zinc-600 bg-zinc-700 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu Email:"
                className="w-full rounded-xl border border-zinc-600 bg-zinc-700 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem:"
                rows={4}
                className="mb-2 w-full resize-none rounded-xl border border-zinc-600 bg-zinc-700 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              className="h-14 cursor-pointer rounded-xl bg-blue-500 font-bold text-zinc-900 uppercase hover:bg-blue-600"
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
