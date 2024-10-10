import React from "react";
import Footer from "../components/Footer";
import tenisLogin from "../assets/tenisLogin.png";
import gmailLogin from "../assets/gmail.svg";
import facebookLogin from "../assets/Original.svg";
import SimpleHeader from "../components/SimpleHeader";
import Input from "../components/Input";
import { NavLink } from "react-router-dom";

export default function CreateAccount() {
  

  return (
    <>
      <SimpleHeader />
      <section className="w-full px-7 py-12 flex justify-center items-start bg-gradient-to-br from-[#b5b6f2] to-[#f0f0f7] sm:p-15">
        <div className="w-full p-7 flex flex-col gap-7 bg-white rounded md:max-w-sm lg:max-w-md">
          <div className="flex flex-col gap-5 justify-center items-start">
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h2 className="text-[22px] text-[#1f1f1f] font-bold lg:text-[32px]">
                Crie sua conta
              </h2>
              <p className="text-[14px] text-[#474747] lg:text-[16px]">
                Já possui uma conta? Entre{" "}
                <NavLink className="underline" to={"/login"}>
                  aqui
                </NavLink>
              </p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <Input
                type={"text"}
                name={"email"}
                id={"email"}
                placeholder={"Insira seu email"}
                title={"Email *"}
              />
            </div>

            <NavLink
              to={"/criarConta/formulario"}
              className=" w-full text-white"
            >
              <button className=" bg-[var(--primary)] px-9 py-3 w-full text-sm font-bold leading-5 tracking-wider rounded lg:text-[16px]">
                Criar conta
              </button>
            </NavLink>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <p className="text-[14px] text-[#474747] lg:text-[16px]">
              Ou faça login com
            </p>
            <a href="#">
              <img src={gmailLogin} alt="ícone gmail" />
            </a>
            <a href="#">
              <img src={facebookLogin} alt="ícone facebook" />
            </a>
          </div>
        </div>
        <img
          className="hidden md:block md:w-2/4 lg:max-w-xl"
          src={tenisLogin}
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}
