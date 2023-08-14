import { render, screen } from "@testing-library/react";
import mockedFilms from "../../mocks/mockedFilms";
import FilmCard from "./FilmCard";

describe("Given a FilmCard component", () => {
  describe("When is rendered with a 'Viaje a Darjeeling' film,", () => {
    test("Then it should have a heading with a text 'Viaje a Darjeeling (2007)'", () => {
      const headerText = "Viaje a Darjeeling (2007)";

      render(<FilmCard film={mockedFilms[0]} />);

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
