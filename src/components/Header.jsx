import Logo from "./Logo";
import Cart from "../assets/mini-cart.svg";

function Header() {
    return (
        <header className="flex items-center justify-between mx-20 my-2 h-auto">
            <Logo />
            <nav className="flex-grow mx-4">
                <ul className="flex items-center space-x-8">
                    <li className="flex-grow">
                        <input
                            type="text"
                            className="border rounded-xl w-4/5 px-3 py-3 bg-gray-100"
                            placeholder="Pesquisar..."
                        />
                    </li>
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer"><a className="" href="#">Cadastrar</a></li>
                    <li className="text-gray-700 hover:text-gray-900 cursor-pointer ml-6"><a href="#">Entrar</a></li>
                </ul>
            </nav>
            <div>
                <img src={Cart} alt="Cart" className="ml-6 w-6 h-6" />
            </div>
        </header>
    );
}

export default Header;
