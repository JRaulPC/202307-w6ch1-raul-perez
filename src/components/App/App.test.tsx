import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";

import FilmsContextProvider from "../../store/films/FilmsContextProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When is rendered", () => {
    test("Then it should have a heading with a text 'Películas'");
    const textTitle = "Películas";

    render(
      <BrowserRouter>
        <FilmsContextProvider>
          <App />
        </FilmsContextProvider>
      </BrowserRouter>,
    );

    const heading = screen.getByRole("heading", {
      name: textTitle,
    });

    expect(heading).toBeInTheDocument();
  });
});
