import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import MovieRow from "../../components/MovieRow/MovieRow";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ecfdd3d5230c96c392fc9421937894a9&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container className="content">
      <Hero />
      <MovieRow movies={movies.slice(0, 7)} />
      <MovieRow movies={movies.slice(7, 14)} />
    </Container>
  );

  // API key : ecfdd3d5230c96c392fc9421937894a9 encode it with atob?
  // store movies data in state (useState) and map through the data
  // Have two rows of popular movies and render them by 7 in each row using MovieCard
}

export default Home;
