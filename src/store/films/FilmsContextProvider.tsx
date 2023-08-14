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
  const [films, setFilmList] = useState<Film[]>([]);

  const { getFilms } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const apiFilms = await getFilms();

    setFilmList([...apiFilms]);
  }, [getFilms]);

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      loadFilms,
      films,
    }),
    [films, loadFilms],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};
export default FilmsContextProvider;
