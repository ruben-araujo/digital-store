import ProductListing from "./ProductListing";


function TrendingProducts() {
  return (
    <section className="container  mx-auto text-left my-10 ">
      <div className="flex relative  items-center justify-around text-center">
        <h2 className="font-bold text-[var(--dark-gray-2)] text-base lg:text-2xl leading-[38px] lg:mx-[67.547px] tracking-[0.75px] text-left">
          Produtos em alta
        </h2>
        <span class=" text-[14px] lg:text-lg font-normal text-[var(--primary)] cursor-pointer leading-[34px] tracking-[0.75px] text-center">
          Ver todos <span className="font-extrabold text-[28px]"> &rarr;</span>
        </span>
      </div>

      <ProductListing/>
    </section>
  );
}

export default TrendingProducts;
