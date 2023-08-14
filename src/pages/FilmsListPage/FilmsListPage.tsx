import { useContext, useEffect } from "react";
import Count from "../../components/Count/Count";
import FilmsList from "../../components/FilmsList/FilmsList";
import FilmContext from "../../store/films/FilmsContext";

const FilmsListPage = (): React.ReactElement => {
  const { loadFilms } = useContext(FilmContext);

  useEffect(() => {
    (async () => {
      loadFilms();
    })();
  }, [loadFilms]);

  return (
    <>
      <h2>Listado de películas</h2>
      <Count />
      <FilmsList />
    </>
  );
};

export default FilmsListPage;
