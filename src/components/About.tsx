import Tecs from "./Tecs";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full scroll-mt-[4rem] flex-col items-center justify-between bg-[#0f0f0f] px-[4%] py-20 lg:scroll-mt-[5rem] lg:flex-row lg:space-x-20 lg:px-[15%]"
    >
      <div>
        <img
          src="./about.png"
          alt="fotoSobre"
          className="mb-10 rounded-xl object-cover lg:mb-0 lg:block lg:h-full lg:w-[50rem]"
        />
      </div>
      <div className="z-10 flex w-full min-w-0 flex-col items-center justify-center lg:items-start">
        <h3 className="text-4xl">SOBRE MIM</h3>
        <span className="mt-5 mb-4 block h-1 w-24 bg-blue-500"></span>
        <p className="text-lg lg:text-justify">
          Sou Ruan Gonçalves Parreira, Desenvolvedor Full Stack e estudante de
          Sistemas de Informação (5º período - Uniube). Crio soluções web que
          unem código, design e usabilidade, com foco em entregar experiências
          visuais e funcionais. Tenho experiência em design gráfico utilizando
          Photoshop, além de atuação com manutenção de computadores, o que
          amplia minha visão técnica. Estou sempre em busca de projetos
          criativos e desafiadores que impulsionem minha evolução profissional.
        </p>
        <br />
        <div className="flex w-full flex-col text-xl">
          <p>IDADE: 20 anos</p>
          <p>EMAIL: ruanparreira22@gmail.com</p>
          <p>ENDEREÇO: Ubereba, MG</p>
        </div>
        <span className="mt-5 mb-4 block h-[2px] bg-blue-500"></span>
        <h3 className="mt-5 mb-5 text-3xl">TECNOLOGIAS</h3>
        <div className="w-full overflow-x-hidden mask-r-from-80% mask-l-from-80%">
          <Tecs />
        </div>
      </div>
    </section>
  );
}
