function FeaturedCollectionsCard(props) {
  return (
    <>
      <div className="w-[405px] h-[251px] mx-auto my-2 rounded-[8px] bg-[#D8E3F2] relative overflow-hidden flex flex-col justify-center px-8 pb-10 gap-4" >
        <span className=" w-[96px] h-[32px] bg-[#E7FF86] text-[var(--dark-gray)]    rounded-[29px] px-[15px] py-[5px] gap-[10px] font-inter  text-[14px] leading-[22px] font-bold  text-center">
          {props.discount}% OFF
        </span>

        <h2 className="font-inter text-[var(--dark-gray)] text-[32px] font-bold  leading-[36px] text-left w-[172px] ">
          {props.title}
        </h2>
        <div className="absolute z-40 bottom-5">
          <button className="w-[153px]   h-[48px] text-[var(--primary)] text-[16px] rounded-[8px]  font-bold bg-[var(--light-gray-3)]">
            Comprar
          </button>
        </div>
        <div className="w-[355.68px] h-[236px] gap-0 right-[-130px] bottom-0  absolute ">
          <img src={props.imgSrc} alt="background image card" className="z-10" />
        </div>
      </div>
    </>
  );
}

export default FeaturedCollectionsCard;
