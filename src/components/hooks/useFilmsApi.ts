import { useCallback } from "react";
import Film from "../../store/films/types";

export const apiURL = import.meta.env.VITE_API_PELIS_URL;

const useFilmsApi = () => {
  const getFilms = useCallback(async () => {
    try {
      const response = await fetch(`${apiURL}/films`);
      const apiFilms = (await response.json()) as Film[];

      return apiFilms;
    } catch (error) {
      throw new Error("Can't get the films list!");
    }
  }, []);

  const addFilm = async (film: Film) => {
    const response = await fetch(apiURL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(film),
    });

    const newFilm = (await response.json()) as Film;

    return newFilm;
  };

  return { getFilms, addFilm };
};

export default useFilmsApi;
