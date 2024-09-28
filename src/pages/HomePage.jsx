import React from "react";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import TrendingProducts from "../components/TrendingProducts";
import SpecialOffer from "../components/SpecialOffer";
import Layout from "./Layout";

// import { Container } from './styles';

function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedCollections />
        <TrendingProducts />
        <SpecialOffer />
      </Layout>
    </>
  );
}

export default HomePage;
