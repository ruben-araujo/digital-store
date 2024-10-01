import React from "react";
import Layout from "../pages/Layout";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";

// import { Container } from './styles';

const ProductListingPage = () => {
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
        <div className="flex mt-6">
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
        </div>
      </Layout>
    </>
  );
};

export default ProductListingPage;
