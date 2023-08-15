import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'title' field, a ''poster' field, a 'director' field and a 'year' field", () => {
      const titleInputLabelText = "Título:";
      const directorInputLabelText = "Dirección:";
      const posterInputLabelText = "URL cartel:";
      const yearInputLabelText = "Año:";

      render(<NewFilm />);

      const titleInput = screen.getByLabelText(titleInputLabelText);
      const directorInput = screen.getByLabelText(directorInputLabelText);
      const posterInput = screen.getByLabelText(posterInputLabelText);
      const yearInput = screen.getByLabelText(yearInputLabelText);

      expect(titleInput).toBeInTheDocument();
      expect(directorInput).toBeInTheDocument();
      expect(posterInput).toBeInTheDocument();
      expect(yearInput).toBeInTheDocument();
    });

    describe("When user types all the data for the film 'Gladiator' in his respectives control forms", () => {
      test("Then it should show all the info about the movie 'Gladiator' in the textboxes", async () => {
        const titleText = "Gladiator";
        const directionText = "Ridley Scott";
        const yearText = 2000;
        const posterText =
          "https://pics.filmaffinity.com/gladiator-564554218-large.jpg";

        render(<NewFilm />);

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
  });
});
