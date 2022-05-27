import { useState } from "react";
import "./App.css";
import AddMovies from "./components/AddMovies";
import MoviesList from "./components/MoviesList";

const DUMMY_MOVIES = [
  {
    id: "e1",
    title: "Game of Thrones",
    genres: "Action | Adventure | Tragedy",
    rating: 9.3,
    budget: "$1.5B",
    releaseYear: 2011,
    duration: "68hrs",
    movieInfo:
      "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
    poster: "https://i.ibb.co/GPm8nQH/got.jpg",
  },
  {
    id: "e2",
    title: "The Blacklist",
    genres: "Crime | Action | Thrill | Mystery",
    rating: 8,
    budget: "$760M",
    releaseYear: 2013,
    duration: "68hrs",
    movieInfo:
      "Raymond Reddington, a former U.S. Navy officer turned high-profile criminal who voluntarily surrenders to the FBI after eluding capture for decades. He tells the FBI that he has a list of the most dangerous criminals in the world which he has compiled over the years, and he is willing to inform on their operations in exchange for immunity from prosecution. However, he insists on working exclusively with rookie FBI profiler Elizabeth Keen.",
    poster: "https://i.ibb.co/1RKx0mh/blacklist.jpg",
  },

  {
    id: "e3",
    title: "The Billion Dollar Code",
    genres: "Thriller | Suspense | Technology",
    rating: 8,
    budget: "$200M",
    releaseYear: 2021,
    duration: "68hrs",
    movieInfo:
      "The plot follows two interconnected timelines. In Berlin of the 1990s a group of young hackers and art students had founded the ART+COM  collaboration to play at the cutting edge of computer programming and digital art. They had developed a planet browser in 1991 which was used by Joachim Sauter to get funding from Deutsche Telekom in 1993 to start the successful development of Terravision.",
    poster: "https://i.ibb.co/qrx99NC/the-billion-dollar-code.jpg",
  },

  {
    id: "e4",
    title: "Money Heist",
    genres: "Drama | Thriller | Crime | Comedy",
    rating: 8.2,
    budget: "$40M",
    releaseYear: 2011,
    duration: "68hrs",
    movieInfo:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.",
    poster: "https://i.ibb.co/9gvfkM6/money-heist.jpg",
  },

  {
    id: "e5",
    title: "Spider-Man: No Way Home",
    genres: "Action | Fantasy | Thrill",
    rating: 8.7,
    budget: "$200M",
    releaseYear: 2020,
    duration: "68hrs",
    movieInfo:
      "With Spider-Man identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    poster: "https://i.ibb.co/dMFzYdz/spiderman-1.jpg",
  },
];


function App() {
  const [movies, setMovies] = useState(DUMMY_MOVIES);

  const AddMoviesHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies]
    })
  };
  
  return (
    <div>
      <AddMovies onSaveMovies={AddMoviesHandler} />
      <MoviesList items={movies} />
    </div>
  );
}

export default App;
