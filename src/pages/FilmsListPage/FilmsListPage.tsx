import Count from "../../components/Count/Count";
import FilmsList from "../../components/FilmsList/FilmsList";

const FilmsListPage = (): React.ReactElement => {
  return (
    <>
      <h2>Listado de películas</h2>
      <Count />
      <FilmsList />
    </>
  );
};

export default FilmsListPage;
