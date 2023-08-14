import { rest } from "msw";
import { apiURL } from "../components/hooks/useFilmsApi";
import mockedFilms from "./mockedFilms";

export const handlers = [
  rest.get(`${apiURL}/films`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedFilms));
  }),
];

export const handlersError = [
  rest.get(`${apiURL}/films`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get characters"));
  }),
];
