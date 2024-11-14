// import {TableCart} from "../components/TableCart"

// export const Testes = () => {
//     return (
//         <>
//             <TableCart/>
//         </>
//     )
// }


import { useState } from "react";

const EditableField = () => {
  // Estado para controlar se o campo está em modo de edição
  const [isEditing, setIsEditing] = useState(false);
  // Estado para armazenar o nome do usuário
  const [userName, setUserName] = useState("João Silva");

  // Função para alternar entre os modos de exibição
  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  // Função para lidar com a alteração do nome
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="space-y-2">
      {/* Exibindo o nome ou campo de edição dependendo do estado */}
      <div className="flex items-center">
        <h4 className="mr-2">Nome:</h4>
        {isEditing ? (
          <input
            type="text"
            value={userName}
            onChange={handleChange}
            className="border px-2 py-1 rounded"
          />
        ) : (
          <span>{userName}</span>
        )}
        <button
          onClick={toggleEdit}
          className="ml-2 text-blue-500 underline"
        >
          {isEditing ? "Salvar" : "Editar"}
        </button>
      </div>
    </div>
  );
};

export default EditableField;
