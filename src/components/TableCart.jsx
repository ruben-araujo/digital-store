
import { useState } from "react";
import { TableRow } from "./TableRow";

export const TableCart = () => {
const [cart, setCart] = useState([1])



  return (
    <div className="flex gap-3 overflow-x-scroll">
      <div className="w-fit bg-white rounded px-4 py-5 flex">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left w-auto px-auto py-2">MEU CARRINHO</th>
              <th className="text-center w-auto px-auto py-2 font-normal">
                QUANTIDADE
              </th>
              <th className="text-center w-auto px-auto py-2 font-normal">
                UNITÁRIO
              </th>
              <th className="text-center w-auto px-auto py-2 font-normal">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <TableRow/>
            ))}
            {cart.length === 0 && (
              <tr>
                <td colSpan={4} style={{textAlign: 'center', fontWeight: 'lighter'}}>
                  <b>Carrinho de Compras Vazio.</b>
                </td>
              </tr>
            )}
            
          </tbody>

          <tfoot className="mt-auto">
            <tr>
              <td colSpan="2" className="px-4 py-2">
                <div className="flex-1">
                  <p className="text-[12px] mt-3 font-bold mb-1">
                    Cupom de desconto
                  </p>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Insira seu código"
                      className="bg-gray-100 py-4 rounded-lg px-2 mr-2 outline-none"
                    />
                    <button className="bg-gray-100 py-4 rounded-lg px-10 font-bold text-[var(--primary)]">
                      OK
                    </button>
                  </div>
                </div>
              </td>

              <td colSpan="3" className="px-auto py-2">
                <div>
                  <p className="text-[12px] mt-3 font-bold mb-1">Calcular frete</p>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Insira seu CEP"
                      className="bg-gray-100 py-4 rounded-lg px-2 mr-2 outline-none"
                    />
                    <button className="bg-gray-100 py-4 rounded-lg px-10 font-bold text-[var(--primary)]">
                      OK
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* SUMMARY */}

      <div class="bg-[var(--white)] w-[334px] h-[364px] rounded px-5 leading-[3rem]">
        <div className="mt-3">RESUMO</div>
        <div className="border"></div>
        <div className="flex justify-between">
          <p className="text-[var(--light-gray)] text-[14px]">SubTotal:</p>
          <p>R$ 219,00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--light-gray)] text-[14px]">Frete:</p>
          <p>R$ 0,00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--light-gray)]">Desconto:</p>
          <p>R$ 30,00</p>
        </div>
        <div className="">
          <div className="flex justify-between">
            <p className="font-bold text-[18px]">TOTAL</p>
            <p className="text-[var(--error)] font-bold text-[18px]">
              R$ 219,00
            </p>
          </div>
          <div className="flex justify-end text-[0.8em] text-[var(--light-gray)]">
            ou 10x de R$ 21,00 sem juros
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[var(--warning)] w-[274px] rounded-md leading-9 font-bold text-[var(--white)]">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
