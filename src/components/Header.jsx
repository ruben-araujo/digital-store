import React from "react";
import Logo from "./Logo";
import Cart from "../assets/mini-cart.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between px-20 pt-8 pb-4  h-auto bg-[var(--white)]">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <nav className="flex-grow mx-4">
          <ul className="flex items-center space-x-8">
            <li className="flex-grow">
              <input
                type="text"
                className="border outline-none rounded-xl w-4/5 px-3 py-3 bg-[var(--light-gray-3)]"
                placeholder="Pesquisar..."
              />
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="underline">Cadastre-se</span>
            </li>
            <li className="ml-6">
              <button
                className="bg-[var(--primary)] text-white font-bold py-2 px-10 rounded-lg hover:bg-[var(--tertiary)] cursor-pointer"
                onClick={() => alert("Entrar clicado")}
              >
                Entrar
              </button>
            </li>
            <li>
              <img src={Cart} alt="Cart" className="ml-6 w-6 h-6" />
            </li>
          </ul>
        </nav>
      </div>
      <nav className="flex space-x-6 mt-4 w-full">
        <ul className="flex space-x-4 pt-2 pb-1">
          <li className="relative cursor-pointer text-gray-700 font-bold group">
            <span className="block">
              <Link
                to={"/"}
                className={`block ${
                  location.pathname === "/" ? "text-[var(--primary)]" : ""
                }`}
              >
                Home
              </Link>
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
          </li>
          <li className="relative cursor-pointer text-gray-700 font-bold group">
            <span className="block">
              <Link
                to={"/produtos"}
                className={`block ${
                  location.pathname === "/produtos"
                    ? "text-[var(--primary)]"
                    : ""
                }`}
              >
                Produtos
              </Link>
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
          </li>
          <li className="relative cursor-pointer text-gray-700 font-bold group">
            <span className="block">Categorias</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
          </li>
          <li className="relative cursor-pointer text-gray-700 font-bold group">
            <span className="block">Meus Pedidos</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
