import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/ProductListingPage",
        element: <ProductListingPage />
    }
])