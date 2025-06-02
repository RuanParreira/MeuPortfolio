import Tecs from "./Tecs";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0f0f0f] py-10 space-x-[5rem] px-[15%] flex w-full h-screen items-center justify-between"
    >
      <img
        src="./about3.png"
        alt="fotoSobre"
        className="h-[40rem] rounded-4xl"
      />

      <div className="flex flex-col justify-center w-full min-w-0 ">
        <h3 className="text-4xl">SOBRE MIM</h3>
        <span className="block w-24 h-1 bg-blue-500 mt-5 mb-4"></span>
        <p className="text-xl text-justify">
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
        <div className="flex flex-col text-xl w-full">
          <p>IDADE: 20 anos</p>
          <p>EMAIL: ruanparreira22@gmail.com</p>
          <p>ENDEREÇO: Ubereba, MG</p>
        </div>
        <span className="block h-[2px] bg-blue-500 mt-5 mb-4"></span>
        <h3 className="text-3xl mt-5 mb-5">TECNOLOGIAS</h3>
        <div className="overflow-x-hidden w-full">
          <Tecs />
        </div>
      </div>
    </section>
  );
}
