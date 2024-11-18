import { MenuProfile } from "../components/MenuProfile";

export const MyProfile = () => {
  return (
    <div className="flex h-[84vh] justify-around py-4">
      <MenuProfile />
      <section className="w-[890px] h-fit bg-[var(--white)] rounded-md px-5">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Minhas Informações</th>
              <th className="text-right p-4">
                <a className="text-[var(--primary)] underline cursor-pointer">
                  Editar
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* INFORMAÇÕES PESSOAIS */}
            <tr>
              <td className="p-4">
                <h4 className="text-lg font-bold text-[var(--dark-gray-2)]">
                  Informações Pessoais
                </h4>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">Nome: </span>Francisco Antonio Pereira</p>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">CPF: </span>123456789-35</p>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">Email: </span>francisco@gmail.com</p>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">Celular: </span>(85) 5555-5555</p>
              </td>
            </tr>
            <tr className="border-t border-[var(--light-gray-2)]"></tr>
            {/* INFORMAÇÕES DE ENTREGA */}
            <tr>
              <td className="p-4">
                <h4 className="text-lg font-bold text-[var(--dark-gray-2)]">
                  Informações de Entrega
                </h4>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">Endereço: </span>Rua João Pessoa, 333</p>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">Bairro: </span>Centro</p>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">Cidade: </span>Fortaleza, Ceará</p>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <p><span className="text-[var(--light-gray)]">CEP: </span>433-8800</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
