import { useState } from "react";
import Produtos from "../database/ProductItens"
function CartModal() {
  const purchaseOrders = [true];

  const [total, setTotal] = useState(() =>
    Produtos.reduce((acc, produto) => acc + produto.price, 0)
  );

  const formatToBRL = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <section className="absolute right-5 lg:right-120 md:right-20 z-10 top-16 lg:top-24">
      <div className="flex flex-col justify-between p-7 w-[315px] h-[454px] bg-white drop-shadow-lg ">
        <div>
          <h3 className="text-[#474747] font-bold text-[14px] leading-[22px] tracking-[0.75px]">
            Meu Carrinho
          </h3>
          <div className="border-b border-gray-300"></div>
        </div>
        <div className="flex flex-grow flex-col gap-4 py-5 items-center justify-center overflow-hidden">
          {Produtos && Produtos.length > 0 ? ( 
            Produtos.map((p, i) => (
              <div key={i} className="flex items-center w-full gap-2 z-50">
                <img src={p.image[0]} style={{maxWidth: "70px",}}  />
                <div>
                  <p className="text-sm"><strong>{p.name}</strong></p>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-base text-[var(--dark-gray-2)]"><strong>{formatToBRL(p.price)}</strong></p>
                    <p className="text-xs line-through text-[var(--light-gray-2)]">{formatToBRL(p.priceDiscount)}</p>
                  </div>
                </div>
              </div>
            ))
           ) : (
            <p className="text-[#8F8F8F] font-normal text-[14px] leading-[34px] tracking-[0.75px]">Carrinho vazio</p>
           )}
          
        </div>

        <div>
          <div className="border-b mb-5 border-gray-300"></div>
          <div className="flex justify-between">
            <h3 className="text-[#474747] font-bold text-[14px] leading-[22px] tracking-[0.75px]">
              Valor Total: 
            </h3>
            <span className="text-[#474747] font-bold text-[14px] leading-[22px] tracking-[0.75px]">
              {formatToBRL(total)}
            </span>
          </div>
          <div className="flex justify-between mt-6 gap-3">
            <p className="text-[#8F8F8F] font-normal text-[14px] leading-[34px] tracking-[0.75px] underline cursor-pointer" onClick={() => setTotal([])}>
              Esvaziar
            </p>
            <button
              className="

    text-[#f5f5f5] bg-[#C92071] hover:bg-[#991956] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed px-9 py-3 w-full sm:w-auto text-sm font-bold leading-5 tracking-wider rounded"
            >
              Ver Carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartModal;
