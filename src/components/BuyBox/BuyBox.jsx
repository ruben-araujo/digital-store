import React from 'react';
import ProductOptions from "./ProductOptions";
import Gallery from "../Gallery";
import Stars from "./Stars.jsx"
import ProductItens from '../../database/ProductItens.js';
import { useParams } from 'react-router-dom';

const BuyBox = () => {
  let { id } = useParams();

  let produto = ProductItens.find(p => p.id.toString() === id);

  return (

    <div className="flex justify-center p-12 gap-8 w-4/5">

      {/* PRODUCT GALLERY */}
      <div className="w-full h-full">
        <Gallery
          slides={produto.image}
        />

      </div>
      


      <div className="flex flex-col gap-y-1 ml-10">
        <h3 className="font-bold text-3xl text-dark-gray">{produto.name}</h3>
        <p className="text-dark-gray-3">{produto.ref}</p>
        <div className="flex gap-2 align-baseline">
          <Stars />
          <span className='mt-2 p-4 py-1 bg-warning rounded-lg'>{produto.rating}</span>
          {/* Avaliações */}
          <span className='mt-2'>{produto.reviews}</span>
        </div>

        <h3 className="text-dark-gray-2 text-2xl">
          <span className="text-base">R$</span>{produto.priceDiscount}<s className="ligth-gray-2 text-base">{ProductItens[0].price},00</s>
        </h3>

        <p className="text-light-gray font-semibold mt-5">Descrição do produto</p>
        <p className="w-80 text-justify">{produto.description}</p>
        <ProductOptions cor={produto.colorOptions} tamanho={produto.sizeOptions} />
        <button className="w-full p-2 bg-[var(--warning)] rounded-xl text-white font-semibold px-12 mt-5 border border-warning">Comprar</button>
      </div>
    </div>


  );
}

export default BuyBox;