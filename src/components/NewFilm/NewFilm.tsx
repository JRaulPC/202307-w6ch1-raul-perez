import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Film, NewFilmStructure } from "../../types";
import Button from "../Button/Button";
import "./NewFilm.css";

interface NewFilmProps {
  addFilm: (film: Partial<Film>) => Promise<void>;
}

const NewFilm = ({ addFilm }: NewFilmProps): React.ReactElement => {
  const [disabled, setDisabled] = useState(true);

  const newFilmData = {
    title: "",
    poster: "",
    director: "",
    year: 0,
  };

  const navigate = useNavigate();

  const [newFilm, setNewFilm] = useState<NewFilmStructure>(newFilmData);
  const { director, title, poster, year } = newFilm;

  const changeNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    title !== "" && director !== "" && year !== undefined && poster !== ""
      ? setDisabled(false)
      : setDisabled(true);
  }, [director, newFilm, poster, title, year]);

  return (
    <form
      className="form-film"
      onSubmit={(event) => {
        event.preventDefault();
        addFilm(newFilm);
        navigate("/films");
      }}
    >
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
        <Button disabled={disabled} type="submit">
          Crear película
        </Button>
      </div>
    </form>
  );
};

export default NewFilm;
