function ProductCard(props) {
  return (
    <div className="my-3 relative">
      {props.discount ? (
        <div
          className=" text-center absolute w-[96px] h-[32px] bg-[#E7FF86] text-[var(--dark-gray)] 
        rounded-[29px] top-3 left-2 font-inter 
         text-[14px] leading-[22px] font-bold  "
        >
          <span className=" w-full h-full flex items-center justify-center">
            {props.discountPercentual}% OFF
          </span>
        </div>
      ) : (
        " "
      )}
      <img className="bg-[var(--white)] mb-3 w-full" src={props.image} alt="" />
      <span className="text-sm font-bold text-[var(--light-gray)] leading-6">{props.category}</span>
      <p className="text-[14px]">{props.name}</p>

      

      <div className="lg:space-x-2 tex-base">
        <span className="w-6 text-[var(--light-gray)] line-through">
          {props.priceDiscount}
        </span>
        <span className="w-6 ml-3 text-[var(--dark-gray)] ">{props.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
