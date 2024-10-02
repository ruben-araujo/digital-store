import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
