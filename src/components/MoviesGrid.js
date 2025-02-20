import React from "react";
import "../styles.css";
import { useState} from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handelSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handelGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handelRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const matchRating = (movie, rating) => {
    switch (rating) {
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return true;
    }
  };
  const filteredMovies = movies.filter(
    (movie) =>
      matchGenre(movie, genre) &&
      matchRating(movie, rating) &&
      matchSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={handelSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handelGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handelRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.Id)}></MovieCard>
        ))}
      </div>
    </div>
  );
}
