import React from "react";
import ProductListing from "../components/ProductListing";
import Layout from "./Layout";

// import { Container } from './styles';

const ProductListingPage = () => {
  return (
    <>
      <Layout>
        <ProductListing />
      </Layout>
    </>
  );
};

export default ProductListingPage;
