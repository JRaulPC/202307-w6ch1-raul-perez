import { useContext } from "react";
import NewFilm from "../../components/NewFilm/NewFilm";
import FilmsContext from "../../store/films/FilmsContext";

const NewFilmPage = (): React.ReactElement => {
  const { addFilm } = useContext(FilmsContext);

  return (
    <>
      <h2>Añadir nueva película</h2>
      <NewFilm addFilm={addFilm} />
    </>
  );
};

export default NewFilmPage;
