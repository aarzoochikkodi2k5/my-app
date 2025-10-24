import { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchList, toggleWatchList, removeMovie }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const matchGenre = (movie) => genre === "All" || movie.genre?.toLowerCase() === genre.toLowerCase();
  const matchSearchTerm = (movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredMovies = movies.filter(
    (movie) => matchGenre(movie) && matchSearchTerm(movie)
  );

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Filters */}
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre:</label>
          <select value={genre} onChange={handleGenreChange}>
            <option>All</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Thriller</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option>All</option>
            <option>Good</option>
            <option>OK</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="movies-grid">
        {filteredMovies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchList={toggleWatchList}
              isWatchListed={watchList.includes(movie.id)}
              removeMovie={removeMovie}  // ✅ Pass removeMovie function
            />
          ))
        )}
      </div>
    </div>
  );
}

