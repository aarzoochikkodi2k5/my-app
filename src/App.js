import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import MoviesGrid from "./components/MoviesGrid.js";
import Watchlist from "./components/Watchlist.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BasicBreadcrumbs from "./components/BasicBreadcrumbs.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchList={watchList}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchList={watchList}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
