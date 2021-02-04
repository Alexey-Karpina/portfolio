import React from "react";
import MovieHeader from "./components/movie-header/movieHeader";
import MovieService from "./services/movie-service";
import RandomMovie from "./components/random-movie/randomMovie";
import FeaturedMovies from './components/featured-movies/featuredMovies';

const Moviedb = () => {
  const db = new MovieService();
  db.getTrendingMovies().then((res) => console.log(res.results));
  db.getMovieDetails(25).then((res) => console.log(res));
  const imageUrl = db.getMoviePoster("/4rCzaZy5Qkvxh5xaVpHriXSLTgC.jpg");
  return (
    <div className="wrapper">
      <MovieHeader />
      <RandomMovie />
      <FeaturedMovies />
    </div>
  );
};

export default Moviedb;
