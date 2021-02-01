import React from "react";
import MovieService from './services/movie-service';


const Moviedb = () => {
  const db = new MovieService();
  db.getTrendingMovies().then((res) => console.log(res.results));
  db.getMovieDetails(25).then((res) => console.log(res));
  const imageUrl = db.getMoviePoster('/4rCzaZy5Qkvxh5xaVpHriXSLTgC.jpg');
  return <img src={imageUrl}></img>;
};

export default Moviedb;
