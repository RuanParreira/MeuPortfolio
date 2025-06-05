import Tecs from "./Tecs";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex h-[calc(100vh-5rem)] w-full scroll-mt-[5rem] items-center justify-between space-x-[24rem] bg-[#0f0f0f]"
    >
      <div className="z-0">
        <img
          src="./about2.png"
          alt="fotoSobre"
          className="absolute bottom-0 left-0 z-0 h-[40rem] mask-t-from-80% mask-r-from-85% mask-l-from-10%"
        />
      </div>

      <div className="z-10 flex w-[full] min-w-0 flex-col justify-center px-[15%]">
        <h3 className="text-4xl">SOBRE MIM</h3>
        <span className="mt-5 mb-4 block h-1 w-24 bg-blue-500"></span>
        <p className="text-justify text-lg">
          Olá! Me chamo Ruan Gonçalves Parreira, sou Desenvolvedor Full Stack e
          atualmente curso Sistemas de Informação na Uniube, estando no 5º
          período. Sou apaixonado por tecnologias, desenvolvimento de software e
          design para web. Gosto de transformar ideias em soluções funcionais e
          bem apresentadas. Além da programação, também possuo conhecimentos em
          manutenção de computadores, atuando como técnico de informática. Estou
          sempre em busca de aprendizado, evolução e novos desafios na área de
          tecnologia.
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
