import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import useFilmsApi from "../../components/hooks/useFilmsApi";
import FilmsContext, { FilmsContextStructure } from "./FilmsContext";
import Film from "./types";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilms] = useState<Film[]>([]);

  const { getFilms, addFilm: addFilmToApi } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const apiFilms = await getFilms();

    setFilms([...apiFilms]);
  }, [getFilms]);

  const addFilm = useCallback(
    async (film: Film) => {
      const newFilm = await addFilmToApi(film);

      setFilms((films) => [...films, newFilm]);
    },
    [addFilmToApi],
  );

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      loadFilms,
      films,
      addFilm,
    }),
    [films, loadFilms, addFilm],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};
export default FilmsContextProvider;
