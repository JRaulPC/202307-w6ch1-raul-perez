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
      throw new Error("Can'get Films from Api rest");
    }
  }, []);

  return { getFilms };
};

export default useFilmsApi;
