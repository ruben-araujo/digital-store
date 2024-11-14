import { MenuProfile } from "../components/MenuProfile";

export const MyProfile = () => {
  return (
    <div className="flex h-[84vh] justify-around py-4">
      <MenuProfile/>
      <section className="w-[890px] h-fit bg-[var(--white)] border border-solid border-gray-500">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Minhas Informações</th>
              <th className="text-right p-4"><a className="text-[var(--primary)] underline cursor-pointer">Editar</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left p-4">Conteúdo da primeira coluna</td>
              <td className="text-right p-4">Conteúdo da segunda coluna</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
