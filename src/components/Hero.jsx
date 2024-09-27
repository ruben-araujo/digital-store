import whiteTenis from "../assets/White-Sneakers-PNG-Clipart.png";

function Hero() {
  return (
    <>
      <section className="container mx-auto" p-1>
        <div className="w-90 flex-wrap-reverse flex justify-center items-center	">
          <div className="flex flex-col max-w-[510px]  gap-y-4">
            <span className="text-[var(--warning)] leading-[24px] tracking-[.75px] font-inter text-[16px] font-[700]">Melhores ofertas personalizadas</span>
            <h1 className="leading-[66px] tracking-[1px] font-inter text-[64px] font-extrabold">Queima de stoque Nike 🔥</h1>
            <p className="text-[var(--dark-gray-2)] leading-[34px] tracking-[.75px] font-inter text-[18px] font-[400]">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="bg-[var(--primary)] w-[220px] text-white font-bold py-2 px-10  rounded-lg hover:bg-[var(--tertiary)] cursor-pointer">
              Ver Ofertas
            </button>
          </div>
          <div className=" rotate-[-19.34deg]">
            <img src={whiteTenis} alt="white tenis" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
