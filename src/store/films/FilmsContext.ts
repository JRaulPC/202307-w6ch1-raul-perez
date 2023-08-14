import { createContext } from "react";
import { Film } from "../../types";

export interface FilmsContextStructure {
  Films: Film[];
}

const FilmContext = createContext<FilmsContextStructure>(
  {} as FilmsContextStructure,
);

export default FilmContext;
