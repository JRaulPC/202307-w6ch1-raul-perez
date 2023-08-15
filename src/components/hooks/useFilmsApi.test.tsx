import { renderHook } from "@testing-library/react";
import { handlersError, newFilmHandler } from "../../mocks/handlers";
import { mockedFilms, newMockedFilm } from "../../mocks/mockedData";
import { server } from "../../mocks/serve";
import useFilmsApi from "./useFilmsApi";

describe("Given a useFilmsApi custom hook", () => {
  describe("When the getFilms function is called", () => {
    test("Then it should return a collection of 4 different movies", async () => {
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const films = await getFilms();

      expect(films).toStrictEqual(mockedFilms);
    });

    test("Then it should throw an error when the request fails to get the film collection from the Api rest", async () => {
      server.resetHandlers(...handlersError);
      const expectedError = new Error("Can't get the films list!");

      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const films = getFilms();

      expect(films).rejects.toThrowError(expectedError);
    });
    describe("When the addFilm function is called with the film 'No es país para viejos'", () => {
      test("Then it should add the information of the film 'No es país para viejos' to the films list", async () => {
        server.resetHandlers(...newFilmHandler);

        const {
          result: {
            current: { addFilm },
          },
        } = renderHook(() => useFilmsApi());

        const newfilm = await addFilm(newMockedFilm);

        await expect(newfilm).toStrictEqual(newMockedFilm);
      });
    });
  });
});
