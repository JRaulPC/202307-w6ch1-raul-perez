import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import NewFilm from "../../components/NewFilm/NewFilm";
import FilmsContext from "../../store/films/FilmsContext";

const NewFilmPage = (): React.ReactElement => {
  const { addFilm } = useContext(FilmsContext);

  return (
    <>
      <BrowserRouter>
        <h2>Añadir nueva película</h2>
        <NewFilm addFilm={addFilm} />
      </BrowserRouter>
    </>
  );
};

export default NewFilmPage;
