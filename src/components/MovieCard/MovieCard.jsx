import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      <Link to={`/details/${movie.id}`} key={movie.id}>
        <Card.Img
          src={"https://image.tmdb.org/t/p/w342" + movie.poster_path}
          alt="movie poster"
        />
      </Link>

      <Card.Body>
        <Link to={`/details/${movie.id}`} key={movie.id} style={{textDecoration : "none"}}>
          <Card.Title>{movie.title}</Card.Title>
        </Link>
        <Card.Text>Relased on: {movie.release_date}</Card.Text>
        <Card.Text>Average Vote: {movie.vote_average}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
