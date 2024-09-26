import FeaturedCollectionsCard from "./FeaturedCollectionsCard";

import card1 from "../assets/star-wars-tshirt.png"
import card2 from "../assets/ddd 1.png";
import card3 from "../assets/fone.png";

function FeaturedCollections() {
  return (
    <>
    <div className=" w-[90%] mx-auto text-left my-10">
        <h2 className="font-bold text-2xl leading-[38px] mx-[67.547px] tracking-[0.75px] text-left">Coleções em destaque</h2>
    <div className="flex gap-3 w-[90%] mx-auto">
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
     
    </>
  );
}

export default FeaturedCollections;
