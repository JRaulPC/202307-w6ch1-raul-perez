import { createContext } from "react";
import { Film } from "../../types";

export interface FilmsContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
}

const FilmContext = createContext<FilmsContextStructure>(
  {} as FilmsContextStructure,
);

export default FilmContext;
