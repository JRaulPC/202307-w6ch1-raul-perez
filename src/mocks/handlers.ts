import { rest } from "msw";
import mockedFilms from "./mockedFilms";

export const handlers = [
  rest.get(import.meta.env.VITE_API_PELIS_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ pelis: mockedFilms }));
  }),
];

export const handlersError = [
  rest.get(import.meta.env.VITE_API_PELIS_URL, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get characters"));
  }),
];
