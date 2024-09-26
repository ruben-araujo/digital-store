import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";

// import { Container } from './styles';

function HomePage() {
  return (
    <>
    <Header />
    
    <Hero/>
    <FeaturedCollections/>

    <Footer />

    </>
  );
};

export default HomePage;
