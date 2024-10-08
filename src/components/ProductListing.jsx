import ProductCard from "../components/ProductCard";
import { CardsInfo } from "../utils/Products";
function ProductListing() {
  
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4 ">
      {CardsInfo.map((product) => (
        <ProductCard
          key={product.id}
          name={product.productName}
          image={product.url}
          price={product.price}
          category={product.category}
          priceDiscount={product.discountPrice}
          discount = {product.isDiscount}
          discountPercentual={product.discountPercentual}
        />
      ))}
    </div>
  );
}

export default ProductListing;
