import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Cart from "../assets/mini-cart.svg";
import MenuIcon from "../assets/Menu.svg";
import SearchIcon from "../assets/Search.svg";
import CartModal from "./CartModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Função para alternar o menu no mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para alternar a barra de pesquisa
  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <div>
      <header className="flex items-center justify-between px-4 lg:px-20 w-full    h-[70.5px] bg-[var(--white)]">
        <button onClick={toggleMobileMenu} className="text-gray-700 lg:hidden ">
          <img src={MenuIcon} alt="abrir menu" />
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
          <Logo />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleSearchBar}
              className="text-gray-700 lg:hidden w-5 h-5 mr-3"
            >
              <img src={SearchIcon} alt="pesquisar" />
            </button>

            <button className="text-gray-700">
              <img
                src={Cart}
                alt="Carrinho"
                className="w-6 h-6"
                onClick={toggleCartModal}
              />
            </button>
          </div>
        </div>

        {isCartModalOpen && <CartModal />}

        {/* Menu Desktop */}

        <nav className="hidden lg:flex flex-grow mx-4">
          <ul className="flex items-center space-x-8 w-full">
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
              <img
                src={Cart}
                alt="Carrinho"
                className="ml-6 w-6 h-6"
                onClick={toggleCartModal}
              />
            </li>
          </ul>
        </nav>
      </header>

      <section className="w-full hidden lg:flex items-start  px-4 lg:px-20  pb-4 h-auto bg-[var(--white)]">
        <nav className="flex space-x-6 mt-4 w-full float-start">
          <ul className="flex h-3/5 gap-4 items-start space-x-4 pt-2 pb-1">
            <li className="relative cursor-pointer text-gray-700 font-bold group">
              <span className="block">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#C92071] leading-6 text-base cursor-pointer underline underline-offset-4"
                      : "text-[#474747] leading-6 text-base cursor-pointer"
                  }
                >
                  Home
                </NavLink>
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
            </li>
            <li className="relative cursor-pointer text-gray-700 font-bold group">
              <span className="block">
                <NavLink
                  to={"/produtos"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#C92071] leading-6 text-base cursor-pointer underline underline-offset-4"
                      : "text-[#474747] leading-6 text-base cursor-pointer"
                  }
                >
                  Produtos
                </NavLink>
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
      </section>

      {isSearchBarOpen && (
        <div className="lg:hidden bg-gray-100 p-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Buscar..."
          />
        </div>
      )}

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed top-[80px] inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMobileMenu}
          ></div>

          <nav className="lg:hidden bg-[var(--white)] left-0 w-[308px] h-screen absolute z-20 p-4">
            <ul className="flex flex-col h-3/5 gap-4 items-start space-x-4 pt-2 pb-1">
              <span className="font-inter tex-var(--dark-gray-2) mb-3 text-[16px] font-bold leading-6 tracking-wide text-left">
                Páginas
              </span>

              <li className="relative cursor-pointer text-gray-700 font-bold group">
                <span className="block">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#C92071] leading-6 text-base cursor-pointer underline underline-offset-4"
                        : "text-[#474747] leading-6 text-base cursor-pointer"
                    }
                  >
                    Home
                  </NavLink>
                </span>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
              </li>
              <li className="relative cursor-pointer text-gray-700 font-bold group">
                <span className="block">
                  <NavLink
                    to={"/produtos"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#C92071] leading-6 text-base cursor-pointer underline underline-offset-4"
                        : "text-[#474747] leading-6 text-base cursor-pointer"
                    }
                  >
                    Produtos
                  </NavLink>
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

            <div className="flex flex-col items-center gap-4">
              <button
                className="bg-[var(--primary)] w-full text-white font-bold py-2 px-10 rounded-lg hover:bg-[var(--tertiary)] cursor-pointer"
                onClick={() => alert("Entrar clicado")}
              >
                Entrar
              </button>
              <span className="underline">Cadastre-se</span>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Header;
