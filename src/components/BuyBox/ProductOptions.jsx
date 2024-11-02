import React, { useState } from 'react';

const ProductOptions = ({ cor , tamanho }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-y-2 font-semibold mt-5">
        <span className="text-light-gray">Tamanho</span>
        <ul className="flex gap-3 pr-3 list-none">
          {tamanho.length > 0 ? (
            tamanho.map((size, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedSize(size)}
                  className={`border border-light-gray-2 px-4 py-2 rounded ${selectedSize === size ? 'bg-gray-300' : ''}`}
                >
                  {size}
                </button>
              </li>
            ))
          ) : (
            <li>Sem opções de tamanho disponíveis</li>
          )}
        </ul>
      </div>
      <div>
        <span className="text-light-gray font-semibold">Cor</span>
        <ul className="flex gap-3">
          {cor.length > 0 ? (
            cor.map((color, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`p-4 rounded-full ${selectedColor === color ? 'p-2 border-2 border-light-gray' : ''}`}
                >
                </button>
              </li>
            ))
          ) : (
            <li>Sem opções de cor disponíveis</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default ProductOptions;
