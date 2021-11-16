import React, { useState, useEffect } from "react";
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
    <div className="home">
      <Hero />
      <MovieRow movies={movies.slice(0, 7)} />
      <MovieRow movies={movies.slice(7, 14)} />
    </div>
  );

}

export default Home;
