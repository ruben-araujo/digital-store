import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import { Testes } from "../pages/Testes";
import LoginPage from "../pages/LoginPage";
import CreateAccount from "../pages/CreateAccountPage";
import CreateAccountForm from "../pages/CreateAccountFormPage";
import ProductsPage from "../pages/ProductsPage";
import ScrollToTop from "../components/ScrollToTop";
function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path='/product-view/:id' element={<ProductViewPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/testes" element={<Testes />}/>     
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criarConta" element={<CreateAccount />} />
        <Route path="/criarConta/formulario" element={<CreateAccountForm/>}/>
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
