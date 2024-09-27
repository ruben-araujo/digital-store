import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import TrendingProducts from "../components/TrendingProducts";
import SpecialOffer from "../components/SpecialOffer";

// import { Container } from './styles';

function HomePage() {
  return (
    <>
    <Header />
    <Hero/>
    <FeaturedCollections/>
    <TrendingProducts/>
    <SpecialOffer/>
    <Footer />

    </>
  );
};

export default HomePage;
