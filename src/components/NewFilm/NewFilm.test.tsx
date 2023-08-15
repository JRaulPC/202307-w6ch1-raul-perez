import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { newFilmHandler } from "../../mocks/handlers";
import { server } from "../../mocks/serve";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'title' field, a ''poster' field, a 'director' field and a 'year' field", () => {
      const titleInputLabelText = "Título:";
      const directorInputLabelText = "Dirección:";
      const posterInputLabelText = "URL cartel:";
      const yearInputLabelText = "Año:";

      render(
        <BrowserRouter>
          <NewFilm addFilm={addFilm} />
        </BrowserRouter>,
      );

      const titleInput = screen.getByLabelText(titleInputLabelText);
      const directorInput = screen.getByLabelText(directorInputLabelText);
      const posterInput = screen.getByLabelText(posterInputLabelText);
      const yearInput = screen.getByLabelText(yearInputLabelText);

      expect(titleInput).toBeInTheDocument();
      expect(directorInput).toBeInTheDocument();
      expect(posterInput).toBeInTheDocument();
      expect(yearInput).toBeInTheDocument();
    });

    const titleText = "Gladiator";
    const directionText = "Ridley Scott";
    const yearText = 2000;
    const posterText =
      "https://pics.filmaffinity.com/gladiator-564554218-large.jpg";
    const addFilm = vi.fn();
    const buttonText = "Crear película";

    describe("When an user types all the data for the film 'Gladiator' in his respectives control forms", () => {
      test("Then it should show all the info about the movie 'Gladiator' in textboxes", async () => {
        render(
          <BrowserRouter>
            <NewFilm addFilm={addFilm} />
          </BrowserRouter>,
        );

        const titleTextBox = screen.getByRole("textbox", {
          name: /título:/i,
        }) as HTMLInputElement;
        const directedTextBox = screen.getByRole("textbox", {
          name: /dirección:/i,
        }) as HTMLInputElement;
        const yearTextBox = screen.getByRole("spinbutton", {
          name: /año:/i,
        }) as HTMLInputElement;
        const posterTextBox = screen.getByRole("textbox", {
          name: /url cartel:/i,
        }) as HTMLInputElement;

        await userEvent.type(titleTextBox, titleText);
        await userEvent.type(directedTextBox, directionText);
        await userEvent.type(yearTextBox, yearText.toString());
        await userEvent.type(posterTextBox, posterText);

        expect(titleTextBox.value).toBe(titleText);
        expect(directedTextBox.value).toBe(directionText);
        expect(yearTextBox.value).toBe(yearText.toString());
        expect(posterTextBox.value).toBe(posterText);
      });
    });

    describe("When control forms are not filled", () => {
      test("Then the button with the text 'Crear Película' won't be clickable", () => {
        render(
          <BrowserRouter>
            <NewFilm addFilm={addFilm} />
          </BrowserRouter>,
        );

        const button = screen.getByRole("button", { name: buttonText });

        expect(button).toBeDisabled();
      });
    });

    describe("When control forms are filled", () => {
      test("Then the button with the text 'Crear Película' will clickable", async () => {
        render(
          <BrowserRouter>
            <NewFilm addFilm={addFilm} />
          </BrowserRouter>,
        );

        const titleTextBox = screen.getByRole("textbox", {
          name: /título:/i,
        }) as HTMLInputElement;
        const directedTextBox = screen.getByRole("textbox", {
          name: /dirección:/i,
        }) as HTMLInputElement;
        const yearTextBox = screen.getByRole("spinbutton", {
          name: /año:/i,
        }) as HTMLInputElement;
        const posterTextBox = screen.getByRole("textbox", {
          name: /url cartel:/i,
        }) as HTMLInputElement;

        await userEvent.type(titleTextBox, titleText);
        await userEvent.type(directedTextBox, directionText);
        await userEvent.type(yearTextBox, yearText.toString());
        await userEvent.type(posterTextBox, posterText);

        expect(titleTextBox.value).toBe(titleText);
        expect(directedTextBox.value).toBe(directionText);
        expect(yearTextBox.value).toBe(yearText.toString());
        expect(posterTextBox.value).toBe(posterText);

        const button = screen.getByRole("button", { name: buttonText });

        expect(button).not.toBeDisabled();
      });
    });

    describe("When the button 'Crear película' is clicked", () => {
      test("Then is should add the movie 'Gladiator' to the film list page", async () => {
        server.resetHandlers(...newFilmHandler);

        render(
          <BrowserRouter>
            <NewFilm addFilm={addFilm} />
          </BrowserRouter>,
        );

        const titleTextBox = screen.getByRole("textbox", {
          name: /título:/i,
        }) as HTMLInputElement;
        const directedTextBox = screen.getByRole("textbox", {
          name: /dirección:/i,
        }) as HTMLInputElement;
        const yearTextBox = screen.getByRole("spinbutton", {
          name: /año:/i,
        }) as HTMLInputElement;
        const posterTextBox = screen.getByRole("textbox", {
          name: /url cartel:/i,
        }) as HTMLInputElement;

        await userEvent.type(titleTextBox, titleText);
        await userEvent.type(directedTextBox, directionText);
        await userEvent.type(yearTextBox, yearText.toString());
        await userEvent.type(posterTextBox, posterText);

        expect(titleTextBox.value).toBe(titleText);
        expect(directedTextBox.value).toBe(directionText);
        expect(yearTextBox.value).toBe(yearText.toString());
        expect(posterTextBox.value).toBe(posterText);

        const button = screen.getByRole("button", { name: buttonText });

        await userEvent.click(button);

        expect(addFilm).toHaveBeenCalled();
      });
    });
  });
});
