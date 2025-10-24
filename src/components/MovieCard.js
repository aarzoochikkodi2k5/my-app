import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchListed, toggleWatchList, removeMovie }) {
  const errorHandler = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRating = (rating) => {
    if (rating >= 8) return "rating-good";
    else if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={errorHandler}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRating(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>

        {/* Watchlist toggle */}
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchListed}
            onChange={() => toggleWatchList(movie.id)}
          />
          <span className="slider">
            <span className="slider-text">
              {isWatchListed ? "In WatchList" : "Add to WatchList"}
            </span>
          </span>
        </label>

        {/* ✅ Remove movie button */}
        {removeMovie && (
          <button
            onClick={() => removeMovie(movie.id)}
            style={{
              marginTop: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            🗑️ Remove Movie
          </button>
        )}
      </div>
    </div>
  );
}

