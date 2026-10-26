import { NavLink } from "react-router-dom";
import { useModules } from "../../hooks/useModules";

import "./modulesList.scss";

interface ModulesListProps {
  blocClass: "table" | "row";
}

export const ModulesList = ({ blocClass }: ModulesListProps) => {
  const { data: modules, isLoading, isError, error } = useModules();

  if (isLoading) return <div>Завантаження модулів ...</div>;
  if (isError) return <>Помилка: {error}</>;

  return (
    <>
      <h2>Модулі: </h2>
      <ul className={"block " + blocClass}>
        {modules?.map((modul) => (
          <NavLink
            to={`/modules/${modul.id}`}
            key={modul.id}
            className="block__box "
          >
            <div className="block__title">{modul.title}</div>
            <div className="block__description">{modul.description}</div>
          </NavLink>
        ))}
      </ul>
    </>
  );
};
