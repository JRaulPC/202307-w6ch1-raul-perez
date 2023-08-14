import { render, screen } from "@testing-library/react";
import FilmsContextProvider from "../../store/films/FilmsContextProvider";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When is rendered", () => {
    test("Then it should show the number of movies that you can see at the list page", () => {
      const accesibleText = "shown movies";

      render(
        <FilmsContextProvider>
          <Count />
        </FilmsContextProvider>,
      );

      const movies = screen.getByLabelText(accesibleText);

      expect(movies).toBeInTheDocument();
    });
  });
});
