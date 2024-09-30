import FeaturedCollectionsCard from "./FeaturedCollectionsCard";

import card1 from "../assets/star-wars-tshirt.png";
import card2 from "../assets/ddd 1.png";
import card3 from "../assets/fone.png";

import Frame01 from "../assets/Frame01.svg";
import Frame02 from "../assets/Frame02.svg";
import Frame03 from "../assets/Frame03.svg";
import Frame04 from "../assets/Frame04.svg";

function FeaturedCollections() {
  return (
    <>
      <div className=" container  mx-auto text-left my-10">
        <h2 className="font-bold text-[var(--dark-gray-2)] text-2xl leading-[38px] mx-[67.547px] tracking-[0.75px] text-left">
          Coleções em destaque
        </h2>
        <div className=" w-[90%] flex flex-wrap md:flex-nowrap gap-3 mx-auto">
          <FeaturedCollectionsCard
            imgSrc={card1}
            title="Novo drop
                Supreme"
            discount="30"
          />
          <FeaturedCollectionsCard
            imgSrc={card2}
            title="Novo drop
                Supreme"
            discount="30"
          />
          <FeaturedCollectionsCard
            imgSrc={card3}
            title="Novo drop
                Supreme"
            discount="30"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-2 my-20">
        <h3 className="font-bold text-[var(--dark-gray-2)] text-2xl leading-[38px]  tracking-[0.75px] text-left">
          Coleções em destaque
        </h3>
        <div className="flex gap-3 my-10">
          <div className="w-[104px] h-[138px] text-[var(--dark-gray-2)] text-center">
            <img clasName=" " src={Frame01} alt="camiseta" />
            <p class="font-inter text-xs font-bold leading-[22px] tracking-[0.75px] text-center">
              Camisetas
            </p>
          </div>
          <div className="w-[104px] h-[138px] text-[var(--dark-gray-2)] text-center">
            <img clasName="w-[64px] h-[64px]" src={Frame02} alt="calças" />
            <p class="font-inter text-xs font-bold leading-[22px] tracking-[0.75px] text-center">
              Calças
            </p>
          </div>
          <div className="w-[104px] h-[138px] text-[var(--dark-gray-2)] text-center">
            <img clasName="w-[64px] h-[64px]" src={Frame02} alt="Bonés" />
            <p class="font-inter text-xs font-bold leading-[22px] tracking-[0.75px] text-center">
              Bonés
            </p>
          </div>
          <div className="w-[104px] h-[138px] text-[var(--dark-gray-2)] text-center">
            <img clasName="w-[64px] h-[64px]" src={Frame03} alt="Headphones" />
            <p class="font-inter text-xs font-bold leading-[22px] tracking-[0.75px] text-center">
              Headphones
            </p>
          </div>
          <div className="w-[104px] h-[138px] text-[var(--dark-gray-2)] text-center">
            <img clasName="w-[64px] h-[64px]" src={Frame04} alt="Tênis" />
            <p class="font-inter text-xs font-bold leading-[22px] tracking-[0.75px] text-center">
              Tênis
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCollections;
