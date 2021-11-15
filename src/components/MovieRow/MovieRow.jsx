import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Row, Col } from "react-bootstrap";
import "./MovieRow.css"

function MovieRow({movies}) {
  return (
    <div className="movie-row p-5">
      <h2>Popular Movies</h2>
      <Row md={7}>
        {movies.map((movie) => (
            <Col key={movie.id}>
                <MovieCard movie={movie} />
            </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieRow;
