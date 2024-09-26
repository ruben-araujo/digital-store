import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import ProductCard from "../components/ProductCard";
import tenis from "../assets/White-Sneakers-PNG-Clipart.png"

// import { Container } from './styles';

function HomePage() {
  return (
    <>
    <Header />
    
    <Hero/>
    <FeaturedCollections/>
    <ProductCard
    image={tenis}
    name={'K-Swiss V8 - Masculino'}
    price={'$200'}
    priceDiscount={'$100'}
    />

    <Footer />

    </>
  );
};

export default HomePage;
