import Input, { Radio } from "../components/Input"


// type, id, name, title, placeholder
export const FinalizingPurchaseForm = () => {
    return (
        <div className="ml-20 my-10">
            <h1 className="text-3xl font-bold mb-5">Finalizar Compra</h1>
            <form className="space-y-3">
                {/* Informações Pessoais */}
                <div className="bg-[var(--white)] space-y-7 w-[750px] h-[538px] p-[30px] rounded">
                    <h4 className="text-[var(--dark-gray-2)] font-bold">Informações Pessoais</h4>
                    <div className="border-[1px] border-[var(--light-gray-2)]"></div>
                    <Input
                    id={'nome-completo'}
                    title={'Nome completo *'}
                    type={'text'}
                    placeholder={'Insira seu nome'}
                     />
                    <Input
                    id={'cpf'}
                    title={'CPF *'}
                    type={'number'}
                    placeholder={'Insira seu CPF'}
                     />
                    <Input
                    id={'email'}
                    title={'Email *'}
                    type={'email'}
                    placeholder={'Insira seu Email'}
                     />
                    <Input
                    id={'tel'}
                    title={'Celular *'}
                    type={'number'}
                    placeholder={'Insira seu Celular'}
                     />
                </div>

                {/* Informações de Entrega */}
                <div className="bg-[var(--white)] space-y-7 w-[750px] h-[647px] p-[30px] rounded">
                    <h4 className="text-[var(--dark-gray-2)] font-bold">Informações de Entrega</h4>
                    <div className="border-[1px] border-[var(--light-gray-2)]"></div>
                    <Input
                    id={'endereco'}
                    title={'Endereço *'}
                    type={'text'}
                    placeholder={'Insira seu Endereço'}
                     />
                    <Input
                    id={'bairro'}
                    title={'Bairro *'}
                    type={'text'}
                    placeholder={'Insira seu Bairro'}
                     />
                    <Input
                    id={'cidade'}
                    title={'Cidade *'}
                    type={'text'}
                    placeholder={'Insira sua Cidade'}
                     />
                    <Input
                    id={'cep'}
                    title={'CEP *'}
                    type={'tel'}
                    placeholder={'Insira seu CEP'}
                     />
                    <Input
                    id={'complemento'}
                    title={'Complemento *'}
                    type={'text'}
                    placeholder={'Insira complemento'}
                     />
                </div>
                {/* Informações de Pagamento */}
                <div className="bg-[var(--white)] space-y-7 w-[750px] h-[515px] p-[30px] rounded">
                    <h4 className="text-[var(--dark-gray-2)] font-bold">Informações de Pagamento</h4>
                    <div className="border-[1px] border-[var(--light-gray-2)]"></div>
                    <h4 className="text-[var(--dark-gray-2)] font-bold">Forma de Pagamento</h4>
                    <div className="flex gap-2">
                        <Radio
                        id={'cartao-credito'}
                        title={'Cartão de Crédito'}
                        type={'radio'}
                        name={'formaDePagamento'}
                        />
                        <Radio
                        id={'boleto'}
                        title={'Boleto'}
                        type={'radio'}
                        name={'formaDePagamento'}
                        />
                    </div>
                    <Input
                    title={'Nome do Cartão *'}
                    placeholder={'Insira o nome do Cartão'}
                    type={'text'}
                    id={'nome-cartão'}
                    />
                    <div className="flex justify-between gap-4">
                        <Input
                        title={'Número do Cartão *'}
                        placeholder={'Insira o número do Cartão'}
                        type={'number'}
                        id={'numero-cartão'}
                        />
                        <Input
                        title={'Validade do Cartão *'}
                        placeholder={'Insira a validade do Cartão'}
                        type={'number'}
                        id={'validade-cartão'}
                        />
                    </div>
                    <div className="flex justify-start w-6/12">
                        <Input
                        id={'cvv'}
                        title={'CVV *'}
                        type={'number'}
                        placeholder={'CVV'}
                        
                        />
                    </div>                

                </div>
                {/* Finalizar Compra */}
                <div className="bg-[var(--white)] space-y-7 w-[750px] h-[248px] p-[30px] rounded">
                    <h4 className="text-[var(--dark-gray-2)] font-bold">Finalizar Compra</h4>
                    <div className="border-[1px] border-[var(--light-gray-2)]"></div>
                    <div className="flex justify-between">
                        <h2 className="font-bold">Total</h2>
                        <div>
                            <h2 className="text-[var(--error)] font-bold flex justify-end">R$ 219,00</h2>
                            <p className="text-[var(--light-gray-2)] text-[12px]">ou 10x de R$ 21,00 sem juros</p>
                        </div>
                    </div>
                        <div className="flex w-full justify-center rounded-md bg-[var(--warning)] py-2 text-[var(--white)]">
                            <button>Realizar Pagamento</button>
                        </div>
                </div>
            </form>
        </div>
    )
}