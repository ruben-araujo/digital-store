import ProductCard from "../components/ProductCard";
import tenis from "../public/product01.png";
function ProductListing() {
  const products = [
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: true,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: true,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: false,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: false,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: false,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: false,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: false,
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
      discount: false,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
          discount = {product.discount}
        />
      ))}
    </div>
  );
}

export default ProductListing;
