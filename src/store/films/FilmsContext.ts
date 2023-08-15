import { createContext } from "react";
import { Film } from "../../types";

export interface FilmsContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
  addFilm: (film: Partial<Film>) => Promise<void>;
}

const FilmsContext = createContext<FilmsContextStructure>(
  {} as FilmsContextStructure,
);

export default FilmsContext;
