import React from "react";
import MovieItem from "./MovieItem";

const MoviesList = (props) => {
  return (
    <React.Fragment>
      {props.items.map((movies) => {
        return (
          <MovieItem
            key={movies.id}
            title={movies.title}
            genres={movies.genres}
            rating={movies.rating}
            budget={movies.budget}
            releaseYear={movies.releaseYear}
            duration={movies.duration}
            movieInfo={movies.movieInfo}
            poster={movies.poster}
          />
        );
      })}
    </React.Fragment>
  );
};

export default MoviesList;

// Data which was not dynamically passing

// <MovieItem
//         title={props.items[0].title}
//         genres={props.items[0].genres}
//         rating={props.items[0].rating}
//         budget={props.items[0].budget}
//         releaseYear={props.items[0].releaseYear}
//         duration={props.items[0].duration}
//         movieInfo={props.items[0].movieInfo}
//         poster={props.items[0].poster}
//       />
//       <MovieItem
//         title={props.items[1].title}
//         genres={props.items[1].genres}
//         rating={props.items[1].rating}
//         budget={props.items[1].budget}
//         releaseYear={props.items[1].releaseYear}
//         duration={props.items[1].duration}
//         movieInfo={props.items[1].movieInfo}
//         poster={props.items[1].poster}
//       />
//       <MovieItem
//         title={props.items[2].title}
//         genres={props.items[2].genres}
//         rating={props.items[2].rating}
//         budget={props.items[2].budget}
//         duration={props.items[2].duration}
//         releaseYear={props.items[2].releaseYear}
//         movieInfo={props.items[2].movieInfo}
//         poster={props.items[2].poster}
//       />
//       <MovieItem
//         title={props.items[3].title}
//         genres={props.items[3].genres}
//         rating={props.items[3].rating}
//         budget={props.items[3].budget}
//         releaseYear={props.items[3].releaseYear}
//         duration={props.items[3].duration}
//         movieInfo={props.items[3].movieInfo}
//         poster={props.items[3].poster}
//       />

//       <MovieItem
//         title={props.items[4].title}
//         genres={props.items[4].genres}
//         rating={props.items[4].rating}
//         budget={props.items[4].budget}
//         releaseYear={props.items[4].releaseYear}
//         duration={props.items[4].duration}
//         movieInfo={props.items[4].movieInfo}
//         poster={props.items[4].poster}
//       />
