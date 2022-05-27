import React from "react";
import "../index.css";

const MovieItem = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="movie-info-container">
          <div className="top">
            <div className="img-1">
              <img src={props.poster} alt="" />
            </div>
            <div className="general-info">
              <h2>{props.title}</h2>
              <div>
                <span>Genres</span>
                <span>{props.genres}</span>
              </div>
              <div>
                <span>IMDB Rating:</span>
                <span>{props.rating}/10</span>
              </div>
              <div>
                <span>Budget:</span>
                <span>{props.budget}</span>
              </div>
              <div>
                <span>Duration</span>
                <span>{props.duration}</span>
              </div>
              <div>
                <span>Release Year:</span>
                <span>{props.releaseYear}</span>
              </div>
            </div>
          </div>
          <div className="movie-info">
            <p>
              {props.movieInfo}
            </p>
          </div>
        </div>
        <div className="img-2">
          <img src={props.poster} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieItem;



// const movieTitle = 'Spider-Man: No Way Home'
    // const genre = 'Action | Fantasy | Thrill'
    // const rating = 8.7
    // const budegt = '$200M'
    // const duration = '1hr 33m'
    // const releaseYear = 2020
    // const movieInfo = "With Spider-Man identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    // const poster = "https://i.ibb.co/GPm8nQH/got.jpg"
