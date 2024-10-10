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
            <div className="w-3/5 h-80 bg-white px-10 py-10">
            {/* header */}
                <div className="flex justify-between pb-5 border-b border-dark-500">
                    <div>
                        <h3 className="font-bold">MEU CARRINHO</h3>
                    </div>
                    <div className="flex space-x-14">
                        <h3>QUANTIDADE</h3>
                        <h3>UNITÁRIO</h3>
                        <h3>TOTAL</h3>
                    </div>
                </div>
                {/* body */}
                <div className="flex">
                    <div className="bg-indigo-300 border w-[120px] h-[100px] flex justify-center rounded">
                    <img src={tenis} className="w-auto h-auto  " alt="" />
                    </div>

                    <div className="flex">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>

                    <div className="flex">
                        <button id="box" className="flex bg-white border w-5 h-5 justify-center p-5 items-center rounded" onClick={removeItemBox}>-</button>
                        <div id="valueBox" className="flex">{valorBox}</div>
                        <button id="box" className="flex bg-white border w-5 h-5 justify-center p-5 items-center rounded" onClick={addItemBox}>+</button>
                    </div>

                </div>

                    
                


            </div>
        </>
    )
}