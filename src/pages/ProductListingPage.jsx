import React, { useState } from "react";
import Layout from "../pages/Layout";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import FrameFilter from "../assets/FrameFilter.png"

// import { Container } from './styles';

const ProductListingPage = () => {

const [ filterModalOpen, setFilterModalOpen] = useState(false)

function openModal(){
  setFilterModalOpen(!filterModalOpen)
  console.log(filterModalOpen)
}


  const filterOptions = [
    {
      title: "Marca",
      options: [{ text: "Nike" }, { text: "Adidas" }, { text: "Puma" }],
    },
    {
      title: "Categoria",
      options: [
        { text: "Esporte e Lazer" },
        { text: "Casual" },
        { text: "Utilitário" },
        { text: "Corrida" },
      ],
    },
    {
      title: "Gênero",
      options: [
        { text: "Masculino" },
        { text: "Feminino" },
        { text: "Unissex" },
      ],
    },
    {
      title: "Estado",
      options: [{ text: "Novo" }, { text: "Usado" }],
    },
  ];

  return (
    <>
      <Layout>
        <div className="flex gap-4  my-6 lg:my-0 flex-col lg:flex-row lg:justify-between items-center  w-full   lg:p-20">
          <div className="flex items-center gap-4">
            <div>
              <label className="border-black border p-4 ">
                Ordenar por:
                <select name="orderProducts">
                  <option value="relevancia">mais relevantes</option>
                  <option value="menorPreco">menor preço</option>
                  <option value="maiorPreco">maior preço</option>
                </select>
              </label>
            </div>
            <div className="lg:hidden w-16 h-16" onClick={openModal}>
              <img src={FrameFilter} alt="" />
            </div>
          </div>

          <p className="text-base font-semibold  ">
            Resultados para "<span>Tênis</span>" -{" "}
            <span className="font-normal leading-7 ">309 produtos</span>
          </p>
        </div>

        <section className="flex mt-2 lg:mt-6">
          <div className="bg-white hidden lg:block px-4 pt-3 w-[400px] h-fit mx-8">
            <h4 className="text-dark-gray-2 font-semibold">Filtrar por</h4>
            <hr className="border-light-gray-2 my-3" />
            <FilterGroup
              title={filterOptions[0].title}
              inputType="checkbox"
              options={filterOptions[0].options}
            />
            <FilterGroup
              title={filterOptions[1].title}
              inputType="checkbox"
              options={filterOptions[1].options}
            />
            <FilterGroup
              title={filterOptions[2].title}
              inputType="checkbox"
              options={filterOptions[2].options}
            />
            <FilterGroup
              title={filterOptions[3].title}
              inputType="checkbox"
              options={filterOptions[3].options}
            />
          </div>
          <ProductListing />
        </section>
      </Layout>
    </>
  );
};

export default ProductListingPage;
