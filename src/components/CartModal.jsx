function CartModal() {
  const purchaseOrders = [true];

  return (
    <section className="absolute right-5 lg:right-120 md:right-20 z-10 top-16 lg:top-24">
      <div className="flex flex-col justify-between p-7 w-[315px] h-[454px] bg-white drop-shadow-lg ">
        <div>
          <h3 className="text-[#474747] font-bold text-[14px] leading-[22px] tracking-[0.75px]">
            Meu Carrinho
          </h3>
          <div className="border-b mt-5 mb-5 border-gray-300"></div>
        </div>
        <div className="flex flex-grow flex-col gap-4 py-5 items-center justify-center">
          <p className="text-[#8F8F8F] font-normal text-[14px] leading-[34px] tracking-[0.75px]">Carrinho vazio</p>{" "}
          
        </div>

        <div>
          <div className="border-b mt-5 mb-5 border-gray-300"></div>
          <div className="flex justify-between">
            <h3 className="text-[#474747] font-bold text-[14px] leading-[22px] tracking-[0.75px]">
              Valor Total:
            </h3>
            <span className="text-[#474747] font-bold text-[14px] leading-[22px] tracking-[0.75px]">
              R$ 00,00
            </span>
          </div>
          <div className="flex justify-between mt-6 gap-3">
            <p className="text-[#8F8F8F] font-normal text-[14px] leading-[34px] tracking-[0.75px] underline">
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
