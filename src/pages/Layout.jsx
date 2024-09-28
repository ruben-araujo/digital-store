
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout(props) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
