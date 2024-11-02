import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../contexts/GlobalContexts";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import TrendingProducts from "../components/TrendingProducts";
import SpecialOffer from "../components/SpecialOffer";
import Layout from "./Layout";
import Gallery from "../components/Gallery";


function HomePage() {

  const { setCurrentLocation } = useContext(Context);

  setCurrentLocation(useLocation())

  return (
    <>
      <Layout>
        <Gallery
          slides={[
            '/src/public/home-slide-1.jpeg',
            '/src/public/home-slide-2.jpeg',
            '/src/public/home-slide-3.jpeg',
            '/src/public/home-slide-4.jpeg',
            '/src/public/home-slide-5.jpeg',
            '/src/public/home-slide-6.jpeg',
            '/src/public/home-slide-7.jpeg',
            '/src/public/home-slide-.8jpeg',
          ]}
        />
        <Hero />
        <FeaturedCollections />
        <TrendingProducts />
        <SpecialOffer />
      </Layout>
    </>
  );
}

export default HomePage;
