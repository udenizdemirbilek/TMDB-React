import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  
  return (
    <div className="movie-card">
      <img
        src={"http://image.tmdb.org/t/p/w780" + movie.poster_path}
        alt="movie poster"
        height="200px"
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <Link to={`/details/${movie.id}`} key={movie.id}>More Details </Link>
    </div>
  );
}

export default MovieCard;
