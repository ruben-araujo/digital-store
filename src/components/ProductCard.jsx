function ProductCard({ image, name, price, priceDiscount, discount }) {
  return (
    <div className="my-3 relative">
      {discount ? (
        <div className=" text-center absolute w-[96px] h-[32px] bg-[#E7FF86] text-[var(--dark-gray)] 
        rounded-[29px] top-3 left-2 font-inter 
         text-[14px] leading-[22px] font-bold  ">
          <span className=" w-full h-full flex items-center justify-center" >
          30% OFF
          </span>
        </div>
      ) : (
        " "
      )}
      <img className="bg-[var(--white)] mb-3 w-full" src={image} alt="" />
      <p className="text-[14px]">{name}</p>

      <div className="lg:space-x-2 tex-base">
        <span className="w-6 text-[var(--light-gray)] line-through">
          {priceDiscount}
        </span>
        <span className="w-6 ml-3 text-[var(--dark-gray)] ">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
