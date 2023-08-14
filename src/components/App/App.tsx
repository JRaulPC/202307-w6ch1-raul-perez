import { Navigate, Route, Routes } from "react-router-dom";
import FilmsListPage from "../../pages/FilmsListPage/FilmsListPage";
import NewFilmPage from "../../pages/NewFilmPage/NewFilmPage";
import paths from "../../paths/paths";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path={paths.films} element={<FilmsListPage />} />
          <Route path={paths.newFilm} element={<NewFilmPage />} />
          <Route path="/" element={<Navigate to={paths.films} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
