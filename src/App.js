import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import AddMovieForm from "./components/AddMovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (id) => {
    setWatchList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const addMovie = (newMovie) => {
    const movieWithId = { id: Date.now(), ...newMovie };
    setMovies([...movies, movieWithId]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
    setWatchList(watchList.filter((w) => w !== id));
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/watchlist">Watchlist</Link></li>
            <li><Link to="/add">Add Movie</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <MoviesGrid
                movies={movies}
                watchList={watchList}
                toggleWatchList={toggleWatchList}
                removeMovie={removeMovie}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                movies={movies}
                watchList={watchList}
                toggleWatchList={toggleWatchList}
              />
            }
          />
          <Route path="/add" element={<AddMovieForm addMovie={addMovie} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;




