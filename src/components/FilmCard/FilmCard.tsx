import { X } from "react-feather";
import Button from "../Button/Button";
import "./FilmCard.css";

const FilmCard = (): React.ReactElement => {
  return (
    <article className="film">
      <h3>Viaje a Darjeeling (2018)</h3>
      <img
        className="film__poster"
        src="https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg"
        alt="Cartel de 'Viaje a Darjeeling'"
        width="300"
        height="406"
      />
      Dirección: Wes Anderson
      <Button className="film__button">
        <X aria-label="eliminar película" />
      </Button>
    </article>
  );
};

export default FilmCard;
