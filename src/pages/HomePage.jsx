import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import { Container } from './styles';

function HomePage() {
  return (
    <>
    <Header />
    
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
    <h1 className="text-center text-4xl font-serif text-white">
      HOME
    </h1>
    </div>

    <Footer />

    </>
  );
};

export default HomePage;
