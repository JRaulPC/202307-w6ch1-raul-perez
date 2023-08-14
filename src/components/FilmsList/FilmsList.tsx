import { useContext } from "react";
import FilmsContext from "../../store/films/FilmsContext";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return (
    <ul className="films">
      {films.map((film) => (
        <li key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
