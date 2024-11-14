import { Link } from "react-router-dom";

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
        <div className="px-4 py-16">
            <section className="max-w-lg lg:max-w-2xl bg-[var(--white)] mx-auto py-6 px-6 lg:px-8 space-y-6 rounded-md shadow-md">
                {/* Icon */}
                <div className="icon text-6xl lg:text-[80px] flex justify-center mx-auto">
                    <span className="flex">&#127881;</span>
                </div>
                
                {/* Title */}
                <div className="flex justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold leading-9 tracking-widest text-center">Compra Realizada <br/> com sucesso!</h3>
                </div>
                
                {/* Mapeamento das Seções de Informação */}
                {purchaseInfo.map((section, index) => (
                    <div key={index} className="max-w-full mx-auto space-y-2">
                        <h4 className="text-[var(--dark-gray-2)] text-base font-bold">{section.section}</h4>
                        <div className="flex flex-col text-sm text-gray-400 space-y-1">
                            {section.details.map((detail, idx) => (
                                <span key={idx} className="flex gap-1">
                                    {detail.label}: <p className="text-[var(--dark-gray)]">{detail.value}</p>
                                </span>
                            ))}
                        </div>
                        <div className="border-t border-gray-300 my-4"></div>
                    </div>
                ))}
                
                {/* Resumo da Compra */}
                <h4 className="text-[var(--dark-gray-2)] text-sm font-bold">Resumo da compra</h4>
                <div>card do produto</div>
                
                <div className="bg-[#f6aa1c18] border border-[#f6aa1c4d] px-4 py-3 rounded-md space-y-4">
                    <div className="flex justify-between text-xl lg:text-2xl font-bold">
                        <h1>Total</h1>
                        <h1>R$: 219,00</h1>
                    </div>
                    <div className="flex justify-end text-gray-400 text-sm">
                        ou 10x de R$ 21,00 sem juros
                    </div>
                </div>
                
                {/* Link para Imprimir Recibo */}
                <div className="flex justify-center underline">
                    <a href="#">Imprimir Recibo</a>
                </div>
            </section>

            {/* Botão Voltar para Home */}
            <div className="flex justify-center mt-4">
                <Link className="text-white rounded-md text-center py-2 w-full max-w-lg lg:max-w-2xl bg-[var(--warning)]"  to={"/home"}>Voltar para Home</Link>
            </div>
        </div>
    );
}
