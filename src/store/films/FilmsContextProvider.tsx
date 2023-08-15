import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import useFilmsApi from "../../components/hooks/useFilmsApi";
import { Film } from "../../types";
import FilmsContext, { FilmsContextStructure } from "./FilmsContext";

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
    async (film: Partial<Film>) => {
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
