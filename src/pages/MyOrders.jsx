import { MenuProfile } from "../components/MenuProfile";
import ProductItens from "../database/ProductItens";

export const MyOrders = () => {
  return (
    <div className="flex h-[84vh] justify-around py-4">
      <MenuProfile/>
      <section className="w-[890px] h-auto bg-[var(--white)] rounded-md p-5 overflow-scroll">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Meus Pedidos</th>
              <th className="text-right p-4 font-normal">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {ProductItens.map((p, i) => (
              <tr key={i} className="border-b">
              <td className="text-left p-4 flex items-center gap-2">
                <img src={p.image[0]} alt="" style={{maxWidth: "55px" }} />
                <p className="color-[var(--dark-gray)]"><strong>{p.name}</strong></p>
              </td>
              <td className="text-right p-4">Pedido em trânsito</td>
            </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
