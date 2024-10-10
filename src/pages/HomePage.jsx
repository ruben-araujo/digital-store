import React, {useContext} from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../contexts/GlobalContexts";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import TrendingProducts from "../components/TrendingProducts";
import SpecialOffer from "../components/SpecialOffer";
import Layout from "./Layout";


function HomePage() {

  const {setCurrentLocation} = useContext(Context);

  setCurrentLocation(useLocation())

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
