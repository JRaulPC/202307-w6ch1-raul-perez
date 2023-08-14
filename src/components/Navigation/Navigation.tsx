import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import "./Navigation.css";

const Navigation = (): React.ReactElement => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to={paths.films} end>
            Listado de películas
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.newFilm} end>
            Añadir película
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
