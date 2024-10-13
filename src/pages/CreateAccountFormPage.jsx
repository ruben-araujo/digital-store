import React, { useEffect } from "react";
import SimpleHeader from "../components/SimpleHeader";
import Footer from "../components/Footer";
import Input from "../components/Input";
import { NavLink } from "react-router-dom";

export default function CreateAccountForm() {
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <>
      <SimpleHeader />
      <section className="w-full h-full px-7 pt-9 pb-28 flex flex-col justify-center gap-5 sm: items-center bg-[#F9F8FE]">
        <h2 className="w-full pt-5 flex flex-col gap-5 text-center text-[22px] text-[#1f1f1f] font-bold lg:text-[32px] sm:w-4/5 lg:w-3/6 lg:text-left">
          Criar conta
        </h2>
        <div className="w-full p-7 flex flex-col gap-5 text-[#474747] bg-[#FFFFFF] sm:w-4/5 lg:w-3/6">
          <h3 className="font-bold text-[#474747] lg:text-[22px]">
            Informações pessoais
          </h3>
          <hr />
          <Input
            type={"text"}
            name={"nome"}
            id={"nome"}
            placeholder={"Insira seu nome"}
            title={"Nome Completo *"}
          />
          <Input
            type={"number"}
            name={"cpf"}
            id={"cpf"}
            placeholder={"Insira seu CPF"}
            title={"CPF *"}
          />
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Insira seu email"}
            title={"Email *"}
          />
          <Input
            type={"number"}
            name={"telefone"}
            id={"telefone"}
            placeholder={"Insira seu celular"}
            title={"Celular *"}
          />
        </div>
        <div className="w-full p-7 flex flex-col gap-5 text-[#474747] bg-[#FFFFFF] sm:w-4/5 lg:w-3/6">
          <h3 className="font-bold text-[#474747] lg:text-[22px]">
            Informações de entrega
          </h3>
          <hr />
          <Input
            type={"text"}
            name={"endereco"}
            id={"endereco"}
            placeholder={"Insira seu endereço"}
            title={"Endereço *"}
          />
          <Input
            type={"text"}
            name={"bairro"}
            id={"bairro"}
            placeholder={"Insira seu bairro"}
            title={"Bairro *"}
          />
          <Input
            type={"text"}
            name={"cidade"}
            id={"cidade"}
            placeholder={"Insira sua cidade"}
            title={"Cidade *"}
          />
          <Input
            type={"number"}
            name={"cep"}
            id={"cep"}
            placeholder={"Insira seu CEP"}
            title={"CEP *"}
          />
          <Input
            type={"text"}
            name={"complemento"}
            id={"complemento"}
            placeholder={"Insira o complemento"}
            title={"Complemento *"}
          />
        </div>
        <div className="w-full flex flex-col gap-5 text-[#474747] sm:w-4/5 lg:w-3/6">
          <div className="flex gap-2 items-start">
            <input
              className="accent-[#C92071]"
              type="checkbox"
              id="emailmkt"
              name="emailmkt"
              checked
            />
            <label
              className="text-xs font-medium text-[#474747]"
              for="emailmkt"
            >
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
          </div>
          <NavLink to={"/"} className=" w-full text-white">
            <button className=" bg-[var(--primary)] px-9 py-3 w-full text-sm font-bold leading-5 tracking-wider rounded lg:text-[16px]">
              Criar conta
            </button>
          </NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
}
