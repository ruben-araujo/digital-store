import faceLogo from "../assets/facebook.svg";
import instaLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import digitalLogo from "../assets/Vector.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 py-3">
          <h1 className="font-semibold text-4xl flex items-center">
            <img src={digitalLogo} alt="Logo" className="mr-2" />
            Digital Store
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            necessitatibus ea neque vero sequi totam voluptas eius qui saepe
            voluptatibus mollitia nihil, illum fugit laudantium iure repudiandae
            hic quas? Ipsa.
          </p>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                <img src={faceLogo} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <img src={instaLogo} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <img src={twitterLogo} alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Informações</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Sobre Drip Store
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Segurança
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Whishlist
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Trabalhe Conosco
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Meus Pedidos
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Categorias</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Camisetas
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Calças
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Bonés
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Headphones
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Tênis
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contatos</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                (85) 3051-3411
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-4/5 border-t-1 border-gray-300 mx-auto my-4" />
      <div className="text-center">
        <p>© 2024 Digital Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
