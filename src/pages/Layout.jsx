import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Layout;
