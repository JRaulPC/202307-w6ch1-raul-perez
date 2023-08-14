import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  return (
    <ul className="films">
      <li>
        <FilmCard />
      </li>
      <li>
        <FilmCard />
      </li>
      <li>
        <FilmCard />
      </li>
      <li>
        <FilmCard />
      </li>
    </ul>
  );
};

export default FilmsList;
