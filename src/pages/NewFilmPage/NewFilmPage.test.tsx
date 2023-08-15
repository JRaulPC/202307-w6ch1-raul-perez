import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage page", () => {
  describe("When is rendered", () => {
    test("Then it should have a heading with a text 'Añadir nueva película'", () => {
      const textTitle = "Añadir nueva película";

      render(
        <BrowserRouter>
          <NewFilmPage />
        </BrowserRouter>,
      );

      const filmPage = screen.getByRole("heading", { name: textTitle });

      expect(filmPage).toBeInTheDocument();
    });
  });
});
