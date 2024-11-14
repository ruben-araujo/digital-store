import { NavLink, useLocation } from "react-router-dom";

export const MenuProfile = () => {
  const location = useLocation(); // Obtém o local (rota atual)

  const isActive = (path) => {
    return location.pathname === path ? "text-[var(--primary)]" : "";
  };
  return (
    <>
      <section className="border w-[334px] h-[286px] bg-[var(--white)]">
        <ul className="px-5 pt-7 space-y-3 flex flex-col justify-between">
          <li className="text-[var(--dark-gray)] font-semibold border-b border-gray-300 py-3 flex justify-between items-center">
            <NavLink to={"/perfil"} className={({ isActive }) => isActive ? 'text-[var(--primary)] font-bold' : ''}>Meu Perfil</NavLink>
          </li>

          <li className="text-[var(--dark-gray)] border-b border-gray-300 py-3 flex justify-between items-center">
            <NavLink to={"/meus-pedidos"} className={({ isActive }) => isActive ? 'text-[var(--primary)] font-bold' : ''}>Meus Pedidos</NavLink>
          </li>

          <li className="text-[var(--dark-gray)] border-b border-gray-300 py-3 flex justify-between items-center">
            <NavLink to={"/minhas-informacoes"} className={({ isActive }) => isActive ? 'text-[var(--primary)] font-bold' : ''}>Minhas Informações</NavLink>
          </li>
          <li className="text-[var(--dark-gray)]  py-3 flex justify-between items-center">
            <NavLink to={"/metodos-de-pagamento"} className={({ isActive }) => isActive ? 'text-[var(--primary)] font-bold' : ''}>Métodos de Pagamento</NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};
