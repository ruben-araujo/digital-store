import { useState } from "react";
import tenis from "../public/product01.png";

export const CartPage = () => {
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
      <div className="w-fit h-80 bg-white px-10 py-10">
        {/* header */}
        <div className="grid grid-cols-3 gap-x-6 pb-5 border-b border-dark-500">
          <h3 className="font-bold col-span-1">MEU CARRINHO</h3>
          <div className="grid grid-cols-3 gap-10 col-span-2">
            <span>QUANTIDADE</span>
            <span>UNITÁRIO</span>
            <span>TOTAL</span>
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-3 items-center border-b py-2 gap-x-6">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-300 border w-[120px] h-[90px] my-2 flex justify-center rounded">
              <img src={tenis} className="w-auto h-auto" alt="" />
            </div>
            <div className="space-y-3">
              <p className="font-bold break-words">
                Tênis Nike Revolution 6 Next Nature Masculino
              </p>
              <p className="text-[12px]">Cor: </p>
              <p className="text-[12px]">Tamanho: </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <button
                className="bg-white border w-5 h-5 flex justify-center items-center rounded"
                onClick={removeItemBox}
              >
                -
              </button>
              <div className="mx-3">{valorBox}</div>
              <button
                className="bg-white border w-5 h-5 flex justify-center items-center rounded"
                onClick={addItemBox}
              >
                +
              </button>
            </div>
            <div className="underline text-[12px] mt-2 cursor-pointer">
              Remover item
            </div>
          </div>

          <div className="grid grid-cols-2 text-center gap-x-10">
            <p className="font-bold">R$ 219,00</p>
            <p className="font-bold">R$ 219,00</p>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-[12px] font-bold mb-1">Cupom de desconto</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Insira seu código"
                className="bg-[var(--light-gray-3)] py-4 rounded-lg px-2 mr-2 outline-none"
              />
              <button className="bg-[var(--light-gray-3)] py-4 rounded-lg px-10 font-bold text-[var(--primary)]">
                OK
              </button>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-bold mb-1">Calcular frete</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="bg-[var(--light-gray-3)] py-4 rounded-lg px-2 mr-2 outline-none"
              />
              <button className="bg-[var(--light-gray-3)] py-4 rounded-lg px-10 font-bold text-[var(--primary)]">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
        <th className="text-left w-1/2 px-4 py-2">MEU CARRINHO</th>
        <th className="text-center w-1/6 px-4 py-2">QUANTIDADE</th>
        <th className="text-center w-1/6 px-4 py-2">UNITÁRIO</th>
        <th className="text-center w-1/6 px-4 py-2">TOTAL</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-t border-gray-200">
        <td className="flex items-center px-4 py-2">
          <div className="bg-indigo-300 border w-[120px] h-[90px] my-2 flex justify-center rounded mr-3">
            <img src={tenis} className="w-auto h-auto" alt="" />
          </div>
          <div className="space-y-3">
            <p className="font-bold max-w-[14em]">
              Tênis Nike Revolution 6 Next Nature Masculino
            </p>
            <p className="text-[12px]">Cor:</p>
            <p className="text-[12px]">Tamanho:</p>
          </div>
        </td>

        <td className="text-center px-4 py-2">
          <div className="flex items-center justify-center">
            <button
              className="bg-white border w-5 h-5 flex justify-center items-center rounded"
              onClick={removeItemBox}
            >
              -
            </button>
            <div className="mx-3">{valorBox}</div>
            <button
              className="bg-white border w-5 h-5 flex justify-center items-center rounded"
              onClick={addItemBox}
            >
              +
            </button>
          </div>
          <div className="underline text-[12px] mt-2 cursor-pointer">
            Remover item
          </div>
        </td>

        <td className="text-center px-4 py-2">
          <p className="font-bold">R$ 219,00</p>
        </td>

        <td className="text-center px-4 py-2">
          <p className="font-bold">R$ 219,00</p>
        </td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colSpan="2" className="px-4 py-2">
          <div>
            <p className="text-[12px] font-bold mb-1">Cupom de desconto</p>
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

        <td colSpan="2" className="px-4 py-2">
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

export default TableCart;
