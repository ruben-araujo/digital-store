import { useState } from "react";
import tenis from "../public/product01.png";


export const TableRow = () => {
    const [valorBox, setValorBox] = useState(1);

    const myCart = [
      {
        img: tenis,
        title: 'Tênis Nike Revolution 6 Next Nature Masculino',
        cor: 'Laranja',
        tamanho: '39',
        price: 219.00
      }
    ]
  
  
    const totalCarts = myCart.reduce((acc, t) => acc + (t.price * valorBox), 0);
  
  
    const removeItemBox = () => {
      if (valorBox > 1) {
        setValorBox(valorBox - 1);
      console.log(totalCarts);
       
  
      }
    };
    const addItemBox = () => {
      setValorBox(valorBox + 1);
      console.log(totalCarts);
  
    };
    return (
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
              {myCart.map((produto, index) => (
                <p key={index} className="font-bold">
                  R${produto.price.toFixed(2)}
                </p>
              ))}
              </td>

              <td className="text-center px-auto py-2">
                <p className="font-bold">R$ {totalCarts.toFixed(2)}</p>
              </td>
            </tr>
    )
}