import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import backdropPlaceholder from "../../images/backdropPlaceholder.png";
import posterPlaceholder from "../../images/posterPlaceholder.png";
import "./Details.css";

function Details() {
  let params = useParams();
  const [details, setDetails] = useState({
    title: "Loading, just a moment",
    video_url: "",
    release_date: "",
    overview: "",
    vote_average: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = (param) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${param}?api_key=ecfdd3d5230c96c392fc9421937894a9&language=en-US`
        );
      const detailResponse = await fetchUrl(params.movieId);
      const detailJson = await detailResponse.json();
      const videoResponse = await fetchUrl(params.movieId + "/videos");
      const videoJson = await videoResponse.json();
      setDetails({
        title: detailJson.title || detailJson.status_message,
        poster_path: detailJson.poster_path,
        backdrop_path: detailJson.backdrop_path,
        overview: detailJson.overview,
        release_date: detailJson.release_date,
        vote_average: detailJson.vote_average,
        video_url:
          videoJson.results === undefined || videoJson.results[0] === undefined
            ? ""
            : `https://www.youtube.com/embed/${videoJson.results[0].key}`,
      });
    };
    fetchData();
  }, [params.movieId]);

  //Can write these in setDetails later, refactor these!!!
  const backdrop =
    details.backdrop_path === undefined
      ? backdropPlaceholder
      : `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`;
  const poster =
    details.poster_path === undefined
      ? posterPlaceholder
      : `https://image.tmdb.org/t/p/w500${details.poster_path}`;
    
  return (
    <>
      <div
        className="hero container-fluid"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <div className="hero-color">
          <div className="content-wrapper container-fluid row justify-content">
            <div className="poster-wrapper col-sm-4 col-10">
              <img
                src={poster}
                className="img-fluid movie-poster"
                alt="poster"
              />
            </div>

            <div className="text-content col-sm-8 col-10">
              <h2 className="movie-title">{details.title}</h2>
              <h5 className="vote"> Vote Average: {details.vote_average} </h5>
              <h5 className="details"> Release Date: {details.release_date} </h5>
              <h3>Overview:</h3>
              <p className="movie-overview">{details.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="trailerDiv row align-items-center container-fluid" style={{ display:  details.video_url === "" ? "none" : "block"}}>
        <h3 className="text-center">Trailer</h3>
        <div className="ratio ratio-16x9">
          <iframe
            title="trailer"
            className="trailer"
            src={details.video_url}
            width="560" height="315"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Details;
