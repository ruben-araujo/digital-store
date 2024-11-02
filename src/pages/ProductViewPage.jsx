import Layout from "../pages/Layout";
import BuyBox from "../components/BuyBox/BuyBox";
import ProductListing from "../components/ProductListing";
import { useParams } from "react-router-dom";

const ProductViewPage = () => {
  let { id } = useParams();

  return (
    <Layout>
        <BuyBox id={id}/>
        <div className="mt-12">
          <h2 className="ml-8 mb-8 font-bold text-2xl text-dark-gray-2">Produtos relacionados</h2>
          <ProductListing quantidade={4} />
        </div>
        
    </Layout>
  )
}

export default ProductViewPage