import React from "react";
import "./Hero.css"

function Hero() {
  return (
    <div className="hero p-5 mx-5" >
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Popular movies by Deniz Demirbilek</h1>
          <p className="lead">
            Using The Movie Database API, React.JS and Bootstrap this app displays the most popular 
            14 movies and their details. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
