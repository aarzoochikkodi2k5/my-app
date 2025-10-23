import { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard.js";

export default function MoviesGrid({ movies, watchList, toggleWatchList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchGenre = (movie, genre) => {
    return genre === "All" || movie.genre.toLowerCase() === genre.toLowerCase();
  };

  const matchSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "OK":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchGenre(movie, genre) &&
      matchSearchTerm(movie, searchTerm) &&
      matchRating(movie, rating)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies ......"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="folter-slotr">
          <lable>Genre</lable>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All</option>
            <option>Drama</option>
            <option>Fantacy</option>
            <option>Horror</option>
            <option>Thriller</option>
          </select>
        </div>

        <div className="folter-slotr">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>OK</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchList={toggleWatchList}
            isWatchListed={watchList.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
