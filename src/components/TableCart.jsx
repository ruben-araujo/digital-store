import { useState } from "react";
import tenis from "../public/product01.png";

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
    <>
      <div className="w-fit bg-white rounded px-4 py-5">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left w-auto px-auto py-2">MEU CARRINHO</th>
              <th className="text-center w-auto px-auto py-2 font-normal">QUANTIDADE</th>
              <th className="text-center w-auto px-auto py-2 font-normal">UNITÁRIO</th>
              <th className="text-center w-auto px-auto py-2 font-normal">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-t border-gray-200">
              <td className="flex items-center px-auto py-2">
                <div className="bg-indigo-300 border max-w-[130px] max-h-[110px] my-2 flex justify-center rounded mr-3 p-1">
                  <img src={tenis} className="w-auto h-auto" alt="" />
                </div>
                <div className="space-y-auto">
                  <p className="font-bold max-w-[14em]">
                    Tênis Nike Revolution 6 Next Nature Masculino
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
                <p className="font-bold">R$ 219,00</p>
              </td>

              <td className="text-center px-auto py-2">
                <p className="font-bold">R$ 219,00</p>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="2" className="px-4 py-2">
                <div className="flex-1">
                  <p className="text-[12px] font-bold mb-1">
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

              <td colSpan="2" className="px-auto py-2">
                <div>
                  <p className="text-[12px] font-bold mb-1">Calcular frete</p>
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
    </>
  );
};

