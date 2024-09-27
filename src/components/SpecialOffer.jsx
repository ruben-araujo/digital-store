import banner from '../assets/Laye01.png'
import ellipse from '../assets/Ellipse.png'

function SpecialOffer() {
    return ( 
        <section className='w-90  flex-wrap flex justify-evenly p-10 mt-48 mb-32 items-center'>
            <div className='relative'>
                <img src={banner} alt=" oferta especial" />
            <div className='absolute z-10 top-[-40px] left-24'><img src={ellipse} alt="" /></div>
            </div>
            <div className="flex flex-col max-w-[514px]  gap-y-4">
            <span className="text-[var(--primary)] leading-[24px] tracking-[.75px] font-inter text-[16px] font-[700]">Oferta especial</span>
            <h1 className="leading-[50px] tracking-[1px] font-inter text-[48px] font-extrabold">Air Jordan edição de 
            colecionador</h1>
            <p className="text-[var(--dark-gray-2)] leading-[28px] tracking-[.75px] font-inter text-[16px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <button className="bg-[var(--primary)] w-[220px] text-white font-bold py-2 px-10  rounded-lg hover:bg-[var(--tertiary)] cursor-pointer">
              Ver Oferta
            </button>
          </div>

        </section>
     );
}

export default SpecialOffer;