import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import { mockedFilms } from "../../mocks/mockedData";
import FilmsContext from "../../store/films/FilmsContext";
import FilmsList from "./FilmsList";

describe("Given a FilmList component", () => {
  describe("When it receives a film collection", () => {
    const loadFilms = vi.fn();
    const addFilm = vi.fn();

    test("Then it should show name of the first movie of the collection as a header", () => {
      const filmHeading = `${mockedFilms[0].title} (${mockedFilms[0].year})`;

      render(
        <FilmsContext.Provider
          value={{ addFilm, loadFilms, films: mockedFilms }}
        >
          {<FilmsList />}
        </FilmsContext.Provider>,
      );

      const filmTitle = screen.getByRole("heading", {
        name: filmHeading,
      });

      expect(filmTitle).toBeInTheDocument();
    });
  });
});
