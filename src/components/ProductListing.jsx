import ProductCard from "../components/ProductCard";
import tenis from "../public/produc-image-1.jpeg";
function ProductListing() {
  const products = [
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: tenis,
      price: "$100",
      priceDiscount: "$200",
    },
  ];
  return (
    <div className="flex flex-wrap justify-evenly">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;
