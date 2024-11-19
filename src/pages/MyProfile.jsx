import { useState } from "react";
import Input from "../components/Input";
import { MenuProfile } from "../components/MenuProfile";

export const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "João Silva",
    cpf: "123456789-35",
    email: "francisco@gmail.com",
    celular: "(85) 5555-5555",  
    endereco: "Rua João Pessoa, 333",
    bairro: "Centro",
    cidade: "Fortaleza, Ceará",
    cep: "433-8800"
  });
  

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Extrai o nome e o valor do campo
    setUserData((prevData) => ({
      ...prevData, // Mantém os dados anteriores
      [name]: value, // Atualiza apenas o campo alterado
    }));
  };
  

  return (
    <div className="flex flex-1 h-[100vh] justify-around py-4">
      <MenuProfile />
      <section className="w-[890px] h-fit bg-[var(--white)] rounded-md px-5">
        <div className="border-b flex justify-between items-center p-4">
          <h2 className="text-left text-lg">Minhas Informações</h2>
          <a className="text-[var(--primary)] underline cursor-pointer" onClick={toggleEdit}>
          {isEditing ? "Salvar" : "Editar"}
          </a>
        </div>

        {/* INFORMAÇÕES PESSOAIS */}
        <div className="p-4">
          <h4 className="text-lg font-bold text-[var(--dark-gray-2)]">
            Informações Pessoais
          </h4>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">Nome: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"name"}
              value={userData.name}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.name}</span>
            )}
          </p>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">CPF: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"cpf"}
              value={userData.cpf}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.cpf}</span>
            )}
          </p>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">Email: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"email"}
              value={userData.email}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.email}</span>
            )}
          </p>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">Celular: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"celular"}
              value={userData.celular}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.celular}</span>
            )}
          </p>
        </div>

        <div className="border-t border-[var(--light-gray-2)] my-4"></div>

        {/* INFORMAÇÕES DE ENTREGA */}
        <div className="p-4">
          <h4 className="text-lg font-bold text-[var(--dark-gray-2)]">
            Informações de Entrega
          </h4>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">Endereço: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"endereco"}
              value={userData.endereco}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.endereco}</span>
            )}
          </p>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">Bairro: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"bairro"}
              value={userData.bairro}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.bairro}</span>
            )}
          </p>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">Cidade: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"cidade"}
              value={userData.cidade}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.cidade}</span>
            )}
          </p>
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1">
            <span className="text-[var(--light-gray)]">CEP: </span>
            {isEditing ? (
              <Input
              type={"text"}
              name={"cep"}
              value={userData.cep}
              onChange={handleChange}
              />
            ) : (
              <span>{userData.cep}</span>
            )}
          </p>
        </div>
      </section>
    </div>
  );
};
