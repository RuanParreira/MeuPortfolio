export default function Header() {
  return (
    <header className="flex w-full justify-between h-[5rem] px-[10%] items-center sticky z-100">
      <a href="">
        <h1 className="text-2xl">
          RUAN PARREIRA <label className="text-blue-500">.</label>
        </h1>
      </a>
      <nav className="flex">
        <ul className="flex space-x-10 text-md items-center">
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
