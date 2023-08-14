import { renderHook } from "@testing-library/react";
import { handlersError } from "../../mocks/handlers";
import mockedFilms from "../../mocks/mockedFilms";
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
  });
});
