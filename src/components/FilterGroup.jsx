import React from "react";

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-4">
      <h3 className="text-dark-gray-2 text-14 font-semibold mb-2">{title}</h3>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type={inputType}
            id={option.value || option.text} // usa o texto como ID se value não existir
            name={title} // agrupa os inputs
            value={option.value || option.text} // usa o valor ou texto como valor
            className="w-5 h-5 mr-2 " // ajuste de estilo para o input
          />
          <label
            htmlFor={option.value || option.text}
            className="text-gray-700 cursor-pointer"
          >
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterGroup;
