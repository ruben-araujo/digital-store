export const PurchaseConfirmation = () => {
    const purchaseInfo = [
        {
            section: "Informações Pessoais",
            details: [
                { label: "Nome", value: "Francisco Antonio Pereira" },
                { label: "CPF", value: "123.456.789-01" },
                { label: "Email", value: "francisco@gmail.com" },
                { label: "Celular", value: "8555555555" },
            ]
        },
        {
            section: "Informações de Entrega",
            details: [
                { label: "Endereço", value: "Rua João Pessoa" },
                { label: "Número", value: "33" },
                { label: "Cidade", value: "Fortaleza" },
                { label: "Estado", value: "Ceará" },
                { label: "CEP", value: "4338800" },
            ]
        },
        {
            section: "Informações de Pagamento",
            details: [
                { label: "Titular", value: "Francisco A P" },
                { label: "Final do Cartão", value: "************2026" },
            ]
        }
    ];
    
    return ( 
        <>
            <section className="w-[838px] h-[max-content] bg-[var(--white)] mx-auto py-2 space-y-3 px-8">
                {/* icon */}
                <div className="icon text-[80px] flex mx-auto justify-center  w-[80%]">
                    <span className="flex">&#127881;</span>
                </div>
                {/* Title */}
                <div className="flex justify-center">
                    <h3 className="text-3xl font-bold leading-9 tracking-widest text-center">Compra Realizada <br/> com sucesso!</h3>
                </div>
                <div className="border border-solid border-gray-400"></div>
                {/* Informações Pessoais */}
                <div className="w-[778px] space-y-1 mx-auto">
                    <h4 className="text-[var(--dark-gray-2)] text-base font-bold">Informações Pessoais</h4>
                    <div className="flex flex-col text-sm text-gray-400 space-y-1">
                        <span>Nome:</span>
                        <span>CPF:</span>
                        <span>Email:</span>
                        <span>Celular:</span>
                    </div>
                </div>
                <div className="border border-solid border-gray-400"></div>
                {/* Informações de Entrega */}
                <div className="w-[778px] space-y-1 mx-auto">
                    <h4 className="text-[var(--dark-gray-2)] text-base font-bold">Informações de Entrega</h4>
                    <div className="flex flex-col text-sm text-gray-400 space-y-1">
                        <span>Endereço:</span>
                        <span>Bairro:</span>
                        <span>Cidade:</span>
                        <span>CEP:</span>
                    </div>
                </div>
                <div className="border border-solid border-gray-400"></div>
                {/* Informações de Pagamento */}
                <div className="w-[778px] space-y-1 mx-auto">
                    <h4 className="text-[var(--dark-gray-2)] text-base font-bold">Informações de Pagamento</h4>
                    <div className="flex flex-col text-sm text-gray-400 space-y-1">
                        <span>Titular do Cartão:</span>
                        <span>Final:</span>
                    </div>
                </div>
                <div className="border border-solid border-gray-400"></div>
                <h4 className="text-[var(--dark-gray-2)] text-sm font-bold">Resumo da compra</h4>
                <div >
                    card do produto
                </div>
                <div className="bg-[#f6aa1c18] border border-[#f6aa1c4d] p-3 space-y-4 rounded-md">
                    <div className="flex justify-between text-2xl font-bold">
                        <h1>Total</h1>
                        <h1>R$: 219,00</h1>
                    </div>
                    <div className="flex justify-end text-gray-400 text-sm">
                        ou 10x de R$ 21,00 sem juros
                    </div>
                </div>
            </section>
        </>
     );
}