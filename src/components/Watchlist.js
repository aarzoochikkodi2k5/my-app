import React from "react";
import MovieCard from "./MovieCard.js";
import "../styles.css";

export default function Watchlist({ movies, watchList, toggleWatchList }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchListed={true}
              toggleWatchList={toggleWatchList}
            />
          );
        })}
      </div>
    </div>
  );
}
