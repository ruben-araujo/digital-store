import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import LoginPage from "../pages/LoginPage";
function AppRoutes() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default AppRoutes;
