import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import EditableField from "../pages/Testes";
import LoginPage from "../pages/LoginPage";
import CreateAccount from "../pages/CreateAccountPage";
import CreateAccountForm from "../pages/CreateAccountFormPage";
import ProductsPage from "../pages/ProductsPage";
import ScrollToTop from "../components/ScrollToTop";
import { FinalizingPurchaseForm } from "../pages/FinalizingPurchaseForm";
import { PurchaseConfirmation } from "../pages/PurchaseConfirmation";
import Layout from "../pages/Layout";
import { MyOrders } from "../pages/MyOrders";
import { MyProfile } from "../pages/MyProfile";
function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/product-view/:id" element={<ProductViewPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/meus-pedidos" element={<MyOrders />} />
          <Route path="/minhas-informacoes" element={<MyProfile />} />
          <Route path="/testes" element={<EditableField />} />
          <Route path="/compras" element={<FinalizingPurchaseForm />} />
          <Route path="/confirmacao" element={<PurchaseConfirmation />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
        <Route path="/criarConta/formulario" element={<CreateAccountForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criarConta" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
