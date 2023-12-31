import { rest } from "msw";
import { apiURL } from "../components/hooks/useFilmsApi";
import { mockedFilms, newMockedFilm } from "./mockedData";

export const handlers = [
  rest.get(`${apiURL}/films`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedFilms));
  }),
];

export const handlersError = [
  rest.get(`${apiURL}/films`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get the films list!"));
  }),
];

export const newFilmHandler = [
  rest.post(`${apiURL}/films`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(newMockedFilm));
  }),
];

export const newFilmHandlerError = [
  rest.post(`${apiURL}/films`, (_req, res, ctx) => {
    return res(ctx.status(404, "You can't post a new film right now"));
  }),
];
