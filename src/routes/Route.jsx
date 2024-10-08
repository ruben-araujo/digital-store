import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import { Testes } from "../pages/Testes";
function AppRoutes() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/produtos" element={<ProductListingPage />}></Route>
        <Route path="/testes" element={<Testes />}></Route>
        </Routes>
      
    </BrowserRouter>
   
  );
}

export default AppRoutes;
