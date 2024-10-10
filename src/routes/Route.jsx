import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import LoginPage from "../pages/LoginPage";
import CreateAccount from "../pages/CreateAccountPage";
import CreateAccountForm from "../pages/CreateAccountFormPage";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criarConta" element={<CreateAccount />} />
        <Route path="/criarConta/formulario" element={<CreateAccountForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
