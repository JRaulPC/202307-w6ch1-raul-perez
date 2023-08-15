import { render, screen } from "@testing-library/react";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage page", () => {
  describe("When is rendered", () => {
    test("Then it should have a heading with a text 'Añadir nueva película'", () => {
      const textTitle = "Añadir nueva película";

      render(<NewFilmPage />);

      const filmPage = screen.getByRole("heading", { name: textTitle });

      expect(filmPage).toBeInTheDocument();
    });
  });
});
