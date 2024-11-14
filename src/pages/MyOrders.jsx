import { Link } from "react-router-dom";

export const MyOrders = () => {
  return (
    <div className="flex h-[84vh] justify-around py-4">
      <section className="border w-[334px] h-[286px] bg-[var(--white)]">
        <ul className="px-5 pt-7 space-y-3 flex flex-col justify-between">
          <li className="text-[var(--dark-gray)] font-semibold border-b border-gray-300 py-3 flex justify-between items-center">
            Meu Perfil
          </li>
          
              <li className="text-[var(--dark-gray)] border-b border-gray-300 py-3 flex justify-between items-center">
              <Link to={"/meus-pedidos"}>Meus Pedidos</Link>
              </li>
          
          <li className="text-[var(--dark-gray)] border-b border-gray-300 py-3 flex justify-between items-center">
            Minhas Informações
          </li>
          <li className="text-[var(--dark-gray)]  py-3 flex justify-between items-center">
            Métodos de Pagamento
          </li>
        </ul>
      </section>

      <section className="w-[890px] h-fit bg-[var(--white)] border border-solid border-gray-500">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Meus Pedidos</th>
              <th className="text-right p-4 font-normal">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left p-4">Conteúdo da primeira coluna</td>
              <td className="text-right p-4">Conteúdo da segunda coluna</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
