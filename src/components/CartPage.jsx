import { useState } from "react"
import tenis from "../public/product01.png"

export const CartPage = () => {
    const [valorBox, setValorBox] = useState(0)
    const removeItemBox = () => {
        if(valorBox > 0) {
        setValorBox(valorBox - 1)
        }
    }
    const addItemBox = () => {
        setValorBox(valorBox + 1)
    }

    return (
        <>
            <div className="w-fit h-80 bg-white px-10 py-10">
                {/* header */}
                <div className="flex justify-between pb-5 border-b border-dark-500">
                    <h3 className="font-bold">MEU CARRINHO</h3>
                    <div className="flex justify-between gap-[60px] mr-5">
                        <span>QUANTIDADE</span>
                        <span>UNITÁRIO</span>
                        <span>TOTAL</span>
                    </div>
                </div>
                {/* body */}
                <div className="flex items-center border-b justify-between py-2">
                    <div className="flex items-center space-x-3">
                        <div className="bg-indigo-300 border w-[120px] h-[90px] my-2 flex justify-center rounded">
                        <img src={tenis} className="w-auto h-auto" alt="" />
                        </div>
                        <div className="space-y-3">
                            <p className="font-bold">Titulo Produto</p>
                            <p className="text-[12px]">Cor: </p>
                            <p className="text-[12px]">Tamanho: </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            <button id="box" className="flex bg-white border w-5 h-5 justify-center p-5 items-center rounded" onClick={removeItemBox}>-</button>
                            <div id="valueBox" className="flex mx-3 items-center">{valorBox}</div>
                            <button id="box" className="flex bg-white border w-5 h-5 justify-center p-5 items-center rounded" onClick={addItemBox}>+</button>
                        </div>
                        <div className="flex justify-center underline text-[12px] mt-2 cursor-pointer">Remover item</div>
                    </div>

                    <div>
                        <p id="preco" className="fs-1 font-bold">R$ 219,00</p>
                    </div>
                    <div>
                        <p id="preco" className="fs-1 font-bold">R$ 219,00</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between gap-x-4 mt-4">
                    <div >
                        <p className="text-[12px] font-bold mb-1">Cupom de desconto</p>
                        <div className="flex">
                            <input type="text" placeholder="Insira seu código" className="border-none outline-none bg-[var(--light-gray-3)] py-4 rounded-lg px-2 mr-2" />
                            <button className="border-none outline-none bg-[var(--light-gray-3)] py-4 rounded-lg px-10 font-bold text-[var(--primary)]">OK</button>
                        </div>
                    </div>
                    <div >
                        <p className="text-[12px] font-bold mb-1">Calcular frete</p>
                        <div className="flex">
                            <input type="text" placeholder="Insira seu CEP" className="border-none outline-none bg-[var(--light-gray-3)] py-4 rounded-lg px-2 mr-2" />
                            <button className="border-none outline-none bg-[var(--light-gray-3)] py-4 rounded-lg px-10 font-bold text-[var(--primary)]">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}