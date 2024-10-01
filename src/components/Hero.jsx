import whiteTenis from "../assets/White-Sneakers-PNG-Clipart.png";
import Title from "./Title";

function Hero() {
  return (
    <>
      <section className="container mx-auto mb-24 p-2 flex-wrap-reverse  flex justify-center items-center">
        <div className="flex flex-col text-center lg:text-left  items-center md:items-start max-w-[510px] gap-y-8 lg:gap-y-4">
          <span className=" text-[var(--primary)] lg:text-[var(--warning)] leading-[24px] tracking-[.75px] font-inter text-[16px] font-[700]">
            Melhores ofertas personalizadas
          </span>
          <Title type="primary">Queima de stoque Nike 🔥</Title>
          <p className=" text-[var(--dark-gray-2)] leading-[34px] tracking-[.75px] font-inter text-[18px] font-[400]">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <button className="bg-[var(--primary)] w-[335px] h-[48px] lg:w-[220px] text-white font-bold py-2 px-10  rounded-lg hover:bg-[var(--tertiary)] cursor-pointer">
            Ver Ofertas
          </button>
        </div>
        <div className=" rotate-[-19.34deg]">
          <img src={whiteTenis} alt="white tenis" />
        </div>
      </section>
    </>
  );
}

export default Hero;
