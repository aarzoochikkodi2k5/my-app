import "./App.css";
import "./styles.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import MoviesGrid from "./components/MoviesGrid.js";
import Watchlist from "./components/Watchlist.js";
import AddMovieForm from "./components/AddMovieForm.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  // Load from local file (initially)
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  // ✅ Toggle add/remove from watchlist
  const toggleWatchList = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  // ✅ Add new movie
  const addMovie = (newMovie) => {
    const movieWithId = { id: Date.now(), ...newMovie };
    setMovies([...movies, movieWithId]);
  };

  // ✅ Remove movie
  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
    setWatchList(watchList.filter((wid) => wid !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlist">WatchList</Link></li>
              <li><Link to="/add">Add Movie</Link></li>
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
                  removeMovie={removeMovie}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchList={watchList}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
            <Route
              path="/add"
              element={<AddMovieForm addMovie={addMovie} />}
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

