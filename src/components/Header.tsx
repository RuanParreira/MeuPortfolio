export default function Header() {
  return (
    <header className="flex w-full justify-between py-[1.5rem] px-[10%] items-center">
      <a href="">
        <h1 className="text-xl">
          RUAN PARREIRA <label className="text-blue-600">.</label>
        </h1>
      </a>
      <nav className="flex">
        <ul className="flex space-x-15 text-md items-center">
          <li>
            <a href="">INÍCIO</a>
          </li>
          <li>
            <a href="">SOBRE</a>
          </li>
          <li>
            <a href="">HABILIDADES</a>
          </li>
          <li>
            <a href="">PROJETOS</a>
          </li>
          <li>
            <a href="">CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
