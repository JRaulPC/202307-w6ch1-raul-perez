import { useContext } from "react";
import FilmsContext from "../../store/films/FilmsContext";

const Count = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return (
    <span aria-label="shown movies" className="count">
      Listando {films.length} películas
    </span>
  );
};

export default Count;
