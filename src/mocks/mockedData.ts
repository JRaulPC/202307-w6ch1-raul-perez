import { Film } from "../types";

export const mockedFilms = [
  {
    id: 1,
    title: "Viaje a Darjeeling",
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg",
    director: "Wes Anderson",
    year: 2007,
  },
  {
    id: 2,
    title: "Moonlight",
    poster: "https://pics.filmaffinity.com/moonlight-232276883-mmed.jpg",
    director: "Barry Jenkins",
    year: 2016,
  },
  {
    id: 3,
    title: "Parásitos",
    poster: "https://pics.filmaffinity.com/gisaengchung-432616131-mmed.jpg",
    director: "Bon Joon-hoo",
    year: 2019,
  },
  {
    id: 4,
    title: "REC",
    poster: "https://pics.filmaffinity.com/rec-273731015-mmed.jpg",
    director: "Jaume B. y Paco P.",
    year: 2007,
  },
];

export const newMockedFilm: Partial<Film> = {
  title: "No es país para viejos",
  poster:
    "https://pics.filmaffinity.com/no_country_for_old_men-150566696-large.jpg",
  director: "Joel Coen, Ethan Coen",
  year: 2007,
};
