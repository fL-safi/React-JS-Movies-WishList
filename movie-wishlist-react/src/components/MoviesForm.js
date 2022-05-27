import React, { useState } from "react";
import "./MoviesForm.css";

const MoviesForm = (props) => {
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState("");
  const [rating, setRating] = useState("");
  const [budget, setBudget] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [duration, setDuration] = useState("");
  const [info, setInfo] = useState("");
  const [poster, setPoster] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const genresChangeHandler = (event) => {
    setGenres(event.target.value);
  };

  const ratingChangeHandler = (event) => {
    setRating(event.target.value);
  };

  const budgetChangeHandler = (event) => {
    setBudget(event.target.value);
  };

  const releaseYearChangeHandler = (event) => {
    setReleaseYear(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const infoChangeHandler = (event) => {
    setInfo(event.target.value);
  };

  const posterChangeHandler = (event) => {
    setPoster(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const movieData = {
      title: title,
      genres: genres,
      rating: rating,
      budget: budget,
      releaseYear: releaseYear,
      duration: duration,
      movieInfo: info,
      poster: poster,
    };

    props.onAddMovie(movieData)

    setTitle('');
    setGenres('');
    setRating('');
    setBudget('');
    setReleaseYear('');
    setDuration('');
    setInfo('');
    setPoster('');
    
  };

  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler} className="box">
        <h1>Add Your Movies</h1>
        <input
          type="text"
          name=""
          placeholder="Movie Title"
          onChange={titleChangeHandler}
          value={title}
        />
        <input
          type="text"
          name=""
          placeholder="Genre"
          onChange={genresChangeHandler}
          value={genres}
        />
        <input
          type="text"
          name=""
          placeholder="Rating"
          onChange={ratingChangeHandler}
          value={rating}
        />
        <input
          type="text"
          name=""
          placeholder="Budget"
          onChange={budgetChangeHandler}
          value={budget}
        />
        <input
          type="text"
          name=""
          placeholder="Release Year"
          onChange={releaseYearChangeHandler}
          value={releaseYear}
        />
        <input
          type="text"
          name=""
          placeholder="Duration"
          onChange={durationChangeHandler}
          value={duration}
        />
        <input
          type="text"
          name=""
          placeholder="Movie Info"
          onChange={infoChangeHandler}
          value={info}
        />
        <input
          type="text"
          name=""
          placeholder="Poster Link"
          onChange={posterChangeHandler}
          value={poster}
        />

        <input type="submit" name="" value="Add Movie" />
      </form>
    </React.Fragment>
  );
};

export default MoviesForm;
