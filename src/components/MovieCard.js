import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handelImgError = (e) => {
    e.target.src = "/images/default.jpg";
  };
  const rating = (rate) => {
    if (movie.rating >= 8) return "rating-good";
    if (movie.rating >= 5) return "rating-ok";
    return "rating-bad";
  };
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handelImgError}
      ></img>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${rating(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => {
              console.log("Toggling watchlist for:", movie.id); // ✅ Check if it's firing
              toggleWatchlist(movie.id);
            }}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
