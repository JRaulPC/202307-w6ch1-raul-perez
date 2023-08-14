import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When is rendered", () => {
    test("Then it should show a link with the text 'Listado de películas' ", () => {
      const firstTextLink = "Listado de películas";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navigator = screen.getByRole("link", {
        name: firstTextLink,
      });

      expect(navigator).toBeInTheDocument();
    });

    test("Then it should show a link with the text 'Añadir película' ", () => {
      const secondTextLink = "Añadir película";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navigator = screen.getByRole("link", {
        name: secondTextLink,
      });

      expect(navigator).toBeInTheDocument();
    });
  });
});
