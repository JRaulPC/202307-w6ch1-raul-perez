import { render, screen } from "@testing-library/react";
import FilmsContextProvider from "../../store/films/FilmsContextProvider";
import FilmsListPage from "./FilmsListPage";

describe("Given a FilmListPage componente", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with the text `Listado de películas`", () => {
      const headingText = "Listado de películas";

      render(
        <FilmsContextProvider>
          <FilmsListPage></FilmsListPage>
        </FilmsContextProvider>,
      );

      const listHeading = screen.getByRole("heading", { name: headingText });

      expect(listHeading).toBeInTheDocument();
    });
  });
});
