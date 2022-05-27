import React from "react";
import MoviesForm from "./MoviesForm";

const AddMovies = (props) => {

    const AddMovieHandler = (enteredMovieData) => {
        const movieData =  {
           ...enteredMovieData,
           id: Math.random().toString()
        };
        
        props.onSaveMovies(movieData);
    }

    return(
        <React.Fragment>
            <MoviesForm onAddMovie={AddMovieHandler} />
        </React.Fragment>
    )
};

export default AddMovies;