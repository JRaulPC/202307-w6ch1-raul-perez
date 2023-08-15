import { useCallback } from "react";
import { Film } from "../../types";

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

  const addFilm = useCallback(async (film: Partial<Film>) => {
    try {
      const response = await fetch(`${apiURL}/films`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(film),
      });

      const newFilm = (await response.json()) as Film;

      return newFilm;
    } catch (error) {
      throw new Error("You can't post a new film right now");
    }
  }, []);

  return { getFilms, addFilm };
};

export default useFilmsApi;
