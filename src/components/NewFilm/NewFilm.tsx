import { useState } from "react";
import { NewFilmStructure } from "../../types";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilm = (): React.ReactElement => {
  const [disabled, setDisabled] = useState(true);

  const newFilmData = {
    title: "",
    poster: "",
    director: "",
    year: 0,
  };

  const [newFilm, setNewFilm] = useState<NewFilmStructure>(newFilmData);
  const { director, title, poster, year } = newFilm;

  const changeNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.value,
    }));
    checkValidation();
  };

  const checkValidation = () => {
    if (title !== "" && director !== "" && year !== 0 && poster !== "") {
      return setDisabled(false);
    }

    return setDisabled(true);
  };

  return (
    <form className="form-film">
      <div className="form-control">
        <label htmlFor="title">Título: </label>
        <input type="text" id="title" value={title} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección: </label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input type="number" id="year" onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel: </label>
        <input type="url" id="poster" value={poster} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <Button disabled={disabled}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilm;
