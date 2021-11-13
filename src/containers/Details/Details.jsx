import React, { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { useParams } from "react-router";
import backdropPlaceholder from "../../images/backdropPlaceholder.png"
import posterPlaceholder from "../../images/posterPlaceholder.png"

function Details() {
    let params = useParams();
    const [details, setDetails] = useState({
      title : "Loading, just a moment",
      poster_path : "",
      backdrop_path : "",
      overview : "",
      release_date : "",
      vote_average : "",
    }) 

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=ecfdd3d5230c96c392fc9421937894a9&language=en-US`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [params.movieId])

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : posterPlaceholder} alt="poster" />
      <img src={details.backdrop_path ? `https://image.tmdb.org/t/p/w500${details.backdrop_path}` : backdropPlaceholder} alt="backdrop" />
      {/* poster over backdrop image, summary, category, genre, second row trailer, third row cast*/}
      
    </div>
  );
}

export default Details;