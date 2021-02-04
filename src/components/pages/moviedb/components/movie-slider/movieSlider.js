import React from "react";
import "./movieSlider.css";
import sliderBG from "../../images/slider-bg.png";
import MovieActivity from "../movie-activity/movieActivity";
import MovieMainInfo from "../movie-main-info/movieMainInfo";

const MovieSlider = () => {
  return (
    <figure className="slider__item">
      <img src={sliderBG} alt="Slider BG" />
      <figcaption className="slider__info">
        <MovieMainInfo />
        <MovieActivity />
      </figcaption>
    </figure>
  );
};

export default MovieSlider;
