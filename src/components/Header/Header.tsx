import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <h1>Películas</h1>
      <Navigation />
    </header>
  );
};

export default Header;
