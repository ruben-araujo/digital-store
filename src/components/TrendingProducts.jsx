import ProductListing from "./ProductListing";


function TrendingProducts() {
  return (
    <section className="container  mx-auto text-left my-10 ">
      <div className="flex relative justify-between text-center">
        <h2 className="font-bold text-[var(--dark-gray-2)] text-2xl leading-[38px] mx-[67.547px] tracking-[0.75px] text-left">
          Produtos em alta
        </h2>
        <span class=" text-lg font-normal text-[var(--primary)] cursor-pointer leading-[34px] tracking-[0.75px] text-center">
          Ver todos <span className="font-extrabold text-[38px]"> &rarr;</span>
        </span>
      </div>

      <ProductListing/>
    </section>
  );
}

export default TrendingProducts;
