import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Catalog from "./Components/Catalog/Catalog";
import NavBar from "./Components/Header/NavBar";
import MOVIES_CATALOG from "./Constants/MoviesData";
import USERS from "./Constants/UsersData";
import { useState } from "react";
import MovieDetail from "./Components/Movies/MovieDetail";

function App() {
  const [movies, setMovies] = useState(MOVIES_CATALOG);
  const [users, setUsers] = useState(USERS);
  const [budget, setBudget] = useState(100);
  const checkBudget = function (newMovies, movieIndex, newBudget) {
    if (!(newBudget < 0)) {
      newMovies[movieIndex].isRented = !newMovies[movieIndex].isRented;
      setBudget(newBudget);
    } else {
      alert("you're out of budegrt");
    }
    return newMovies;
  };
  const rentMovie = function (movieId) {
    let newMovies = [...movies];
    let movieIndex = newMovies.findIndex((movie) => movieId == movie.id);

    if (newMovies[movieIndex].isRented) {
      let newBudget = budget + 30;
      newMovies[movieIndex].isRented = !newMovies[movieIndex].isRented;
      setBudget(newBudget);
    } else {
      let newBudget = budget - 30;
      newMovies = checkBudget(newMovies, movieIndex, newBudget);
    }
    setMovies(newMovies);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Landing users={users} />}></Route>
        <Route
          path="/catalog"
          element={
            <Catalog movies={movies} rentMovie={rentMovie} budget={budget} />
          }
        ></Route>
        <Route
          path="/movie/:movieId"
          element={<MovieDetail movies={movies} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
