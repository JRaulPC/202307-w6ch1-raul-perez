import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import mockedFilms from "../../mocks/mockedFilms";
import FilmsContext from "../../store/films/FilmsContext";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When is rendered", () => {
    test("Then it should show the number of movies that you can see at the list page", () => {
      const length = mockedFilms.length;
      const numberOfMovies = `Listando ${length} películas`;
      const loadFilms = vi.fn();

      render(
        <FilmsContext.Provider value={{ films: mockedFilms, loadFilms }}>
          <Count />
        </FilmsContext.Provider>,
      );

      const movies = screen.getByText(numberOfMovies);

      expect(movies).toBeInTheDocument();
    });
  });
});
