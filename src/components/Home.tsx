import Button2 from "./Button2";

export default function Home() {
  return (
    <section id="Home" className="h-[calc(100vh-5rem)] ">
      <div className="flex h-full space-x-[50rem]">
        <div className="px-[10%] flex flex-col justify-center h-full gap-4">
          <h2 className="text-xl">SOFTWARE DEVELOPER</h2>
          <h2 className="text-5xl">
            Olá eu sou o Ruan, Desenvolvedor FullStack
          </h2>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quidem, iure quaerat vel quisquam fuga expedita accusantium incidunt
            unde consequatur dicta cum commodi natus tenetur nobis deleniti
            error in! Reiciendis.
          </p>
          <div className="flex justify-center flex-col gap-5 ">
            <button className="bg-blue-500 text-zinc-900 font-bold w-60 h-10 text-lg rounded-md mt-5 cursor-pointer hover:bg-blue-800">
              ENTRE EM CONTATO
            </button>
            <div className="flex gap-5 ">
              <Button2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github-icon lucide-github stroke-blue-500 group-hover:stroke-zinc-900"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Button2>
              <Button2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin stroke-blue-500 group-hover:stroke-zinc-900"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Button2>
              <Button2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram stroke-blue-500 group-hover:stroke-zinc-900"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Button2>
            </div>
          </div>
        </div>
        <img
          src="./teste.png"
          alt="Foto de Perfil"
          className="h-[50rem] object-fill absolute bottom-0 right-0 z-0 mask-r-from-10% mask-l-from-80% mask-t-from-80%"
        />
      </div>
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-down-icon lucide-arrow-down absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hover:stroke-blue-500"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
