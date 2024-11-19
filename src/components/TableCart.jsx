import { useState } from "react";
import tenis from "../public/product01.png";
import { formatToBRL } from "../utils/FormatToBRL";
import ProductItens from "../database/ProductItens";

export const TableCart = () => {
  const [valorBox, setValorBox] = useState(0);
  const removeItemBox = () => {
    if (valorBox > 0) {
      setValorBox(valorBox - 1);
    }
  };
  const addItemBox = () => {
    setValorBox(valorBox + 1);
  };

  return (
    <div className="flex gap-3">
      <div className="w-fit bg-white rounded px-4 py-5">
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
            {ProductItens && ProductItens.length  > 0 && (
              ProductItens.map((p, i) => (
                <tr key={i} className="border-b border-t border-gray-200">
                <td className="flex items-center px-auto py-2">
                  <div className=" border max-w-[130px] max-h-[110px] my-2 flex justify-center rounded mr-3 p-1">
                    <img src={p.image[0]} className="w-auto h-auto" alt="" />
                  </div>
                  <div className="space-y-auto">
                    <p className="font-bold max-w-[14em]">
                      {p.name}
                    </p>
                    <p className="text-[12px]">Cor:</p>
                    <p className="text-[12px]">Tamanho:</p>
                  </div>
                </td>
  
                <td className="text-center px-auto py-2">
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-white border w-8 h-8 flex justify-center items-center rounded"
                      onClick={removeItemBox}
                    >
                      -
                    </button>
                    <div className="mx-3">{valorBox}</div>
                    <button
                      className="bg-white border w-8 h-8 flex justify-center items-center rounded"
                      onClick={addItemBox}
                    >
                      +
                    </button>
                  </div>
                  <div className="underline text-[12px] mt-2 cursor-pointer">
                    Remover item
                  </div>
                </td>
  
                <td className="text-center px-auto py-2">
                  <p className="font-bold">{formatToBRL(p.price)}</p>
                </td>
  
                <td className="text-center px-auto py-2">
                  <p className="font-bold">{formatToBRL(p.price)}</p>
                </td>
              </tr>
              ))
            
            )}
            
          </tbody>

          <tfoot>
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
          <p>{formatToBRL(219.00)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--light-gray)] text-[14px]">Frete:</p>
          <p>{formatToBRL(0.00)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[var(--light-gray)]">Desconto:</p>
          <p>{formatToBRL(30.00)}</p>
        </div>
        <div className="">
          <div className="flex justify-between">
            <p className="font-bold text-[18px]">TOTAL</p>
            <p className="text-[var(--error)] font-bold text-[18px]">
            {formatToBRL(219.00)}
            </p>
          </div>
          <div className="flex justify-end text-[0.8em] text-[var(--light-gray)]">
            ou 10x de {formatToBRL(21.00)} sem juros
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
