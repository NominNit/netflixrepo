import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 fixed w-full top-0 z-10 bg-black">
      <a href="/">
        <img
          src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
          className="w-36"></img>
      </a>
      <nav>
        <ul className="flex space-x-6 font-bold">
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Нүүр хуудас
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Кино сан
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              ТВ шоу
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Миний жагсаалт
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
