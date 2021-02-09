import React from "react";
import "./movieSlider.css";
import MovieActivity from "../movie-activity/movieActivity";
import MovieMainInfo from "../movie-main-info/movieMainInfo";
import MovieService from "../../services/movie-service";
import sliderBG from "../../images/slider-bg.png";
import { Component } from "react";

const randomId = (maxId) => Math.floor(Math.random() * Math.floor(maxId));
export default class MovieSlider extends Component {
  movieService = new MovieService();
  state = {
    backdrop: sliderBG,
    release: "Today",
    likes: 666,
    rating: 666,
    comments: 666,
  };
  constructor() {
    super();
    this.updateMovie();
  }
  updateMovie() {
    this.movieService.getMovieDetails(randomId(99)).then((movie) => {
      const {
        backdrop_path,
        poster_path,
        release_date,
        vote_count,
        vote_average,
        popularity,
      } = movie;
      this.setState({
        backdrop: this.movieService.getMoviePoster(poster_path),
        release: release_date,
        likes: vote_count,
        rating: vote_average,
        comments: popularity,
      });
    });
  }
  render() {
    const { backdrop, release, likes, rating, comments } = this.state;
    const activity = { likes, comments };
    const info = { release, rating };
    return (
      <figure className="slider__item">
        <img src={backdrop} className="slider__poster" alt="Slider BG" height="450px"/>
        <figcaption className="slider__info">
          <MovieMainInfo info={info} />
          <MovieActivity activity={activity} />
        </figcaption>
      </figure>
    );
  }
}
