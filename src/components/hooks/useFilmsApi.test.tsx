import { renderHook } from "@testing-library/react";
import mockedFilms from "../../mocks/mockedFilms";
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
  });
});
